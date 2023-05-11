import React from "react";
import { HiArrowNarrowRight, HiArrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#15171e]">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-500 font-semibold">Oi, meu nome é</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Guilherme Souza
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8a95dd]">
          Sou desenvolvedor Full Stack
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] font-medium">
          Sou desenvolvedor full-stack que trabalha em contruir experiencias
          digitais. Atualmente estou focado na construção de aplicações web
          full-stack responsivos
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600">
            Veja os Projetos
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
