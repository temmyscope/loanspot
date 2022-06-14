import { CustomArray } from '../types/index';

const SortData = (data: CustomArray): CustomArray => {
  if(data.length < 2){
    return data;
  }
  let pivot = data[0];
  let leftList = [];
  let rightList = [];
  for(let i = 1; i < data.length; i++ ){
    if( data[i] < pivot ){
      leftList.push(data[i]);
    }else{
      rightList.push(data[i]);
    }
  }
  return [ ...SortData(leftList), pivot, ...SortData(rightList) ];
}

export { SortData }