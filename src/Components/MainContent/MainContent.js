import React, { useEffect, useState } from "react";
import "./MainContent.css";
import Post from "../Post/Post";
import "./MainContentSkeleton";
import MainContentSkeleton from "./MainContentSkeleton";

export default function MainContent() {
    const [posts, setPosts] = useState(null);
    const fetchData = async () => {
        setTimeout(async ()  => {
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
                    console.log("something went wrong")
                }
            } catch(err){
                console.log(err);
            }       
        }, 5000);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <main className="main">
            <section className="posts">
                {posts && posts.map((post, index) => (
                            <Post key={index} data={post.data}/>
                ))}

         {/* else, render the skeleton  */}
        {!posts && <MainContentSkeleton />}
            </section>
        </main>
    )
}
