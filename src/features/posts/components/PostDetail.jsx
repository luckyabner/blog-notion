import React from "react";
import PostProperties from "./PostProperties";
import Markdown from "react-markdown";

export default function PostDetail({ post, content = "" }) {
  // console.log("PostDetail", content);
  return (
    <div className="container mx-auto mt-2 max-w-4xl">
      <PostProperties post={post} />
      <article className="prose mx-auto">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
