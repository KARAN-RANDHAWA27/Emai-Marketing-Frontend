"use client";
import { useState, useEffect } from "react";
import { Client, Models } from "appwrite"; // Correct import
import client from "../../../appwrite";
import TopNavbar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacts = () => {
  const [contacts, setContacts] = useState<Models.Document[]>([]);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const response = await users.list();
  //       setContacts(response.users);
  //     } catch (error) {
  //       console.error("Error fetching contacts:", error);
  //     }
  //   };

  //   fetchContacts(); // Fetch contacts on component mount
  // }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
      {/* Flexbox with full height */}
      <TopNavbar /> {/* Top navigation */}
      <div className="flex flex-1 flex-row">
        {/* Sidebar and main content */}
        <Navbar /> {/* Sidebar */}
        <section className="flex-1 p-6" style={{ marginLeft: "3rem" }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Contacts
          </h2>
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              className="border p-2 rounded-md"
              placeholder="Search contacts..."
            />

            <div className="flex items-center gap-2">
              <button className="bg-blue-500 text-white p-2 rounded-md">
                Add Contact
              </button>{" "}
              {/* Add Campaign Button */}
              <button className="bg-gray-500 text-white p-2 rounded-md">
                Filter
              </button>{" "}
              {/* Filter Button */}
            </div>
          </div>

          {/* Table for Displaying Campaigns */}
          <table className="w-full bg-gray-50 text-black border border-gray-200">
            {" "}
            {/* Table structure */}
            <thead>
              <tr>
                <th className="p-2 text-left">Email Address</th>
                <th className="p-2 text-left">First Name</th>
                <th className="p-2 text-left">Last Name</th>
                <th className="p-2 text-left">Address</th>
                <th className="p-2 text-left">Contact No.</th>
                <th className="p-2 text-left">Services</th>
                <th className="p-2 text-left">Created At</th>
                <th className="p-2 text-left">Actions</th>{" "}
                {/* Edit and Delete */}
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.$id}>
                    <td className="p-2">{contact.name}</td>{" "}
                    {/* Campaign name */}
                    <td className="p-2">{contact.status}</td>{" "}
                    {/* Campaign status */}
                    <td className="p-2">{contact.audience}</td>{" "}
                    <td className="p-2">{contact.audience}</td>{" "}
                    <td className="p-2">{contact.audience}</td>{" "}
                    <td className="p-2">{contact.audience}</td>{" "}
                    <td className="p-2">{contact.audience}</td>{" "}
                    {/* Campaign audience */}
                    <td className="p-2">
                      {" "}
                      {/* Action buttons for edit and delete */}
                      <button className="bg-green-500 text-white p-1 rounded-md">
                        Edit
                      </button>{" "}
                      {/* Edit button */}
                      <button className="bg-red-500 text-white p-1 rounded-md ml-2">
                        Delete
                      </button>{" "}
                      {/* Delete button */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {" "}
                  {/* Placeholder row when no data */}
                  <td className="p-2 text-center" colSpan={4}>
                    Create A New Contact to Get Started.{" "}
                    {/* Message for empty table */}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Contacts;
