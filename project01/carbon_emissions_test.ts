import * as assert from 'assert';
import { SHIRT, carbonProduced, cotton_carbon, fabricSize, partialCarbonProduced, TSHIRT, article } from './carbon-emissions';
describe('Carbon emissions', function() {
    it('partial-emissions', function() {
      // testing the partial function expected behavior
      assert.deepStrictEqual(partialCarbonProduced(fabricSize("shirt"), 0.96, cotton_carbon), 9.39);
      assert.deepStrictEqual(partialCarbonProduced(fabricSize("tshirt"), 1, cotton_carbon), 7.64);
    });

    it('Total emissions', function() {
        const champion: article = {
                         cotton_area: [SHIRT, 0.82],
                         acrylic_fabric_area: [SHIRT, 0],
                         linen_area: [SHIRT, 0],
                         nylon_area: [SHIRT, 0],
                         silk_area: [SHIRT, 0],
                         wool_area: [SHIRT, 0],
                         polyester_area: [SHIRT, 0.18]
        };
        const marine: article = {
                         cotton_area: [SHIRT, 0.60],
                         acrylic_fabric_area: [SHIRT, 0],
                         linen_area: [SHIRT, 0],
                         nylon_area: [SHIRT, 0],
                         silk_area: [SHIRT, 0],
                         wool_area: [SHIRT, 0],
                         polyester_area: [SHIRT, 0.40]
        }
        const patagonia: article = {
                         cotton_area: [SHIRT, 0.05],
                         acrylic_fabric_area: [SHIRT, 0],
                         linen_area: [SHIRT, 0],
                         nylon_area: [SHIRT, 0],
                         silk_area: [SHIRT, 0],
                         wool_area: [SHIRT, 0],
                         polyester_area: [SHIRT, 0]
        }
        assert.deepStrictEqual(carbonProduced(champion), 9.38);
        assert.deepStrictEqual(carbonProduced(marine), 8.89)
        assert.deepStrictEqual(carbonProduced(patagonia), 0.49);
    });
  });
  