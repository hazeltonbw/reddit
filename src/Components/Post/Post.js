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
    let pic = "";
    if (data && data.media_metadata) 
        for (const property in data.media_metadata) 
            pic = data.media_metadata[property].s.u;
    if(pic.length > 0) 
        pic.replaceAll('&amp;', '&');
    //console.log(pic.length)
    //console.log(data.url !== undefined);
    //console.log(data.post_hint)
    return (
        <article className="post">
            <div className="vote">
                <img src={upvote} alt="Upvote" className='upvote'/>
                <span className='score'>{format(data.score)}</span>
                <img src={upvote} alt="Downvote" className='downvote'/>
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
                    <h3 className='post-title'>{data.title}</h3>
                    <div className="media">

                        { data.is_video
                            ? <video className='post-media' controls src={data.media.reddit_video.fallback_url}></video> 
                            : null
                        }
                        
                        { data && data.url.includes('gifv') 
                            ? <video controls type='mp4' src={data.url.slice(0,-5) + '.mp4'}></video>
                            : null
                        }

                        { pic && data.post_hint === "image"
                            ? <img src={pic} alt={data.title} className='post-media'/>
                            : <img src={data.url} alt={data.title} className='post-media' />
                        }

                        {   !pic && !data.is_video 
                            ? <a href={data.url}>{data.url}</a> 
                            : null
                        }

                    </div>
                </div>

                <div className="more-info">
                    <img src={upvote} alt="Upvote" className='upvote upvote-secondary'/>
                    <span className='upvote-secondary score'>{format(data.score)}</span>
                    {/* <img src={upvote} alt="Downvote" className='downvote downvote-secondary'/> */}
                    <a href={"https://www.reddit.com" + data.permalink}>{format(data.num_comments)}</a><span>&nbsp;Comments</span>
                </div>
            </div>
        </article>
    )
}
