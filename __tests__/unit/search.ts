import { UnsortedSearchForItem, SortedSearchForItem } from "../../src/utils/search";
import { SortData } from "../../src/utils/sort";

describe('get Random Item From Unsorted Array', () => {
  it('should resolve with index of item in array or -1, if not found', async () => {
    let sampleArray = [13, 2, 5, 'b', 3, 'a', 12, 9 ];
    const response: number = UnsortedSearchForItem(sampleArray, 'a');
    expect(response).toBeLessThanOrEqual(8);
    expect(response).toBeGreaterThanOrEqual(5);
    expect(sampleArray).toContain(sampleArray[response]);
  });
});

describe('get Random Item From Sorted Array', () => {
  it('should resolve with index of item in array or -1, if not found', async () => {
    const sampleArray = [13, 2, 5, 'b', 3, 'a', 12, 9 ];
    let sortedData = SortData(sampleArray);

    const response: number = SortedSearchForItem(sampleArray, 2);
    let randomIndexFromArray = Math.floor(Math.random()*sampleArray.length);
    expect(sortedData).toContain(sampleArray[randomIndexFromArray]);
    expect(sortedData).toHaveLength(sampleArray.length);
    
  });
});
