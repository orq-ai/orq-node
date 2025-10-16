# AgentToolInputRun

Tool configuration for agent run operations. Built-in tools only require a type and requires_approval, while custom tools (http, code, function) support full inline definitions for on-the-fly creation.


## Supported Types

### `operations.AgentToolInputRunGoogleSearchTool`

```typescript
const value: operations.AgentToolInputRunGoogleSearchTool = {
  type: "google_search",
};
```

### `operations.AgentToolInputRunWebScraperTool`

```typescript
const value: operations.AgentToolInputRunWebScraperTool = {
  type: "web_scraper",
};
```

### `operations.AgentToolInputRunCallSubAgentTool`

```typescript
const value: operations.AgentToolInputRunCallSubAgentTool = {
  type: "call_sub_agent",
};
```

### `operations.AgentToolInputRunRetrieveAgentsTool`

```typescript
const value: operations.AgentToolInputRunRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

### `operations.AgentToolInputRunQueryMemoryStoreTool`

```typescript
const value: operations.AgentToolInputRunQueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

### `operations.AgentToolInputRunWriteMemoryStoreTool`

```typescript
const value: operations.AgentToolInputRunWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

### `operations.AgentToolInputRunRetrieveMemoryStoresTool`

```typescript
const value: operations.AgentToolInputRunRetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

### `operations.AgentToolInputRunDeleteMemoryDocumentTool`

```typescript
const value: operations.AgentToolInputRunDeleteMemoryDocumentTool = {
  type: "delete_memory_document",
};
```

### `operations.AgentToolInputRunRetrieveKnowledgeBasesTool`

```typescript
const value: operations.AgentToolInputRunRetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

### `operations.AgentToolInputRunQueryKnowledgeBaseTool`

```typescript
const value: operations.AgentToolInputRunQueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

### `operations.AgentToolInputRunCurrentDateTool`

```typescript
const value: operations.AgentToolInputRunCurrentDateTool = {
  type: "current_date",
};
```

### `operations.HTTPToolRun`

```typescript
const value: operations.HTTPToolRun = {
  type: "http",
  key: "<key>",
  description:
    "hospitalization everlasting fooey furthermore insert thoroughly clumsy ew sizzle",
  http: {
    blueprint: {
      url: "https://weary-sprinkles.net",
      method: "POST",
    },
  },
};
```

### `operations.CodeToolRun`

```typescript
const value: operations.CodeToolRun = {
  type: "code",
  key: "<key>",
  description: "till blah folklore geez if pfft pfft more",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

### `operations.FunctionToolRun`

```typescript
const value: operations.FunctionToolRun = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

