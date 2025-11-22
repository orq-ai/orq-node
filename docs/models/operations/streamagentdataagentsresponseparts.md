# StreamAgentDataAgentsResponseParts


## Supported Types

### `operations.StreamAgentPartsAgentsResponseTextPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponseTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamAgentPartsAgentsResponseDataPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponseDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `operations.StreamAgentPartsAgentsResponseFilePart`

```typescript
const value: operations.StreamAgentPartsAgentsResponseFilePart = {
  kind: "file",
  file: {
    uri: "https://earnest-sediment.org/",
  },
};
```

### `operations.StreamAgentPartsAgentsResponseToolCallPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponseToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.StreamAgentPartsAgentsResponseToolResultPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponseToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

