import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
        id: 1,
        username: 'supa superbe',
        title: 'this is title',
        userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        img: 'https://images.unsplash.com/photo-1598375056647-0d7201b55a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        caption: 'Test post asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        id: 2,
        username: 'Le tenace',
        title: 'this is title',
        userImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        img: 'https://images.unsplash.com/photo-1598375056647-0d7201b55a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        caption: 'Test post'
    },
    {
        id: 3,
        username: 'sneiper',
        title: 'this is title',
        userImg: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        img: 'https://images.unsplash.com/photo-1598375056647-0d7201b55a2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        caption: 'Test post'
    },
];
  return <div>
    {posts.map((post)=>{
        return (
            <Post key={post.id} post={post}/>
        )
    })}
  </div>;
};

export default Posts;
