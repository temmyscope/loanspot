import { UnsortedSearchForItem, SortedSearchForItem } from "../../src/utils/search";

describe('get Random Item From Unsorted Array', () => {
  it('should resolve with index of item in array or -1, if not found', async () => {
    let sampleArray = [13, 2, 5, 'b', 3, 'a', 12, 9 ];
    const response: number = UnsortedSearchForItem(sampleArray, 'a');
    expect(response).toBeGreaterThanOrEqual(5);
    expect(response).toBeLessThanOrEqual(8);
    
    expect([5, 6, 7, 8]).toContain(response);
  });
});

describe('get Random Item From Sorted Array', () => {
  it('should resolve with index of item in array or -1, if not found', async () => {
    let sampleArray = [13, 2, 5, 'b', 3, 'a', 12, 9 ];
      const response: number = SortedSearchForItem(sampleArray, 'a');
      expect(response).toBeGreaterThanOrEqual(5);
      expect(response).toBeLessThanOrEqual(8);
      
      expect([5, 6, 7, 8]).toContain(response);
  });
});