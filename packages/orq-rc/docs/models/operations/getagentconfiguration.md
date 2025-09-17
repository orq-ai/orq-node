# GetAgentConfiguration

Defines the configuration settings which can either be for a user message or a text entry.


## Supported Types

### `operations.GetAgentConfiguration1`

```typescript
const value: operations.GetAgentConfiguration1 = {
  type: "last_user_message",
};
```

### `operations.GetAgentConfiguration2`

```typescript
const value: operations.GetAgentConfiguration2 = {
  type: "query",
  query: "<value>",
};
```

