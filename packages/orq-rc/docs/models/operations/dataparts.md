# DataParts


## Supported Types

### `operations.StreamRunAgentPartsTextPart`

```typescript
const value: operations.StreamRunAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamRunAgentPartsDataPart`

```typescript
const value: operations.StreamRunAgentPartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.StreamRunAgentPartsFilePart`

```typescript
const value: operations.StreamRunAgentPartsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.StreamRunAgentPartsToolCallPart`

```typescript
const value: operations.StreamRunAgentPartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.StreamRunAgentPartsToolResultPart`

```typescript
const value: operations.StreamRunAgentPartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

