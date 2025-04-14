# CreateToolRequestBody

The tool to create


## Supported Types

### `operations.RequestBody1`

```typescript
const value: operations.RequestBody1 = {
  path: "Customer Service/Billing/Refund",
  key: "<key>",
  description:
    "questionable utter entomb sick zowie practical superb coin shyly",
  status: "live",
  versionHash: "<value>",
  type: "function",
  function: {
    name: "<value>",
  },
};
```

### `operations.RequestBody2`

```typescript
const value: operations.RequestBody2 = {
  path: "Customer Service/Billing/Refund",
  key: "<key>",
  description:
    "daintily blah quarrelsome quicker acidic nor ouch if supposing meanwhile",
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

### `operations.RequestBody3`

```typescript
const value: operations.RequestBody3 = {
  path: "Customer Service/Billing/Refund",
  key: "<key>",
  description: "lamp burgeon enchanted aside bitterly",
  status: "pending",
  versionHash: "<value>",
  type: "orq_http",
  http: {
    blueprint: {
      url: "https://sad-bandwidth.org",
      method: "POST",
    },
  },
};
```

