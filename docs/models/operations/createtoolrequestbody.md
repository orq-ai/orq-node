# CreateToolRequestBody

The tool to create


## Supported Types

### `operations.RequestBodyFunctionTool`

```typescript
const value: operations.RequestBodyFunctionTool = {
  path: "Default",
  key: "<key>",
  description: "surprisingly management aw character wretched",
  type: "function",
  function: {
    name: "<value>",
  },
};
```

### `operations.JSONSchemaTool`

```typescript
const value: operations.JSONSchemaTool = {
  path: "Default",
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

### `operations.RequestBodyHTTPTool`

```typescript
const value: operations.RequestBodyHTTPTool = {
  path: "Default",
  key: "<key>",
  description: "that finally rebuild carefully pace yowza whenever",
  type: "http",
  http: {
    blueprint: {
      url: "https://hefty-gazebo.com",
      method: "POST",
    },
  },
};
```

### `operations.RequestBodyMCPTool`

```typescript
const value: operations.RequestBodyMCPTool = {
  path: "Default",
  key: "<key>",
  description: "ah along runny",
  type: "mcp",
  mcp: {
    serverUrl: "https://prime-backburn.info",
    connectionType: "sse",
  },
};
```

### `operations.RequestBodyCodeExecutionTool`

```typescript
const value: operations.RequestBodyCodeExecutionTool = {
  path: "Default",
  key: "<key>",
  description: "yahoo er scared pretend endow obvious accentuate plain readily",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

