# Parts


## Supported Types

### `operations.PartsTextPart`

```typescript
const value: operations.PartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.DataPart`

```typescript
const value: operations.DataPart = {
  kind: "data",
  data: {},
};
```

### `operations.PartsFilePart`

```typescript
const value: operations.PartsFilePart = {
  kind: "file",
  file: {
    uri: "https://grim-markup.com/",
  },
};
```

### `operations.ToolCallPart`

```typescript
const value: operations.ToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.PartsToolResultPart`

```typescript
const value: operations.PartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

