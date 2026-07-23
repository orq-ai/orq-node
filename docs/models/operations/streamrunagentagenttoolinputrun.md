# StreamRunAgentAgentToolInputRun

Tool configuration for agent run operations. Built-in tools only require a type and requires_approval, while custom tools (HTTP, Code, Function, JSON Schema, MCP) support full inline definitions for on-the-fly creation.


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

### `operations.AgentToolInputRunCodeInterpreterTool`

```typescript
const value: operations.AgentToolInputRunCodeInterpreterTool = {
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

