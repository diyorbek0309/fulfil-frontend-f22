import { useState, useEffect } from "react";
import { api } from "./api";

const Posts = () => {
  const postStyles = {
    width: 400,
    marginBottom: 30,
  };

  const postWrap = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //   });

    api.get("posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  //   const getPosts = () => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPosts(data);
  //       });
  //   };
  //   getPosts();

  return (
    <>
      <h1>Posts</h1>
      <div style={postWrap}>
        {posts &&
          posts.length &&
          posts.map((post) => (
            <div key={post.id} style={postStyles}>
              <h2>{post.title}</h2>
              <h3>{post.body}</h3>
              {/* <h2>{post.name.toUpperCase()}</h2> */}
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
