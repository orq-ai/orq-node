# ListAgentTasksParts


## Supported Types

### `operations.ListAgentTasksParts1`

```typescript
const value: operations.ListAgentTasksParts1 = {
  kind: "text",
  text: "<value>",
};
```

### `operations.ListAgentTasksParts2`

```typescript
const value: operations.ListAgentTasksParts2 = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.ListAgentTasksParts3`

```typescript
const value: operations.ListAgentTasksParts3 = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.ListAgentTasksParts4`

```typescript
const value: operations.ListAgentTasksParts4 = {
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

### `operations.ListAgentTasksParts5`

```typescript
const value: operations.ListAgentTasksParts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

