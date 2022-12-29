import {countries} from "./countries";

describe('countries',() => {
  it('should contain countries codes', function () {
    const result = countries();
    expect(result).toContain('RU');
  });
})
