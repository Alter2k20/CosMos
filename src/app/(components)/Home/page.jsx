"use client";
import { useEffect,useState } from "react";
import ReactMarkdown from "react-markdown"

export default function page() {
  const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/api/blog/getblogs')
        .then((respone)=>respone.json())
        .then((data)=>{
          console.log(data)
          setBlogs([...data])
        })
        .catch((err)=>{console.log(err)})
    },[])
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <div id="matrices" className="w-[20vw] p-4 grid grid-cols-2"><div>Total no of blogs :</div><div> {blogs.length}</div></div>
      <div id="allblogs" className="text-white w-[60vw] max-h-dvh grid grid-rows-[auto]  gap-4 overflow-y-scroll border-l-2 border-r-2 p-2 ">
      {blogs.map((val)=>(
        <div key={val.blogId} className="grid grid-cols-1 grid-rows-2 border-2 mb-2 bg-gray-800 p-4 rounded-md">
          <div className="flex justify-between place-content-center">{val.heading}<pre className="w-fit h-fit p-1 bg-gray-600/50 rounded-md text-sm">{val.topic}</pre></div>
          <div>{val.content}</div>
        </div>
      ))}
    </div>
    <div id="filter" className="w-[20vw]"></div>
    </div>
  )
}
