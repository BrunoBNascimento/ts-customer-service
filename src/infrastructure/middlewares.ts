import * as bodyParser from "body-parser";

export default [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
]