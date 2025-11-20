# StreamRunAgentDataParts


## Supported Types

### `operations.StreamRunAgentPartsAgentsTextPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamRunAgentPartsAgentsDataPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.StreamRunAgentPartsAgentsFilePart`

```typescript
const value: operations.StreamRunAgentPartsAgentsFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.StreamRunAgentPartsAgentsToolCallPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {},
};
```

### `operations.StreamRunAgentPartsAgentsToolResultPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

