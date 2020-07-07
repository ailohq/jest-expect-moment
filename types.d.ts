/// <reference types="moment" />
/// <reference types="jest" />

declare namespace jest {
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
