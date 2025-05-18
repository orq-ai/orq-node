# Filter

The filter to apply to the search


## Supported Types

### `{ [k: string]: operations.Filter1 }`

```typescript
const value: { [k: string]: operations.Filter1 } = {
  "key": {
    dollarLte: 8966.18,
  },
};
```

### `operations.FilterDollarAnd`

```typescript
const value: operations.FilterDollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarGt: 7889.9,
      },
    },
  ],
};
```

### `operations.FilterDollarOr`

```typescript
const value: operations.FilterDollarOr = {
  dollarOr: [
    {
      "key": {
        dollarNe: "<value>",
      },
    },
  ],
};
```

