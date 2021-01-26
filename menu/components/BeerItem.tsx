import {IBeerItem} from "../types";
import * as React from "react";
import {Beer, Combined} from "../shared/styles";

type Props = {
    beerItem: IBeerItem
}

const BeerItem: React.FC<Props> = ({beerItem}) => {
    return (
        <Beer>
            <img width="300px" src={beerItem.labels.medium} alt={beerItem.name}/>
            <h4>{beerItem.name}</h4>
            <small>{beerItem.style.name} - {beerItem.abv}% abv</small>
        </Beer>
    )
}

export default BeerItem
