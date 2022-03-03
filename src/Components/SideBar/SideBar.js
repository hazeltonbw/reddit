import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SideBar.css";
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditSlice";
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from "../../store/redditSlice";

export default function SideBar() {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error } = reddit; // redditSlice status
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);
  if (isLoading) {
    return null;
  }
  if (error) {
    return <div>Error...</div>;
  }
  if (!isLoading)
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <h2 className="subreddits-title">Subreddits</h2>
          <ul className="subreddits-list">
            {subreddits.map((subreddit) => (
              <li
                key={subreddit.id}
                className={`${
                  selectedSubreddit === subreddit.url
                    ? `selected-subreddit ${subreddit.url}`
                    : `${subreddit.url}`
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    dispatch(setSelectedSubreddit(subreddit.url));
                    window.scrollTo(0, 0);
                  }}
                >
                  {subreddit.display_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}
