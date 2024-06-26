interface ProductType {

    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    createdAt: string,
    updatedAt: string

}

interface ProductOnCartType extends ProductType {

    unitsOnCart: number

}