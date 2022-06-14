# Search and Sort: Express API - Typescript

## Setup

```
git clone  https://github.com/temmyscope/loanspot.git && yarn
```

## Run code locally
```
yarn dev
```

## Explanation

- basically, the API takes an unsorted data, which we would call haystack for reference purpose; we then search through the unsorted ***haystack*** for the ***needle*** item, after which, we'd sort the ***haystack*** and finally we search through the sorted ***haystack*** and then store the computation information in a mongodb document.


- ***Note that the unsorted haystack needs to be serialized if we intend keeping it as it is on the mongoDB document. Serializing the haystack makes it easier to fetch the data when next it is needed, exactly as it is***

- ***Also, note that throughout the request, we must keep track of time spent on each computation/process and also the entire request. Keeping track of very infinitesimal units of time spent would be difficult to do using Date.now, hence we'd use performance.now instead, which keeps track of time more precisely, i.e. even to the microseconds***

#### SortData function

- Location ***(src/utils/sort.ts)***

- This function uses the Quick sort algorithm to sort
the list. This basically involves picking a random pivot point of choice, after which the list is split up into 2 with respect to the pivot point, sorting them recursively, individually till a sorted result is achieved.
This approach is highly efficient for sorting in comparison with other sorting algorithms.
- The time complexity for the function is O(n Log n) and worst case O(n^2).
- The space complexity for the function is O(Logn) as each recursive call uses up a space of constant size.


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