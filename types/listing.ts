import type { ImageSourcePropType } from 'react-native'

export type MarketplaceListing = {
    sellerName: string
    sellerLocation: string
    car_model: string
    classification_type: string
    carImageAddress: ImageSourcePropType
    userImageAddress: ImageSourcePropType
    /** Amount in PHP (whole pesos). */
    price: number
}

export type CarListingSummary = {
    id: number
    place: string
    model: string
    /** Amount in PHP (whole pesos). */
    price: number
}
