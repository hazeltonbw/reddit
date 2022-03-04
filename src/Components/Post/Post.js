import React from "react";
import "./Post.css";
import moment from "moment";
import upvote from "../../images/Upvote.svg";
import format from "../../utils/format";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Comment from "../Comment/Comment";

export default function Post({ data, toggleComments }) {
  const { showingComments, loadingComments, errorComments } = data;

  const renderComments = () => {
    if (errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (loadingComments) {
      return <div>&nbsp;&nbsp;Loading...</div>;
    }

    if (showingComments) {
      return data.comments
        .filter((_, index) => index < 25)
        .map((comment) => <Comment comment={comment} key={comment.id} />);
    }

  };
  let pics = [];
  if (data && data.media_metadata) {
    for (const property in data.media_metadata) {
      pics.push({
        url: data.media_metadata[property].s.u.replaceAll("&amp;", "&"),
        id: data.media_metadata[property].s.id,
        width: data.media_metadata[property].s.x,
        height: data.media_metadata[property].s.y,
      });
    }
  }
  return (
    <article className="post">
      <div className="vote-container">
        <div className="vote-primary">
          <img src={upvote} alt="Upvote" className="upvote" />
          <span className="score">{format(data.score)}</span>
          <img src={upvote} alt="Downvote" className="downvote" />
        </div>
      </div>
      <div className="content">
        <div className="post-info">
          <a
            href={"https://www.reddit.com/r/" + data.subreddit}
            className="subreddit"
            target="_blank"
            rel="noreferrer"
          >
            r/{data.subreddit}
          </a>
          <span className="sep">|</span>
          <span>Posted by</span>
          &nbsp;
          <a
            href={"https://www.reddit.com/user/" + data.author}
            target="_blank"
            rel="noreferrer"
          >
            {data.author}
          </a>
          &nbsp;
          <span>{moment.unix(data.created_utc).fromNow()}</span>
          <h3 className="post-title">{data.title.replaceAll("&amp;", "&")}</h3>
          <div className="media">
            {data.is_video ? (
              <video
                className="post-media"
                controls
                src={data.media.reddit_video.fallback_url}
              ></video>
            ) : null}

            {data && data.url.includes("gifv") ? (
              <video
                controls
                type="mp4"
                src={data.url.slice(0, -5) + ".mp4"}
              ></video>
            ) : null}

            {pics.length !== 0 ? (
              <Carousel
                dynamicHeight={false}
                showArrows={true}
                showThumbs={true}
              >
                {pics.map((pic, index) => (
                  <div key={index}>
                    <img
                      className="post-media"
                      src={pic.url}
                      alt={data.title}
                    />
                  </div>
                ))}
              </Carousel>
            ) : null}
          </div>
        </div>

        <div className="more-info">
          <div className="vote-secondary">
            <img
              src={upvote}
              alt="Upvote"
              className="upvote upvote-secondary"
            />
            <span className="upvote-secondary score">{format(data.score)}</span>
            <img
              src={upvote}
              alt="Downvote"
              className="downvote upvote-secondary"
            />
          </div>
          {/*<img src={upvote} alt="Downvote" className='downvote downvote-secondary'/>*/}
          <button
            className="comments-button"
            onClick={() => toggleComments(data.permalink)}
          >
            {format(data.num_comments)}
            <FontAwesomeIcon
              className="fa-comment"
              size="2x"
              icon={regular("comments")}
            />
          </button>
        </div>
        <div className="comments">{renderComments()}</div>
      </div>
    </article>
  );
}
