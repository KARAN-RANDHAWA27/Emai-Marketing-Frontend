"use client"; // Mark this component as a Client Component

import { useState, useEffect } from "react";
import { Databases, Models } from "appwrite"; // Import Models for type definitions
import client from "../../../appwrite"; // Ensure correct Appwrite client path
import TopNavbar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Models.Document[]>([]); // Explicitly define the expected type
  const databases = new Databases(client);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response: Models.DocumentList<Models.Document> =
          await databases.listDocuments(
            "YOUR_DATABASE_ID", // Replace with your database ID
            "YOUR_COLLECTION_ID" // Replace with your collection ID
          );
        setCampaigns(response.documents); // This should now align with the expected type
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns(); // Fetch campaigns on component mount
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <TopNavbar />
      <div className="flex flex-1 flex-row">
        <Navbar />
        <section className="flex-1 p-6" style={{ marginLeft: "3rem" }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Campaigns
          </h2>
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              className="border p-2 rounded-md"
              placeholder="Search campaigns..."
            />

            <div className="flex items-center gap-2">
              <Link href={"/add-campaign"}>
                <button className="bg-blue-500 text-white p-2 rounded-md">
                  Add Campaign
                </button>
              </Link>
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
                <th className="p-2 text-left">Campaign Name</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Audience</th>
                <th className="p-2 text-left">Actions</th>{" "}
                {/* Edit and Delete */}
              </tr>
            </thead>
            <tbody>
              {campaigns.length > 0 ? (
                campaigns.map((campaign) => (
                  <tr key={campaign.$id}>
                    <td className="p-2">{campaign.name}</td>{" "}
                    {/* Campaign name */}
                    <td className="p-2">{campaign.status}</td>{" "}
                    {/* Campaign status */}
                    <td className="p-2">{campaign.audience}</td>{" "}
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
                    Create A New Campaign to Get Started.{" "}
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

export default Campaigns;
