import React, { useEffect, useState } from "react";
import "./MainContent.css";
import Post from "../Post/Post";

export default function MainContent() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        let posts, jsonPosts;
        try {
            posts = await fetch('https://www.reddit.com/r/popular.json');
            if (posts.ok) {
                //console.log("ok");
                jsonPosts = await posts.json();
                //console.log(jsonPosts.data.children)
                setPosts(jsonPosts.data.children);
            }
            else {
                console.log("something went wrong")
            }
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <main className="main">
            <section className="posts">
                {
                posts.map((post) => {
                    return <Post data={post.data}/>
                })
                }
            </section>
        </main>
    )
}
