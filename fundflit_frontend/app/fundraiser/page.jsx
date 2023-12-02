import Card from "../components/Card"
import { generateItemsArray } from "../../dataUtils";

const Fundraiser = () => {

    const items = generateItemsArray(16)

  return (
    <main className="flex gap-10 flex-wrap ]">
       {items.map((item) => (
         <Card key={item.id} item={item}/>
       ))}
    </main>
  )
}

export default Fundraiser