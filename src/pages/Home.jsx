import React from "react";
import Layout from "../components/Layout";
import mybitmoji from "../assets/mymoji2.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const socials = [
    { title: "LinkedIn", link: "#" },
    { title: "Github", link: "https://github.com/bellatrick" },
    { title: "Twitter", link: "#" },
  ];
  return (
    <Layout>
      <div className="flex flex-wrap justify-center items-center gap-[50px] sm:mt-8">
        <div className="w-[280px] hover:-rotate-6 transition-all  border-2 rounded-md border-primary p-2 ">
          <img src={mybitmoji} alt="" className="h-full w-full object-cover " />
        </div>
        <div className="max-w-[600px] text-start sm:mt-7">
          <h3 className="text-[30px] mb-4 font-bold ">Meet Busayo</h3>
          <p className="">
            Hello. I'm Samuel Busayo. A front end software developer. I love
            building pixel-perfect and beautiful products for users. I also
            enjoy building websites from scratch and playing around with code
          </p>
          <h3 className="mt-4 mb-1 text-[20px] font-bold">Stack</h3>
          <div className="flex">
            <div className="ml-4">
              <ul className=" list-disc flex flex-wrap gap-x-9 gap-y-2">
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Figma</li>
                <li>Webflow</li>
                <li>Wordpress</li>
              </ul>
            </div>
          </div>
          <div className="flex my-4 gap-4 flex-wrap">
            {socials.map((social) => (
              <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                {social.title}
              </span>
              <span class="relative invisible">{social.title}</span>
            </a>
            ))}
          </div>
          <div className="mt-12 mb-40" onClick={() => navigate("/works")}>
            <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 group">
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Check out my works
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
