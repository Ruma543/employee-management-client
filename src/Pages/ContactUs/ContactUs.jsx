import { Button } from 'flowbite-react';
import React from 'react';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const contactImg = 'https://i.ibb.co/G5M4C5f/contact.jpg';
const ContactUs = () => {
  return (
    <div className="mt-20">
      {' '}
      <div
        className="mt-6 lg:h-[90vh] lg:w-4/5 w-4/5 mx-auto"
        style={{
          backgroundImage: `url(${contactImg})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="bg-black/80 h-full px-10 py-7 grid gap-5 lg:grid-cols-2 grid-cols-1 mt-10">
          <div>
            <div className="flex flex-col space-y-4">
              <label className=" text-xl text-white font-semibold text-left ">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Room Name.."
                className="w-full  px-4 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className=" text-xl text-white font-semibold text-left ">
                Email
              </label>
              <input
                type="Email"
                name="name"
                placeholder="Enter Your email.."
                className="w-full  px-4 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className=" text-xl text-white font-semibold text-left ">
                Phone No.
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your phone no"
                className="w-full  px-4 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className=" text-xl text-white font-semibold text-left ">
                How can i help you?
              </label>
              <textarea
                className="w-full  px-4 py-2 outline-0"
                placeholder="enter your message"
                name=""
                id=""
                cols="20"
                rows="4"
              ></textarea>
            </div>
            <button className="px-5 py-3 bg-blue-500 text-white text-center my-4 hover:bg-blue-700">
              Send
            </button>
          </div>
          <div>
            <div className="space-y-3">
              <h3 className="text-white border-b-2 w-1/3 py-3">Contact</h3>
              <h3 className="text-white flex gap-3">
                <AiOutlineHome></AiOutlineHome>
                <span>176 W street name, Dhaka, Bangladesh</span>
              </h3>
              <h3 className="text-white flex gap-3">
                <AiOutlinePhone></AiOutlinePhone>
                <span> Telephone: +0088123-4566</span>
              </h3>
              <h3 className="text-white flex gap-3">
                <AiOutlineMail></AiOutlineMail>
                <span>Email: info@catenation.hotel.com</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
