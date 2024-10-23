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

export const DataAnalysis31 = createDataModel('filter2d_3');
export const DataAnalysis32 = createDataModel('filter3d_3');
export const DataAnalysis33 = createDataModel('filter2d_3det');
export const DataAnalysis34 = createDataModel('filter3d_3det');
export const DataAnalysis35 = createDataModel('filter3d_3a0');
export const DataAnalysis36 = createDataModel('filter3d_3det_a0');

export const DataAnalysis81 = createDataModel('filter2d_8');
export const DataAnalysis82 = createDataModel('filter3d_8');
export const DataAnalysis83 = createDataModel('filter2d_8det');
export const DataAnalysis84 = createDataModel('filter3d_8det');
