import React from 'react'
import "./Post.css";
import upvote from "../../images/Upvote.svg";

import { Link } from "react-router-dom";


export default function Post({image}) {
    return (
        <div>
            <div className="post-wrapper">
                <div className="post">
                    <div className='vote'>
                        <img src={upvote} className="upvote" alt="Upvote" />
                        {78}
                        <img src={upvote} className="downvote" alt="Downvote" />
                    </div>
                    <img className="post-img" src={image} alt="a sample img2 for testing"></img>
                <div className="post-bar">
                    <Link to="/">{121} comments</Link>
                    <Link to="/">share</Link>
                    <Link to="/">save</Link>
                    <Link to="/">hide</Link>
                    <Link to="/" className="report">report</Link>
                </div>
                </div>
            </div>
        </div>
    )
}
