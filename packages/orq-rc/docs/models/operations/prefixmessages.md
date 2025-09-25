# PrefixMessages


## Supported Types

### `operations.DeveloperMessage`

```typescript
const value: operations.DeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.SystemMessage`

```typescript
const value: operations.SystemMessage = {
  role: "system",
  content: "<value>",
};
```

### `operations.UserMessage`

```typescript
const value: operations.UserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.AssistantMessage`

```typescript
const value: operations.AssistantMessage = {
  role: "exception",
};
```

### `operations.ToolMessage`

```typescript
const value: operations.ToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

