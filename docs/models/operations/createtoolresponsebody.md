# CreateToolResponseBody

Successfully created the tool.


## Supported Types

### `operations.ResponseBodyFunctionTool`

```typescript
const value: operations.ResponseBodyFunctionTool = {
  path: "Default Project",
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
  path: "Default Project",
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
  path: "Default Project",
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
      url: "https://impartial-wombat.name",
      method: "PUT",
    },
  },
};
```

### `operations.ResponseBodyCodeExecutionTool`

```typescript
const value: operations.ResponseBodyCodeExecutionTool = {
  path: "Default Project",
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

