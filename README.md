# @ailo/jest-expect-moment

Exports a `toEqualMoment(m1: any, m2: Moment)` that can be used in jest tests as `expect.toEqualMoment(m2)`,
so that the test will pass when moment objects are different but pointing to the same datetime.

## Usage

```ts
import moment from "moment";
import { toEqualMoment } from "@ailo/jest-expect-moment";

expect.extend({
  toEqualMoment,
});

it("dates match", () => {
  const m1 = moment("2000-01-01T00:00:00.000Z");
  const m2 = moment("2000-01-01T00:00:00.000Z").utc();

  // Remember, those are different objects [e.g. they have different timezone data]
  // and `toEqual` will fail jest, even though they point to the same moment in time
  expect(m1).not.toEqual(m2);

  // Thus you need to use `toEqualMoment` instead
  expect(m1).toEqualMoment(m2);

  // You can also use it in `expect.objectContaining()` etc. like this
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
