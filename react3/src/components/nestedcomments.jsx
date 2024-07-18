import { useState } from "react";
import useCommentTree from "../hooks/useCommentTree";
import Comment from "./comment";

const NestedComments = ({ comments, onSubmit, onEdit, onDelete }) => {
  const {
    comments: commentsData,
    insertComment,
    editComment,
    deleteComment,
  } = useCommentTree(comments);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    if (comment) {
      handleReply(undefined, comment);
      setComment("");
    }
  };

  const handleReply = (commentId, content) => {
    insertComment(commentId, content);
    onSubmit(content);
  };
  const handleEdit = (commentId, content) => {
    editComment(commentId, content);
    onEdit(content);
  };
  const handleDelete = (commentId, content) => {
    deleteComment(commentId);
    onDelete(content);
  };

  return (
    <>
      <div className="add-comment">
        <textarea
          value={comment}
          rows={3}
          onChange={handleChange}
          cols={50}
          className="comment-textarea"
          placeholder="Add a new comment .."
        />
        <button className="comment-button" onClick={handleSubmit}>
          Add Comment
        </button>
      </div>
      {commentsData.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onSubmitComment={handleReply}
          onEditComment={handleEdit}
          onDeleteComment={handleDelete}
        />
      ))}
    </>
  );
};

export default NestedComments;
