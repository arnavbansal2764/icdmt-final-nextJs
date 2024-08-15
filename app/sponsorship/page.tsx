'use client';
import { Table } from "flowbite-react";
import {platinumBenefits,goldBenefits,silverBenefits,bronzeBenefits} from './data'
export default function sponsorship(){
    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
          <section className="text-gray-600 body-font">
            <div className="px-10 mx-auto">
    
              <div className="  mx-auto flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center items-center w-full mb-2">
                  <div className="lg:w-full lg:mb-0 pt-10 text-center">
                    <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                      Sponsorship
                    </h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                  </div>
                </div>
    
                <div className=" sm:pl-8 sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-xl mb-4 text-justify" >ICDMT 2024 offers you a unique and focused way to showcase your service, technology and solutions, explore opportunities to outreach your potential customers and touch base with them. Our Sponsorship packages are provided with a set of special privileges and a clear focus on your promotion during the conference. We are excited to invite you to participate as an exhibitor or sponsor at our upcoming IDCMT 2024 at Punjab Engineering College, Chandigarh, India. We encourage you to take advantage of the enclosed exhibitor and sponsorship opportunities while they last as we have a limited number of exhibitor spaces and they will be filled on a first-come, first-served basis. Becoming a sponsor/exhibitors you will become a part of one of the largest technology conferences in asia pacific, world's largest organization for technology professionals, network with 700+ participants - top officials from India and global tech industry; representatives from Several countries; strong pre/post event media & online coverage; multiple industry/academia partnership opportunities; join our team of 20+ long term industry partners.
                  </p>
    
                </div>
                <div className="container mx-auto">
                  <div className=" mb-10">
                    <div className=" mb-10">
                      <div className="flex flex-wrap justify-center items-center w-full mb-2">
                        <div className="lg:w-full lg:mb-0 pt-10 text-center">
                          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Sponsorship Packages
                          </h1>
                          <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                        </div>
                      </div>
    
                    </div>
    
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table hoverable className="w-full border border-gray-300 rounded-lg ">
                    <Table.Head>
                      <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 sm:py-10 sm:px-20 p-4">Category</Table.HeadCell>
                      <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 sm:py-10 sm:px-20 p-4">Price</Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Platinum</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 10,00,000/-
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Gold</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 7,00,000/-
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Silver</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 5,00,000/- </Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Bronze</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 sm:py-10 sm:px-20 p-4">Rs. 3,00,000/- </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
              <div className=" mb-10">
                <div className="flex flex-wrap justify-center items-center w-full mb-2">
                  <div className="lg:w-full lg:mb-0 pt-10 text-center">
                    <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
                      Sponsorship Benefits
                    </h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                  </div>
                </div>
    
              </div>
              <section className="text-gray-600 body-font overflow-hidden">
                <div className="container mx-auto">
                  <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700 pt-5">PLATINUM</span>
    
                      </div>
                      <div className="md:flex-grow">
                        <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Platinum Sponsorship</h1>
                        <div className="h-1 w-20  bg-indigo-500 rounded mb-8"></div>
                        {platinumBenefits.map((benefit, index) => (
                          <div key={index} className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                            <p className="leading-relaxed">{benefit.description}</p>
                          </div>
                        ))}
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-gray-600 body-font overflow-hidden pt-10">
                <div className="container mx-auto">
                  <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700 pt-5">GOLD</span>
                      </div>
                      <div className="md:flex-grow">
                        <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Gold Sponsorship</h1>
                        <div className="h-1 w-20  bg-indigo-500 rounded mb-4"></div>
                        {goldBenefits.map((benefit, index) => (
                          <div key={index} className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                            <p className="leading-relaxed">{benefit.description}</p>
                          </div>
                        ))}
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-gray-600 body-font overflow-hidden pt-10">
                <div className="container mx-auto">
                  <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700 pt-5">SILVER</span>
                      </div>
                      <div className="md:flex-grow">
                        <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Silver Sponsorship</h1>
                        <div className="h-1 w-20  bg-indigo-500 rounded mb-4"></div>
                        {silverBenefits.map((benefit, index) => (
                          <div key={index} className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                            <p className="leading-relaxed">{benefit.description}</p>
                          </div>
                        ))}
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-gray-600 body-font overflow-hidden pt-10 pb-10">
                <div className="container mx-auto">
                  <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700 pt-5">BRONZE</span>
                      </div>
                      <div className="md:flex-grow">
                        <h1 className="text-2xl font-medium text-gray-900 title-font mb-2">Benefits of Bronze Sponsorship</h1>
                        <div className="h-1 w-20  bg-indigo-500 rounded mb-4"></div>
                        {bronzeBenefits.map((benefit, index) => (
                          <div key={index} className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">{benefit.title}</h2>
                            <p className="leading-relaxed">{benefit.description}</p>
                          </div>
                        ))}
                        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
    
          </section>
        </div>
      )
}