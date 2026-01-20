# ListPromptVersionsPromptsMessages


## Supported Types

### `operations.ListPromptVersionsMessagesSystemMessage`

```typescript
const value: operations.ListPromptVersionsMessagesSystemMessage = {
  role: "system",
  content: [],
};
```

### `operations.ListPromptVersionsMessagesUserMessage`

```typescript
const value: operations.ListPromptVersionsMessagesUserMessage = {
  role: "user",
  content: "<value>",
};
```

### `operations.ListPromptVersionsMessagesAssistantMessage`

```typescript
const value: operations.ListPromptVersionsMessagesAssistantMessage = {
  role: "assistant",
};
```

### `operations.ListPromptVersionsMessagesToolMessage`

```typescript
const value: operations.ListPromptVersionsMessagesToolMessage = {
  role: "tool",
  content: [],
  toolCallId: "<id>",
};
```

