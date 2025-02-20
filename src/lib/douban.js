import axios from "axios";
import xml2js from "xml2js";


export default async function getDoubanRecords() {
  const res = await axios.get('https://www.douban.com/feed/people/214840979/interests');
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(res.data);
  return result;
}