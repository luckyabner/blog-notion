import { Client } from "@notionhq/client";

const auth = process.env.NOTION_ACCESS_TOKEN;

export const dbId = process.env.NOTION_DATABASE_POST_ID ?? "";

export const friendsDbId = process.env.NOTION_FRIENDS_DATABASE_ID ?? "";

export const projectPageId = process.env.NOTION_PROJECT_ID ?? "";

export const aboutPageId = process.env.NOTION_ABOUTPAGE_ID ?? "";

export const notion = new Client({ auth });