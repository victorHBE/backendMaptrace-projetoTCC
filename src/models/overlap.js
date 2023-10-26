import mongoose from "mongoose";

const OverlapSchema = new mongoose.Schema({
    cidade: String,
    dataList: [Object],
  }, { strict: false });

export default mongoose.models.Overlap || mongoose.model('Overlap', OverlapSchema)



