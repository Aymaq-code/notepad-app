import PostDetails from "./BoxNotepadDetails";

export default function PostBoxs({ posts, searchQuery, onClose }) {
  return (
    <div className="taskList">
      {posts.length === 0 ? (
        <h4 className="empty-post-msg">
          No note yet <span>📝</span>
        </h4>
      ) : (
        posts.map((post) => (
          <PostDetails
            key={post.id}
            postId={post.id}
            postTitle={post.postTitle}
            postBody={post.postBody}
            searchQuery={searchQuery}
            onClose={onClose}
          />
        ))
      )}
    </div>
  );
}
