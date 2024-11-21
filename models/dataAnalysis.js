import { Schema, model } from 'mongoose';

const dataSchema = new Schema(
  {
    CVpositive: { type: String, default: 'None' },
    CVstable: { type: String, default: 'None' },
    CApositive: { type: String, default: 'None' },
    CAstable: { type: String, default: 'None' },
    CTpositive: { type: String, default: 'None' },
    CTstable: { type: String, default: 'None' },
    IMMconsistentValue: { type: String, default: 'None' },
    IMMconsistent: { type: String, default: 'None' },
    IMMpositive: { type: String, default: 'None' },
    velocityOK: { type: String, default: 'None' },
    speed: { type: String, default: 'None' },
    probability: { type: Number, default: 1.0 },
    X: { type: String, default: '0' },
    Y: { type: String, default: '0' },
    Z: { type: String, default: '0' },
    TrackNum: { type: Number, default: 0 },
    Time: { type: Number, default: 0.0 },
  },
  { timestamps: true }
);

const createDataModel = collectionName => {
  return model('DataAnalysis', dataSchema, collectionName);
};

export const DataAnalysis31 = createDataModel('filterdata3d_3tr');
export const DataAnalysis32 = createDataModel('filterdata2d_3tr');
export const DataAnalysis33 = createDataModel('filterdata3d_3det');
export const DataAnalysis34 = createDataModel('filterdata2d_3det');
export const DataAnalysis35 = createDataModel('filterdata3d_3tr_a0');
export const DataAnalysis36 = createDataModel('filterdata2d_3tr_a0');
export const DataAnalysis37 = createDataModel('filterdata3d_3det_a0');
export const DataAnalysis38 = createDataModel('filterdata2d_3det_a0');
export const DataAnalysis39 = createDataModel('filterdata3d_3det_10c');
export const DataAnalysis40 = createDataModel('filterdata3d_3det_10c_3km');

export const DataAnalysis51 = createDataModel('filterdata2d_5det_compl');
export const DataAnalysis52 = createDataModel('filterdata2d_5det_probability');
export const DataAnalysis53 = createDataModel('filterdata2d_5det_prob_mult');
export const DataAnalysis54 = createDataModel('filterdata2d_5det_prob_mult2');
// export const DataAnalysis55 = createDataModel(
//   'filterdata2d_5det_prob_mult2_on'
//);

export const DataAnalysis55 = createDataModel('filterdata_single');
export const DataAnalysis56 = createDataModel('filterdata_single2');

export const DataAnalysis81 = createDataModel('filterdata3d_8tr');
export const DataAnalysis82 = createDataModel('filterdata2d_8tr');
export const DataAnalysis83 = createDataModel('filterdata3d_8det');
export const DataAnalysis84 = createDataModel('filterdata2d_8det');
export const DataAnalysis85 = createDataModel('filterdata3d_8tr_a0');
export const DataAnalysis86 = createDataModel('filterdata2d_8tr_a0');
export const DataAnalysis87 = createDataModel('filterdata3d_8det_a0');
export const DataAnalysis88 = createDataModel('filterdata2d_8det_a0');
