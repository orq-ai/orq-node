# StreamRunAgentKnowledgeBaseConfiguration

Defines the configuration settings which can either be for a user message or a text entry.


## Supported Types

### `operations.KnowledgeBaseConfigurationKnowledgeBaseLastUserMessage`

```typescript
const value: operations.KnowledgeBaseConfigurationKnowledgeBaseLastUserMessage =
  {
    type: "last_user_message",
  };
```

### `operations.KnowledgeBaseConfigurationKnowledgeBaseStaticQuery`

```typescript
const value: operations.KnowledgeBaseConfigurationKnowledgeBaseStaticQuery = {
  type: "query",
  query: "<value>",
};
```

