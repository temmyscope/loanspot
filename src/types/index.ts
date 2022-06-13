export type Computation = {
  needle: String,
	haystack: Array<number|string>,
	indexInSortedHaystack: Number,
	indexInUnsortedHaystack: Number,
 	sortTime: Number
 	searchTime: Number,
 	createdAt: Date,
 	updatedAt: Date,
  save: () => any
}

export type CustomArray = Array<number|string>
