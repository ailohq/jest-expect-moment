# @ailo/jest-expect-moment

Exports a `toEqualMoment(m1: any, m2: Moment)` that can be used in jest tests as `expect.toEqualMoment(m2)`,
so that the test will pass when moment objects are different but pointing to the same datetime.

## Installation

### Jest

Add `@ailo/jest-expect-moment` to your Jest `setupFilesAfterEnv` configuration.

```json
"jest": {
  "setupFilesAfterEnv": ["<rootDir>/node_modules/@ailo/jest-expect-moment/build/main/index.js"]
}
```

### TypeScript

Add a `src/@types/jest-expect-moment.d.ts` file to your project with:

```ts
import "@ailo/jest-expect-moment";
```

## Usage

```ts
import moment from "moment";

it("dates match", () => {
  const m1 = moment("2000-01-01T00:00:00.000Z");
  const m2 = moment("2000-01-01T00:00:00.000Z").utc();

  // As those are different objects [e.g. they have different timezone data]
  // `toEqual` would fail the test
  expect(m1).not.toEqual(m2);

  // Thus you need to use `toEqualMoment` instead
  expect(m1).toEqualMoment(m2);

  // You can also use the asymmetric matcher `expect.toEqualMoment(m)`
  expect({ date: m1 }).toEqual({ date: expect.toEqualMoment(m2) );
});
```

## Development

```sh
yarn
yarn start
```

## Testing

```sh
yarn lint # prettier and eslint
yarn test # unit tests
yarn test:watch # unit tests in watch mode
```

## Releasing

```sh
yarn release # will automatically ask you about version bump, run tests and build, and push new version to git & npm
```
