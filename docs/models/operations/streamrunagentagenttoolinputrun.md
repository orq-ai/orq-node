# StreamRunAgentAgentToolInputRun

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

### `operations.AgentToolInputRunJSONSchemaToolRun`

```typescript
const value: operations.AgentToolInputRunJSONSchemaToolRun = {
  type: "json_schema",
  key: "<key>",
  description: "bathhouse republican respectful cinema place yet oof",
  jsonSchema: {
    name: "<value>",
    description: "and courageous ah whoa boohoo swill whenever",
    schema: {
      type: "<value>",
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      required: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
};
```

### `operations.AgentToolInputRunMCPToolRun`

```typescript
const value: operations.AgentToolInputRunMCPToolRun = {
  type: "mcp",
  key: "<key>",
  description: "clavicle qua pastel",
  mcp: {
    serverUrl: "https://same-partridge.net",
    tools: [
      {
        name: "<value>",
        schema: {
          type: "object",
        },
      },
    ],
    connectionType: "http",
  },
};
```

