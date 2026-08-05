# KnowledgeBaseConfiguration

Defines the configuration settings which can either be for a user message or a text entry.


## Supported Types

### `operations.KnowledgeBaseLastUserMessage`

```typescript
const value: operations.KnowledgeBaseLastUserMessage = {
  type: "last_user_message",
};
```

### `operations.KnowledgeBaseStaticQuery`

```typescript
const value: operations.KnowledgeBaseStaticQuery = {
  type: "query",
  query: "<value>",
};
```

