# Choices


## Supported Types

### `operations.ChoicesSystemMessage`

```typescript
const value: operations.ChoicesSystemMessage = {
  role: "system",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.ChoicesDeveloperMessage`

```typescript
const value: operations.ChoicesDeveloperMessage = {
  role: "developer",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.ChoicesUserMessage`

```typescript
const value: operations.ChoicesUserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.ChoicesAssistantMessage`

```typescript
const value: operations.ChoicesAssistantMessage = {
  role: "assistant",
};
```

### `operations.ChoicesToolMessage`

```typescript
const value: operations.ChoicesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

