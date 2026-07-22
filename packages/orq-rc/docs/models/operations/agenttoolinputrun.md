# AgentToolInputRun

Tool configuration for agent run operations. Built-in tools only require a type and requires_approval, while custom tools (HTTP, Code, Function, JSON Schema, MCP) support full inline definitions for on-the-fly creation.


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

### `operations.CodeInterpreterTool`

```typescript
const value: operations.CodeInterpreterTool = {
  type: "code_interpreter",
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

### `operations.JSONSchemaToolRun`

```typescript
const value: operations.JSONSchemaToolRun = {
  type: "json_schema",
  key: "<key>",
  description: "circa density buzzing when monster condense until necklace",
  jsonSchema: {
    name: "<value>",
    description: "openly furthermore forgo why meh often",
    schema: {
      type: "<value>",
      properties: {
        "key": "<value>",
      },
      required: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
};
```

### `operations.MCPToolRun`

```typescript
const value: operations.MCPToolRun = {
  type: "mcp",
  key: "<key>",
  description:
    "whenever immaculate atop regal clamor excepting brightly coal gulp",
  mcp: {
    serverUrl: "https://sleepy-version.biz/",
    tools: [],
    connectionType: "http",
  },
};
```

