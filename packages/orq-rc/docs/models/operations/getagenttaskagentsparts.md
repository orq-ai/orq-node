# GetAgentTaskAgentsParts


## Supported Types

### `operations.GetAgentTaskPartsAgentsTextPart`

```typescript
const value: operations.GetAgentTaskPartsAgentsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.GetAgentTaskPartsDataPart`

```typescript
const value: operations.GetAgentTaskPartsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.GetAgentTaskPartsAgentsFilePart`

```typescript
const value: operations.GetAgentTaskPartsAgentsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.GetAgentTaskPartsToolCallPart`

```typescript
const value: operations.GetAgentTaskPartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.GetAgentTaskPartsToolResultPart`

```typescript
const value: operations.GetAgentTaskPartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

