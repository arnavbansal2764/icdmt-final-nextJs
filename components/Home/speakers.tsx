'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
export default function Speakers() {
    const router = useRouter();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700, 
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],
    };
    return (

        <div className="w-3/4 m-auto pt-8">
            <div className="container  mx-auto flex flex-col mb-10">
                <div className="flex flex-wrap w-full mx-auto">
                    <div className="lg:w-full lg:mb-0 ">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Keynote Speakers
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/akshay_dv.jpeg`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2">Prof. Akshay Dvivedi</p>
                            {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Professor</h3> */}
                            <p className="text-gray-700 mb-4 mt-2 pt-6">Department of Mechanical and Industrial Engineering, IIT Roorkee</p>
                            <a className="mt-4 bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/rahul_vaish.jpeg`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2">Prof. Rahul Vaish</p>
                            {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"> </h3> */}
                            <p className="text-gray-700 pt-6 pb-6 mb-4 ">School of Engineering, IIT Mandi</p>
                            <a className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>
                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/Sunil_pandey.jpeg`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2">Prof. Sunil Pandey</p>
                            {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font sm:pt-6">Professor</h3> */}
                            <p className="text-gray-700 pt-6 pb-6 mb-4">Department of Mechanical Engineering, IIT Delhi</p>
                            <a className="mt-4 bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>
                    </div>

                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/kiran_guleria.png`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2 ">Dr. Kiran Gulia</p>
                            <p className="text-gray-700 mt-8 mb-4">Senior Academic University Of Wolverhampton
                                West Midlands, England, United Kingdom
                            </p>
                            <a className="mt-4 bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>

                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/catalin.png`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2">Dr. Catalin Iulian Pruncu</p>

                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">(In Communication With)
                            </h3>
                            <p className="text-gray-700 mt-2 mb-4">Senior Academic University Of Wolverhampton
                                West Midlands, England, United Kingdom
                            </p>
                            <a className=" bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>

                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/fernando.png`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2 ">Dr. Fernando Fraternali</p>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">(In Communication With)
                            </h3>
                            <p className="text-gray-700 pt-2 mb-4">Department of Civil Engineering, University of Salerno, Italy.

                            </p>
                            <a className=" bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>

                    </div>
                    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center px-4">
                        <div className="h-56 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                            <img src={`/static/images/Speakers/paulo.png`} alt="" className="h-44 w-44 rounded-full" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-semibold mb-2 ">Prof. J. Paulo Davim</p>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">(In Communication With)
                            </h3>
                            <p className="text-gray-700 mb-4 pt-2">University of Aveiro
                                Campus Universitário de Santiago,(PORTUGAL)


                            </p>
                            <a className=" bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
                        </div>

                    </div>
                </Slider>
            </div>
            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center mt-10" onClick={() => { router.push('/speakers') }} target="_blank">View All
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>

    )
}