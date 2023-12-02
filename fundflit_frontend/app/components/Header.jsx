
const Header = () => {
  return (
    <main className="relative flex justify-center bg-[#d9faf6] items-center w-full sm:h-[50.95rem] h-[30rem] overflow-hidden">
      <div className="relative w-auto sm:-ml-6 -ml-2">
        <div
          style={{
            backgroundImage: `url(./assets/image-1.jpeg)`,
            backgroundSize: "cover",
          }}
          className="z-[1] relative border-2 rounded-full sm:w-[10rem] w-[4rem] sm:h-[10rem] h-[4rem] border-Black sm:-left-8 sm:top-14 -left-4 top-6"></div>
        <img
          src="/assets/header-line3.svg"
          alt=""
          className="relative sm:left-10 sm:top-10 left-4 top-[1.4rem] sm:w-[15rem] w-[6.5rem]"
        />
        <img
          src="assets/header-line2.svg"
          alt=""
          className="relative sm:left-32 sm:-bottom-[2.3rem] left-14 -bottom-[1.3rem] sm:w-[3rem] w-[1.5rem]"
        />
        <div
          style={{
            backgroundImage: `url(/assets/image-3.jpeg)`,
            backgroundSize: "cover",
          }}
          className="z-[1] relative border-2 rounded-full sm:w-[10rem] w-[4rem] sm:h-[10rem] h-[4rem] border-Black sm:left-4 sm:-bottom-6 left-0 -bottom-2"></div>
      </div>

      <div className="z-[2] text-center sm:p-24 py-4 px-2 text-Black font-inter border-2 rounded-sm border-Black sm:w-[40.5rem] w-[40%] bg-white">
        <h1 className=" sm:text-4xl text-md font-bold sm:mt-5 ">
          Give Loves, Spread the Goodness
        </h1>
        <p className="sm:text-xl text-xs sm:mt-8 mt-2 sm:mb-12 mb-4 sm:leading-[2.2rem] leading-[1.3rem]">
          The World first crowdfunding platform that implements Open Data
          technology for more transparent transactions
        </p>
        <button className="text-xs">
          get started
        </button>
      </div>

      <div className="relative w-auto">
        <div
          style={{ backgroundImage: `url(/assets/image-2.jpeg)`, backgroundSize: "cover" }}
          className="z-[1] relative border-2 rounded-full sm:w-[10rem] w-[4rem] sm:h-[10rem] h-[4rem] border-Black sm:-right-24 sm:top-14 -right-9 top-1"></div>
        <img
          src="assets/header-line4.svg"
          alt=""
          className="relative -rotate-90 sm:-right-12 sm:-top-2 -right-4 -top-5 sm:w-[10rem] w-[5rem] "
        />
        <img
          src="assets/header-line4.svg"
          alt=""
          className="relative sm:right-12 sm:bottom-4 right-8 bottom-6 sm:w-[10rem] w-[5rem]"
        />
        <div
          style={{ backgroundImage: `url(/assets/image-4.jpeg)`, backgroundSize: "cover" }}
          className="z-[1] relative border-2 rounded-full sm:w-[10rem] w-[4rem] sm:h-[10rem] h-[4rem] border-Black sm:-right-16 sm:bottom-8 -right-6 bottom-8"></div>
      </div>
    </main>
  );
};

export default Header;
