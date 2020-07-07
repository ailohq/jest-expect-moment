# @ailo/jest-expect-moment

Exports a `toEqualMoment(m1: any, m2: Moment)` that can be used in jest tests as `expect.toEqualMoment(m2)`,
so that the test will pass when moment objects are different but pointing to the same datetime.

## Usage

```ts
import { toEqualMoment } from "@ailo/jest-expect-moment";

expect.extend({
  toEqualMoment,
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
