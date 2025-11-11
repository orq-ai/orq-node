# InvokeAgentParts


## Supported Types

### `operations.InvokeAgentParts1`

```typescript
const value: operations.InvokeAgentParts1 = {
  kind: "text",
  text: "<value>",
};
```

### `operations.InvokeAgentParts2`

```typescript
const value: operations.InvokeAgentParts2 = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.InvokeAgentParts3`

```typescript
const value: operations.InvokeAgentParts3 = {
  kind: "file",
  file: {
    uri: "https://admired-descent.name",
  },
};
```

### `operations.InvokeAgentParts4`

```typescript
const value: operations.InvokeAgentParts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
  },
};
```

### `operations.InvokeAgentParts5`

```typescript
const value: operations.InvokeAgentParts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

