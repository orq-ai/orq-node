# AgentToolInputCRUD

Tool configuration for agent create/update operations. Built-in tools only require a type, while custom tools (HTTP, Code, Function, JSON Schema, MCP) must reference pre-created tools by key or id. Provider-prefixed tools (e.g., openai:web_search) are passed through to the provider.


## Supported Types

### `components.HttpToolInput`

```typescript
const value: components.HttpToolInput = {
  type: "http",
};
```

### `components.CodeToolInput`

```typescript
const value: components.CodeToolInput = {
  type: "code",
};
```

### `components.FunctionToolInput`

```typescript
const value: components.FunctionToolInput = {
  type: "function",
};
```

### `components.JsonSchemaToolInput`

```typescript
const value: components.JsonSchemaToolInput = {
  type: "json_schema",
};
```

### `components.McpToolInput`

```typescript
const value: components.McpToolInput = {
  type: "mcp",
  id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
  toolId: "01KXYZ123456789",
};
```

