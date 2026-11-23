# CompactResponseContent2

A content part within a message.


## Supported Types

### `operations.TwoText`

```typescript
const value: operations.TwoText = {
  text: "<value>",
  type: "input_text",
};
```

### `operations.OutputText`

```typescript
const value: operations.OutputText = {
  text: "<value>",
  type: "output_text",
};
```

### `operations.ReasoningText`

```typescript
const value: operations.ReasoningText = {
  text: "<value>",
  type: "reasoning_text",
};
```

### `operations.TwoImage`

```typescript
const value: operations.TwoImage = {
  type: "input_image",
};
```

### `operations.TwoFile`

```typescript
const value: operations.TwoFile = {
  type: "input_file",
};
```

