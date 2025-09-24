# StreamRunAgentParts


## Supported Types

### `operations.StreamRunAgentParts1`

```typescript
const value: operations.StreamRunAgentParts1 = {
  kind: "text",
  text: "<value>",
};
```

### `operations.StreamRunAgentParts2`

```typescript
const value: operations.StreamRunAgentParts2 = {
  kind: "data",
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.StreamRunAgentParts3`

```typescript
const value: operations.StreamRunAgentParts3 = {
  kind: "file",
  file: {
    uri: "https://tragic-sundae.info/",
  },
};
```

### `operations.StreamRunAgentParts4`

```typescript
const value: operations.StreamRunAgentParts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.Parts5`

```typescript
const value: operations.Parts5 = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

