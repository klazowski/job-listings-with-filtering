"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
const JobOffer = mongoose_1.default.model('JobOffer', JobOfferSchema);
exports.default = JobOffer;
