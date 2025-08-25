# Output


## Supported Types

### `operations.Output1`

```typescript
const value: operations.Output1 = {
  id: "<id>",
  type: "message",
  role: "assistant",
  status: "in_progress",
};
```

### `operations.Output2`

```typescript
const value: operations.Output2 = {
  id: "<id>",
  type: "web_search_call",
  status: "incomplete",
};
```

### `operations.Output3`

```typescript
const value: operations.Output3 = {
  id: "<id>",
  type: "file_search_call",
  status: "in_progress",
};
```

### `operations.Output4`

```typescript
const value: operations.Output4 = {
  id: "<id>",
  type: "function_call",
  callId: "<id>",
  name: "<value>",
  arguments: "<value>",
  status: "completed",
};
```

