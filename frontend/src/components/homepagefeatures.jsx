import React from "react";

function Homepagefeatures() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[80vw] flex-1">
        <div className="flex flex-col gap-10 px-4 py-10 @container">
          <h1 className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Powerful tools for every use case
          </h1>
          <div class="grid gap-3 grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,2fr))]">


            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/stability/9466123d-0f73-4bc2-931e-612cc31b784d.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Geolocation
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Find the location of an IP address or domain
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/2ee98de6-7a54-461c-b11c-884fd9c891b5.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Map Search
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Find the location of an IP address or domain
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/bfa16242-8d5f-4d32-a9e0-18f1b69ae706.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Profile Search
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Find social media profiles by username
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/59640bc8-8035-4db7-b997-1789c5c931ab.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Website Analysis
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Get information about a website
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/49a3b53d-38f4-413d-a5ad-eccf54453ffa.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Email Search
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Find the owner of an email address
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/stability/3e566205-d1a1-44cc-b1d0-bba1816913bd.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Phone Number Search
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Find the owner of a phone number
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage: 'url("https://cdn.usegalileo.ai/replicate/a233e0ce-899b-4f31-8da7-dacde55d99f7.png")',
                }}
              ></div>
              <div>
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  IP Address Search
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Get information about an IP address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepagefeatures;
