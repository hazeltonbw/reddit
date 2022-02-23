import React, { useEffect, useState } from "react";
import "./MainContent.css";
import Post from "../Post/Post";
import { AnimatedList } from 'react-animated-list';
import "./MainContentSkeleton";
import MainContentSkeleton from "./MainContentSkeleton";
import PostSkeleton from "../Post/PostSkeleton";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function MainContent() {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(false);
    const fetchData = async () => {
        let c, jsonPosts;
        try {
            c = await fetch('https://www.reddit.com/r/popular.json');
            if (c.ok) {
                //console.log("ok");
                jsonPosts = await c.json();
                //console.log(jsonPosts.data.children)
                setPosts(jsonPosts.data.children);
            }
            else {
                setError(true);
                console.log("something went wrong")
            }
        } catch(err){
            setError(true);
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    if (error) {
        return (
            <div className="error">
                <h1>Failed to load posts. Refresh the page to try again</h1>
            </div>
        )
    }
    return (
        <main className="main">
            <section className="posts">
                {posts && posts.map((post, index) => (
                            <Post key={index} data={post.data}/>
                ))}

         {/* else, render the skeleton  */}
        {!posts && (
            <AnimatedList animation="zoom">
                {Array(getRandomInt(5,10)).fill(<PostSkeleton />)}
            </AnimatedList>
        )}
            </section>
        </main>
    )
}
