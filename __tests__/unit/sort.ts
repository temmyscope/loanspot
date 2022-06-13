import { SortData } from "../../src/utils/sort";

describe('Sort Items in Array using QuickSort Algorithm', () => {
  it('should resolve with the sorted form given array', async () => {
    let sampleArray = [13,'b', 3, 2, 5, 'a', 12, 9 ];
    const response: Array<number|string> = SortData(sampleArray);
    expect(response[0]).toBe(2);
    expect(response.length).toBe(8);
    expect(response[response.length-1]).toBe(13);
  });
});