import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqNgA0dZShnGCZQJjoex9Rylfz8cMsNvXJw&s"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Start up  is carried out by passionate Entrepreneurs
            </h2>
            <p className="mt-6 text-gray-600">
              A startup is a newly established business that aims to solve a
              specific problem with an innovative idea, product, or service —
              usually with the goal of rapid growth. Unlike traditional
              businesses, startups focus on: 💡 Innovation 📈 Scalability 🌍
              Large market impact 💰 High growth potential 🔥 Simple Definition
              A startup is a company in its early stage that is built to grow
              fast and disrupt the market with new ideas. 🧠 Key Features of a
              Startup Innovation – Brings something new or improves existing
              solutions.
            </p>
            <p className="mt-4 text-gray-600">
              Scalable Business Model – Can grow without increasing costs at the
              same rate. High Risk, High Reward – Many startups fail, but
              successful ones grow very big. Funding Based Growth – Often funded
              by investors. Technology Driven – Most modern startups use
              technology. 💰 How Startups Get Money Startups usually raise funds
              from: 👨‍👩‍👧‍👦 Friends & Family 🧑‍💼 Angel Investors 🏢 Venture
              Capitalists 🏛 Government Schemes 💻 Crowdfunding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
