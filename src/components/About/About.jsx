import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#15171e] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="sm:text-right text-4xl font-bold">
                Oi, sou o Guilherme, muito prazer em conhece-lo. <br />
                Por favor dê uma olhada em meu trabalho.
              </p>
            </div>
            <div>
              <p>
                Sou desenvolvedor Front-end, apaixonado pela área de tecnologia,
                já que desde sempre fui interessado em entender como as coisas
                funcionam e pela inovação constante que esse ramo proporciona na
                vida das pessoas. Atualmente estou me graduando no curso de
                Sistemas de Informação da Unimontes, buscando oportunidades para
                pôr em prática todos os meus conhecimentos adquiridos. Possuo
                foco no desenvolvimento com tecnologias como, HTML, CSS,
                Javascript e React, dentre outras tecnologias usadas para o
                desenvolvimento Front-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
