// 2 square meters of...
// Cotton                8.3 kg co2 e 4.15 kg co2 / m^2
// Acrylic Fabric        11.53kg      5.765 kg co2 / m^2
// Linen                 4.5 kg       2.25 kg co2 / m^2
// Nylone                7.31kg       3.655 kg co2 / m^2
// Silk                  7.63 kg      3.815 kg co2 / m^2
// Wool                  13.89 kg     6.945 kg co2 / m^2
// Polyester             6.4kg        3.2 kg co2 / m^2
// How much fabric do we need?
// width is 58 inches
// Shirt Long sleeves: 1.6 meters 
// Half-sleeve: 1.4 meters
// Pants 1.3 meters
// T-shirt: 1.25

/** Represents the carbon footprint of cotton in kg co2 / m^2 */
export const cotton_carbon: fabricType = 4.15;

/** Represents the carbon footprint of acrylic fabric in kg co2 / m^2 */
export const acrylic_fabric_carbon: fabricType = 5.765;

/** Represents the carbon footprint of linen in kg co2 / m^2 */
export const linen_carbon: fabricType = 2.25;

/** Represents the carbon footprint of nylon in kg co2 / m^2 */
export const nylon_carbon: fabricType = 3.655;

/** Represents the carbon footprint of silk in kg co2 / m^2 */
export const silk_carbon: fabricType = 3.815;

/** Represents the carbon footprint of wool in kg co2 / m^2 */
export const wool_carbon: fabricType = 6.945;

/** Represents the carbon footprint of polyester in kg co2 / m^2 */
export const polyester_carbon: fabricType = 3.2;

/** Represents a fabric type and the emissions produced by the fabric
 * in square meters
 */
export type fabricType = 4.15 | 5.765 | 2.25 | 3.655 | 3.815 | 6.945 | 3.2;

/** Represents an article of clothing with the makeup of its fabrics */
export type article = {cotton_area: number, acrylic_fabric_area: number, linen_area: number, 
        nylon_area: number, silk_area: number, wool_area: number, polyester_area: number};

/**
 * Takes in a fabric type's area in square meters and its fabric type and returns the carbon emissions
 * of the product.
 * @param area A number representing the area in sq m that this fabric take sup
 * @param fabric A fabric type's carbon emissions per square meter
 * @returns the carbon emissions of the given product in kg co2
 */
export const partialCarbonProduced = (area: number, fabric: fabricType) : number => {
    return Math.round(area * fabric * 100) / 100;
}

/**
 * Takes in a makeup of an article of clothing and returns the total carbon emissions from the
 * item.
 * @param a The fabric makeup of an article
 * @returns returns the total carbon emissions produced from an article of clothing
 */
export const carbonProduced = (a: article): number => {
    return partialCarbonProduced(a.cotton_area, cotton_carbon) + partialCarbonProduced(a.
            acrylic_fabric_area, acrylic_fabric_carbon) + partialCarbonProduced(a.linen_area, linen_carbon) + partialCarbonProduced(a.nylon_area, nylon_carbon) + partialCarbonProduced(a.silk_area, silk_carbon) + partialCarbonProduced(a.wool_area, wool_carbon) + partialCarbonProduced(a.polyester_area, polyester_carbon);
}
