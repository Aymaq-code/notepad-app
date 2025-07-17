export default function Head({ orderedPosts, searchQuery, dispatch, onClick }) {
  return (
    <div className="top-head">
      <div className="top-head-right">
        <h1>To-Do List 📒</h1>
      </div>
      <div className="top-head-left">
        <h3>{orderedPosts} List Found</h3>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) =>
            dispatch({ type: "searchBar", payload: e.target.value })
          }
        />
        <button
          className={`${orderedPosts === 0 && "disabled-btn"}`}
          onClick={onClick}
        >
          Clear All List
        </button>
      </div>
    </div>
  );
}
