import { useState } from "react";

const useCommentTree = (initialCommnets) => {
  const [comments, setComments] = useState(initialCommnets);
  const insertNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, content],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    //if true -- adding a new reply --- else adding it to the list of the original commnets
    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      );
    } else {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  };








  const editNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
         content,
         timestamp:new Date().toISOString()
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: editNode(comment.replies, commentId, content),
        };
      }
      return comment;
    });
  };

  const editComment = (commentId, content) => {


    //if true -- adding a new reply --- else adding it to the list of the original commnets
 
      setComments((prevComments) => [commentId, content, prevComments]);
  };

  

  const deleteNode = (tree, commentId) => {
    return tree.reduce((acc,comment) => {
      if (comment.id === commentId) {
        acc
      } else if (comment.replies && comment.replies.length > 0) {
       comment.replies=deleteNode(comment.replies, commentId)
      }
      return [...acc,comment]
    });
  };

  const deleteComment = (commentId) => {


    //if true -- adding a new reply --- else adding it to the list of the original commnets
 
      setComments((prevComments) => deleteNode(commentId, prevComments));
  };

  return {
    comments,
    insertComment,
    editComment,
    deleteComment
  };
};

export default useCommentTree;
