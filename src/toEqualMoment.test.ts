import moment from "moment";
import { toEqualMoment } from "./toEqualMoment";

expect.extend({
  toEqualMoment,
});

describe("toEqualMoment", () => {
  const m1 = moment("2000-01-01T00:00:00.000Z");
  const m2 = moment("2000-01-01T00:00:00.000Z").utc();

  describe("when toEqual is used for comparing moments", () => {
    it("should fail for two moments that represent same date", () => {
      expect(m1).not.toEqual(m2);
    });
  });

  describe("when toEqualMoment is used for comparing moments", () => {
    it("should match two moments that represent same date", () => {
      expect(m1).toEqualMoment(m2);
    });

    it("should match two moments when used within toMatchObject", () => {
      const received = {
        someProp: "someProp",
        date: m1,
      };

      const expected = {
        ...received,
        date: expect.toEqualMoment(m2),
      };

      expect(received).toMatchObject(expected);
    });

    it("should be negated when used with a 'not'", () => {
      const nonMatchingDate = "2020-05-02T22:42:18.804Z";
      const nonMatchingMoment = moment(nonMatchingDate);

      expect(m1).not.toEqualMoment(nonMatchingMoment);
    });
  });
});
