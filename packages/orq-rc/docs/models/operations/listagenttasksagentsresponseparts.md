# ListAgentTasksAgentsResponseParts


## Supported Types

### `operations.ListAgentTasksPartsAgentsResponseTextPart`

```typescript
const value: operations.ListAgentTasksPartsAgentsResponseTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.ListAgentTasksPartsAgentsResponseDataPart`

```typescript
const value: operations.ListAgentTasksPartsAgentsResponseDataPart = {
  kind: "data",
  data: {
    "key": "<value>",
  },
};
```

### `operations.ListAgentTasksPartsAgentsResponseFilePart`

```typescript
const value: operations.ListAgentTasksPartsAgentsResponseFilePart = {
  kind: "file",
  file: {
    uri: "https://roasted-obesity.net/",
  },
};
```

### `operations.ListAgentTasksPartsToolCallPart`

```typescript
const value: operations.ListAgentTasksPartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.ListAgentTasksPartsAgentsToolResultPart`

```typescript
const value: operations.ListAgentTasksPartsAgentsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

