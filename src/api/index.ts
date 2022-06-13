import express, { Request, Response } from 'express';
import { UnsortedSearchForItem, SortedSearchForItem } from '../utils/search'
import { SortData } from '../utils/sort'
import { ComputationModel } from '../model/Computation';
import { Computation, CustomArray } from '../types/index';

const router = express.Router();

router.post(
  '/api/search-and-sort', 
  //[ body('haystack').is({}) ], 
  async(req: Request, res: Response) => {
    let requestTimerStarts = Date.now();

    let needle: string = req.body.needle;
    let haystack: CustomArray = req.body.haystack;

    let computationMap: Computation | null = await ComputationModel.findOne({
      needle, haystack
    });
    if ( computationMap == null ) {
      //search unsorted haystack, while keeping track of time taken
      let startTime  = Date.now();
      let indexInUnsorted = UnsortedSearchForItem(haystack, needle);
      let totalTimeForSearchInUnsorted  = Date.now() - startTime;

      //sort haystack, while keeping track of time taken
      startTime  = Date.now();
      let sortedHaystack = SortData(haystack);
      let totalTimeForSort  = Date.now() - startTime;

      //search sorted haystack, while keeping track of time taken
      startTime  = Date.now();
      let indexInSorted = SortedSearchForItem(sortedHaystack, needle);
      let totalTimeForSearchInSorted  = Date.now() - startTime;

      computationMap = new ComputationModel({ 
        timeTakenToSort: totalTimeForSort,
        indexInUnsortedHaystack: indexInUnsorted, 
        timeTakenToSearchSorted: totalTimeForSearchInSorted,
        needle, haystack, indexInSortedHaystack: indexInSorted,
        timeTakenToSearchUnsorted: totalTimeForSearchInUnsorted,
      });
      await computationMap?.save();
    }
    let requestCompletedIn = Date.now() - requestTimerStarts;

    return res.status(200).json({ 
      success: true, message:"Computation Completed", data: {
        ...computationMap, timeTaken: requestCompletedIn 
      }
    });
});


export default router;
