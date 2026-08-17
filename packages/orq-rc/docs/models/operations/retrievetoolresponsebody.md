# RetrieveToolResponseBody

Successfully retrieved the tool.


## Supported Types

### `operations.RetrieveToolResponseBodyFunctionTool`

```typescript
const value: operations.RetrieveToolResponseBodyFunctionTool = {
  path: "Default Project",
  key: "<key>",
  description: "if necklace yippee but before cheerfully",
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

### `operations.RetrieveToolResponseBodyJSONSchemaTool`

```typescript
const value: operations.RetrieveToolResponseBodyJSONSchemaTool = {
  path: "Default Project",
  key: "<key>",
  description: "lazy commemorate enlist",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description: "whoa flight convince",
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

### `operations.RetrieveToolResponseBodyHTTPTool`

```typescript
const value: operations.RetrieveToolResponseBodyHTTPTool = {
  path: "Default Project",
  key: "<key>",
  description: "weird mummify scrape massage athwart",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "http",
  http: {
    blueprint: {
      url: "https://shimmering-hexagon.net",
      method: "GET",
    },
  },
};
```

### `operations.RetrieveToolResponseBodyCodeExecutionTool`

```typescript
const value: operations.RetrieveToolResponseBodyCodeExecutionTool = {
  path: "Default Project",
  key: "<key>",
  description: "acidly highly monocle",
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

