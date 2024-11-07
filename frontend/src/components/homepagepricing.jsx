import React from "react";
import { useNavigate } from "react-router-dom";
function Homepagepricing() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <>
      <div class="flex flex-col justify-center ml-[10vw]">
        <div class="flex flex-col gap-6 px-4 py-10  max-w-[80vw]  ">
          <h1 class="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">
            Ready to get started?
          </h1>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5  px-4 py-3 @3xl:grid-cols-4">
            <div class="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#cedbe8] bg-slate-50 p-6">
              <div class="flex flex-col gap-1">
                <h1 class="text-[#0d141c] text-base font-bold leading-tight">
                  Basic
                </h1>
                <p class="flex items-baseline gap-1 text-[#0d141c]">
                  <span class="text-[#0d141c] text-4xl font-black leading-tight tracking-[-0.033em]">
                    Free
                  </span>
                  <span class="text-[#0d141c] text-base font-bold leading-tight">
                    /month
                  </span>
                </p>
              </div>
              <button onClick={handleClick} class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Sign up for free</span>
              </button>
              <div class="flex flex-col gap-2">
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  100 credits / month
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  Basic data sources
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  Limited search results
                </div>
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#cedbe8] bg-slate-50 p-6">
              <div class="flex flex-col gap-1">
                <h1 class="text-[#0d141c] text-base font-bold leading-tight">
                  Standard
                </h1>
                <p class="flex items-baseline gap-1 text-[#0d141c]">
                  <span class="text-[#0d141c] text-4xl font-black leading-tight tracking-[-0.033em]">
                    $99
                  </span>
                  <span class="text-[#0d141c] text-base font-bold leading-tight">
                    /month
                  </span>
                </p>
              </div>
              <button onClick={handleClick} class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Sign up for free</span>
              </button>
              <div class="flex flex-col gap-2">
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  500 credits / month
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  Advanced data sources
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  Unlimited search results
                </div>
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#cedbe8] bg-slate-50 p-6">
              <div class="flex flex-col gap-1">
                <h1 class="text-[#0d141c] text-base font-bold leading-tight">
                  Pro
                </h1>
                <p class="flex items-baseline gap-1 text-[#0d141c]">
                  <span class="text-[#0d141c] text-4xl font-black leading-tight tracking-[-0.033em]">
                    $299
                  </span>
                  <span class="text-[#0d141c] text-base font-bold leading-tight">
                    /month
                  </span>
                </p>
              </div>
              <button  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Sign up for free</span>
              </button>
              <div class="flex flex-col gap-2">
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  2000 credits / month
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  All data sources
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  All features
                </div>
                <div class="text-[13px] font-normal leading-normal flex gap-3 text-[#0d141c]">
                  <div
                    class="text-[#0d141c]"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                  Unlimited search results
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepagepricing;
