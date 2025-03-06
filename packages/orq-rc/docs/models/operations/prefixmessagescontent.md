# PrefixMessagesContent

The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.Content2[]`

```typescript
const value: operations.Content2[] = [
  {
    type: "text",
    text: "<value>",
  },
];
```

