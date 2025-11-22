# StreamRunAgentDataAgentsResponseParts


## Supported Types

### `operations.StreamRunAgentPartsAgentsResponse200TextPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponse200TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamRunAgentPartsAgentsResponse200DataPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponse200DataPart = {
  kind: "data",
  data: {
    "key": "<value>",
  },
};
```

### `operations.StreamRunAgentPartsAgentsResponse200FilePart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponse200FilePart = {
  kind: "file",
  file: {
    uri: "https://jagged-ice-cream.com/",
  },
};
```

### `operations.StreamRunAgentPartsAgentsResponse200ToolCallPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponse200ToolCallPart = {
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

### `operations.StreamRunAgentPartsAgentsResponse200ToolResultPart`

```typescript
const value: operations.StreamRunAgentPartsAgentsResponse200ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

