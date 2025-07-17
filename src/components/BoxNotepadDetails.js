import React from "react";

export default function PostDetails({
  postTitle,
  postBody,
  searchQuery,
  onClose,
  postId,
}) {
  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
  }

  return (
    <div className="task">
      <span className="task-close-btn" onClick={() => onClose(postId)}>
        🗑️
      </span>

      <h3
        dangerouslySetInnerHTML={{
          __html: highlightMatch(postTitle, searchQuery),
        }}
      />

      <p
        dangerouslySetInnerHTML={{
          __html: highlightMatch(postBody, searchQuery),
        }}
      />
    </div>
  );
}
