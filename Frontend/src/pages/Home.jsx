import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import AstroChakra from "../../public/Astroremove.png";
import Footer from "../components/Footer";

const Home = () => {
  const services = [
    {
      title: "Match Making",
      image: "https://images.astroyogi.com/strapicmsprod/assets/Match_Making_bc391776ae.webp",
    },
    {
      title: "Panchang",
      image:
        "https://images.astroyogi.com/strapicmsprod/assets/Panchang_fc2d77df09.webp",
    },
    {
      title: "Tarot Reading",
      image:
        "https://images.astroyogi.com/strapicmsprod/assets/Tarot_Reading_acd90b4873.webp",
    },
    {
      title: "Kundli",
      image:
        "https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2023/12/15125046/Ratan-Tata.jpg",
    },
    {
      title: "Love",
      image:
        "https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2023/09/29172452/Astrological-Tips-to-Improve-Your-Love-Life-1024x683.jpg",
    },
    {
      title: "Numerology",
      image:
        "https://images.astroyogi.com/strapicmsprod/assets/Numerology_15fe287fa3.webp",
    },
    {
      title: "Remedies",
      image:
        "https://ninagryphon.com/cdn/shop/articles/AdobeStock_597660853.jpg?v=1686437236&width=5760",
    },
    {
      title: "Planet Transits",
      image: "https://tse3.mm.bing.net/th/id/OIP.Rq6XQIbwFjeVf8J9EZlhngHaHa?pid=Api&P=0&h=180",
    },
    {
      title: "Vastu",
      image: "https://minottimumbai.com/img/india-private-home01.jpg",
    },
    {
      title: "Zodiac Signs",
      image:
        "https://www.rd.com/wp-content/uploads/2024/07/Your-Guide-to-Zodiac-Signs-Dates-Traits-and-What-They-Mean_GettyImages-1415803183_GettyImages-985464152_ASedit_STAR_FT_3.jpg",
    },
    {
      title: "Festivals",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/001/804/978/original/happy-diwali-indian-temple-on-a-religious-festival-diwali-oil-lamp-animation-with-warm-bokeh-background-free-video.jpg",
    },
    {
      title: "Spirituality",
      image: "https://i.ytimg.com/vi/MrSBkN5wgvw/maxresdefault.jpg",
    },
  ];
  const faqs = [
    {
      question: "What Is Astrology?",
      answer:
        "Astrology is the study of celestial bodies and their influence on human lives based on birth time and planetary positions.",
    },
    {
      question: "How to Calculate Zodiac or Astrology Sign?",
      answer:
        "Your zodiac sign is determined by your birth date. Each sign corresponds to a date range in the zodiac calendar.",
    },
    {
      question: "Are Astrology Predictions True?",
      answer:
        "Astrology is a belief system. Many find predictions helpful and accurate, though results vary based on interpretation and astrologer expertise.",
    },
    {
      question: "How to Consult an Online Astrologer?",
      answer:
        "Choose a trusted astrologer online like me, provide your birth details, and schedule a live chat, phone, or video consultation.",
    },
    {
      question:
        "What are the Benefits of Choosing COSMOTIC?",
      answer:
        "We offer real-time consultations, accurate predictions, personalized remedies, and 24/7 service access.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-[#DCC5B2] flex items-center justify-center select-none">
        <div className="cover flex items-center ">
          <div className="left w-1/2 text-gray-800 p-10">
            <p className="text-xl font-semibold">Astrologer</p>
            <h1 className="text-3xl font-bold">Brijesh Pandey</h1>
            <hr className="my-2 border-2 border-gray-700" />
            <p className="text-sm mb-2">
              Expert in Vedic Astrology – Discover What the Future Holds. Book
              your appointment today for a personalized astrology consultation.
            </p>
            <Link to={"/booking"}>
              <button className="bg-blue-700 px-8 py-2 text-white font-medium rounded-md border hover:bg-black ">
                Book Now
              </button>
            </Link>
          </div>
          <div className="right w-1/2">
            <img
              src={AstroChakra}
              alt="Astro"
              className="ml-10 animate-spin-slow"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl h-screen mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl mt-5 font-bold  text-center">
          Free Astrology Services
        </h1>
        <hr className="mb-10 mt-2 border-2 border-gray-700 w-1/2 m-auto mb-14" />
        <Link to={'/services'}><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 cursor-pointer">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-28 h-28 object-cover rounded-xl mb-3"
              />
              <p className="font-medium text-lg">{service.title}</p>
            </div>
          ))}
        </div></Link>
      </div>
      <div className="h-screen bg-[#DCC5B2] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 pt-5 text-gray-800">
          Testinomials
        </h1>
        <hr className="mb-10 mt-2 border-2 border-gray-700 w-1/2 m-auto" />
        <div className="flex items-center justify-center gap-10 flex-wrap px-10">
          <div className="h-[70vh] w-[25vw] bg-white rounded-lg ">
            <div className="flex items-center gap-2 p-3">
              <h1 className="m-5 bg-red-600 rounded-full h-14 w-14 flex items-center justify-center text-white text-md font-semibold">
                SG
              </h1>
              <p className="font-bold text-lg ">Swastik Gupta</p>
            </div>
            <div className="mx-10">
              <p className="text-base text-gray-700 text-justify">
                Brijesh Pandey astrological insights have been life changing.
                His accurate predictions and practical remedies have helped me
                to navigate the challenges with confidence. I highly recommended
                his services for anyone seeking guidance.
              </p>
            </div>
          </div>
          <div className="h-[70vh] w-[25vw] bg-white rounded-lg">
            <div className="flex items-center gap-2 p-3">
              <h1 className="m-5 bg-red-600 rounded-full h-14 w-14 flex items-center justify-center text-white text-md font-semibold">
                RS
              </h1>
              <p className="font-bold text-lg ">Ridhi Srivastava</p>
            </div>
            <div className="mx-10">
              <p className="text-base text-gray-700 text-justify">
                Every prediction made by Brijesh Ji has turned out to be true.
                Thanks to Brijesh Ji, I was able to make the right decisions at
                the right time, and this helped me to achieve my goals fastly.
              </p>
            </div>
          </div>
          <div className="h-[70vh] w-[25vw] bg-white rounded-lg">
            <div className="flex items-center gap-2 p-3">
              <h1 className="m-5 bg-red-600 rounded-full h-14 w-14 flex items-center justify-center text-white text-md font-semibold">
                VS
              </h1>
              <p className="font-bold text-lg ">Virendra Singh</p>
            </div>
            <div className="mx-10">
              <p className="text-base text-gray-700 text-justify">
                He is not just an astrologer, he is a true life coach. His
                practical solutions and calm guidance gave me strength during a
                tough phase. I am grateful for his support and highly recommend
                his services to anyone in need of astrological guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl h-screen mt-10 mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center mb-12">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 mb-3">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center py-4 px-4 text-left bg-amber-50 hover:bg-amber-100 transition duration-200"
            >
              <span className="text-md sm:text-lg font-medium">
                {faq.question}
              </span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm sm:text-base text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
