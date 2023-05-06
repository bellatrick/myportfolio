import React, { useState } from "react";
import Layout from "../components/Layout";
import twitter from "../assets/twitterclone.png";
import socials from "../assets/socials.png";
import angelco from "../assets/foodcommerce.png";
import learnit from "../assets/learnit.png";
import always from "../assets/always.png";
import blog from "../assets/blog.png";
import greenmart from "../assets/greenmart.png";
import hulu from "../assets/hulu.png";
import landing from "../assets/landing.png";
import luxury from "../assets/luxury.png";
import nft from "../assets/nft.png";
import lumin from "../assets/lumin.png";
import twitterwebflow from "../assets/twitterwebflow.png";
import "../styles/card.scss";
const Works = () => {
  const [tab, setTab] = useState("react");
 
  const items = {
    react: [
      {
        image: twitter,
        description:
          " This is a twitter clone that allows users to make a tweet,  retweet, like tweets and even retweet.",
        stack: ["NextJS", "Recoil", "Firebase"],
        github: "https://google.com",
        website: "https://twitter-clone-seven-olive.vercel.app/",
      },
      {
        image: socials,
        description:
          "A social media app that allows you to register, create posts, write and like comments on posts",
        stack: ["React", "GraphQL", "Redux"],
        github: "https://github.com/bellatrick/merng-client",
        website: "https://belladevsocials.netlify.app/",
      },
      {
        image: angelco,
        description:
          "An dual country food market app that uses Graphql and node js at the backend",
        stack: ["NextJS", "GraphQL", "Redux"],
        github: "https://github.com/bellatrick/food-commerce",
        website: "https://food-commerce-eosin.vercel.app/",
      },
      {
        image: hulu,
        description: "A clone of Hulu, a popular movie application.",
        stack: ["React", "Tailwindcss", "Redux"],
        github: "https://github.com/bellatrick/huluclone",
        website: "https://huluclone-l3sn6o9fh-bellatrick.vercel.app/",
      },
      {
        image: landing,
        description: "A landing page of a startup",
        stack: ["React", "Tailwindcss", "Redux"],
        github: "https://github.com/bellatrick/nextjs-landing",
        website: "https://nextjs-landing-zeta.vercel.app/",
      },
    ],
    wordpress: [
      {
        image: learnit,
        description:
          " This is a LMS website where users can buy courses and tutors can register and sell courses at their preferred price",
        stack: ["Wordpress", "Elementor"],
        github: false,
        website: "https://dev-learnitall.pantheonsite.io/",
      },
      {
        image: always,
        description:
          " A dating and social media website where users can socialize and maybe even find their partners",
        stack: ["Wordpress", "Elementor"],
        github: false,
        website: "https://dev-alwaysandforever.pantheonsite.io/",
      },
      {
        image: blog,
        description: " This is a beauty and lifestyle blog",
        stack: ["Wordpress", "Elementor"],
        github: false,
        website: "https://dev-leenasblog.pantheonsite.io/",
      },
      {
        image: greenmart,
        description:
          " This is an ecommerce applications for fruits and veggies. It also allows vendors to register and sell their items",
        stack: ["Wordpress", "Elementor"],
        github: false,
        website: "https://dev-findfood.pantheonsite.io/",
      },
    ],
    webflow: [
      {
        image: luxury,
        description: " A landing page of a luxurious furniture shop",
        stack: ["Webflow", "Figma"],
        github: false,
        website: "https://luxuryfurniture.webflow.io/",
      },
      {
        image: nft,
        description: " NFT landing page",
        stack: ["Webflow", "Figma"],
        github: false,
        website: "https://bellatrixnft.webflow.io/",
      },
      {
        image: lumin,
        description: " A landing page for a skin care brand",
        stack: ["Webflow",'Figma'],
        github: false,
        website: "https://busayosportfolio.webflow.io/",
      },
      {
        image: twitterwebflow,
        description: " Twitter UI clone",
        stack: ["Webflow"],
        github: false,
        website: "https://luxuryfurniture.webflow.io/another",
      },
    ],
  };
  const item= items[tab]
  return (
    <Layout>
      <div className="">
        <div className="flex font-bold justify-between mt-4 sm:justify-start gap-[20px] sm:gap-[80px] mb-[80px]">
          <p
            onClick={() => setTab("react")}
            className={`${
              tab === "react" && "tabitem"
            } hover:-translate-y-1 uppercase p-2 cursor-pointer`}
          >
            React
          </p>
          <p
            onClick={() => setTab("wordpress")}
            className={`${
              tab === "wordpress" && "tabitem"
            } hover:-translate-y-1 uppercase p-2 cursor-pointer`}
          >
            Wordpress
          </p>
          <p
            onClick={() => setTab("webflow")}
            className={`${
              tab === "webflow" && "tabitem"
            } hover:-translate-y-1 uppercase p-2 cursor-pointer`}
          >
            Webflow
          </p>
        </div>
        <div class="wrap relative flex gap-[40px] justify-center sm:justify-start flex-wrap mb-6">
          {item.map((item) => (
            <div className="card flex flex-col w-72 border rounded-lg border-primary">
              <div className="h-[180px] w-full">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="bg-gray-800 flex-1 flex flex-col  relative z-10 rounded-b-lg text-white">
                {" "}
                <div className="p-2 text-sm flex justify-center">
                  <ul className=" list-disc flex flex-wrap gap-x-9 gap-y-2">
                    {item.stack.map((stack, i) => (
                      <li key={i}>{stack}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-2 text-[14px] ">
                  <p>{item.description}</p>
                </div>
                <div className="flex items-end flex-1 align-bottom  justify-between text-xs px-4 mt-2 pb-2">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-primary"
                    >
                      Github
                    </a>
                  )}
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-primary"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Works;
