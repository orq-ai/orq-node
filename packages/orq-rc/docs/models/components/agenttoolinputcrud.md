# AgentToolInputCRUD

Tool configuration for agent create/update operations. Built-in tools only require a type, while custom tools (HTTP, Code, Function, JSON Schema, MCP) must reference pre-created tools by key or id. Provider-prefixed tools (e.g., openai:web_search) are passed through to the provider.


## Supported Types

### `components.GoogleSearchToolInput`

```typescript
const value: components.GoogleSearchToolInput = {
  type: "google_search",
};
```

### `components.WebScraperToolInput`

```typescript
const value: components.WebScraperToolInput = {
  type: "web_scraper",
};
```

### `components.CallSubAgentToolInput`

```typescript
const value: components.CallSubAgentToolInput = {
  type: "call_sub_agent",
};
```

### `components.RetrieveAgentsToolInput`

```typescript
const value: components.RetrieveAgentsToolInput = {
  type: "retrieve_agents",
};
```

### `components.QueryMemoryStoreToolInput`

```typescript
const value: components.QueryMemoryStoreToolInput = {
  type: "query_memory_store",
};
```

### `components.WriteMemoryStoreToolInput`

```typescript
const value: components.WriteMemoryStoreToolInput = {
  type: "write_memory_store",
};
```

### `components.RetrieveMemoryStoresToolInput`

```typescript
const value: components.RetrieveMemoryStoresToolInput = {
  type: "retrieve_memory_stores",
};
```

### `components.DeleteMemoryDocumentToolInput`

```typescript
const value: components.DeleteMemoryDocumentToolInput = {
  type: "delete_memory_document",
};
```

### `components.RetrieveKnowledgeBasesToolInput`

```typescript
const value: components.RetrieveKnowledgeBasesToolInput = {
  type: "retrieve_knowledge_bases",
};
```

### `components.QueryKnowledgeBaseToolInput`

```typescript
const value: components.QueryKnowledgeBaseToolInput = {
  type: "query_knowledge_base",
};
```

### `components.CurrentDateToolInput`

```typescript
const value: components.CurrentDateToolInput = {
  type: "current_date",
};
```

### `components.AdvisorToolInput`

```typescript
const value: components.AdvisorToolInput = {
  type: "advisor",
};
```

### `components.SidekickToolInput`

```typescript
const value: components.SidekickToolInput = {
  type: "sidekick",
};
```

### `components.CodeInterpreterToolInput`

```typescript
const value: components.CodeInterpreterToolInput = {
  type: "code_interpreter",
};
```

### `components.FileSystemToolInput`

```typescript
const value: components.FileSystemToolInput = {
  type: "file_system",
  configuration: {},
};
```

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

