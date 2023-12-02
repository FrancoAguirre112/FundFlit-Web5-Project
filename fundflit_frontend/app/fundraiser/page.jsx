import Card from "../components/Card";
import { generateItemsArray } from "../../dataUtils";

const Fundraiser = () => {
  const items = generateItemsArray(16);

  return (
    <main className="flex items-center justify-center gap-7 flex-wrap pt-20">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Fundraiser;
