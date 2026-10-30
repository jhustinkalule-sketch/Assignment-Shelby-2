import SliderData from "../SliderData.json";
import { getFoodImage } from "./foodImages";
import { API_BASE_URL } from "./api";

const localMenuItems = [
  ...SliderData.featured,
  ...SliderData.favorites,
  ...SliderData.quickbites,
];

export const getMenuData = async (type) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/menu/menu?type=${type}`);
    if (!response.ok) {
      throw new Error("Menu API request failed");
    }

    const items = await response.json();
    if (Array.isArray(items) && items.length) {
      return items;
    }
  } catch (error) {
    console.error("Unable to load menu items:", error);
  }

  return localMenuItems
    .filter((item) => item.type === type)
    .filter(
      (item, index, items) =>
        items.findIndex((candidate) => candidate.title === item.title) === index
    )
    .map((item) => ({
      ...item,
      image: getFoodImage(item.title),
      isFallback: true,
    }));
};