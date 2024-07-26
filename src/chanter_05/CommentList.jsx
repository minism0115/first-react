import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "kim",
    comment: "Hi!",
  },
  {
    name: "kwon",
    comment: ":-)",
  },
];

function CommentList(props) {
  return (
    <div>
      <Comment name={"min"} comment={"Hello!"} />
      <Comment name={"jung"} comment={"Hello!"} />
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.name}
            name={comment.name}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
