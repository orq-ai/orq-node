# CreateAnnotationValue

The feedback value. For single-select, provide a string or single-element array. For multi-select, provide an array of strings. For range evaluations, provide a number. For text/correction, provide a string.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `number`

```typescript
const value: number = 1284.03;
```

### `string[]`

```typescript
const value: string[] = [
  "<value 1>",
  "<value 2>",
];
```

