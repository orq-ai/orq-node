# AgentToolInputCRUD

Tool configuration for agent create/update operations. Built-in tools only require a type, while custom tools (HTTP, Code, Function, MCP) must reference pre-created tools by key or id.


## Supported Types

### `operations.GoogleSearchTool`

```typescript
const value: operations.GoogleSearchTool = {
  type: "google_search",
};
```

### `operations.WebScraperTool`

```typescript
const value: operations.WebScraperTool = {
  type: "web_scraper",
};
```

### `operations.CallSubAgentTool`

```typescript
const value: operations.CallSubAgentTool = {
  type: "call_sub_agent",
};
```

### `operations.RetrieveAgentsTool`

```typescript
const value: operations.RetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

### `operations.QueryMemoryStoreTool`

```typescript
const value: operations.QueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

### `operations.WriteMemoryStoreTool`

```typescript
const value: operations.WriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

### `operations.RetrieveMemoryStoresTool`

```typescript
const value: operations.RetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

### `operations.DeleteMemoryDocumentTool`

```typescript
const value: operations.DeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

### `operations.RetrieveKnowledgeBasesTool`

```typescript
const value: operations.RetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

### `operations.QueryKnowledgeBaseTool`

```typescript
const value: operations.QueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

### `operations.CurrentDateTool`

```typescript
const value: operations.CurrentDateTool = {
  type: "current_date",
};
```

### `operations.HTTPTool`

```typescript
const value: operations.HTTPTool = {
  type: "http",
};
```

### `operations.CodeExecutionTool`

```typescript
const value: operations.CodeExecutionTool = {
  type: "code",
};
```

### `operations.FunctionTool`

```typescript
const value: operations.FunctionTool = {
  type: "function",
};
```

### `operations.MCPTool`

```typescript
const value: operations.MCPTool = {
  type: "mcp",
  id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
  toolId: "01KXYZ123456789",
};
```

