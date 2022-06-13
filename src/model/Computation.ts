import mongoose from '../config/db.config';

const ComputationSchema = new mongoose.Schema({
	needle: {
		type: String,
		required: true,
		default: ''
	},
	haystack: {
		type: String,
		required: true
	},
	sortedHaystack: {
		type: Array,
		required: true,
		default: []
	},
	indexInSortedHaystack: {
		type: Number,
		required: true
	},
	indexInUnsortedHaystack: {
		type: Number,
		required: true
	},
 	timeTakenToSort: {
 		type: Number,
 		required: true
	},
	timeTakenToSearchUnsorted: {
		type: Number,
 		required: true
 	},
	timeTakenToSearchSorted: {
		type: Number,
		required: true
	},
 	createdAt: {
 		type: Date,
 		default: Date.now
 	},
 	updatedAt: {
 		type: Date,
 		default: Date.now
 	}
}, {
	collection: 'ComputationStore'
});

ComputationSchema.index({ searchItem: 1 });
ComputationSchema.index({ ArrayData: 1 });

const ComputationModel: any = mongoose.model('ComputationStore', ComputationSchema);


export { ComputationModel };