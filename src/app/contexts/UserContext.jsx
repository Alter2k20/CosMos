"use client"
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export function UserContextProvider({ children }) {
    const [userId, setUserId] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("userId");
            return stored ? JSON.parse(stored) : -1;
        }
        return -1;
    });

    useEffect(() => {
        if (userId !== -1) {
            localStorage.setItem("userId", JSON.stringify(userId));
        }
    }, [userId]);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
}