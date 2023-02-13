import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(); // {i18n: function () {…}, t: function () {…}}

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <h1>{t("Posts.title")}</h1>
      <h2>{t("Posts.dummyText")}</h2>
      <div style={postWrap}>
        {posts &&
          posts.length &&
          posts.map((post) => (
            <div key={post.id} style={postStyles}>
              <h2>{post.title}</h2>
              <h3>{post.body}</h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
