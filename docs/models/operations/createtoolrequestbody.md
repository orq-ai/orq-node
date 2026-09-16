# CreateToolRequestBody

The tool to create


## Supported Types

### `operations.FunctionTool`

```typescript
const value: operations.FunctionTool = {
  path: "Default Project",
  key: "<key>",
  description: "Searches the company knowledge base for relevant documents.",
  type: "function",
  function: {
    name: "<value>",
  },
};
```

### `operations.JSONSchemaTool`

```typescript
const value: operations.JSONSchemaTool = {
  path: "Default Project",
  key: "<key>",
  description: "Searches the company knowledge base for relevant documents.",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description: "uh-huh scholarship what madly",
    schema: {
      type: "<value>",
      properties: {
        "key": "<value>",
      },
      required: [],
    },
  },
};
```

### `operations.HTTPTool`

```typescript
const value: operations.HTTPTool = {
  path: "Default Project",
  key: "<key>",
  description: "Searches the company knowledge base for relevant documents.",
  type: "http",
  http: {
    blueprint: {
      url: "https://darling-laughter.com",
      method: "GET",
    },
  },
};
```

### `operations.CodeExecutionTool`

```typescript
const value: operations.CodeExecutionTool = {
  path: "Default Project",
  key: "<key>",
  description: "Searches the company knowledge base for relevant documents.",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

