import React from "react";
import "./Post.css";
import moment from "moment";
import upvote from "../../images/Upvote.svg";
import format from "../../utils/format";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Post({ data }) {
  //console.log(data)
  //let pic = "";
  //if (data && data.media_metadata)
  //for (const property in data.media_metadata)
  //pic = data.media_metadata[property].s.u;
  //if (pic.length > 0) pic.replaceAll("&amp;", "&");
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
  //console.log(pic.length)
  //console.log(data.url !== undefined);
  //console.log(data.post_hint)
  //console.log(data);
  return (
    <article className="post">
      <div className="vote">
        <img src={upvote} alt="Upvote" className="upvote" />
        <span className="score">{format(data.score)}</span>
        <img src={upvote} alt="Downvote" className="downvote" />
      </div>
      <div className="content">
        <div className="post-info">
          <a
            href={"https://www.reddit.com/r/" + data.subreddit}
            className="subreddit"
            target="_blank"
            rel="noopener"
          >
            r/{data.subreddit}
          </a>
          <span className="sep">|</span>
          <span>Posted by</span>
          <span className="sep"></span>
          <a
            href={"https://www.reddit.com/user/" + data.author}
            target="_blank"
            rel="noopener"
          >
            {data.author}
          </a>
          <span className="sep"></span>
          <span>{moment.unix(data.created_utc).fromNow()}</span>
          <h3 className="post-title">{data.title}</h3>
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
                dynamicHeight={true}
                showArrows={true}
                showThumbs={true}
              >
                {pics.map((pic, index) => (
                  <div key={index}>
                    <img className="post-media" src={pic.url} />
                  </div>
                ))}
              </Carousel>
            ) : null}
          </div>
        </div>

        <div className="more-info">
          <img src={upvote} alt="Upvote" className="upvote upvote-secondary" />
          <span className="upvote-secondary score">{format(data.score)}</span>
          {/*<img src={upvote} alt="Downvote" className='downvote downvote-secondary'/>*/}
          <a
            href={"https://www.reddit.com" + data.permalink}
            target="_blank"
            rel="noopener"
          >
            {format(data.num_comments)}
          </a>
          <span>&nbsp;Comments</span>
        </div>
      </div>
    </article>
  );
}
