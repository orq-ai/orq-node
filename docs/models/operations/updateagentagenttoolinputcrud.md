# UpdateAgentAgentToolInputCRUD

Tool configuration for agent create/update operations. Built-in tools only require a type, while custom tools (HTTP, Code, Function, JSON Schema, MCP) must reference pre-created tools by key or id. Provider-prefixed tools (e.g., openai:web_search) are passed through to the provider.


## Supported Types

### `operations.AgentToolInputCRUDGoogleSearchTool`

```typescript
const value: operations.AgentToolInputCRUDGoogleSearchTool = {
  type: "google_search",
};
```

### `operations.AgentToolInputCRUDWebScraperTool`

```typescript
const value: operations.AgentToolInputCRUDWebScraperTool = {
  type: "web_scraper",
};
```

### `operations.AgentToolInputCRUDCallSubAgentTool`

```typescript
const value: operations.AgentToolInputCRUDCallSubAgentTool = {
  type: "call_sub_agent",
};
```

### `operations.AgentToolInputCRUDRetrieveAgentsTool`

```typescript
const value: operations.AgentToolInputCRUDRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

### `operations.AgentToolInputCRUDQueryMemoryStoreTool`

```typescript
const value: operations.AgentToolInputCRUDQueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

### `operations.AgentToolInputCRUDWriteMemoryStoreTool`

```typescript
const value: operations.AgentToolInputCRUDWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

### `operations.AgentToolInputCRUDRetrieveMemoryStoresTool`

```typescript
const value: operations.AgentToolInputCRUDRetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

### `operations.AgentToolInputCRUDDeleteMemoryDocumentTool`

```typescript
const value: operations.AgentToolInputCRUDDeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

### `operations.AgentToolInputCRUDRetrieveKnowledgeBasesTool`

```typescript
const value: operations.AgentToolInputCRUDRetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

### `operations.AgentToolInputCRUDQueryKnowledgeBaseTool`

```typescript
const value: operations.AgentToolInputCRUDQueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

### `operations.AgentToolInputCRUDCurrentDateTool`

```typescript
const value: operations.AgentToolInputCRUDCurrentDateTool = {
  type: "current_date",
};
```

### `operations.AgentToolInputCRUDHTTPTool`

```typescript
const value: operations.AgentToolInputCRUDHTTPTool = {};
```

### `operations.AgentToolInputCRUDCodeExecutionTool`

```typescript
const value: operations.AgentToolInputCRUDCodeExecutionTool = {};
```

### `operations.AgentToolInputCRUDFunctionTool`

```typescript
const value: operations.AgentToolInputCRUDFunctionTool = {};
```

### `operations.AgentToolInputCRUDJSONSchemaTool`

```typescript
const value: operations.AgentToolInputCRUDJSONSchemaTool = {};
```

### `operations.AgentToolInputCRUDMCPTool`

```typescript
const value: operations.AgentToolInputCRUDMCPTool = {
  id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
  toolId: "01KXYZ123456789",
};
```

### `operations.AgentToolInputCRUDProviderBuiltInTool`

```typescript
const value: operations.AgentToolInputCRUDProviderBuiltInTool = {
  type: "openai:web_search",
};
```

