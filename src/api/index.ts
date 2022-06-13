import express, { Request, Response } from 'express';
import { ComputationModel } from '../model/Computation';
import { Computation } from '../types/index';

const router = express.Router();

router.post(
  '/api/search-and-sort', 
  //[ body('haystack').is({}) ], 
  async(req: Request, res: Response) => {

    let needle: string = req.body.needle;
    let haystack: string = req.body.haystack;

    let computationMap: Computation | null = await ComputationModel.findOne({
      needle, haystack
    });
    if ( computationMap == null ) {
      //search unsorted haystack, while keep track of time taken
      //sort haystack, while keep track of time taken
      //search sorted haystack, while keep track of time taken

      computationMap = new ComputationModel({ needle, haystack });
      await computationMap?.save();
    }

    return res.status(200).json({ 
      success: true, data: computationMap
    });
});


export default router;
