import React from "react";

export default function FormNotepad({
  onSubmit,
  postTitle,
  dispatch,
  postBody,
}) {
  return (
    <form className="head" onSubmit={onSubmit}>
      <input
        type="text"
        className="input-title"
        placeholder="Task title..."
        value={postTitle}
        onChange={(e) =>
          dispatch({ type: "postTitle", payload: e.target.value })
        }
      />

      <textarea
        name=""
        id=""
        className="taskDetails"
        value={postBody}
        placeholder="Task details..."
        onChange={(e) =>
          dispatch({ type: "postBody", payload: e.target.value })
        }
      ></textarea>

      <button type="submit">Add Task</button>
    </form>
  );
}
