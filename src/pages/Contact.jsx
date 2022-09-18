import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/Layout";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [loading, setloading] = useState(false);
  const sendEmail = (e) => {
    setloading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_52ad1gr",
        "template_e36it6c",
        form.current,
        "b7iLV2gkkyawKu3zs"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast("Your message was successfully sent");
          setloading(false);
        },
        (error) => {
          console.log(error.text);
          form.reset();
          toast.error(error.text);
          setloading(false);
        }
      );
  };

  return (
    <Layout>
      <div className="max-w-[800px] mb-[40px]  flex gap-4 mx-auto flex-col gray px-6">
        <div className="">
          <p className="text-primary font-bold text-[30px] mb-4">Let's talk</p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex  w-full gap-6 flex-col"
          >
            <div>
              <label
                className="font-bold text-gray-500 dark:text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border block rounded-md bg-transparent py-2 pl-4 border-primary outline-none max-w-[400px] w-full"
                type="text"
                placeholder="Please enter your name"
                name="from_name"
                required
              />
            </div>
            <div>
              <label
                className="font-bold text-gray-500 dark:text-white"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="border block rounded-md bg-transparent py-2 pl-4 border-primary outline-none max-w-[400px] w-full"
                type="email"
                placeholder="Please enter your email address"
                name="email"
                required
              />
            </div>
            <div className="">
              <label
                className="font-bold text-gray-500 dark:text-white"
                htmlFor="email"
              >
                Message
              </label>
              <textarea
                className="border block rounded-md bg-transparent py-2 pl-4 border-primary outline-none max-w-[400px] w-full"
                type="text"
                placeholder=""
                rows={5}
                name="message"
                required
              />
            </div>
            <div>
              <button
                href="#_"
                className="buttonStyle group max-w-[400px] w-full"
              >
                <span className="buttonAnimate"></span>
                {loading ? (
                  <span className="relative animate-pulse">Sending...</span>
                ) : (
                  <span className="relative">Shoot</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
