# UpdateAgentAgentToolInputCRUD

Tool configuration for agent create/update operations. Built-in tools only require a type, while custom tools (HTTP, Code, Function, MCP) must reference pre-created tools by key or id.


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
const value: operations.AgentToolInputCRUDHTTPTool = {
  type: "http",
};
```

### `operations.AgentToolInputCRUDCodeExecutionTool`

```typescript
const value: operations.AgentToolInputCRUDCodeExecutionTool = {
  type: "code",
};
```

### `operations.AgentToolInputCRUDFunctionTool`

```typescript
const value: operations.AgentToolInputCRUDFunctionTool = {
  type: "function",
};
```

### `operations.AgentToolInputCRUDMCPTool`

```typescript
const value: operations.AgentToolInputCRUDMCPTool = {
  type: "mcp",
};
```

