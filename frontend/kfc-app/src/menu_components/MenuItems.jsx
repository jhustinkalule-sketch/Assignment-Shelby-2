import Beverages from "./Beverages"
import Biryani from "./Biryani"
import Box from "./Box"
import Burger from "./Burger"
import Chicken from "./Chicken"
import NewLaunch from "./NewLaunch"
import Rolls from "./Rolls"
import SearchBox from "./SearchBox"
import Snacks from "./Snacks"
import StayHome from "./StayHome"
import styles from "../pages/Menu.module.css"
import chickenBuckets from "../assets/food/menu-chicken.jpg"
import newLaunch from "../assets/food/home-meal-1.jpg"
import chickenRolls from "../assets/food/menu-meal.jpg"
import biryani from "../assets/food/home-bite-3.jpg"
import boxMeals from "../assets/food/menu-bucket.jpg"
import burgers from "../assets/food/home-bite-2.jpg"
import stayHome from "../assets/food/home-meal-2.jpg"
import snacks from "../assets/food/home-bite-4.jpg"
import beverages from "../assets/food/home-meal-4.jpg"

const menuCategories = [
    { title: "CHICKEN BUCKETS", id: "chicken", image: chickenBuckets },
    { title: "NEW LAUNCH", id: "launch", image: newLaunch },
    { title: "CHICKEN ROLLS", id: "rolls", image: chickenRolls },
    { title: "BIRYANI BUCKETS", id: "biryani", image: biryani },
    { title: "BOX MEALS", id: "box", image: boxMeals },
    { title: "BURGERS", id: "burger", image: burgers },
    { title: "STAY HOME SPECIALS", id: "stayhome", image: stayHome },
    { title: "SNACKS", id: "snacks", image: snacks },
    { title: "BEVERAGES", id: "beverage", image: beverages },
]

export const MenuItem= ()=>{

    
  
    

return(
    <div>
        <SearchBox/>
        <nav className={styles.categoryGrid} aria-label="KFC menu categories">
            {menuCategories.map((category) => (
                <a className={styles.categoryLink} href={`#${category.id}`} key={category.id}>
                    <img className={styles.categoryImage} src={category.image} alt={category.title} />
                    <span>{category.title}</span>
                </a>
            ))}
        </nav>
        <Chicken/>
        <NewLaunch/>
        <Rolls/>
        <Biryani/>
        <Box/>
        <Burger/>
        <StayHome/>
        <Snacks/>
        <Beverages/>
    </div>
)

}