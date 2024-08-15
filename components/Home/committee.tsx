'use client';
import inderdeep from './static/inderdeep.jpeg'
import profsarbjit from './static/profsarbjitsingh.jpeg'
import shubhamsharma from './static/shubhamsharma.jpg'
import nitin from './static/nitindixit.jpeg'
import rakeshkumar from './static/rakeshkumar.jpg'
import PJ from './static/PJsingh.png'
import pecdirector from './static/pecdirector.jpeg'
import nsjassal from './static/nsjassal.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router';
export function CommitteesHome() {
    
    return (
        <div>
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
                        Chief Patron
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>

                <div className="flex flex-col items-center gap-8">

                    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md lg:w-2/3 w-full transition duration-300 transform hover:shadow-xl ">
                        <Image alt="Chief Patron" className="lg:w-full lg:h-full w-48 h-48 rounded-lg  mb-4 object-cover object-center shadow-2xl" src={pecdirector} />
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Professor Rajesh Kumar Bhatia </h2>
                            <h3 className="text-gray-500 mb-2">Interim Director, PEC Chandigarh</h3>
                        </div>
                    </div>

                </div>
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
                        Co-Patron
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {/* Chief Patron (Centered) */}

                    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md lg:w-2/3 w-full transition duration-300 transform hover:shadow-xl ">
                        <img alt="Chief Patron" className="lg:w-96 lg:h-96 w-48 h-48 rounded-lg  mb-4 object-cover object-center shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-9P_vQmoyBSzLk3Q3hEMu6kbl-zI-J2XVw&s" />
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Professor Shantanu Bhattacharya</h2>
                            <h3 className="text-gray-500 mb-2">Director CSIR-Central Scientific Instruments Organisation (CSIR-CSIO),Chandigarh</h3>
                        </div>
                    </div>
                    {/* Committee Members (In a single column) */}
                </div>

            </div>
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-5 text-gray-900">
                        Chairman
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {/* Chief Patron (Centered) */}
                    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md lg:w-2/3 w-full transition duration-300 transform hover:shadow-xl">
                        <img alt="Chief Patron" className="lg:w-72 lg:h-80 w-48 h-60 rounded-3xl mb-4 object-cover object-center shadow-2xl" src="https://pec.ac.in/sites/default/files/faculty_profile/images/sanjeev_1.jpg" />
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Professor Sanjeev Kumar</h2>
                            <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering, PEC Chandigarh</h3>
                        </div>
                    </div>
                    {/* Committee Members (In a single column) */}
                </div>

            </div>
            <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-5 text-gray-900">
                    Co-Chairman
                </h1>
                <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
            </div>
            <div className="flex flex-wrap justify-center p-10 space-y-10 md:space-x-10 md:space-y-0">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 mb-4 w-full md:w-96 transform hover:shadow-xl">
                    <img alt="Committee Member" className="w-36 h-48 rounded-3xl mb-4 object-cover object-center shadow-2xl" src="https://channeli.in/media/kernel/display_pictures/d25c88cc-f877-43fc-a94b-05f509945a14" />
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">Professor Apurbba K. Sharma</h2>
                        <h3 className="text-gray-500 mb-2">Department of Mechanical and Industrial Engineering, IIT Roorkee</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 mb-4 w-full md:w-96 transform hover:shadow-xl">
                    <Image alt="Committee Member" className="w-36 h-48 rounded-3xl mb-4 object-cover object-center shadow-2xl" src={inderdeep} />
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">Professor Inderdeep Singh</h2>
                        <h3 className="text-gray-500 mb-2">Department of Mechanical and Industrial Engineering, IIT Roorkee</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4  w-full md:w-96 transform hover:shadow-xl">
                    <Image alt="Committee Member" className="w-36 h-48 rounded-3xl mb-4 object-cover object-center shadow-2xl" src={PJ} />
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-gray-900">Professor Perminderjit Singh</h2>
                        <h3 className="text-gray-500 mb-2">Department of Mechanical Engineering PEC, Chandigarh</h3>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-7 text-gray-900">
                            Organizing Committee
                        </h1>
                        <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex flex-wrap -m-2">

                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <Image alt="team" className="w-16 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={profsarbjit} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sarbjit Singh</h2>
                                    <p className="leading-relaxed text-base">Organizing Chair, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=McQfhR4AAAAJ&citpid=7" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. M.P Garg</h2>
                                    <p className="leading-relaxed text-base">Organizing Co-Chair, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/IMG_1096_0.jpeg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Poonam Saini</h2>
                                    <p className="leading-relaxed text-base">Organizing Co-Chair, Department of Computer Science and Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={nsjassal} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Narinder Singh Jassal</h2>
                                    <p className="leading-relaxed text-base">Organizing Co-Chair, Sr. Principal Scientist, CSIR-CSIO, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/Kamal%20pic.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Kamal Kumar</h2>
                                    <p className="leading-relaxed text-base">Organizing Co-Chair, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={shubhamsharma} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Shubham Sharma</h2>
                                    <p className="leading-relaxed text-base">Organizing Co-Chair, Department of Mechanical Engineering, Lebanese American University, Kraytem</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={rakeshkumar} />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Rakesh Kumar Phanden</h2>
                                    <p className="leading-relaxed text-base">Organizing Co-Chair, Associate Professor, Amity University, Noida</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex flex-wrap w-full justify-center"> */}
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqEO63Z1Dhk65vsk7FKyGMEIJSN4tlngbUjQLLCjCA&s" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Viveksheel Rajput</h2>
                                    <p className="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/chander_kant.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Chanderkant Susheel</h2>
                                    <p className="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="container mx-auto">
                            <div className="text-center mb-10">
                                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 pt-7 text-gray-900">
                                    Technical Committee
                                </h1>
                                <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/alakesh.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Alakesh Manna</h2>
                                            <p className="leading-relaxed text-base">Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/sanjay.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sanjay Kumar Mangal</h2>
                                            <p className="leading-relaxed text-base">Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/SSAMIR.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sushant Samir</h2>
                                            <p className="leading-relaxed text-base">Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/drprajapati.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. D R Prajapati</h2>
                                            <p className="leading-relaxed text-base">Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/S_K_Soni.jpg?itok=7AFWan85" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. S K Soni</h2>
                                            <p className="leading-relaxed text-base">Associate Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/rajesh_kanda.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rajesh Kumar Kanda</h2>
                                            <p className="leading-relaxed text-base">Associate Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/rakesh_0.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Rakesh Dang</h2>
                                            <p className="leading-relaxed text-base">Associate Professor</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/sandeep.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Sandeep Salodkar</h2>
                                            <p className="leading-relaxed text-base">Associate Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/tejbir.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Tejbir Kaur</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/Lokesh.jpg?itok=hlQ2hePd" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Lokesh</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/achitanand.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Achitanand Dubey</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/ankit.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Ankit Yadav</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/GURJEET%20SINGH-3.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Gurjeet Singh</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/Photograph.jpg?itok=sOF47TEy" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Harshit Kumar Khandelwal</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0  mr-4" src={nitin} />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Prof. Nitin Dixit</h2>
                                            <p className="leading-relaxed text-base">Assistant Professor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/Jimmy%20Karloopia.png" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Jimmy Karloopia</h2>
                                            <p className="leading-relaxed text-base">Member, Department of Production Engineering, PEC, CHD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                        <img alt="team" className="w-16 h-18 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/mohit-tyagi.jpg" />
                                        <div className="flex-grow">
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mohit Tyagi</h2>
                                            <p className="leading-relaxed text-base">Member, Department of Production Engineering, PEC, CHD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            

        </div>
    );
}
