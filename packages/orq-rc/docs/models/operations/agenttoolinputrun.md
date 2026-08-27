# AgentToolInputRun

Tool configuration for agent run operations. Built-in tools only require a type and requires_approval, while custom tools (HTTP, Code, Function, JSON Schema, MCP) support full inline definitions for on-the-fly creation.


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

