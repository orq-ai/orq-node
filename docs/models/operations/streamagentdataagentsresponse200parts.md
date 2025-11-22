# StreamAgentDataAgentsResponse200Parts


## Supported Types

### `operations.StreamAgentPartsAgentsResponse200TextPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponse200TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamAgentPartsAgentsResponse200DataPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponse200DataPart = {
  kind: "data",
  data: {},
};
```

### `operations.StreamAgentPartsAgentsResponse200FilePart`

```typescript
const value: operations.StreamAgentPartsAgentsResponse200FilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.StreamAgentPartsAgentsResponse200ToolCallPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponse200ToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
  },
};
```

### `operations.StreamAgentPartsAgentsResponse200ToolResultPart`

```typescript
const value: operations.StreamAgentPartsAgentsResponse200ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

