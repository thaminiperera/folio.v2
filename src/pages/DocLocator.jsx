import React, { useEffect } from "react";
import Namebar from "../components/Namebar";
import Footer from "../components/Footer";
import { workitems } from "../workitems";

const DocLocator = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const index = 1;
  return (
    <div>
      <div className="relative w-full h-[200px] raleway text-[20px]">
        <div className="absolute insert-0 w-full z-10 h-[100%] bg-gradient-to-b from-[var(--gold)] to-[var(--black)] opacity-70"></div>
        <img
          className="w-full h-full object-cover absolute z-0"
          src="src\assets\doclocator\doclocator_cover.jpg"
          alt="DocLocator Cover"
        />

        <div className="absolute insert-0 w-full z-20">
          <Namebar next={"/ecomm"} />
        </div>
      </div>

      <div className="w-full  text-[var(--gold)] flex justify-center bg-[#1F1F1E] min-h-dvh mb-[20px] md:mb-[50px] fade-in">
        <div className="lg:w-[60%] center bg-[var(--black)] px-[20px] md:px-[30px] lg:px-[50px]">
          <div className="block italiana-bold text-[40px] md:text-[60px] mt-[20px] uppercase">
            {workitems[index].title}
          </div>
          <div className="text-justify mt-2 raleway block">
            This project was developed during my internship at{" "}
            <a
              href="https://www.archnix.com/"
              className="underline raleway-bold"
            >
              Archnix
            </a>{" "}
            as a solution to bridge the gap between patients and healthcare
            providers. The web application offers an efficient and user-friendly
            platform for locating nearby doctors and requesting on-site
            treatment services.
          </div>
          <div className="flex gap-5 block">
            <a
              target="_blank"
              href="https://github.com/thaminiArchnix/DocLocator"
            >
              <div className="flex items-center gap-2 mt-[30px] md:mt-[50px] raleway-bold underline ">
                Github Link{" "}
                {
                  <img
                    className="w-[10px] h-[10px]"
                    src="src\assets\up-right-arrow.png"
                  />
                }
              </div>{" "}
            </a>
          </div>
          <div className="flex gap-2 my-2 raleway-bold block">
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
            <h1 className="block uppercase italiana-bold text-[30px] md:text-[40px] md:mt-[50px] mt-[30px]">
              Key Components
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full raleway mt-[20px]">
            {/* <div className="w-[100%] md:w-[50%] flex justify-center items-center block">
              <img
                className="w-[100%] md:w-[100%] h-[100px] border border-[var(--gold)]"
                src="src\assets\interpreter\interpreter_shell.png"
              />
            </div> */}
            <div className="w-[100%] md:w-[100%] text-justify block">
              The application, built with React, Node.js, and an SQL database,
              leverages the Google Maps API to provide accurate location
              services. Users can easily find nearby healthcare providers and
              request on-site treatment, streamlining access to medical care. I
              was tasked with for designing and developing the doctor's portal
              of the application
            </div>
          </div>
          <div className="raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px] block ">
            Frontend Features
          </div>
          <div className="raleway text-justify mt-[20px] block">
            The frontend was developed using React and JavaScript, incorporating
            the Google Maps API for location-based functionality.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            User-Specific Portals
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Separate sign-in and login pages for doctors and patients,
                providing a tailored experience for each user group.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Doctor Booking System
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Patients can book doctors based on availability, specialty, and
                location.
              </li>
              <li className="">
                Displays available doctors within a 20km radius using
                location-based calculations.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Interactive Maps
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Integration with the Google Maps API to display patient and
                doctor locations on an interactive map.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Doctor's Dashboard
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Doctors can view pending appointments and manage them
                efficiently, including the ability to cancel appointments.
              </li>
              <li className="">
                Patients are notified of cancellations in real-time.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[30px] text-[20px] mt-[20px] md:mt-[50px]">
            Backend Features
          </div>
          <div className="block raleway text-justify mt-[20px]">
            The backend was built using Node.js, Express, and SQL, providing a
            scalable server-side architecture.
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Backend Architecture
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Built with Node.js and Express, ensuring a scalable framework
                for application logic.
              </li>
              <li className="">
                Utilizes an SQL database for secure and efficient data
                management, with parameterized inputs to prevent SQL injection
                and ensure data integrity.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Efficient Distance Calculation
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Implements the Haversine formula to calculate and filter doctors
                within a 20km radius accurately.
              </li>
            </ul>
          </div>
          <div className="block raleway-bold uppercase md:text-[20px] text-[18px] mt-[20px] md:mt-[30px]">
            Notification System
          </div>
          <div className="raleway text-justify">
            <ul className="block flex flex-col gap-2 list-disc mt-[15px]">
              <li className="">
                Real-time notifications keep patients informed about the status
                of their appointments, enhancing communication and user
                satisfaction.
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocLocator;
