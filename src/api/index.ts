import express, { Request, Response } from 'express';
import { UnsortedSearchForItem, SortedSearchForItem } from '../utils/search'
import { SortData } from '../utils/sort'
import { ComputationModel } from '../model/Computation';
import { Computation, CustomArray } from '../types/index';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/search-and-sort', [ 
    body('haystack').isArray(), body('needle').isAlphanumeric(),
    body('haystack').isLength({ min: 1 })
  ], async(req: Request, res: Response) => {
    const requestTimerStarts = performance.now();

    let needle: string = req.body.needle;
    let haystack: CustomArray = req.body.haystack;

    let computationMap: Computation|null = await ComputationModel.findOne({
      needle: needle, haystack: JSON.stringify(haystack)
    }).exec();
    
    if ( computationMap == null || !(computationMap instanceof ComputationModel) ) {
      const initialComputationMap = { needle, haystack: JSON.stringify(req.body.haystack) };
      //search unsorted haystack, while keeping track of time taken
      const unsortedStartTimeForSearch = performance.now();
      let indexInUnsorted = UnsortedSearchForItem(haystack, needle);
      let totalTimeForSearchInUnsorted  = performance.now() - unsortedStartTimeForSearch;

      //sort haystack, while keeping track of time taken
      const sortedStartTimeForSearch = performance.now();
      let sortedHaystack = SortData(haystack);
      let totalTimeForSort  = performance.now() - sortedStartTimeForSearch;

      //search sorted haystack, while keeping track of time taken
      const startTime  = performance.now();
      let indexInSorted = SortedSearchForItem(sortedHaystack, needle);
      let totalTimeForSearchInSorted  = performance.now() - startTime;

      computationMap = new ComputationModel({
        ...initialComputationMap,
        timeTakenToSort: totalTimeForSort,
        indexInSortedHaystack: indexInSorted,
        timeTakenToSearchSorted: totalTimeForSearchInSorted,
        timeTakenToSearchUnsorted: totalTimeForSearchInUnsorted,
        sortedHaystack, indexInUnsortedHaystack: indexInUnsorted,
      });
      await computationMap?.save();
    }
    let requestCompletedIn = performance.now() - requestTimerStarts;

    return res.status(200).json({ 
      success: true, message:"Computation Completed", data: {
        sortedHaystack: computationMap?.sortedHaystack,
        requestTotalTimeTaken: `${requestCompletedIn} ms`,
        timeTakenToSort: `${computationMap?.timeTakenToSort} ms`,
        indexInSortedHaystack: computationMap?.indexInSortedHaystack,
        indexInUnsortedHaystack: computationMap?.indexInUnsortedHaystack,
        timeTakenToSearchSorted:  `${computationMap?.timeTakenToSearchSorted} ms`,
        timeTakenToSearchUnsorted: `${computationMap?.timeTakenToSearchUnsorted} ms`,
      }
    });
});


export default router;
