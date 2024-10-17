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

export const DataAnalysis3 = createDataModel('filterdata3_cobra');
export const DataAnalysis4 = createDataModel('filterdata4_1_cobra');
export const DataAnalysis5 = createDataModel('filterdata5_001');
export const DataAnalysis6 = createDataModel('filterdata6_1_cobra');
export const DataAnalysis7 = createDataModel('filterdata7_1_cobra');
export const DataAnalysis8 = createDataModel('filterdata8_1_cobra');
