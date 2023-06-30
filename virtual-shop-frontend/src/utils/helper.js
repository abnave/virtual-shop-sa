import { shopData } from "./dummyData";
export async function getAllItems(setallRestaurantList, setfilteredRestaurantList){
    // const data = await fetch(RESTAURANT_API_URL);
    // const jsonData = await data.json();

    //let result = [];
    //result = jsonData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants;
    //data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
    setallRestaurantList(shopData);
    setfilteredRestaurantList(shopData);
  }


  export function filterData(type, inputText, itemList) {
    if (type === "search")
      return itemList.filter((item) =>
        item["Variant SKU"].includes(inputText) || item["Title"].includes(inputText)
      );
  }