"use client";
import { Content } from "next/font/google";
import React, { useState } from "react";

function page() {
    const [data, setData] =  useState();
    const [consoledata, setConsoleData] = useState()
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center place-items-center">
            <form className=" h-1/2 w-1/2 flex flex-col justify-center place-items-center"
            onSubmit={()=>{
                // e.preventDefault()
                fetch("/api/createnote",{
                    method:"POST",
                    body: data
                })
                .then((data)=>{
                    setConsoleData(data.json())
                    console.log(consoledata)
                })
                .catch((e)=>{
                    console.log(e)
                })
            }}
            >
              <textarea
                className="w-full h-[70%]  bg-purple-800/50 text-white rounded-lg "
                name="blog"
                id="edit"
                value={data}
                aria-multiline = {"true"}
                placeholder="Okiland"
                onChange={(e) => {
                    setData(e.target.value);
                }}
            />
            <button type="submit" className="ml-[auto] mt-2 cursor-pointer hover:bg-green-900 transition-colors bg-green-600 rounded-lg p-2 " >Submit</button>
            </form>
            {data}
        </div>
    );
}

export default page;
