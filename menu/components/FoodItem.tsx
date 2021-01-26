import * as React from 'react'
import {IFoodItem} from '../types'
import {Combined} from "../shared/styles";

type Props = {
    foodItem: IFoodItem
}

const FoodItem: React.FC<Props> = ({foodItem}) => {
    return (
        <Combined>
            <h3>{foodItem.name} <span>{foodItem.price.toFixed(2)}</span></h3>
            <div><small>{foodItem.description}</small></div>
        </Combined>
    )
}

export default FoodItem
