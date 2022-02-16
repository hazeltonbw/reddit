import React from 'react'
import "./Post.css";
import moment from 'moment';
import upvote from "../../images/Upvote.svg";

var pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
var abbrev = 'kmb'; 

function round(n, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(n*prec)/prec;
}

function format(n) {
    var base = floor(log(abs(n))/log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n/pow(1000,base),1)+suffix : ''+n;
}

export default function Post({data}) {
    //console.log(data)
    return (
        <article className="post">
            <div className="vote">
                <img src={upvote} alt="Upvote" className='upvote'/>
                <span className='score'>{format(data.score)}</span>
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
                    <h4 className='post-title'>{data.title}</h4>
                <img src={data.url} alt="" className='post-img'/>
            </div>

            <div className="more-info">
                <img src={upvote} alt="Upvote" className='upvote upvote-secondary'/>
                <span className='upvote-secondary score'>{format(data.score)}</span>
            <a href={"https://www.reddit.com" + data.permalink}>{format(data.num_comments)}</a><span>&nbsp;Comments</span>
            </div>
                
            </div>
        </article>
    )
}
