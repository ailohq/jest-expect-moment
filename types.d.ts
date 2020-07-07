import { Moment } from "moment";
/// <reference types="jest" />

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualMoment(expected: Moment): R;
    }

    interface InverseAsymmetricMatchers {
      toEqualMoment(expected: Moment): any;
    }

    interface Expect {
      toEqualMoment(expected: Moment): any;
    }
  }
}
