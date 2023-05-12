import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Javascript from "../../assets/javascript.png";
import ReactLogo from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
import Github from "../../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#15171e] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-purple-600">
            Experience
          </p>
          <p className="py-4">
            Essas são as tecnologias que tenho conhecimento.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8 ">
            <img className="w-20 mx-auto " src={HTML} alt="Logo do HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8 ">
            <img className="w-20 mx-auto " src={CSS} alt="Logo do CSS" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8 ">
            <img
              className="w-20 mx-auto "
              src={Javascript}
              alt="Logo do Javascript"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8 ">
            <img
              className="w-20 mx-auto "
              src={ReactLogo}
              alt="Logo do React"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8">
            <img
              className="w-20 mx-auto "
              src={Tailwind}
              alt="Logo do Tailwind"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-8">
            <img className="w-20 mx-auto " src={Github} alt="Logo do Github" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
