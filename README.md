# Search and Sort: Express API - Typescript

## Setup

```
npx create-express-api-typescript loanspot --yarn
```

## Explanation

#### SortData function

- Location ***(src/utils/sort.ts)***

- This function uses the Quick sort algorithm to sort
the list.
- The time complexity for the function is ... 
- The space complexity for the function is ...


#### UnsortedSearchForItem function

- Location ***(src/utils/search.ts)***

- This function uses the naive approach to run a 
search/loop through, till the item is found. This 
approach is used because there isn't any more optimized 
approach to searchthrough an unsorted list.

- The time complexity for the function is O(n). 
This shouldn't be a major performance issue for 
small arrays.

- The space complexity for the function is O(1).

#### SortedSearchForItem function

- Location ***(src/utils/search.ts)***

- This function uses the binary search approach to 
run a search/loop through, till the item is found.

- The time complexity for the function is O(Log n). 
where n is the length of the array.

- The space complexity for the function is O(1).