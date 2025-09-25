# StreamRunAgentTools

Available tools for agent execution. Each tool provides specific capabilities to interact with external systems, retrieve information, or perform specialized tasks.


## Supported Types

### `components.HttpTool`

```typescript
const value: components.HttpTool = {
  path: "Default",
  key: "<key>",
  displayName: "Johnnie_Rutherford26",
  description: "mmm however since frank conservative know",
  type: "http",
  http: {
    blueprint: {
      url: "https://bad-fisherman.com/",
      method: "GET",
    },
  },
};
```

### `components.CodeExecutionTool`

```typescript
const value: components.CodeExecutionTool = {
  path: "Default",
  key: "<key>",
  displayName: "Marcelino84",
  description: "futon consequently lest tuba",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

### `components.FunctionTool`

```typescript
const value: components.FunctionTool = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

### `components.GoogleSearchTool`

```typescript
const value: components.GoogleSearchTool = {
  type: "google_search",
};
```

### `components.WebScraperTool`

```typescript
const value: components.WebScraperTool = {
  type: "web_scraper",
};
```

### `components.CallSubAgentTool`

```typescript
const value: components.CallSubAgentTool = {
  type: "call_sub_agent",
};
```

### `components.RetrieveAgentsTool`

```typescript
const value: components.RetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

### `components.QueryMemoryStoreTool`

```typescript
const value: components.QueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

### `components.WriteMemoryStoreTool`

```typescript
const value: components.WriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

### `components.RetrieveMemoryStoresTool`

```typescript
const value: components.RetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

### `components.RetrieveKnowledgeBasesTool`

```typescript
const value: components.RetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

### `components.QueryKnowledgeBaseTool`

```typescript
const value: components.QueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

### `components.CurrentDateTool`

```typescript
const value: components.CurrentDateTool = {
  type: "current_date",
};
```

