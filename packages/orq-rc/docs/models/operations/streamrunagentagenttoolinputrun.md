# StreamRunAgentAgentToolInputRun

Tool configuration for agent run operations. Built-in tools only require a type and requires_approval, while custom tools (http, code, function) support full inline definitions for on-the-fly creation.


## Supported Types

### `operations.StreamRunAgentAgentToolInputRunGoogleSearchTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunGoogleSearchTool = {
  type: "google_search",
};
```

### `operations.StreamRunAgentAgentToolInputRunWebScraperTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunWebScraperTool = {
  type: "web_scraper",
};
```

### `operations.StreamRunAgentAgentToolInputRunCallSubAgentTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunCallSubAgentTool = {
  type: "call_sub_agent",
};
```

### `operations.StreamRunAgentAgentToolInputRunRetrieveAgentsTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunRetrieveAgentsTool = {
  type: "retrieve_agents",
};
```

### `operations.StreamRunAgentAgentToolInputRunQueryMemoryStoreTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunQueryMemoryStoreTool = {
  type: "query_memory_store",
};
```

### `operations.StreamRunAgentAgentToolInputRunWriteMemoryStoreTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunWriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

### `operations.StreamRunAgentAgentToolInputRunRetrieveMemoryStoresTool`

```typescript
const value:
  operations.StreamRunAgentAgentToolInputRunRetrieveMemoryStoresTool = {
    type: "retrieve_memory_stores",
  };
```

### `operations.StreamRunAgentAgentToolInputRunDeleteMemoryDocumentTool`

```typescript
const value:
  operations.StreamRunAgentAgentToolInputRunDeleteMemoryDocumentTool = {
    type: "delete_memory_document",
  };
```

### `operations.StreamRunAgentAgentToolInputRunRetrieveKnowledgeBasesTool`

```typescript
const value:
  operations.StreamRunAgentAgentToolInputRunRetrieveKnowledgeBasesTool = {
    type: "retrieve_knowledge_bases",
  };
```

### `operations.StreamRunAgentAgentToolInputRunQueryKnowledgeBaseTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunQueryKnowledgeBaseTool =
  {
    type: "query_knowledge_base",
  };
```

### `operations.StreamRunAgentAgentToolInputRunCurrentDateTool`

```typescript
const value: operations.StreamRunAgentAgentToolInputRunCurrentDateTool = {
  type: "current_date",
};
```

### `operations.AgentToolInputRunHTTPToolRun`

```typescript
const value: operations.AgentToolInputRunHTTPToolRun = {
  type: "http",
  key: "<key>",
  description: "amendment whether kit hoarse",
  http: {
    blueprint: {
      url: "https://uniform-draw.org/",
      method: "DELETE",
    },
  },
};
```

### `operations.AgentToolInputRunCodeToolRun`

```typescript
const value: operations.AgentToolInputRunCodeToolRun = {
  type: "code",
  key: "<key>",
  description:
    "throughout rejigger edible geez drag gadzooks convection until shout",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

### `operations.AgentToolInputRunFunctionToolRun`

```typescript
const value: operations.AgentToolInputRunFunctionToolRun = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

