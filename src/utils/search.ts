const SortedSearchForItem = (data: Array<number|string>, item: string|number) => {
  let startIndex = 0;
  let stopIndex = data.length;

  while ( startIndex <= stopIndex ){
    let middleIndex = Math.floor(
      startIndex+((stopIndex-startIndex)/2)
    )
    if (data[middleIndex] == item){
      return middleIndex;
    }else if( data[middleIndex] < item){
      startIndex = middleIndex+1;
    }else {
      stopIndex = middleIndex-1;
    }
  }
  return -1
}

const UnsortedSearchForItem = (data: Array<number|string>, item: string|number) => {
  let foundIndex = -1;
  for ( let index = 0; index < data.length; index++ ) {
    if ( data[index] == item ) {
      foundIndex = index;
      break
    }
  }
  return foundIndex;
}

export { SortedSearchForItem, UnsortedSearchForItem }