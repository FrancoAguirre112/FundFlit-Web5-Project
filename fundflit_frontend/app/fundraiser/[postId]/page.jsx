import { generateItemsArray } from "../../../dataUtils";

const DetailsPage = ({ params }) => {  

    const getPostId = (id) => {
        const items =  generateItemsArray(16)

         return items[id -1]
    }
 
    const item = getPostId(params.postId)

  return (
    <main>
      <h1> {item.title} </h1>
      <span>{item.numberOfBackers}</span>
      {/* Render details of the post here */}
    </main>
  );
};

export default DetailsPage;
