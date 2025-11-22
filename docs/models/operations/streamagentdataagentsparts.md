# StreamAgentDataAgentsParts


## Supported Types

### `operations.StreamAgentPartsAgentsTextPart`

```typescript
const value: operations.StreamAgentPartsAgentsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamAgentPartsAgentsDataPart`

```typescript
const value: operations.StreamAgentPartsAgentsDataPart = {
  kind: "data",
  data: {},
};
```

### `operations.StreamAgentPartsAgentsFilePart`

```typescript
const value: operations.StreamAgentPartsAgentsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.StreamAgentPartsAgentsToolCallPart`

```typescript
const value: operations.StreamAgentPartsAgentsToolCallPart = {
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

### `operations.StreamAgentPartsAgentsToolResultPart`

```typescript
const value: operations.StreamAgentPartsAgentsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

