import React from "react";
import Namebar from "../components/Namebar";
import { workitems } from "../workitems";

const Ecomm = () => {
  const index = 2
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="src\assets\footgear\footgear_cover.jpg"
          alt="Interpreter Cover"
        />

        <div className="absolute insert-0 w-full z-20">
          <Namebar next={"/interpreter"} />
        </div>
      </div>

      <div className="w-full  text-[var(--gold)] flex justify-center bg-[#1F1F1E] min-h-dvh">
        <div className="lg:w-[60%] center bg-[var(--black)] px-[20px] md:px-[30px] lg:px-[50px]">
          <div className="fade-in italiana-bold text-[40px] md:text-[60px] mt-[20px] uppercase">
            FootGear : Mobile Application
          </div>
          <div className="text-justify mt-2 raleway">
            This project is a mobile application that improves the online
            shopping experience. Designed as a virtual shopping assistant, this
            app uses the Flutter framework and Snapchat's AR API to deliver
            augmented reality features that is meant to help users engage
            effectively with the products. One of its standout capabilities is
            an advanced foot-size prediction tool, developed using Python,
            OpenCV, and scikit-learn, ensuring a personalized and precise
            shopping journey.
          </div>
          <div>
            <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
              Github Link{" "}
              {
                <img
                  className="w-[10px] h-[10px]"
                  src="src\assets\up-right-arrow.png"
                />
              }
            </div>
          </div>
          <div className="flex gap-2 my-2 raleway-bold">
            Technologies :{" "}
            {workitems[index].tags.map((tag) => (
              <div
                key={tag}
                className=" rounded-lg raleway-bold text-[12px] px-2 py-1 text-[var(--red)] border border-[var(--red)]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div>
            <h1 className="uppercase italiana-bold text-[40px] md:mt-[50px] mt-[30px]">
              Introduction
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway">
            <div className="w-[100%] md:w-[50%] flex justify-center">
              <img
                className="w-[50%] md:w-[100%]"
                src="src\assets\footgear\mock_front.png"
              />
            </div>
            <div className="w-[100%] md:w-[50%] text-justify md:mt-[100px]">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Ecomm;
