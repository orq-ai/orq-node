# Criteria

For `noul`, optional descriptions of the `true` and `false` answers. For `choice`, each option mapped to a description or null (at least 2). For `score`, the level descriptions from lowest to highest (at least 2).


## Supported Types

### `{ [k: string]: string }`

```typescript
const value: { [k: string]: string } = {
  "key": "<value>",
};
```

### `string[]`

```typescript
const value: string[] = [
  "<value 1>",
  "<value 2>",
];
```

