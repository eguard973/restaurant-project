import * as React from 'react'
import {InferGetStaticPropsType} from 'next'
import FoodItem from "../components/FoodItem";
import {IBeerItem, IFoodItem} from "../types";
import BeerItem from "../components/BeerItem";
import {Beers} from "../shared/styles";

const BASE_URL: string = 'http://localhost:3000/food'

export default function IndexPage({
  foodItems, beerItems
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [data, setData] = React.useState({foodItems, beerItems})
    const fetchBeer = async (button) => {
        const req = await fetch('http://localhost:3000/beers');
        const result = await req.json();
        setData({foodItems: data.foodItems, beerItems: result});
        button.remove()
    };

    const handleBeerFetch = (event) => {
        event.preventDefault();
        fetchBeer(event.target);
    };
    return (
        <main>
            <h1>Restaurant Menu</h1>
            <h2>House Specialties</h2>
            <div>
                {data.foodItems.map((foodItem: IFoodItem) => (
                    <FoodItem key={foodItem.id} foodItem={foodItem} />
                ))}
            </div>

            <h2>Drinks</h2>
            <h4>Featuring Dale Brothers Brewery</h4>
            <button onClick={handleBeerFetch}>Click to See Latest Selection</button>
            <Beers>
                {data.beerItems.filter(beerItem => beerItem.labels).map((beerItem: IBeerItem) => (
                    <BeerItem key={beerItem.id} beerItem={beerItem} />
                ))}
            </Beers>
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch(BASE_URL)
    const foodItems: IFoodItem[] = await res.json()
    const beerItems: IBeerItem[] = [];

    return {
        props: {
            foodItems, beerItems
        },
    }
}
