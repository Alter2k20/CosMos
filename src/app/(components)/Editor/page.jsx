"use client";
import React, { useState } from "react";

function page() {
    const [data, setData] =  useState({
        title: "",
        blog: "",   
        topic: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, blog, topic } = data;
        const response = await fetch("/api/blog/createblog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, blog, topic }),
        });
        const result = await response.json();
        console.log(result);
    }
   
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center place-items-center">
            <form className=" h-fit w-fit  flex flex-col justify-center place-items-center bg-purple-900/50 rounded-lg p-4 " onSubmit={handleSubmit}>
              <h1 className="text-white text-2xl">Create your blog</h1>
              <label htmlFor="title" className="text-white">Title:</label>
              <input
                className="w-full h-[10%] bg-purple-800/50 text-white rounded-lg  p-2 outline-0"
                type="text"
                name="title"
                id="title"
                value={data.title}
                placeholder="Heading ....."
                onChange={(e) => {
                    setData((prevFormData) => ({ ...prevFormData, title: e.target.value }));
                }}
              />
              <label htmlFor="edit" className="text-white">Edit your blog:</label>
              <textarea
                className="w-[60vw] h-[50vh]  bg-purple-800/50 text-white rounded-lg resize-none overflow-y-auto p-2 outline-0"
                name="blog"
                id="edit"
                value={data.blog}
                aria-multiline = {"true"}
                placeholder="Text ....."
                onChange={(e) => {
                    setData((prevFormData) => ({ ...prevFormData, blog: e.target.value }));
                }}
            />
            <label htmlFor="topic" className="text-white">Topic:</label>
              <input
                className="w-full h-[10%] bg-purple-800/50 text-white rounded-lg p-2 outline-0"
                type="text"
                name="topic"
                id="topic"
                value={data.topic}
                placeholder="e.g. Next.js, React"
                onChange={(e) => {
                    setData((prevFormData) => ({ ...prevFormData, topic: e.target.value }));
                }}
              />
            <button type="submit" className="ml-[auto] mt-2 cursor-pointer hover:bg-green-900 transition-colors bg-green-600 rounded-lg p-2 " >Submit</button>
            </form>
        </div>
    );
}

export default page;
