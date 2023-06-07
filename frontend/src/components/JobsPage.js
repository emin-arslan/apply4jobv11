import React, { useRef, useState } from "react";
import "../checkbox.css";
import { ReactComponent as linkedinLogo } from "../assets/location.svg";
const JobsPage = () => {
  const [jobTitle, setJobTitle] = useState(["Karışık"]);
  const onCheckHandle = (e, webSiteName) => {
    let yeniListe = [...jobTitle];
    if (e) {
      yeniListe.push(webSiteName);
      setJobTitle(yeniListe);
    } else {
      const index = yeniListe.indexOf(webSiteName);
      if (index !== -1) {
        yeniListe.splice(index, 1);
      }

      setJobTitle(yeniListe);
    }
  };
  return (
    <div className="w-11/12 mt-5 xl:w-full lg:w-full md:w-full  sm:w-full   flex ">
      <div className="w-5/12 xl:w-5/12 lg:w-6/12 md:w-6/12  sm:w-full lg:items-start  xl:items-end  flex flex-col items-end">
        <div className="w-9/12 h-10 lg:w-full xl:w-9/12 md:w-full space-x-2 sm:w-full  bg-orange-500 rounded-tl-lg flex items-center text-white font-bold ">
          <span className="ml-2 text-sm w-4/12">
            {jobTitle.length === 2 ? jobTitle[1] : "Karışık"} iş ilanları
          </span>
          <div className="  centered-items space-x-4 w-8/12">
            <input
              type="checkbox"
              data-name="linkedin"
              class="checkbox"
              onClick={(e) => onCheckHandle(e.target.checked, "Linkedin")}
            />
            <input
              type="checkbox"
              data-name="freelancer"
              class="checkbox"
              onClick={(e) => onCheckHandle(e.target.checked, "Freelancer")}
            />
            <input
              type="checkbox"
              data-name="indeed"
              class="checkbox"
              onClick={(e) => onCheckHandle(e.target.checked, "Indeed")}
            />
            <input
              type="checkbox"
              data-name="grabjobs"
              class="checkbox"
              onClick={(e) => onCheckHandle(e.target.checked, "Grabjobs")}
            />
          </div>
        </div>
        <div className="w-9/12 lg:w-full xl:w-9/12 md:w-full  sm:w-full h-[85vh] hover:cursor-pointer   border overflow-y-scroll">
          <div className="w-full h-auto bg-white  p-[0.4rem]   ">
            <div className="flex w-full space-x-3">
              <div>
                <img
                  alt="logo"
                  width={56}
                  height={56}
                  src="https://media.licdn.com/dms/image/C4D0BAQFBHAuOKnGDHA/company-logo_100_100/0/1680077314771?e=1694044800&v=beta&t=NrBrgXjah9Tc5HmHS7GA0luvnJ-SbwUMCASD--igDqw"
                />
              </div>
              <div>
                <div className="hover:underline hover:cursor-pointer">
                  {" "}
                  <span className="text-blue-500  text-lg font-semibold">
                    OBSS New Graduates 2023
                  </span>
                </div>
                <div className="min-h-fit">
                  <span className="text-sm">OBSS</span>
                </div>
                <div className="min-h-min">
                  <span className="text-xs text-gray-500">
                    İstanbul, Türkiye (Hybrid)
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-[4.2rem] flex mt-1">
              <div>
                <img
                  alt="logo"
                  width={26}
                  height={26}
                  src="https://media.licdn.com/dms/image/C4D0BAQGY60aBZe-fWA/company-logo_100_100/0/1678868939133?e=1694044800&v=beta&t=qSM9Z8Kt81_VhwgxoFyVjV687zKXENPfgYYu_DFvRgQ"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500">
                  1 mezun burada çalışıyor
                </span>
              </div>
            </div>
            <ul className="text-xs flex space-x-2 ml-[4.2rem] mt-2">
              <li>2 hafta önce</li>
              <li> Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-6/12 xl:w-5/12 md:w-6/12 lg:w-9/12 2xl:8/12  sm:hidden bg-white rounded-r-lg overflow-y-scroll h-32">
        Job details
      </div>
    </div>
  );
};

export default JobsPage;
