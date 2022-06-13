import { CustomArray } from '../types/index';

function swap(arr: CustomArray, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr: CustomArray, low: number, high: number) {
  let pivot = arr[high];

  let i = (low - 1);
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}

function sort(arr: CustomArray, low: number, high: number) {
  if (low < high) {
    let pi = partition(arr, low, high);

    sort(arr, low, pi - 1);
    sort(arr, pi + 1, high);
  }
  return arr;
}

const SortData = (data: CustomArray): CustomArray => {
  let low = 0, high = data.length -1;

  if (low < high) {
    let pi = partition(data, low, high);

    sort(data, low, pi - 1);
    sort(data, pi + 1, high);
  }
  return data
}

export { SortData }