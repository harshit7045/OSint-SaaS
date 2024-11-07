import React, { useState } from "react";
import Cookies from "js-cookie";
import SimpleAlert from "./alert";
function Imagesearchcomponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchResults, setSearchResults] = useState([
    
    // Add more items as needed
  ]);
  const [alertData, setAlertData] = useState({
    sevierty: "",
    message: "",
  });
  // Function to handle file change
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    try {
      const response = await fetch(`http://${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}/api/imageosint/upload`, {
        method: "POST",
        body: formData,
      });
       
      if (response.ok) {
        
        const data = await response.json();
        console.log("File uploaded successfully:", data.data);
        setSearchResults(data.data);
      } else {
        console.error("Failed to upload file.");
      }
    } catch (error) {
      
      console.error("Error:", error);
      let message = {
        sevierty: "error",
        message: "Insufficient Balance",
      }
      setAlertData(message);
      console.log(alertData);
    }
  };

  return (
    <div className="relative flex size-full min-h-[70vh] flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Email Search
              </p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input type="file" name="avatar" onChange={handleFileChange} />
                <button type="button" onClick={handleSubmit} className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0d7cf2] text-slate-50 text-sm font-bold">
                  Upload
                </button>
              </label>
            </div>
            <div className="flex flex-col px-4 py-3">
              <h2 className="text-lg font-bold mb-4">Search Results</h2>
              <div className="flex flex-wrap gap-4">
                {searchResults.map((result) => (
                  <a href={result.link} key={result.position} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 border border-gray-300 rounded-md bg-white shadow-sm hover:bg-gray-100">
                    <img src={result.thumbnail} alt={result.title} className="w-16 h-16 mr-4 object-cover rounded" />
                    <div>
                      <h3 className="text-md font-semibold text-blue-600 hover:underline">{result.title}</h3>
                      <p className="text-sm text-gray-500">{result.displayed_link}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimpleAlert severity={alertData.severity} message={alertData.message} />
    </div>
  );
}

export default Imagesearchcomponent;
