import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const posts = [
        {
            id: 1,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 4,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/3600592/pexels-photo-3600592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]
    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => {
                    return (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="content">
                                <Link className="link" to={`post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;