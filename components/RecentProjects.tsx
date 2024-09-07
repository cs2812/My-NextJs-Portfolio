"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./Ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">
          recent projects
</span>
      </h1>
      {/* Projects section */}
      <div
        className="flex flex-wrap 
      items-center justify-center 
      p-4 gap-x-24 gap-y-8 mt-10"
      >
        {/* Project list */}
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] 
            lg:min-h-[32.5rem] flex items-center 
            justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div
                className="relative flex 
              items-center justify-center 
              sm:w-[570px] w-[80vw] overflow-hidden  
              sm:h-[40vh] h-[30vh] mb-10"
              >
                {/* background shadow image */}
                <div
                  className="relative w-full
                   h-full overflow-hidden 
                   lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>

                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>
              {/*  line-clamp-1:- prevent to expend in two line */}
              <h1
                className="font-bold lg:text-2xl 
              md:text-xl text-base line-clamp-1"
              >
                {item.title}
              </h1>
              {/* line-clamp-2:- to expend in two line */}
              <p
                className="lg:text-xl lg:font-normal 
                font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              {/* Project Tech stack icons */}
              <div
                className="flex items-center 
              justify-between mt-7 mb-3"
              >
                {/* project icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2]
                       rounded-full bg-black lg:w-10 
                       lg:h-10 w-8 h-8 flex justify-center
                        items-center"
                      // style to make all icon one on top of another
                      style={{
                        transform: `
                        translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                {/* live link */}
                <div
                  className="flex justify-center 
                items-center"
                >
                  <p
                    className="flex lg:text-xl 
                  md:text-xs text-sm text-purple"
                  >
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
