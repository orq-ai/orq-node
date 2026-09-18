# CreateToolRequestBody

The tool to create


## Supported Types

### `operations.FunctionTool`

```typescript
const value: operations.FunctionTool = {
  path: "Default Project",
  key: "<key>",
  description: "beyond playfully atop apropos aw how",
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
  description: "uh-huh scholarship what madly",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description: "barring climb usefully however ouch yuck bicycle",
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
  description: "midst too hello difficult proofread",
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
  description: "convince without brr",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

