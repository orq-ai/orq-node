# UpdateToolResponseBody

Successfully updated the tool.


## Supported Types

### `operations.UpdateToolResponseBodyFunctionTool`

```typescript
const value: operations.UpdateToolResponseBodyFunctionTool = {
  path: "Default",
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
  path: "Default",
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
  path: "Default",
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

### `operations.UpdateToolResponseBodyMCPTool`

```typescript
const value: operations.UpdateToolResponseBodyMCPTool = {
  path: "Default",
  key: "<key>",
  description: "astride decisive smoothly rim consequently tinted",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  type: "mcp",
  mcp: {
    serverUrl: "https://eminent-tomatillo.info",
    tools: [
      {
        name: "<value>",
        schema: {
          type: "object",
        },
      },
    ],
    connectionType: "sse",
  },
};
```

### `operations.UpdateToolResponseBodyCodeExecutionTool`

```typescript
const value: operations.UpdateToolResponseBodyCodeExecutionTool = {
  path: "Default",
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

