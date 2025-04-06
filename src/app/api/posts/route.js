import fetchPosts from "@/features/posts/server/posts";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const startCursor = searchParams.get("start");

  try {
    const result = await fetchPosts({
      startCursor,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("API 错误:", error);
    return NextResponse.json({ error: "获取文章失败" }, { status: 500 });
  }
}
