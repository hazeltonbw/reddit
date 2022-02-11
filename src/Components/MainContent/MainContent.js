import React from "react";
import "./MainContent.css";
import  image1 from "../../images/sample-card-image.webp";
import  image2 from "../../images/test-mountain-photo.webp";
import Post from "../Post/Post";

export default function MainContent() {
    return (
        <div className="MainContent">
            <main className="post-wrapper">
                <Post image={image1} />
                <Post image={image2} />
                <Post image={image2} />
                <Post image={image2} />
                <Post image={image2} />
                <Post image={image2} />
            </main>
        </div>
    )
}
