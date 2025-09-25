# RunAgentRequestTool

Available tools for agent execution. Each tool provides specific capabilities to interact with external systems, retrieve information, or perform specialized tasks.


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
  key: "<key>",
  displayName: "Eugene.Hickle46",
  description: "nor where other phooey aside psst angrily",
  type: "http",
  http: {
    blueprint: {
      url: "https://weary-sprinkles.net",
      method: "POST",
    },
  },
};
```

### `operations.CodeExecutionTool`

```typescript
const value: operations.CodeExecutionTool = {
  key: "<key>",
  displayName: "Aaliyah.Koss",
  description:
    "hovercraft each weighty hypothesise loftily smooth aside transplant",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

### `operations.FunctionTool`

```typescript
const value: operations.FunctionTool = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

