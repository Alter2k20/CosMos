"use client";
import React, { useState } from "react";

function page() {
    const [data, setData] = useState({
        heading: "",
        content: "",
        topic: "",
        userId: 1, // have to add an method to get the userID ..........................................................................
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { heading, content, topic, userId } = data;
        console.table(data);
        const response = await fetch("/api/blog/createblog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data }),
        });
        const result = await response.json();
        console.log(result);
    };

    return (
        <div className=" flex justify-center place-items-center w-fit h-fit">
            <form
                className=" h-[100vh] w-[100vw]  flex flex-col justify-center place-items-center bg-purple-900/50 rounded-lg p-4 "
                onSubmit={handleSubmit}
            >
                <h1 className="text-white text-2xl">Create your content</h1>
                <label htmlFor="heading" className="text-white">
                    heading:
                </label>
                <input
                    className="w-[80vw] h-[10%] bg-purple-800/50 text-white rounded-lg  p-2 outline-0"
                    type="text"
                    name="heading"
                    id="heading"
                    value={data.heading}
                    placeholder="Heading ....."
                    onChange={(e) => {
                        setData((prevFormData) => ({
                            ...prevFormData,
                            heading: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="edit" className="text-white">
                    Edit your content:
                </label>
                <textarea
                    className="w-[80vw] h-[70vh]  bg-purple-800/50 text-white rounded-lg resize-none overflow-y-auto p-2 outline-0"
                    name="content"
                    id="edit"
                    value={data.content}
                    aria-multiline={"true"}
                    placeholder="Text ....."
                    onChange={(e) => {
                        setData((prevFormData) => ({
                            ...prevFormData,
                            content: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="topic" className="text-white">
                    Topic:
                </label>
                <input
                    className="w-[80vw] h-[10%] bg-purple-800/50 text-white rounded-lg p-2 outline-0"
                    type="text"
                    name="topic"
                    id="topic"
                    value={data.topic}
                    placeholder="e.g. Next.js, React"
                    onChange={(e) => {
                        setData((prevFormData) => ({
                            ...prevFormData,
                            topic: e.target.value,
                        }));
                    }}
                />
                <button
                    type="submit"
                    className="mt-2 cursor-pointer hover:bg-green-900 transition-colors bg-green-600 rounded-lg p-2 "
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default page;
