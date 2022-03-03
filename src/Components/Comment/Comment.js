import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import "./Comment.css";

function Comment({ comment }) {
  console.log(comment);
  return (
    <div className="comment-container">
      <div className="comment-info">
        <span>Posted by</span>
        &nbsp;
        {comment.author === "[deleted]" ? (
          comment.author
        ) : (
          <a
            href={"https://www.reddit.com/user/" + comment.author}
            target="_blank"
            rel="noopener"
          >
            {comment.author}
          </a>
        )}
        &nbsp;
        <span>{moment.unix(comment.created_utc).fromNow()}</span>
      </div>
      <div className="comment-body">
        <ReactMarkdown>{comment.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Comment;