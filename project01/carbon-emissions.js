
/** Represents the carbon footprint of cotton in kg co2 / m^2 */
export const cotton_carbon = 4.15;

/** Represents the carbon footprint of acrylic fabric in kg co2 / m^2 */
export const acrylic_fabric_carbon = 5.765;

/** Represents the carbon footprint of linen in kg co2 / m^2 */
export const linen_carbon = 2.25;

/** Represents the carbon footprint of nylon in kg co2 / m^2 */
export const nylon_carbon = 3.655;

/** Represents the carbon footprint of silk in kg co2 / m^2 */
export const silk_carbon = 3.815;

/** Represents the carbon footprint of wool in kg co2 / m^2 */
export const wool_carbon = 6.945;

/** Represents the carbon footprint of polyester in kg co2 / m^2 */
export const polyester_carbon = 3.2;

/**
 * Takes in a fabric type's area in square meters and its fabric type and returns the carbon emissions
 * of the product.
 * @param area A number representing the area in sq m that this fabric take sup
 * @param fabric A fabric type's carbon emissions per square meter
 * @returns the carbon emissions of the given product in kg co2
 */
export const partialCarbonProduced = (area, fabric) => {
    return Math.round(area * fabric * 100) / 100;
}

/**
 * Takes in a makeup of an article of clothing and returns the total carbon emissions from the
 * item.
 * @param a The fabric makeup of an article
 * @returns returns the total carbon emissions produced from an article of clothing
 */
export const carbonProduced = (a) => {
    return partialCarbonProduced(a.cotton_area, cotton_carbon) + partialCarbonProduced(a.
            acrylic_fabric_area, acrylic_fabric_carbon) + partialCarbonProduced(a.linen_area, linen_carbon) + partialCarbonProduced(a.nylon_area, nylon_carbon) + partialCarbonProduced(a.silk_area, silk_carbon) + partialCarbonProduced(a.wool_area, wool_carbon) + partialCarbonProduced(a.polyester_area, polyester_carbon);
}
