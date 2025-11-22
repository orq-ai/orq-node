# StreamAgentDataParts


## Supported Types

### `operations.StreamAgentPartsTextPart`

```typescript
const value: operations.StreamAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamAgentPartsDataPart`

```typescript
const value: operations.StreamAgentPartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.StreamAgentPartsFilePart`

```typescript
const value: operations.StreamAgentPartsFilePart = {
  kind: "file",
  file: {
    uri: "https://red-halt.org/",
  },
};
```

### `operations.StreamAgentPartsToolCallPart`

```typescript
const value: operations.StreamAgentPartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.StreamAgentPartsToolResultPart`

```typescript
const value: operations.StreamAgentPartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

