import moment from "moment";
import { toEqualMoment } from "./toEqualMoment";

expect.extend({
  toEqualMoment,
});

describe("toEqualMoment", () => {
  const date = "2020-04-02T22:42:18.804Z";
  const givenMoment = moment(date);
  const matchingMoment = moment(date).utc();

  describe("when toEqual is used for comparing moments", () => {
    it("should fail for two moments that represent same date", () => {
      expect(givenMoment).not.toEqual(matchingMoment);
    });
  });

  describe("when toEqualMoment is used for comparing moments", () => {
    it("should match two moments that represent same date", () => {
      expect(givenMoment).toEqualMoment(matchingMoment);
    });

    it("should match two moments when used within toMatchObject", () => {
      const received = {
        someProp: "someProp",
        date: givenMoment,
      };

      const expected = {
        ...received,
        date: expect.toEqualMoment(matchingMoment),
      };

      expect(received).toMatchObject(expected);
    });

    it("should be negated when used with a 'not'", () => {
      const nonMatchingDate = "2020-05-02T22:42:18.804Z";
      const nonMatchingMoment = moment(nonMatchingDate);

      expect(givenMoment).not.toEqualMoment(nonMatchingMoment);
    });
  });
});
