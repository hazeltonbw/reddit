import React from 'react'
import "./Post.css";
import moment from 'moment';
import upvote from "../../images/Upvote.svg";

import { Link } from "react-router-dom";


export default function Post({data}) {
    console.log(data)
    return (
        <article className="post">
            <div className="vote">
                <img src={upvote} alt="Upvote" className='upvote'/>
                {data.num_comments}
            </div>
            <div className="content">
                <div className="post-info">
                    {/* TODO: Avatar */}
                    <a href={"https://www.reddit.com/r/"+data.subreddit} className="subreddit">r/{data.subreddit}</a>
                    <span className="sep">|</span>
                    <span>Posted by</span>
                    <span className="sep"></span>
                    <a href={"https://www.reddit.com/user/"+data.author}>{data.author}</a>
                    <span className="sep"></span>
                    <span>{moment.unix(data.created_utc).fromNow()}</span>
                    <br />
                    <h4>{data.title}</h4>
                </div>
                <img src={data.url} alt="" className='post-img'/>
            </div>
        </article>
    )
}
