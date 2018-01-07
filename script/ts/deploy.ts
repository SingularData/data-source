import AWS = require("aws-sdk");
import { readFileSync } from "fs";
import { join } from "path";

const s3 = new AWS.S3();
const sources = JSON.parse(
  readFileSync(join(__dirname + "/../../data-sources.json"), "utf-8")
);

const params = {
  // to minify the json
  Body: JSON.stringify(sources),
  Bucket: "sdn-data",
  Key: "data-sources.json"
};

s3
  .putObject(params)
  .promise()
  .then(() => console.log("Data sources uploaded!"))
  .catch(err => console.error("Upload failed: ", err));
