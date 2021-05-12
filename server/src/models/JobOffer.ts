import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface JobOffer {
  // _id is generated by Mongo automatically
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: Date;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface IJobOffer extends JobOffer, mongoose.Document {
  _id: string;
}

const JobOfferSchema = new Schema({
  // _id is generated by Mongo automatically
  company: { type: String, required: true },
  logo: { type: String, required: true },
  new: { type: Boolean, required: true, default: true },
  featured: { type: Boolean, required: true, default: false },
  position: { type: String, required: true },
  role: { type: String, required: true },
  level: { type: String, required: true },
  postedAt: { type: Date, required: true, default: Date.now },
  contract: { type: String, required: true },
  location: { type: String, required: true },
  languages: { type: [String] },
  tools: { type: [String] },
});

const JobOffer = mongoose.model<IJobOffer>('JobOffer', JobOfferSchema);
export default JobOffer;
