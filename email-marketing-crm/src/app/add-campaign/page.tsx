"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names: string[] = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: string[], theme: any) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddNewCampaign: React.FC = () => {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    setSelectedValues(value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex flex-col h-screen">
      <TopNavbar />
      <div className="flex flex-1 flex-row">
        <Navbar />
        <section
          className="flex-1 p-6"
          style={{ marginLeft: "3rem", height: "80%" }}
        >
          <form className="w-8/12 m-auto p6" onSubmit={handleSubmit}>
            <div className="bg-white shadow-md shadow-[rgba(4,4,4,.72)] rounded-lg p-4 mb-4">
              <h1 className="flex justify-center text-2xl font-bold mb-4">
                Add New Campaign
              </h1>
              <hr />
              <div className="mb-4 mt-3">
                <label
                  htmlFor="title"
                  className="block font-semibold mb-2 text-black"
                >
                  Title:
                </label>

                <TextField
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  label="Name your Campaign"
                  variant="outlined"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  sx={{
                    width: "100%",
                  }}
                  required
                />
              </div>
              <div>
                <label
                  className="block font-semibold mb-2 text-black"
                  htmlFor="to"
                >
                  To:
                </label>
                <Select
                  id="to"
                  label="Select the list to send mail"
                  variant="outlined"
                  multiple
                  value={selectedValues}
                  onChange={handleChange}
                  sx={{
                    width: "100%",
                    marginBottom: "15px",
                  }}
                  required
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="from"
                  className="block font-semibold mb-2 text-black"
                >
                  From:
                </label>
                <TextField
                  id="from"
                  value={from}
                  onChange={handleToChange}
                  label="Sender"
                  variant="outlined"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  sx={{
                    width: "100%",
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block font-semibold mb-2 text-black"
                >
                  Subject:
                </label>
                <TextField
                  id="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  label="Subject of your campaign"
                  variant="outlined"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  sx={{
                    width: "100%",
                  }}
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
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddNewCampaign;
