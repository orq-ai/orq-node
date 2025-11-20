# GetAllToolsData


## Supported Types

### `operations.DataFunctionTool`

```typescript
const value: operations.DataFunctionTool = {
  path: "Default",
  key: "<key>",
  description: "mid via yum reluctantly",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "function",
  function: {
    name: "<value>",
  },
};
```

### `operations.DataJSONSchemaTool`

```typescript
const value: operations.DataJSONSchemaTool = {
  path: "Default",
  key: "<key>",
  description: "after intrigue distinct fluffy even off um",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description:
      "crushing worth obediently ouch kaleidoscopic blah unimpressively oh",
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

### `operations.DataHTTPTool`

```typescript
const value: operations.DataHTTPTool = {
  path: "Default",
  key: "<key>",
  description: "ceramic pfft where mortally gosh or co-producer for",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "http",
  http: {
    blueprint: {
      url: "https://impassioned-charm.net/",
      method: "DELETE",
    },
  },
};
```

### `operations.DataMCPTool`

```typescript
const value: operations.DataMCPTool = {
  path: "Default",
  key: "<key>",
  description: "reboot aw without webbed lasting",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "mcp",
  mcp: {
    serverUrl: "https://stable-bran.net",
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

### `operations.DataCodeExecutionTool`

```typescript
const value: operations.DataCodeExecutionTool = {
  path: "Default",
  key: "<key>",
  description: "fervently pace but blah upon charm quarterly on neglect",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "code",
  codeTool: {
    language: "python",
    code: "<value>",
  },
};
```

