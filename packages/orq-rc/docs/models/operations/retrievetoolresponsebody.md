# RetrieveToolResponseBody

Successfully retrieved the tool.


## Supported Types

### `operations.RetrieveToolResponseBody1`

```typescript
const value: operations.RetrieveToolResponseBody1 = {
  path: "Customer Service/Billing/Refund",
  key: "<key>",
  description: "lively evil yuck hefty huzzah",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  status: "live",
  versionHash: "<value>",
  type: "function",
  function: {
    name: "<value>",
  },
};
```

### `operations.RetrieveToolResponseBody2`

```typescript
const value: operations.RetrieveToolResponseBody2 = {
  path: "Customer Service/Billing/Refund",
  key: "<key>",
  description: "birth drat t-shirt wilderness apropos",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  status: "published",
  versionHash: "<value>",
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
    },
  },
};
```

### `operations.RetrieveToolResponseBody3`

```typescript
const value: operations.RetrieveToolResponseBody3 = {
  path: "Customer Service/Billing/Refund",
  key: "<key>",
  description: "drat er live between below who quarrel",
  projectId: "<id>",
  workspaceId: "<id>",
  created: "<value>",
  updated: "<value>",
  status: "published",
  versionHash: "<value>",
  type: "orq_http",
  http: {
    blueprint: {
      url: "https://unimportant-ignorance.org/",
      method: "PUT",
    },
  },
};
```

