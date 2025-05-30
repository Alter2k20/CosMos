"use client";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ content }) => {
    return (
        <div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
