# InputContent

The content of the item: a string or an array of content parts.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.CompactResponseContent2[]`

```typescript
const value: operations.CompactResponseContent2[] = [
  {
    text: "<value>",
    type: "reasoning_text",
  },
];
```

### `operations.Three[]`

```typescript
const value: operations.Three[] = [
  {
    type: "input_image",
  },
];
```

