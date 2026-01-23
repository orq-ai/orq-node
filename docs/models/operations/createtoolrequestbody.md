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

### `operations.RequestBodyJSONSchemaTool`

```typescript
const value: operations.RequestBodyJSONSchemaTool = {
  path: "Default",
  key: "<key>",
  description: "outside freezing despite mmm",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description: "swanling even whoever via yuck in",
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

