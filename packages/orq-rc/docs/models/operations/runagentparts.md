# RunAgentParts


## Supported Types

### `operations.RunAgentParts1`

```typescript
const value: operations.RunAgentParts1 = {
  kind: "text",
  text: "<value>",
};
```

### `operations.RunAgentParts2`

```typescript
const value: operations.RunAgentParts2 = {
  kind: "data",
  data: {
    "key": "<value>",
  },
};
```

### `operations.RunAgentParts3`

```typescript
const value: operations.RunAgentParts3 = {
  kind: "file",
  file: {
    uri: "https://critical-vista.org/",
  },
};
```

### `operations.RunAgentParts4`

```typescript
const value: operations.RunAgentParts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.RunAgentParts5`

```typescript
const value: operations.RunAgentParts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

