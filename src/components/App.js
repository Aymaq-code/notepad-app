import { useReducer } from "react";
import PostBoxs from "./BoxNotepad";
import Head from "./HeadNotepad";
import FormNotepad from "./FormNotepad";

const initailState = {
  postTitle: "",
  postBody: "",
  posts: [],
  searchQuery: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "postTitle":
      return { ...state, postTitle: action.payload };
    case "postBody":
      return { ...state, postBody: action.payload };

    case "addPost":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        postTitle: "",
        postBody: "",
      };
    case "clearAllPosts":
      return { ...state, posts: [], searchQuery: "" };
    case "closePost":
      return { ...state, posts: action.payload };
    case "searchBar":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
}
export default function App() {
  const [{ postTitle, postBody, posts, searchQuery }, dispatch] = useReducer(
    reducer,
    initailState
  );

  function addPostHandler(e) {
    e.preventDefault();
    if (postTitle === "" || postBody === "") {
      alert("Please enter both title and body.");
      return;
    }

    const newPost = {
      id: Date.now(),
      postTitle: postTitle,
      postBody: postBody,
    };
    dispatch({ type: "addPost", payload: newPost });
  }

  function clearPostHandler() {
    dispatch({ type: "clearAllPosts" });
  }

  function closePostHandler(postId) {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    dispatch({ type: "closePost", payload: updatedPosts });
  }

  const orderedPosts = [...posts].sort((a, b) => {
    const aMatch = `${a.postTitle} ${a.postBody}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const bMatch = `${b.postTitle} ${b.postBody}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Matching posts should come first
    return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
  });

  return (
    <div className="container">
      <Head
        orderedPosts={orderedPosts.length}
        searchQuery={searchQuery}
        dispatch={dispatch}
        onClick={clearPostHandler}
      />
      <div className="content">
        <FormNotepad
          onSubmit={addPostHandler}
          postTitle={postTitle}
          dispatch={dispatch}
          postBody={postBody}
        />
        <PostBoxs
          posts={orderedPosts}
          searchQuery={searchQuery}
          onClose={closePostHandler}
        />
      </div>
    </div>
  );
}
