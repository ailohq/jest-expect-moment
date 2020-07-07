import * as moment from "moment";

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualMoment(expected: moment.Moment): R;
    }

    interface InverseAsymmetricMatchers {
      toEqualMoment(expected: moment.Moment): any;
    }

    interface Expect {
      toEqualMoment(expected: moment.Moment): any;
    }
  }
}
