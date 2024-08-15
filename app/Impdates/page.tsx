import './style.css'

export default function Impdates() {

  return (
    <div style={{ backgroundColor: '#F0F8FF' }} className="pt-10">
      <div className="container  mx-auto flex flex-col">
        <div className="flex flex-wrap w-full mb-4 mx-auto">
          <div className="lg:w-full lg:mb-0 ">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
              Important Dates
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-timeline">
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th August</span>
                    <div className="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                    </div>
                    <div className="content">
                      <h3 className="title">Abstract/Paper Submission</h3>
                      <p className="description hidden md:block">
                        Submit your completed research paper for peer review and potential publication in academic journals or conference proceedings. View more about the tracks and paper submission process here.
                      </p>
                      <a className="text-indigo-500 inline-flex items-center pb-12  " href="/callforpapers">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th September</span>
                    <div className="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg>
                    </div>
                    <div className="content">
                      <h3 className="title pl-10">Notification of Acceptance</h3>
                      <p className="description hidden md:block pl-10">
                        Participants will recieve a formal notice confirming approval after submitting a paper for any track. View more about the tracks and paper submission process here.
                      </p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 pl-10 " href="/callforpapers">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">30th September</span>
                    <div className="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div className="content">
                      <h3 className="title">Submission of Camera-Ready Paper</h3>
                      <p className="description hidden md:block">
                        Authors for ICDMT 2024 finalize their papers according to conference guidelines. This ensures accepted papers are ready for publication in proceedings, maintaining quality standards.</p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 " href="/callforpapers" >
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>

                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th September</span>
                    <div className="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-id-card"><path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
                    </div>
                    <div className="content">
                      <h3 className="title pl-10">Registration Commences</h3>
                      <p className="description hidden md:block pl-10" >
                        The opening of registration for ICDMT 2024, allowing participants to enroll for the conference. Attendees can secure their spots, access event details, and plan their participation in advance.</p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 pl-10 " href="/registration">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <span className="timeline-year">15th October</span>
                    <div className="timeline-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                    </div>
                    <div className="content">
                      <h3 className="title">Last Date of Online Registration</h3>
                      <p className="description hidden md:block">
                        The final deadline for participants to register for ICDMT 2024. After this date, registration closes, and attendees cannot enroll for the conference. It's crucial to complete registration before this deadline to ensure participation.</p>
                      <a className="text-indigo-500 inline-flex items-center pb-12 " href="/registration">
                        Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </a>
                </div>
                {/* <div className="timeline">
          <a   className="timeline-content">
            <span className="timeline-year">2017</span>
            <div className="timeline-icon">
              <i className="fa fa-apple" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Laravel</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div> */}
                {/* <div className="timeline">
          <a   className="timeline-content">
            <span className="timeline-year">2017</span>
            <div className="timeline-icon">
              <i className="fa fa-edit" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3 className="title">Creapure</h3>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4 flex-wrap">
        <a href="/callforpapers" className="inline-block px-3 py-2 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
          Call for Papers
        </a>
        <a href="/impdates" className="inline-block px-3 py-2 mb-2 mr-4 ml-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
          View All Dates
        </a>
        <a href="/callforpapers" className="inline-block px-3 py-2 mb-2 ml-4 mr-4 text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white">
          Submit Abstract/Paper
        </a>
      </div>

    </div>

  )
}
