"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const db = process.env.MONGODB_URI || config_1.default.get('mongodbURI');
app.use(express_1.default.json());
mongoose_1.default
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Mongo connected');
})
    .catch((error) => console.log(error));
// Routes
app.use('/api/job-offers', require('./routes/api/job_offers'));
// Static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    const root = path_1.default.resolve(__dirname, '../../', 'client', 'build');
    app.use(express_1.default.static(root));
    app.get('*', (request, response) => {
        response.sendFile('index.html', { root });
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
