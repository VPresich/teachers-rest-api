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
export const DataAnalysis10 = createDataModel('filterdata2d_111_3_det_CTa');
export const DataAnalysis11 = createDataModel('filterdata2d_111_5_det_CTa');
export const DataAnalysis12 = createDataModel('filterdata2d_111_3_trace_CTa');
export const DataAnalysis13 = createDataModel('filterdata2d_111_5_trace_CTa');

export const DataAnalysis20 = createDataModel('filterdata2d_112_3_det_CTa');
export const DataAnalysis21 = createDataModel('filterdata2d_112_5_det_CTa');
export const DataAnalysis22 = createDataModel('filterdata2d_112_3_trace_CTa');
export const DataAnalysis23 = createDataModel('filterdata2d_112_5_trace_CTa');

export const DataAnalysis30 = createDataModel('filterdata2d_113_3_det_CTa');
export const DataAnalysis31 = createDataModel('filterdata2d_113_5_det_CTa');
export const DataAnalysis32 = createDataModel('filterdata2d_113_3_trace_CTa');
export const DataAnalysis33 = createDataModel('filterdata2d_113_5_trace_CTa');

export const DataAnalysis34 = createDataModel('filterdata2d_114_trace_CTa');
export const DataAnalysis35 = createDataModel('filterdata3d_3det_newQ_a0');
export const DataAnalysis36 = createDataModel('filterdata2d_3det_newQ_a0');
export const DataAnalysis37 = createDataModel('filterdata3d_3det_a0');
export const DataAnalysis38 = createDataModel('filterdata2d_3det_a0');
export const DataAnalysis39 = createDataModel('filterdata3d_3det_10c');

export const DataAnalysis40 = createDataModel('filterdata2d_114_3_det_CTa');
export const DataAnalysis41 = createDataModel('filterdata2d_114_5_det_CTa');
export const DataAnalysis42 = createDataModel('filterdata2d_114_3_trace_CTa');
export const DataAnalysis43 = createDataModel('filterdata2d_114_5_trace_CTa');

export const DataAnalysis44 = createDataModel(
  'filterdata2d_new_criteria_117_estimator_CTa'
);
export const DataAnalysis45 = createDataModel(
  'filterdata2d_buffer_114_estimator_CTa'
);
export const DataAnalysis46 = createDataModel(
  'filterdata2d_buffer_117_estimator_CTa'
);
export const DataAnalysis47 = createDataModel(
  'filterdata2d_buffer5_117_estimator_CTa'
);

export const DataAnalysis50 = createDataModel('filterdata2d_115_3_det_CTa');
export const DataAnalysis51 = createDataModel('filterdata2d_115_5_det_CTa');
export const DataAnalysis52 = createDataModel('filterdata2d_115_3_trace_CTa');
export const DataAnalysis53 = createDataModel('filterdata2d_115_5_trace_CTa');

export const DataAnalysis54 = createDataModel('filterdata2d_5det_prob_mult2');
export const DataAnalysis55 = createDataModel('filterdata_single');
export const DataAnalysis56 = createDataModel('filterdata_single2');
export const DataAnalysis57 = createDataModel(
  'filterdata_single_new_criteria_estimator'
);

export const DataAnalysis60 = createDataModel('filterdata2d_116_3_det_CTa');
export const DataAnalysis61 = createDataModel('filterdata2d_116_5_det_CTa');
export const DataAnalysis62 = createDataModel('filterdata2d_116_3_trace_CTa');
export const DataAnalysis63 = createDataModel('filterdata2d_116_5_trace_CTa');

export const DataAnalysis70 = createDataModel('filterdata2d_117_3_det_CTa');
export const DataAnalysis71 = createDataModel('filterdata2d_117_5_det_CTa');
export const DataAnalysis72 = createDataModel('filterdata2d_117_3_trace_CTa');
export const DataAnalysis73 = createDataModel('filterdata2d_117_5_trace_CTa');

export const DataAnalysis80 = createDataModel('filterdata_single');
export const DataAnalysis81 = createDataModel('filterdata_single_new');
export const DataAnalysis82 = createDataModel(
  'filterdata_single_new_criteria_estimator'
);
export const DataAnalysis83 = createDataModel('filterdata_single2');

// filterdata3d_3tr - 3 RLS, 3D, tr of Matrix in IMM inconsistency criterion.
//filterdata3d_3tr_a0 -3 RLS, 3D, tr of Matrix in IMM inconsistency criterion, association algorithm - a0.
//new_q - neww q in lib.config, 10c - 3d width 10c in period.

// 31: filterdata3d_3det_newQ - 3 RLS, 3D, det of Matrix in IMM inconsistency criterion, new values of q-parameter.
// 32: filterdata2d_3det_newQ - 3 RLS, 2D, det of Matrix in IMM inconsistency criterion, new values of q-parameter.
// 33: filterdata3d_3det 3 RLS, 3D, det of Matrix in IMM inconsistency criterion.
// 34: filterdata2d_3det 3 RLS, 2D, det of Matrix in IMM inconsistency criterion.

// filterdata3d_new_criteria_117_estimator_old --- without normalization
