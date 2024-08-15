'use client';
import { CommitteesHome } from "@/components/Home/committee";
import faculty from './data.json'
import parth from './images/parth.jpg'
import jatt from './images/jatt.jpeg'
import Jaitavya from './images/Jaitavya Aggarwal.jpeg'
import bhavya from './images/Bhavya.jpeg'
import ar9 from './images/ar9.jpeg'
import profsarbjit from './images/profsarbjitsingh.jpeg'
import Image from "next/image";
export default function committees(){
    return(
        <div className="pt-10">
            <CommitteesHome/>
            <section className="text-gray-600 body-font">
            <div className="container mx-auto">
                <div className="text-center mb-10 pt-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4  text-gray-900">
                        Website Development and Management
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/IMG_1096_0.jpeg" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Poonam Saini</h2>
                                <p className="leading-relaxed text-base">Chairperson, Department of Computer Science Engineering, PEC, CHD</p>
                            </div>
                      </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/Kamal%20pic.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Kamal Kumar</h2>
                                <p className="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <img alt="team" className="w-16 h-18 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/shilpa%20%281%29.png" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Shilpa</h2>
                                <p className="leading-relaxed text-base">Member, Department of Computer Science Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqEO63Z1Dhk65vsk7FKyGMEIJSN4tlngbUjQLLCjCA&s" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Viveksheel</h2>
                                <p className="leading-relaxed text-base">Member, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="text-center mb-10 pt-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4  text-gray-900">
                        Publicity, Advertisement and Sponsorship
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <img alt={`Committee Member `} className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src='https://pec.ac.in/sites/default/files/faculty_profile/images/parminderjit.jpg' />
                    
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Perminderjit Singh</h2>
                                <p className="leading-relaxed text-base">Chairperson, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/rajesh_kanda.jpg" />
                                <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Rajesh Kanda</h2>
                                <p className="leading-relaxed text-base">Co-Chairperson , Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/images/chander_kant.jpg" />
                                <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Chanderkant</h2>
                                <p className="leading-relaxed text-base">Convenor, Department of Mechanical Engineering, PEC, CHD</p>
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
                            <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/Lokesh.jpg?itok=hlQ2hePd" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Lokesh</h2>
                                <p className="leading-relaxed text-base">Member, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="text-center mb-10 pt-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4  text-gray-900">
                        Publications and Liasing with Journals
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={profsarbjit} />
                                
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Sarbjit Singh</h2>
                                <p className="leading-relaxed text-base">Chairperson, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/styles/medium/public/faculty_profile/images/MPGARG.jpg?itok=Kcauczl8" />
                                
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Mohinder Pal Garg</h2>
                                <p className="leading-relaxed text-base">Co-Chairperson, Department of Mechanical Engineering, PEC, CHD</p>
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
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/ankit.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Ankit Yadav</h2>
                                <p className="leading-relaxed text-base">Member, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <img alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src="https://pec.ac.in/sites/default/files/faculty_profile/images/Photograph.jpg" />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dr. Harshit Khandelwal</h2>
                                <p className="leading-relaxed text-base">Member, Department of Mechanical Engineering, PEC, CHD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="text-center mb-10 pt-10">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4  text-gray-900">
                        Students Website Team
                    </h1>
                    <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                </div>
                <div className="flex flex-wrap -m-2">
                   
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full" onClick={()=>{window.open('https://www.linkedin.com/in/arnav-bansal-5716b9220/')}}>
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={ar9} />
                                
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Arnav Bansal</h2>
                                <p className="leading-relaxed text-base">Website Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full" onClick={()=>{}}>
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                        <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={Jaitavya} />
                                
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Jaitavya Aggarwal</h2>
                                <p className="leading-relaxed text-base">Website Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <Image alt="team" className="w-16 h-18 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={jatt} />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Armaan Singh Jhand</h2>
                                <p className="leading-relaxed text-base">Website Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={bhavya} />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Bhavya Pratap Singh</h2>
                                <p className="leading-relaxed text-base">Website Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                            <Image alt="team" className="w-16 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4" src={parth} />
                            <div className="flex-grow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Parth Kushwaha </h2>
                                <p className="leading-relaxed text-base">Website Developer</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <section className="text-gray-600 body-font ">
                <div className="container  mx-auto">
                    <div className="text-center mb-10 pt-10">
                        <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4  text-gray-900">
                            International and National Advisory Committee
                        </h1>
                        <div className="h-1 w-20 mx-auto bg-indigo-500 rounded"></div>
                    </div>
                    <div >


                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    {faculty.faculty.map((item, index) => (
                                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
                                                <div className="flex-grow">
                                                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{item.name}</h2>
                                                    <p className="leading-relaxed text-lg">{item.designation}</p>
                                                    <p className="leading-relaxed text-lg">{item.institute}</p>
                                                </div>
                                            </div>
                                        </div>


                                    ))}
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </section>
        </div>
    )
}