import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

const app = express();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${username}:${password}@cluster0.whywxej.mongodb.net/?retryWrites=true`;

Connection(URL);

defaultData();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNAL_ID"] = process.env.PAYTM_CHANNAL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:5000/callback";
paytmParams["EMAIL"] = "ankushdebnath00@gmail.com";
paytmParams["MOBILE_NO"] = "7777777777";
