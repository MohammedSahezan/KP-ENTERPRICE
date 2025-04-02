import { v2 } from "cloudinary";

import dotenv from "dotenv"
dotenv.config()
const cloudinary = v2


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLUDINARY_API_KEY,
    api_secret: process.env.CLUDINARY_API_SECRET
});

export default cloudinary