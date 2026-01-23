# AgentStartedStreamingEventParts


## Supported Types

### `components.TextPart`

```typescript
const value: components.TextPart = {
  kind: "text",
  text: "<value>",
};
```

### `components.ErrorPart`

```typescript
const value: components.ErrorPart = {
  kind: "error",
  error: "<value>",
};
```

### `components.DataPart`

```typescript
const value: components.DataPart = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `components.FilePart`

```typescript
const value: components.FilePart = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `components.ToolCallPart`

```typescript
const value: components.ToolCallPart = {
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

### `components.ToolResultPart`

```typescript
const value: components.ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

