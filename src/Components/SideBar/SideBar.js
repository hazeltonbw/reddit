import React from "react";
import "./SideBar.css";

const popularSubreddits = [
  "worldnews",
  "Wellthatsucks",
  "technology",
  "therewasanattempt",
  "Cooking",
  "photoshopbattles",
  "funny",
  "videos",
  "OldSchoolCool",
  "Jokes",
  "Showerthoughts",
  "todayilearned",
  "Damnthatsinteresting",
  "nextfuckinglevel",
  "gifs",
  "aww",
  "cats",
  "gaming",
  "space",
  "AskReddit",
  "ProgrammerHumor",
  "memes",
  "screenshots",
  "food",
  "woodworking",
  "oddlysatisfying",
];

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h3 className="subreddits">Subreddits</h3>
        {popularSubreddits.map((subreddit) => (
          <a
            className="subreddit"
            href={"https://www.reddit.com/r/" + subreddit}
            rel="noopener"
          >
            r\{subreddit}
          </a>
        ))}
      </div>
    </div>
  );
}
