import Card from "./components/Card";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { generateItemsArray } from "../dataUtils";
import FaqSection from "./components/FaqSection";
import Link from "next/link";

export default function Home() {
  const items = generateItemsArray(10);

  return (
    <main>
      <Header />

      {/* Donation section */}
      <div className="relative flex items-center flex-col text-Black">
        <h2 className="sm:mt-[8rem] mt-[4rem] sm:text-[2rem] text-[1.5rem] font-bold ">
          Open <span className=" text-Green">donation</span>
        </h2>

        <label className="flex self-center justify-between items-center sm:px-8 px-5 py-1 sm:mt-16 mt-8 cursor-pointer rounded-[40px] sm:w-[60%] w-[75%] bg-white shadow-lg">
          <input type="text" placeholder="Search..." className=" focus:outline-none sm:text-lg text-base py-3 w-[90%]" />
          <CiSearch className="text-[1.7rem]"/>
        </label>

        {/* search tags */}
        <div className=" flex flex-wrap sm:w-[80%] w-[90%] justify-center sm:gap-7 gap-4 sm:mt-16 sm:mb-24 mt-12 mb-16">
          <span className=" text-Black bg-Green rounded-[40px] border-2 border-Green cursor-pointer px-4 py-1 sm:text-base
  text-sm font-bold">
            All
          </span>
          <span className="search-tag rounded-[40px] "> Children </span>
          <span className="search-tag rounded-[40px] "> Charity </span>
          <span className="search-tag rounded-[40px] "> Animal </span>
          <span className="search-tag rounded-[40px] "> Health </span>
          <span className="search-tag rounded-[40px] "> Education </span>
        </div>

        {/* Donation cards */}
        <div className="flex flex-wrap justify-center items-center gap-10 w-[90%]">
          {items.slice(0, 6).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* post navigation items */}
        <div className="py-8 flex justify-between items-center w-[80%]">
          <div>
            <span>1</span>
          </div>
          <Link href='/fundraiser'>
          <div className="flex items-center hover:underline">
            <span className=" text-Black mr-2 text-lg">See More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none">
              <path
                d="M14.3537 4.35355C14.5489 4.15829 14.5489 3.84171 14.3537 3.64645L11.1717 0.464465C10.9764 0.269203 10.6598 0.269203 10.4646 0.464465C10.2693 0.659727 10.2693 0.97631 10.4646 1.17157L13.293 4L10.4646 6.82843C10.2693 7.02369 10.2693 7.34027 10.4646 7.53553C10.6599 7.7308 10.9764 7.7308 11.1717 7.53553L14.3537 4.35355ZM0.000122114 4.5L14.0001 4.5L14.0001 3.5L0.000122027 3.5L0.000122114 4.5Z"
                fill="#26FF91"
              />
            </svg>
          </div>
          </Link>
        </div>

        {/* Frequently asked questions section */}
        <FaqSection />
      </div>
    </main>
  );
}
