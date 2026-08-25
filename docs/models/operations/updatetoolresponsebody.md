# UpdateToolResponseBody

Successfully updated the tool.


## Supported Types

### `operations.UpdateToolResponseBodyFunctionTool`

```typescript
const value: operations.UpdateToolResponseBodyFunctionTool = {
  path: "Default Project",
  key: "<key>",
  description: "throughout gosh across about reproach accredit ah",
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

### `operations.UpdateToolResponseBodyJSONSchemaTool`

```typescript
const value: operations.UpdateToolResponseBodyJSONSchemaTool = {
  path: "Default Project",
  key: "<key>",
  description:
    "zowie tomatillo insist flight yowza toward loosely chasuble above",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    description: "along diligently across mortally bleak incomparable boo drat",
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

### `operations.UpdateToolResponseBodyHTTPTool`

```typescript
const value: operations.UpdateToolResponseBodyHTTPTool = {
  path: "Default Project",
  key: "<key>",
  description: "search whenever psst",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "http",
  http: {
    blueprint: {
      url: "https://powerless-sightseeing.org/",
      method: "GET",
    },
  },
};
```

### `operations.UpdateToolResponseBodyCodeExecutionTool`

```typescript
const value: operations.UpdateToolResponseBodyCodeExecutionTool = {
  path: "Default Project",
  key: "<key>",
  description:
    "substitution loosely as underneath quarrelsomely equally climb stranger whine",
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

