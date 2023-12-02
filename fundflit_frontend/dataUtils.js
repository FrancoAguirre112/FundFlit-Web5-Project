export const generateItemsArray = (numItems) => {
    const itemsArray = [];
  
    for (let i = 1; i <= numItems; i++) {
      const item = {
        id: i,
        title: `Project ${i} Title`,
        subtitle: `Subtitle for Project ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet.`,
        fullDescription: `Full description for Project ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        image: `https://picsum.photos/200/300?random=${i}`,
        date: new Date().toISOString(),
        numberOfBackers: Math.floor(Math.random() * 1000) + 1,
      };
  
      itemsArray.push(item);
    }
  
    return itemsArray;
  };
  