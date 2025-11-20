# InvokeAgentParts


## Supported Types

### `operations.InvokeAgentPartsTextPart`

```typescript
const value: operations.InvokeAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.InvokeAgentPartsDataPart`

```typescript
const value: operations.InvokeAgentPartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
  },
};
```

### `operations.InvokeAgentPartsFilePart`

```typescript
const value: operations.InvokeAgentPartsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.InvokeAgentPartsToolCallPart`

```typescript
const value: operations.InvokeAgentPartsToolCallPart = {
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

### `operations.InvokeAgentPartsToolResultPart`

```typescript
const value: operations.InvokeAgentPartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

