import React from 'react'
import upvote from "../../images/Upvote.svg";
import "../Skeleton/Skeleton.css";
import "../Skeleton/Skeleton";
import "./Post.css";

export default function PostSkeleton() {
  return (
    <div>
        <article className="skeleton post">
            <div className="skeleton vote">
                <img src={upvote} alt="Upvote" className='upvote'/>
                <span className='skeleton score'></span>
                <img src={upvote} alt="Downvote" className='downvote'/>
            </div>
            <div className="skeleton content">
                <div className="skeleton post-info">
                    <span className="skeleton sep loading"></span>
                    <span className="skeleton sep loading"></span>
                    <span className="skeleton sep loading"></span>
                    <span className='skeleton title loading'></span>
                    <span className='skeleton title loading'></span>
                    <span className='skeleton title loading'></span>
                </div>
                <span className='skeleton skel-img loading'></span>
                <div className="skeleton more-info">
                    <img src={upvote} alt="Upvote" className='upvote upvote-secondary'/>
                    <span className='upvote-secondary score'></span>
                    <span className="skeleton sep-more-info loading"></span>
                    <span className="skeleton sep-more-info loading"></span>
                    <span className="skeleton sep-more-info loading"></span>
                    {<img src={upvote} alt="Downvote" className='downvote downvote-secondary'/>}
                </div>
            </div>
        </article>
    </div>
  )
}
