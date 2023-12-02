import { Web5 } from "@web5/api";

const CampaignCreate = () => {
  
  const newDID = async () => {
    try {
      const { web5, did: newDID } = await Web5.connect();
    } catch (error) {
      console.error("Error creating DID:", error);
    }
  };
  return (
    <form className="form">
      {/* Name */}
      <div>
        <label htmlFor="">Name*</label>
        <input type="text" placeholder="John Doe" />
      </div>

      {/* Campaign name */}
      <div>
        <label htmlFor="">Campaign name*</label>
        <input type="text" placeholder="Write a tilte" />
      </div>

      {/* Story */}
      <div className="flex flex-col">
        <label htmlFor="">Story*</label>
        <textarea type="text" rows={6} placeholder="Write your story" />
      </div>

      {/* Goal */}
      <div>
        <label htmlFor="">
          Goal(
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-hyper underline"
            href="https://coinmarketcap.com/currencies/ethereum/"
          >
            ETH
          </a>
          )*
        </label>
        <input inputMode="numeric" placeholder="0.50" />
      </div>

      {/* End Date */}
      <div>
        <label htmlFor="">End date</label>
        <input type="date" />
      </div>

      {/* Campaign image */}
      <div>
        <label htmlFor="">Campaign image*</label>
        <input type="url" placeholder="Place image URL of your campaign" />
      </div>

      {/* Submit */}
      <button type="submit">Submit new campaign</button>
    </form>
  );
};

export default CampaignCreate;
const Create = () => {
  return (
    <div>Create</div>
  )
}

export default Create
