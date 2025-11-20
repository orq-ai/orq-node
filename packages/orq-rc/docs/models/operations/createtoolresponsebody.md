# CreateToolResponseBody

Successfully created the tool.


## Supported Types

### `operations.ResponseBodyFunctionTool`

```typescript
const value: operations.ResponseBodyFunctionTool = {
  path: "Default",
  key: "<key>",
  description: "deer brightly clamor wherever boo since solidly blah extremely",
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

### `operations.ResponseBodyJSONSchemaTool`

```typescript
const value: operations.ResponseBodyJSONSchemaTool = {
  path: "Default",
  key: "<key>",
  description: "blah neighboring fooey gently",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description: "carelessly arrogantly conservation equal however unbalance",
    schema: {
      type: "<value>",
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      required: [],
    },
  },
};
```

### `operations.ResponseBodyHTTPTool`

```typescript
const value: operations.ResponseBodyHTTPTool = {
  path: "Default",
  key: "<key>",
  description:
    "chops though rebound impish zowie ha soft potentially vestment youthful",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "http",
  http: {
    blueprint: {
      url: "https://content-schnitzel.net/",
      method: "PUT",
    },
  },
};
```

### `operations.ResponseBodyMCPTool`

```typescript
const value: operations.ResponseBodyMCPTool = {
  path: "Default",
  key: "<key>",
  description:
    "retool gaseous officially urgently vivaciously bah positively chilly",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "mcp",
  mcp: {
    serverUrl: "https://unwilling-coliseum.biz/",
    tools: [],
    connectionType: "http",
  },
};
```

### `operations.ResponseBodyCodeExecutionTool`

```typescript
const value: operations.ResponseBodyCodeExecutionTool = {
  path: "Default",
  key: "<key>",
  description:
    "finally radiant to disappointment including chiffonier sheepishly",
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

