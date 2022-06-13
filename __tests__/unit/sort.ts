import { SortArray } from "../../src/utils/sort";

describe('Sort Items in Array using QuickSort Algorithm', () => {
  it('should resolve with the sorted form given array', async () => {
    let sampleArray = [13, 2, 5, 'b', 3, 'a', 12, 9 ];
    const response: Array<number|string> = SortArray(sampleArray);
    expect(response).toBeGreaterThanOrEqual(5);
    expect(response).toBeLessThanOrEqual(8);
    
    expect([5, 6, 7, 8]).toContain(response);
  });
});