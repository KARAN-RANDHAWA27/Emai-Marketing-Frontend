import React, { useState } from "react";

const CampaignForm: React.FC = () => {
  const [campaignName, setCampaignName] = useState("");
  const [subject, setSubject] = useState("");

  const handleCampaignNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCampaignName(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="campaignName">Campaign Name:</label>
        <input
          type="text"
          id="campaignName"
          value={campaignName}
          onChange={handleCampaignNameChange}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      {/* Add more fields as needed */}
    </form>
  );
};

export default CampaignForm;
