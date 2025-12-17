# CreateChatCompletionMessages


## Supported Types

### `operations.CreateChatCompletionMessagesSystemMessage`

```typescript
const value: operations.CreateChatCompletionMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

### `operations.CreateChatCompletionMessagesDeveloperMessage`

```typescript
const value: operations.CreateChatCompletionMessagesDeveloperMessage = {
  role: "developer",
  content: "<value>",
};
```

### `operations.CreateChatCompletionMessagesUserMessage`

```typescript
const value: operations.CreateChatCompletionMessagesUserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.CreateChatCompletionMessagesAssistantMessage`

```typescript
const value: operations.CreateChatCompletionMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.CreateChatCompletionMessagesToolMessage`

```typescript
const value: operations.CreateChatCompletionMessagesToolMessage = {
  role: "tool",
  content: "<value>",
  toolCallId: "<id>",
};
```

