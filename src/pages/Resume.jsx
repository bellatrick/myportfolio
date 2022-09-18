import React from "react";
import Layout from "../components/Layout";
import mybitmoji from "../assets/mymoji.png";
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <Layout>
      <div className="flex gap-4">
        <div className="border-l max-w-[800px] flex gap-4 flex-col divide-y divide-400 border-500 gray px-16">
          <div className="flex gap-[40px] items-center">
            <img
              src={mybitmoji}
              alt=""
              className="h-[80px] w-[80px] rounded-full object-cover "
            />
            <p className="text-lg sm:text-2xl text-primary font-bold">
              Samuel Busayo Gloria
            </p>
          </div>
          <div>
            <p className="pt-2 sm:text-lg font-medium ">
              I am a frontend software developer who is passionate about working
              with code, and building smooth and user friendly user interface.
            </p>
          </div>
          <div className="pt-2">
            <h2 className="text-primary text-xl">CORE TECHNOLOGIES</h2>
            <p className="pt-2 text-md font-medium ">
              HTML/CSS/SASS, Javascript(Ecma script), React JS, React Native,
              Redux, Webflow, Wordpress, Figma.
            </p>
          </div>
          <div className="pt-2">
            <h2 className="text-primary text-xl">EXPERIENCE</h2>
            <p className="text-primary font-bold py-2">Anter technologies</p>
            <ul className=" list-disc">
              <li>
                Worked with a team to develop a functional E-commerce website
                using only vanilla javacript and SASS at the frontend, and node
                JS at the back end
              </li>
              <li>
                I built a replica of the 'Who wants to be a millionaire" web
                application using vanilla Javascript
              </li>
              <li>
                I used React Js and commerce JS API to build an ecommerce
                website
              </li>
            </ul>
            <p className="text-primary font-bold py-2">Regnify Solutions</p>
            <ul className=" list-disc ">
              <li>
                Worked on the front end part of a social media application for
                modern churches. I was responsible for building the dashboard
                for uploading media contents and a super admin dashboard that
                gives a bird view of all the applications.
              </li>
              <li>
                I worked with my team to build a dashboard for a healthcare
                company. The application uses AI and machine learning to predict
                occurences in the hospital and analyzes if equipments or
                resources like bed space will be available for incoming patients
              </li>
            </ul>
            <p className="text-primary font-bold py-2">Formplus</p>
            <ul className=" list-disc">
              <li>
                I worked on migrating frontend code written in 1st generation
                angular code and vanilla javascript to react and fully optimized
                the application.
              </li>
            </ul>
            <div className="mb-[100px]">
              <h2 className="text-primary text-xl">PORTFOLIO</h2>
              <p>
                Links to my works can be found{" "}
                <Link
                  className="text-primary font-medium underline"
                  to="/works"
                >
                  here
                </Link>
                .
              </p>
              <p className="mt-2">
                Contact me at:{" "}
                <a
                  href="mailto:busayosamuel2016@gmail.com"
                  target="_blank"
                  className="font-bold text-primary"
                  rel="noreferrer"
                >
                  Busayosamuel2016@gmail.com
                </a>{" "}
                or directly send me a mail{" "}
                <Link
                  className="text-primary font-medium underline"
                  to="/contact"
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
