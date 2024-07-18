import { useState } from "react";

const Comment = ({ comment, onSubmitComment, onEditComment,onDeleteComment }) => {
  const [expand, setExpand] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditedContent(comment.content);
  };

  const handleEditSubmit = () => {
    onEditComment(comment.id, editedContent);
    setEditMode(false);
  };
  const toggleExpand = () => {
    setExpand(!expand);
  };
  const handleChange = (e) => {
    if (editMode) {
      setEditedContent(e.target.value);
    } else setReplyContent(e.target.value);
  };
  const handleReplySubmit = () => {
    if (replyContent) {
      onSubmitComment(comment.id, replyContent);
      setReplyContent("");
    }
  };
  return (
    <div className="comment">
      {!editMode ? (
        <>
          <p className="comment-content">{comment.content}</p>
          <p className="comment-info">Votes: {comment.votes}</p>
          <p className="comment-info">
            {new Date(comment.timestamp).toLocaleString()}
          </p>
        </>
      ) : (
        <div className="add-comment">
          <textarea
            value={editedContent}
            rows={3}
            onChange={handleChange}
            cols={50}
            className="comment-textarea"
            placeholder="Add a new comment .."
          />
          <button className="comment-button" onClick={handleEditSubmit}>
            Save Edit
          </button>
          <button className="comment-button" onClick={toggleEditMode}>
            Cancel Edit
          </button>
        </div>
      )}
      <div className="comment-actions">
        <button className="comment-button" onClick={toggleExpand}>
          {expand ? "Hide Replies" : "Reply"}
        </button>
        <button onClick={toggleEditMode} className="comment-button">
          Edit
        </button>
        <button onClick={()=>onDeleteComment(comment.id)} className="comment-button">Delete</button>
      </div>
      {expand && (
        <div className="comment-replies">
          <div className="add-comment">
            <textarea
              value={replyContent}
              rows={3}
              onChange={handleChange}
              cols={50}
              className="comment-textarea"
              placeholder="Add a new comment .."
            />
            <button className="comment-button" onClick={handleReplySubmit}>
              Add Comment
            </button>
          </div>
          {comment?.replies?.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onSubmitComment={onSubmitComment}
              onEditComment={onEditComment}
              onDeleteComment={onDeleteComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
