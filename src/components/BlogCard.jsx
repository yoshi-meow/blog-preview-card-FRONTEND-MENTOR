import React from "react";
import avatar from "../assets/images/image-avatar.webp";
import thumbnail from "../assets/images/illustration-article.svg";

const BlogCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <div className="block custom-card bg-white p-6 rounded-[1.2em] shadow-md custom-shadow-box border-[1px] border-customBlack w-96">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="thumbnail inline-flex me-3 rounded-[1em]"
          />
          <span className="custom-badge inline-flex items-center rounded-md bg-customYellow px-3 py-1 mt-6 text-sm font-bold text-customBlack mb-3">
            Learning
          </span>
          <span className="custom-date block items-center text-sm font-semibold text-customBlack mb-4">
            Published 21 Dec 2023
          </span>
          <h1 className="text-2xl font-bold mb-3 title">
            HTML & CSS foundations
          </h1>
          <p className="custom-desc text-customGrey tracking-wide mb-6">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="mt-2">
            <img src={avatar} alt="avatar" className="inline-flex w-8 me-3" />
            <span className="inline-flex items-center text-sm font-bold text-customBlack">
              Greg Hooper
            </span>
          </div>
        </div>
        <div className="block my-7 text-center">
          Challenge by{" "}
          <a className="underline font-semibold text-customLink" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a className="underline font-semibold text-customLink" href="https://www.frontendmentor.io/profile/ncece11" target="_blank">Yoshimeow</a>.
        </div>
      </div>
    </div>
  )
}

export default BlogCard