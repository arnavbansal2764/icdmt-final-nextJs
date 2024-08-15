'use client';
export default function publicationpartner() {
    return (
        <div className='bg-[#F0F8FF] flex justify-center s:p-2 xs:p-2'>
            <div className="lg:w-full lg:mb-0 pt-10 text-center">
                <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                    Publication Partner
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                <p className='text-2xl pt-10 text-bold px-20 text-blue-800 font-bold'>
                    Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published.
                </p>
                <p className='text-2xl pt-10 text-bold px-20 text-blue-800 font-bold'>
                    Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.
                </p>
                <p className='text-3xl font-semibold p-10'>
                    Lecture Notes in Mechanical Engineering - Book series. Published by Springer and indexed by scopus.
                </p>
                <div className='flex flex-col xs:flex-col sm:flex-row justify-center h-1/6 m-10'>
                    <img src='https://icssmt.com/2023/Springer.png' className='rounded-lg h-1/2 my-auto mx-10' />
                    <img src='https://www.universitetam.ru/images/cover_lnme.webp' className='rounded-lg mt-4 mx-10' />
                </div>
                <p className='text-lg pt-2 text-bold font-extralight'>
                    (in communication with)
                </p>

                <div className='flex flex-wrap justify-evenly'>
                    <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                        <a href="https://pubs.aip.org/aip" target='_blank'>
                            <img src='https://th.bing.com/th/id/OIP.BwO8K-2yO0qK6xxDuUcqQQHaDj?w=342&h=168&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='rounded-lg w-1/2 py-5 mx-auto' />
                            <ul className='font-light'>
                                <li className='font-bold text-xl m-4'>AIP Publishing</li>
                                <li>AIP Conference Proceedings</li>
                            </ul>
                        </a>
                    </div>

                    <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-row justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                        <a href="https://link.springer.com/journal/12008" target='_blank'>
                            <p className='font-bold text-xl mx-auto my-4 w-full'>Springer</p>

                            <div className='flex flex-row xs:flex-col sm:flex-row'>
                                <ul className='font-light p-4 my-auto'>
                                    <li>International Journal on Interactive Design and Manufacturing (IJIDeM)</li>
                                    <hr className='bg-[rgb(81,81,84)]/20' style={{ padding: 0.5 }} />
                                    <li>Impact Factor: 2.1 (ESCI & Scopus)</li>
                                </ul>
                                <img src='https://th.bing.com/th/id/OIP.IVjXebxeDEFCnKz7BWl0hwAAAA?rs=1&pid=ImgDetMain' alt='Journal Image' className='rounded-lg w-2/3 h-2/3 my-auto mx-auto p-4' />
                            </div>
                        </a>

                    </div>

                    <div className='w-5/6 xl:w-1/5 lg:w-1/3 m-10 p-5 rounded-lg flex flex-col justify-center hover:scale-105 hover:bg-[#e6f3ff] duration-200'>
                        <img src='https://th.bing.com/th/id/OIP.Xoyt1V7R2DFuADm9Ad41RgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='rounded-lg w-1/2 py-5 mx-auto' />
                        <ul className='font-light'>
                            <li className='font-bold text-xl m-4'>Elsevier</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}