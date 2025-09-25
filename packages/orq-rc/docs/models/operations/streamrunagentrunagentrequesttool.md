# StreamRunAgentRunAgentRequestTool

Available tools for agent execution. Each tool provides specific capabilities to interact with external systems, retrieve information, or perform specialized tasks.


## Supported Types

### `operations.RunAgentRequestToolGoogleSearchTool`

```typescript
const value: operations.RunAgentRequestToolGoogleSearchTool = {
  type: "google_search",
};
```

### `operations.RunAgentRequestToolWebScraperTool`

```typescript
const value: operations.RunAgentRequestToolWebScraperTool = {
  type: "web_scraper",
};
```

### `operations.RunAgentRequestToolCallSubAgentTool`

```typescript
const value: operations.RunAgentRequestToolCallSubAgentTool = {
  type: "call_sub_agent",
};
```

### `operations.RunAgentRequestToolRetrieveAgentsTool`

```typescript
const value: operations.RunAgentRequestToolRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

### `operations.RunAgentRequestToolQueryMemoryStoreTool`

```typescript
const value: operations.RunAgentRequestToolQueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

### `operations.RunAgentRequestToolWriteMemoryStoreTool`

```typescript
const value: operations.RunAgentRequestToolWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

### `operations.RunAgentRequestToolRetrieveMemoryStoresTool`

```typescript
const value: operations.RunAgentRequestToolRetrieveMemoryStoresTool = {
  type: "retrieve_memory_stores",
};
```

### `operations.RunAgentRequestToolRetrieveKnowledgeBasesTool`

```typescript
const value: operations.RunAgentRequestToolRetrieveKnowledgeBasesTool = {
  type: "retrieve_knowledge_bases",
};
```

### `operations.RunAgentRequestToolQueryKnowledgeBaseTool`

```typescript
const value: operations.RunAgentRequestToolQueryKnowledgeBaseTool = {
  type: "query_knowledge_base",
};
```

### `operations.RunAgentRequestToolCurrentDateTool`

```typescript
const value: operations.RunAgentRequestToolCurrentDateTool = {
  type: "current_date",
};
```

### `operations.RunAgentRequestToolHTTPTool`

```typescript
const value: operations.RunAgentRequestToolHTTPTool = {
  key: "<key>",
  displayName: "Sharon_Bogan",
  description:
    "ah redact bootleg as consequently aged fooey disgorge ramp ironclad",
  type: "http",
  http: {
    blueprint: {
      url: "https://flowery-knight.net",
      method: "GET",
    },
  },
};
```

### `operations.RunAgentRequestToolCodeExecutionTool`

```typescript
const value: operations.RunAgentRequestToolCodeExecutionTool = {
  key: "<key>",
  displayName: "Kelton.Yost",
  description: "murky euphonium pish whenever delight fort border blah",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

### `operations.RunAgentRequestToolFunctionTool`

```typescript
const value: operations.RunAgentRequestToolFunctionTool = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

