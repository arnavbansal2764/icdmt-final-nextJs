'use client';
import "./style.css"
import { ChevronRight } from 'lucide-react';
import { itemsTrack1, itemsTrack2, itemsTrack3, itemsTrack4, itemsTrack5, itemsTrack6, itemsTrack7 } from './data'
export default function Callforpapers() {
    const openGoogleDocs = () => {
        window.open('https://docs.google.com/document/d/1IlEeKji912TytiTfhNk2ZHoh0DCq8Iwo/edit?usp=sharing&ouid=111443267578785456162&rtpof=true&sd=true', '_blank');
    };
    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <section className="text-gray-600 body-font">
                <div className="container  mx-auto">
                    <div className="px-5 py-5 mx-auto flex flex-col items-center justify-center">
                        <div className="flex flex-wrap w-full mb-4">
                            <div className="lg:w-full lg:mb-0 pt-10 text-center">
                                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Call For Papers
                                </h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <section className="text-gray-600 body-font">
                            <div className="container py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 1 Materials</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack1.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 2 Composites</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack2.map((item, index) => (
                                                <a key={index}>
                                                    <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>{item}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 3 Design</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack3.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font">
                            <div className="container py-1 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 4 Manufacturing Techniques</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack4.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Track 5 Robotics</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack5.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="text-gray-600 body-font ">
                            <div className="container  py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-left">Track 6 Mechatronics and Automation</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack6.map((item, index) => (
                                                <a key={index}>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                    <path d="M20 6L9 17l-5-5"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-4 lg:w-1/2 sm:w-1/2 w-full">
                                        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-left">Track 7 Sustainable Circular Bio Economy</h2>
                                        <nav className="flex flex-col items-start text-left -mb-1 space-y-2.5">
                                            {itemsTrack7.map((item, index) => (
                                                <a key={index} >
                                                    <div className="flex items-center space-x-3">
                                                        <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                                <path d="M20 6L9 17l-5-5"></path>
                                                            </svg>
                                                        </span>
                                                        <div>{item}</div>
                                                    </div>
                                                </a>

                                            ))}
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <div className="text-center pb-5 px-10">
                <div className="px-5 py-5 mx-auto flex flex-col items-center justify-center">
                    <div className="flex flex-wrap w-full mb-4">
                        <div className="lg:w-full lg:mb-0 pt-10 text-center">
                            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Paper Submission
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                        </div>
                    </div>
                </div>
                <div className=" leading-relaxed lg:w-3/4 mx-auto text-left sm:text-2xl text-xl">
                <ul>
            <li className="flex items-start space-x-2 py-3">
                <ChevronRight className="w-5 h-5 mt-1" />
                <span>Authors must strictly follow the manuscript preparation guidelines.</span>
            </li>

            <li className="flex items-start space-x-2 py-3">
                <ChevronRight className="w-5 h-5 mt-1" />
                <span>Access the MS Word Template and a Sample Paper for reference on the conference website.</span>
            </li>

            <li className="flex items-start space-x-2 py-3">
                <ChevronRight className="w-5 h-5 mt-1" />
                <span>Manuscript submissions should be made through the Microsoft CMT online system.</span>
            </li>

            <li className="flex items-start space-x-2 py-3">
                <ChevronRight className="w-5 h-5 mt-1" />
                <span>
                    All submitted manuscripts will undergo:
                    <ul className="ml-10">
                        <li className="flex items-start space-x-2 py-3">
                            <ChevronRight className="w-4 h-4 mt-1" />
                            <span>A peer-review process</span>
                        </li>
                        <li className="flex items-start space-x-2 py-3">
                            <ChevronRight className="w-4 h-4 mt-1" />
                            <span>Mandatory plagiarism screening for publication eligibility</span>
                        </li>
                    </ul>
                </span>
            </li>

            <li className="pt-2">
                <a>
                    <div className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 mt-1" />
                        <span>Accepted papers, following peer review, will be published as a standalone proceeding by a Scopus Indexed publication.</span>
                    </div>
                </a>
            </li>
        </ul>
                    <div className="flex flex-col items-center mt-4 space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-20">
                        <button className="botao" onClick={openGoogleDocs}>
                            <svg
                                className="mysvg"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="24px"
                                width="24px"
                            >
                                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    id="SVGRepo_tracerCarrier"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Interface / Download">
                                        <path
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            stroke="#f1f1f1"
                                            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                            id="Vector"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            <span className="texto">Download Template</span>
                        </button>
                        <a
                            href="https://cmt3.research.microsoft.com/docs/help/pdfs/small_conference_guide.pdf" target="_blank"
                            className="inline-block px-3 py-2 mb-2 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white" style={{ backgroundColor: '#818589' }}
                        >
                            Guide for Authors
                        </a>
                        <a
                            href="https://cmt3.research.microsoft.com/ICDMT2024/Submission/Index" target="_blank"
                            className="inline-block px-3 py-2 mb-2 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            Submit Abstract/Paper
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
