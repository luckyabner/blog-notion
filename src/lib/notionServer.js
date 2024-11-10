import { Client } from "@notionhq/client";

const auth = process.env.NOTION_ACCESS_TOKEN;

export const dbId = process.env.NOTION_DATABASE_POST_ID ?? "";

export const notion = new Client({ auth });