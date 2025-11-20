# RunAgentParts


## Supported Types

### `operations.RunAgentPartsTextPart`

```typescript
const value: operations.RunAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.RunAgentPartsDataPart`

```typescript
const value: operations.RunAgentPartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.RunAgentPartsFilePart`

```typescript
const value: operations.RunAgentPartsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.RunAgentPartsToolCallPart`

```typescript
const value: operations.RunAgentPartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.RunAgentPartsToolResultPart`

```typescript
const value: operations.RunAgentPartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

