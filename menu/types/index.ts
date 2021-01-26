export interface IFoodItem {
    id: string
    name: string
    description: string
    price: number
    type: string
}

export interface IBeerItem {
    id: string
    name: string
    labels: IBeerLabel
    abv: string
    style: IBeerStyle
}

export interface IBeerLabel {
    medium: string
    icon: string
}


export interface IBeerStyle {
    name: string
    description: string
}
