import Navbar from "@/components/navbar";
import React from "react";

function page() {
    const dummyData=[
        {
            id: 1,
        },
        {
            id: 2,
        },{
            id: 3,
        }
    ]
  return (
    <div className="h-screen flex">
      <div className="w-1/5 p-4 rounded-xl">
        <div className=" h-full overflow-y-scroll bg-black text-white p-4 rounded-2xl">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="p-4 m-4 bg-gray-700 rounded shadow-md hover:bg-gray-500">
            Scrollable Content {index + 1}
          </div>
        ))}
        </div>
      </div>
      <div className="w-4/5 h-screen bg-gray-100 p-4 overflow-y-scroll">
      <Navbar />
        <div className="flex flex-wrap gap-4 p-4 mt-20 bg-white m-4 h-[50vh]">
        {
                dummyData?.map((dd: any)=>(
                    <div className="flex flex-wrap w-[15rem] border-2 border-pink-500 rounded-2xl h-[30vh] p-4 m-4">
                        {dd.id}
                    </div>
                ))
            }
        </div>
        <div className="flex flex-wrap gap-4 p-4 bg-white m-4 h-full w-full">
            {
                dummyData?.map((dd: any)=>(
                    <div className="flex flex-wrap w-[22rem] border-2 border-pink-500 rounded-2xl h-[40vh] p-4 m-4">
                        {dd.id}
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default page;
