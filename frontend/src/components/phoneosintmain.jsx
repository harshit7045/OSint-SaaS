import React, { useState } from "react";
import Cookies from "js-cookie";
import SimpleAlert from "./alert";

function Phonesearchcomponent() {
  const [searchResults, setSearchResults] = useState([]);
  const [alertData, setAlertData] = useState({
    severity: "success",
    message: "",
  });

  const PhoneOSintRequest = async () => {
    const phone = document.getElementById("phone_number").value;

    // Validate phone number (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      setAlertData({
        severity: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      return; // Stop further execution if phone number is invalid
    }

    try {
      const response = await fetch(
        `http://${import.meta.env.VITE_BACKEND_IP}:${
          import.meta.env.VITE_BACKEND_PORT
        }/api/phoneosint/phone?phone=${encodeURIComponent(phone)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: Cookies.get("usertoken"),
          },
        }
      );

      if (!response.ok) {
        setAlertData({
          severity: "error",
          message: "Insufficient Balance",
        });
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Phone data", result);
      setSearchResults((prevResults) => [...prevResults, result]);
    } catch (error) {
      console.error("Error in PhoneOSintRequest:", error);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-[70vh] flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Phone Number Search
              </p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="XXXX-XXX-XXXX"
                  id="phone_number"
                  className="form-input w-full flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border-none bg-[#e7edf4] h-14 placeholder:text-[#49719c] p-4 text-base font-normal"
                />
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                onClick={PhoneOSintRequest}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0d7cf2] text-slate-50 text-sm font-bold"
              >
                <span className="truncate">Search</span>
              </button>
            </div>
            <div className="px-4 py-3 w-[80vw] lg:w-auto @container">
              <div className="flex overflow-scroll rounded-xl border border-[#cedbe8] bg-slate-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Number</th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Valid</th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Location</th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Carrier</th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Location</th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Country</th>
                      <th className="px-4 py-3 text-left text-[#0d141c] w-[400px] text-sm font-medium">Line Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((row, index) => (
                      <tr key={index} className="border-t border-[#cedbe8]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d141c] text-sm font-normal">
                          {row.international_format}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal">
                          {row.valid ? "Yes" : "No"}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal">
                          {row.location}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal">
                          {row.carrier}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal">
                          {row.location}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal">
                          {row.country_name}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#49719c] text-sm font-normal">
                          {row.line_type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alertData.message && (
        <SimpleAlert severity={alertData.severity} message={alertData.message} />
      )}
    </div>
  );
}

export default Phonesearchcomponent;
