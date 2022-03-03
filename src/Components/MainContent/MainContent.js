import React, { useEffect } from "react";
import "./MainContent.css";
import Post from "../Post/Post";
import { AnimatedList } from "react-animated-list";
import PostSkeleton from "../Post/PostSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComments,
  fetchPosts,
  selectFilteredPosts,
} from "../../store/redditSlice";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default function MainContent() {
  const reddit = useSelector((state) => state.reddit);
  //console.log(reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
    //fetchData();
  }, [dispatch, selectedSubreddit]);

  const toggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };
  if (error) {
    return (
      <div className="error">
        <h1>Failed to load posts. Refresh the page to try again</h1>
      </div>
    );
  }
  return (
    <main className="main">
      <section className="posts">
        {!isLoading &&
          posts.map((post, index) => (
            <Post
              key={index}
              data={post}
              toggleComments={toggleComments(index)}
            />
          ))}

        {/* else, render the skeleton  */}
        {isLoading && (
          <AnimatedList animation="zoom">
            {Array(getRandomInt(5, 10))
              .fill()
              .map((_, index) => (
                <PostSkeleton key={index} />
              ))}
          </AnimatedList>
        )}
      </section>
    </main>
  );
}
//const fetchData = async () => {
//let c, jsonPosts;
//try {
//c = await fetch("https://www.reddit.com/r/popular.json");
//if (c.ok) {
////console.log("ok");
//jsonPosts = await c.json();
////console.log(jsonPosts.data.children)
////setPosts(jsonPosts.data.children);
//} else {
////setError(true);
//console.log("something went wrong");
//}
//} catch (err) {
////setError(true);
//console.log(err);
//}
//};
