"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import React, { useState } from "react";

const AddNewCampaign: React.FC = () => {
  const [title, setTitle] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [sendTime, setSendTime] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleSendTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSendTime(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <TopNavbar />
      <div className="flex">
        <Navbar />
        <div className="h-full flex-grow p-8" style={{ marginLeft: "3rem" }}>
          <h1 className="text-2xl font-bold mb-4">Add New Campaign</h1>
          <form onSubmit={handleSubmit}>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="mb-4">
                <label htmlFor="title" className="block font-semibold mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="to" className="block font-semibold mb-2">
                  To:
                </label>
                <input
                  type="text"
                  id="to"
                  value={to}
                  onChange={handleToChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block font-semibold mb-2">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sendTime" className="block font-semibold mb-2">
                  Send Time:
                </label>
                <input
                  type="text"
                  id="sendTime"
                  value={sendTime}
                  onChange={handleSendTimeChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block font-semibold mb-2">
                  Content:
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={handleContentChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddNewCampaign;
