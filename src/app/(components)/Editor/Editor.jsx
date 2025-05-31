"use client";
import React, { useState,useContext } from "react";

import { UserContext } from "@/app/contexts/UserContext";

export default function Editor() {

    const { userId, setUserId } = useContext(UserContext);

    const [data, setData] = useState({
        heading: "",
        content: "",
        topic: "",
        userId: userId,
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
        <div className="flex justify-center items-center w-full h-full bg-gray-900">
            <form
                className="flex flex-col justify-center items-center bg-gray-800 rounded-lg p-6 shadow-lg w-full h-full"
                onSubmit={handleSubmit}
            >
                <h1 className="text-gray-100 text-3xl font-bold mb-6">Create your content</h1>
                <label htmlFor="heading" className="text-gray-400 mb-2">Heading:</label>
                <input
                    className="w-3/4 h-12 bg-gray-700 text-gray-100 rounded-lg p-2 mb-4 outline-none"
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
                <label htmlFor="edit" className="text-gray-400 mb-2">Edit your content:</label>
                <textarea
                    className="w-3/4 h-[50vh] bg-gray-700 text-gray-100 rounded-lg p-2 mb-4 resize-none outline-none"
                    name="content"
                    id="edit"
                    value={data.content}
                    aria-multiline="true"
                    placeholder="Text ....."
                    onChange={(e) => {
                        setData((prevFormData) => ({
                            ...prevFormData,
                            content: e.target.value,
                        }));
                    }}
                />
                <label htmlFor="topic" className="text-gray-400 mb-2">Topic:</label>
                <input
                    className="w-3/4 h-12 bg-gray-700 text-gray-100 rounded-lg p-2 mb-4 outline-none"
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
                    className="mt-4 cursor-pointer hover:bg-green-700 transition-colors bg-green-600 text-gray-100 rounded-lg p-3"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

