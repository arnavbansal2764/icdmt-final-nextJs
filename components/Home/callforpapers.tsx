"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tracks from './static/callforpaper.json';

export function CallforpapersHome() {
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
    <div className="container mx-auto flex flex-col">
        <div className="flex flex-wrap w-full mx-auto">
            <div className="lg:w-full lg:mb-0">
                <h1 className="sm:text-6xl text-2xl font-medium title-font mb-2 text-gray-900">
                    Call For Papers
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
        </div>
    </div>
    <div className="pt-10">
        <Slider {...settings}>
            {tracks.tracks.map(track => (
                <div
                    key={track.trackNumber}
                    className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center transform hover:shadow-xl " 
                >
                    <div className="absolute inset-0 z-0">
                        <img
                            src={`${track.imgUrl}`}
                            alt="background"
                            className="object-cover w-full h-full opacity-10 rounded-xl"
                        />
                    </div>
                    <div className="h-5 flex justify-center items-center rounded-t-xl" style={{ backgroundColor: '#1a3e60' }}>
                    </div>
                    <div className="p-4 text-center">
                        <p className="font-semibold mb-2 text-2xl">Track - {track.trackNumber}</p>
                        <h3 className="tracking-widest text-indigo-500 sm:text-3xl text-2xl title-font pt-5 mb-8">{track.title}</h3>
                        <ul className="text-left py-4">
                            {track.topics.map((topic, index) => (
                                <li key={index} className="pt-2">
                                    <a className="sm:text-2xl text-xl">
                                        <div className="flex items-center space-x-3">
                                            <div><img src={`${track.iconUrl}`} alt="icon"/></div>
                                            <div>{topic}</div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    <div className="flex justify-center items-center mt-10 pt-2">
        <a href="/callforpapers" className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl inline-block">
            View All Tracks
        </a>
    </div>
</div>

    );
}
