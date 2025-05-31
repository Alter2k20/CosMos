"use client";

import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Allblogs from "../Allblogs/Allblogs";
import Editor from "../Editor/Editor";

import { UserContext } from "@/app/contexts/UserContext";

function RedirectToLogin() {
    const router = useRouter();

    useEffect(() => {
        router.push("/Login");
    }, [router]);

    return null; // Or a spinner while redirecting
}

function Page() {
    const [children, setChildren] = useState(0);
    const { userId, setUserId } = useContext(UserContext);

    return (
        <div>
            <nav className="fixed w-[100vw] h-8 z-50">
                {console.log(userId)}
                <ul className="flex justify-end place-items-center">
                    <li
                        className="cursor-pointer m-2 p-1 rounded-md bg-indigo-600 hover:bg-indigo-700"
                        onClick={(e) => {
                            e.preventDefault();
                            setChildren(0);
                        }}
                    >
                        All Blogs
                    </li>
                    <li
                        className="cursor-pointer m-2 p-1 rounded-md bg-indigo-600 hover:bg-indigo-700"
                        onClick={(e) => {
                            e.preventDefault();
                            setChildren(1);
                        }}
                    >
                        Create +
                    </li>
                </ul>
            </nav>
            <div id="child-container">
                {children === 0 ? (
                    <Allblogs />
                ) : userId > 0 && children == 1? (
                    <Editor />
                ) : (
                    <RedirectToLogin />
                )}
            </div>
            
        </div>
    );
}

export default Page;
