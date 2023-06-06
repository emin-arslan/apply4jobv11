import React from "react";

const JobsPage = () => {
  return (
    <div className="w-11/12 xl:w-full lg:w-full md:w-full mt-2 sm:w-full  min-w-[400px]  flex ">
      <div className="w-6/12 xl:w-5/12 lg:w-6/12 md:w-5/12 sm:w-full lg:items-start xl:items-end  flex flex-col items-end">
        <div className="w-9/12 h-10 lg:w-full xl:w-9/12 md:w-full sm:w-full  bg-orange-500 rounded-tl-lg flex items-center text-white font-bold ">
          <span className="ml-2">Karışık iş ilanları</span>
        </div>
        <div className="w-9/12 lg:w-full xl:w-9/12 md:w-full sm:w-full h-[85vh] border overflow-y-scroll">
          <div className="w-full h-auto bg-white  p-[0.4rem]  ">
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
      <div className="w-5/12 xl:w-5/12 md:w-7/12 lg:w-9/12 sm:hidden bg-white rounded-r-lg overflow-y-scroll h-32">
        sad
      </div>
    </div>
  );
};

export default JobsPage;
