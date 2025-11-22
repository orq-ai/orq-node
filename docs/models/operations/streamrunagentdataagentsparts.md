# StreamRunAgentDataAgentsParts


## Supported Types

### `operations.StreamRunAgentPartsAgentsResponseTextPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponseTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamRunAgentPartsAgentsResponseDataPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponseDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.StreamRunAgentPartsAgentsResponseFilePart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponseFilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.StreamRunAgentPartsAgentsResponseToolCallPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponseToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {},
};
```

### `operations.StreamRunAgentPartsAgentsResponseToolResultPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponseToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

