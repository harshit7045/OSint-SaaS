import React from "react";

function Homepagefeatures() {
  return (
    <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[80vw] flex-1">
        <div className="flex flex-col gap-6 px-4 py-8 md:gap-10 md:py-10">
          <h1 className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight md:text-[32px] md:leading-tight md:tracking-normal max-w-[720px]">
            Powerful tools for every use case
          </h1>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(180px,2fr))]">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>
                <div>
                  <p className="text-[#0d141c] text-base font-medium leading-normal">
                    {feature.title}
                  </p>
                  <p className="text-[#49719c] text-sm font-normal leading-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Geolocation",
    description: "Find the location of an IP address or domain",
    image: "https://cdn.usegalileo.ai/stability/9466123d-0f73-4bc2-931e-612cc31b784d.png",
  },
  {
    title: "Map Search",
    description: "Find the location of an IP address or domain",
    image: "https://cdn.usegalileo.ai/sdxl10/2ee98de6-7a54-461c-b11c-884fd9c891b5.png",
  },
  {
    title: "Profile Search",
    description: "Find social media profiles by username",
    image: "https://cdn.usegalileo.ai/sdxl10/bfa16242-8d5f-4d32-a9e0-18f1b69ae706.png",
  },
  {
    title: "Website Analysis",
    description: "Get information about a website",
    image: "https://cdn.usegalileo.ai/sdxl10/59640bc8-8035-4db7-b997-1789c5c931ab.png",
  },
  {
    title: "Email Search",
    description: "Find the owner of an email address",
    image: "https://cdn.usegalileo.ai/sdxl10/49a3b53d-38f4-413d-a5ad-eccf54453ffa.png",
  },
  {
    title: "Phone Number Search",
    description: "Find the owner of a phone number",
    image: "https://cdn.usegalileo.ai/stability/3e566205-d1a1-44cc-b1d0-bba1816913bd.png",
  },
  {
    title: "IP Address Search",
    description: "Get information about an IP address",
    image: "https://cdn.usegalileo.ai/replicate/a233e0ce-899b-4f31-8da7-dacde55d99f7.png",
  },
];

export default Homepagefeatures;
