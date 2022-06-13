export type Computation = {
  needle: String,
	haystack: string,
	sortedHaystack: Array<number|string>,
	indexInSortedHaystack: Number,
	indexInUnsortedHaystack: Number,
	timeTakenToSort: Number,
	timeTakenToSearchUnsorted: Number,
	timeTakenToSearchSorted: Number,
 	searchTime: Number,
 	createdAt: Date,
 	updatedAt: Date,
  save: () => any
}

export type CustomArray = Array<number|string>
