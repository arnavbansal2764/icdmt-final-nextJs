'use client';
import Marquee from "react-fast-marquee";
import Image from "next/image";
import AboutUsHome from "@/components/Home/aboutus";
import Speakers from "@/components/Home/speakers";
import { CallforpapersHome } from "@/components/Home/callforpapers";
import { RegistrationHome } from "@/components/Home/registration";
import { CommitteesHome } from "@/components/Home/committee";
import { ContactUsHome } from "@/components/Home/contactus";
export default function Home() {
  const openGoogleDocs = () => {
    window.open('https://drive.google.com/file/d/1VjjyNuUkNm36X0_61_KSOKQrcNEH_6hY/view', '_blank');
  };
  const openTemplate = () => {
    window.open('https://docs.google.com/document/d/1IlEeKji912TytiTfhNk2ZHoh0DCq8Iwo/edit?usp=sharing&ouid=111443267578785456162&rtpof=true&sd=true', '_blank');
  };
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const marquee = e.currentTarget as HTMLElement;
    marquee.style.animationPlayState = "paused";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    const marquee = e.currentTarget as HTMLElement;
    marquee.style.animationPlayState = "running";
  };
  return (

    <div className="mx-auto" style={{ backgroundColor: '#F0F8FF' }}>
      <section className="text-gray-600 body-font" >

        <div className="relative overflow-hidden rounded-xl ">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
            <Image
              src="https://ieeeindiscon.org/assets/images/college/chowk.jpeg"
              alt="background"
              layout="fill"
              objectFit="cover"
              className="opacity-15 rounded-xl"
            />
          </div>
          <Marquee className="text-red-500 p-4">
            <i className="fa-solid fa-bullhorn px-4 "></i><a onClick={openGoogleDocs} className="text-2xl"> Click here to download brochure</a>
            <i className="fa-solid fa-bullhorn px-4  "></i><p className="text-2xl">Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published.</p>

          </Marquee>

          <div className="container mx-auto font-serif">
            <div className="flex flex-wrap w-full mb-2 flex-col items-center text-center">
              <div className="rounded-box lg:p-3 rounded w-full">
                <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">
                  <span className="text-red-500">I</span>nternational <span className="text-red-500">C</span>onference on <span className="text-red-500">D</span>esign and <span className="text-red-500">M</span>anufacturing <span className="text-red-500">T</span>echnologies
                </h1>
                <p className="sm:text-3xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Design, Develop and Manufacture</p>
                <p className="sm:text-3xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Organized by</p>

                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Department of Mechanical Engineering
                </h1>
                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold">
                  Punjab Engineering College (Deemed to be University), Chandigarh
                </h1>
                <p className="sm:text-2xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Funded by Chandigarh Administration (Govt. of India)</p>
                <h1 className="pt-3 sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                  In Collaboration With
                </h1>
                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Design Innovation Center
                </h1>
                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold ">
                  Indian Institute of Technology, Roorkee
                </h1>
                <h1 className="pt-3 sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                  &
                </h1>
                <h1 className="pt-3 sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Central Scientific Instruments Organisation (CSIO)
                </h1>
                <h1 className="pt-3 sm:text-4xl text-xl title-font mb-2 text-blue-900 font-bold ">
                  Council of Scientific & Industrial Research (CSIR)
                </h1>
                <p className="sm:text-2xl text-center mx-auto text-xl italic lg:w-1/2 w-full leading-relaxed mt-5">Funded by MHRD (Govt. of India)</p>
                <h1 className="sm:text-5xl text-2xl pt-4  title-font mb-2 text-red-500 font-bold">
                  November 8-10, 2024
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font pb-8">
        <div className="container mx-auto pt-4 lg:flex lg:items-start lg:justify-center lg:space-x-16">
          <div className="lg:flex-1 lg:max-w-1/2">
            <div className="pt-10 lg:pt-10 w-full">
              <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900 text-center lg:text-left">
                About ICDMT-2024
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
              <p className="text-xl text-left mt-4">
                The goal of the International Conference on Design and Manufacturing Technologies (ICDMT-2024), scheduled from November 8-10, 2024, is to bring together experts and practitioners from diverse fields of mechanical engineering ranging from design to manufacturing, with a focus on advanced materials, to share their thoughts on the latest developments in this sector. It aims to foster innovation and collaboration within these fields and bring together different perspectives to provide a comprehensive view of product design, process design, and analysis, as well as to create and manufacture goods. The conference will feature research tracks including <a className="text-indigo-500" href="/callforpapers" target="_blank" rel="noopener noreferrer">Materials, Composites, Biomaterials, Design, Manufacturing Technologies, Robotics, Mechatronics and Automation, and Rail Vehicle Dynamics.</a>
              </p>
            </div>
          </div>
          <div className="lg:flex-1 lg:max-w-lg flex items-center justify-center mt-10 lg:mt-0 h-80 lg:pt-20 ">
            <div className="w-full lg:max-w-md bg-gray-200 shadow-md h-80 ">
              <div className="pt-4 bg-gray-900 rounded-t-2xl">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white text-center lg:text-center">
                  Important Updates
                </h1>
                <div className="flex justify-center">
                  <div className="h-1 w-20 bg-indigo-500 rounded mx-auto lg:mx-0"></div>
                </div>
              </div>

              <div className="h-full w-full shadow-xl rounded-b-2xl p-4" style={{ backgroundColor: '#72A0C1' }}>

                <div
                  className="h-full w-full overflow-hidden"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <div
                    className="text-xl text-white h-full flex flex-col justify-start items-start py-4 px-2"
                    style={{ animation: "scroll-up 10s linear infinite" }}
                  >
                    <div
                      className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl"
                      style={{ backgroundColor: "#2a52be" }}
                    >
                      <i className="fa-solid fa-bullhorn px-3"></i>
                      <a onClick={() => openGoogleDocs()}>
                        <button>Download Conference Brochure</button>
                      </a>
                    </div>
                    <div
                      className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl"
                      style={{ backgroundColor: "#2a52be" }}
                    >
                      <i className="fa-solid fa-bullhorn px-3"></i>
                      <a onClick={() => openTemplate()}>
                        <button>View Paper Template</button>
                      </a>
                    </div>
                    <div
                      className="mb-6 bg-indigo-500 rounded-xl w-full py-2 px-4 shadow-xl"
                      style={{ backgroundColor: "#2a52be" }}
                    >
                      <i className="fa-solid fa-bullhorn px-3"></i>
                      <a href="/sponsorship">
                        <button>View Sponsor Packages</button>
                      </a>
                    </div>
                  </div>
                  <style jsx>{`
        @keyframes scroll-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-100%);
          }
        }
      `}</style>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <AboutUsHome />
      <Speakers />
      <CallforpapersHome/>
      <RegistrationHome/>
      <CommitteesHome/>
      <div className="flex justify-center items-center mt-10 pt-2">
                <a href="/committees" className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl inline-block mb-5">
                    View All Committees
                </a>
            </div>
      <ContactUsHome/>
    </div>
  );
}
