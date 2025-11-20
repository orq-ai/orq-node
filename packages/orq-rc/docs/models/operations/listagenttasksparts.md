# ListAgentTasksParts


## Supported Types

### `operations.ListAgentTasksPartsTextPart`

```typescript
const value: operations.ListAgentTasksPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

### `operations.ListAgentTasksPartsAgentsDataPart`

```typescript
const value: operations.ListAgentTasksPartsAgentsDataPart = {
  kind: "data",
  data: {},
};
```

### `operations.ListAgentTasksPartsFilePart`

```typescript
const value: operations.ListAgentTasksPartsFilePart = {
  kind: "file",
  file: {
    uri: "https://cuddly-rust.com",
  },
};
```

### `operations.PartsToolCallPart`

```typescript
const value: operations.PartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.ListAgentTasksPartsToolResultPart`

```typescript
const value: operations.ListAgentTasksPartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

