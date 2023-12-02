import Link from "next/link";

const Card = ({item}) => {
  return (
      <main key={item.id} className="sm:w-[30%] w-[85%] h-[27.5rem] bg-white rounded-lg text-Black shadow">
      <div
        className="w-full h-[13.2rem] rounded-tr-md rounded-tl-md"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
        }}></div>

      <div className="py-4 px-6">
        <div className="flex justify-between items-center w-full">
          <small>{item.date}</small>
          <small className="text-Green font-bold">{item.numberOfBackers} Donated</small>
        </div>

        <h3 className=" font-bold text-xl mt-2">{item.title}</h3>
        
        <p className="text-[#7B7D8C] mt-4 mb-6 font-normal text-base leading-6 line-clamp-2">
          {item.subtitle}
        </p>

        <div className="flex justify-between relative items-center gap-1">
          <div className="relative flex justify-center items-center cursor-pointer border-Green border-2 rounded w-[15%]">
            <img src="/assets/save-icon.svg" alt="" className="m-[.3rem] hover:m-[6px] w-7 "/>
          </div>
          <div className="w-[80%]">
          <Link href={`/fundraiser/${item.id}`}>
            <button className="card-button">Donate</button>
          </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
