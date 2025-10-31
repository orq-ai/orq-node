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
    schema: {
      "key": "<value>",
      "key1": "<value>",
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

### `operations.MCPTool`

```typescript
const value: operations.MCPTool = {
  path: "Default",
  key: "<key>",
  description:
    "yuppify unless overload phooey obnoxiously ribbon beard wriggler off",
  type: "mcp",
  mcp: {
    serverId: "<id>",
    toolName: "<value>",
    serverUrl: "https://simple-airman.org/",
    inputSchema: {
      type: "object",
    },
    connectionType: "http",
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

