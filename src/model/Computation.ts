import mongoose from '../config/db.config';

const ComputationSchema = new mongoose.Schema({
	searchItem: {
		type: String,
		required: true,
		default: ''
	},
	arrayData: {
		type: Array,
		required: true,
		default: []
	},
	itemIndexInSortedData: {
		type: Number,
		required: true
	},
	itemIndexInUnsortedData: {
		type: Number,
		required: true
	},
 	sortingTime: {
 		type: Number,
 		required: true
	},
 	searchTime: {
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
	collection: 'UrlMap'
});

ComputationSchema.index({ searchItem: 1 });
ComputationSchema.index({ ArrayData: 1 });

var ComputationModel: any = mongoose.model('UrlMap', ComputationSchema);


export { ComputationModel };