// 2 square meters of...
// Cotton                8.3 kg co2 e 4.15 kg co2 / m^2
// Acrylic Fabric        11.53kg      5.765 kg co2 / m^2
// Linen                 4.5 kg       2.25 kg co2 / m^2
// Nylone                7.31kg       3.655 kg co2 / m^2
// Silk                  7.63 kg      3.815 kg co2 / m^2
// Wool                  13.89 kg     6.945 kg co2 / m^2
// Polyester             6.4kg        3.2 kg co2 / m^2
// How much fabric do we need?
// width is 1.4732 meters
// Shirt Long sleeves: 1.6 meters 
// Half-sleeve: 1.4 meters
// Pants 1.3 meters
// T-shirt: 1.25

/** Represents the carbon footprint of cotton in kg co2 / m^2 */
export const cotton_carbon: fabricType = 4.150;

/** Represents the carbon footprint of acrylic fabric in kg co2 / m^2 */
export const acrylic_fabric_carbon: fabricType = 5.765;

/** Represents the carbon footprint of linen in kg co2 / m^2 */
export const linen_carbon: fabricType = 2.250;

/** Represents the carbon footprint of nylon in kg co2 / m^2 */
export const nylon_carbon: fabricType = 3.655;

/** Represents the carbon footprint of silk in kg co2 / m^2 */
export const silk_carbon: fabricType = 3.815;

/** Represents the carbon footprint of wool in kg co2 / m^2 */
export const wool_carbon: fabricType = 6.945;

/** Represents the carbon footprint of polyester in kg co2 / m^2 */
export const polyester_carbon: fabricType = 3.200;

/** Represents the fabric used to make a long-sleeve shirt in sq m */
export const SHIRT: number = 2.3571;

/** Represents the fabric used to make a t-shirt shirt in sq m */
export const TSHIRT: number = 1.8415;

/** Represents the fabric used to make pants in sq m */
export const PANTS: number = 1.9152;

/** Represents a fabric type and the emissions produced by the fabric
 * in square meters
 */
export type fabricType = 4.150 | 5.765 | 2.250 | 3.655 | 3.815 | 6.945 | 3.20;

/** Represents an article of clothing with the makeup of its fabrics */
export type article = {cotton_area: [number, number], 
                       acrylic_fabric_area: [number, number], 
                       linen_area: [number, number], 
                       nylon_area: [number, number], 
                       silk_area: [number, number], 
                       wool_area: [number, number], 
                       polyester_area: [number, number]};

/**
 * Takes in a fabric type's area in square meters and its fabric type and returns the carbon 
 * emissions of the product.
 * @param area A number representing the area in sq m that this fabric take sup
 * @param fabric A fabric type's carbon emissions per square meter
 * @returns the carbon emissions of the given product in kg co2
 */
export const partialCarbonProduced = 
        (area: number, percent: number, fabric: fabricType) : number => {
    if(area < 0 || percent < 0) {
        throw new Error("Area and percent must be > 0");
    }
    return Math.round(area * percent * fabric * 100) / 100;
}

/**
 * Takes in a makeup of an article of clothing and returns the total carbon emissions from the
 * item.
 * @param a The fabric makeup of an article
 * @returns returns the total carbon emissions produced from an article of clothing
 */
export const carbonProduced = (a: article): number => {
    return Math.round(((partialCarbonProduced
        (a.cotton_area[0], a.cotton_area[1], cotton_carbon) + 
        partialCarbonProduced(a.acrylic_fabric_area[0], a.acrylic_fabric_area[1], 
                acrylic_fabric_carbon) + 
        partialCarbonProduced(a.linen_area[0], a.linen_area[1], linen_carbon) +
        partialCarbonProduced(a.nylon_area[0], a.nylon_area[1], nylon_carbon) + 
        partialCarbonProduced(a.silk_area[0], a.silk_area[1], silk_carbon) + 
        partialCarbonProduced(a.wool_area[0], a.wool_area[1], wool_carbon) + 
        partialCarbonProduced(a.polyester_area[0], a.polyester_area[1], polyester_carbon)) * 100)) / 100;
}

/**
 * Gets the square meters of fabric used to create certain articles
 * of clothing.
 * @param input A string representing a shirt, tshirt or pants.
 * @returns the square meters used to make the article of clothing
 */
export const fabricSize = (input: "shirt" | "tshirt" | "pants"): number => {
    if(input === 'shirt') {
        return SHIRT;
    } else if(input === "tshirt") {
        return TSHIRT;
    } else {
        return PANTS;
    }
}
