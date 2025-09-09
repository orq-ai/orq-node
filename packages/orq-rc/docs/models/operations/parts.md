# Parts


## Supported Types

### `operations.Parts1`

```typescript
const value: operations.Parts1 = {
  kind: "text",
  text: "<value>",
};
```

### `operations.Parts2`

```typescript
const value: operations.Parts2 = {
  kind: "data",
};
```

### `operations.Parts3`

```typescript
const value: operations.Parts3 = {
  kind: "file",
  file: {
    bytes: "<value>",
  },
};
```

### `operations.Parts4`

```typescript
const value: operations.Parts4 = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `operations.Five`

```typescript
const value: operations.Five = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

