# GetAllPromptsFilters


## Supported Types

### `operations.GetAllPromptsFilters1`

```typescript
const value: operations.GetAllPromptsFilters1 = {
  operator: "is",
  type: "single-value-array",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/opt/lib",
};
```

### `operations.GetAllPromptsFilters2`

```typescript
const value: operations.GetAllPromptsFilters2 = {
  operator: "contains",
  value: [
    "<value>",
  ],
  type: "boolean",
  options: [
    7064.71,
  ],
  name: "<value>",
  path: "/Applications",
};
```

### `operations.GetAllPromptsFilters3`

```typescript
const value: operations.GetAllPromptsFilters3 = {
  operator: "is_not_empty",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "string",
  name: "<value>",
  path: "/tmp",
};
```

### `operations.Filters4`

```typescript
const value: operations.Filters4 = {
  operator: "is_between",
  value: [
    3909.16,
  ],
  type: "boolean",
  name: "<value>",
  path: "/opt",
};
```

### `operations.Filters5`

```typescript
const value: operations.Filters5 = {
  operator: "starts_with",
  value: "<value>",
  type: "evaluator",
  name: "<value>",
  path: "/usr/include",
};
```

### `operations.Six`

```typescript
const value: operations.Six = {
  operator: "is_empty",
  type: "evaluator",
  options: [
    {
      name: "<value>",
      path: "/usr/obj",
      type: "number",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/usr/obj",
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  operator: "is",
  type: "single-value-array",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/usr/share",
      type: "string",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "json_schema",
      evaluatorOutputType: "enum",
    },
  ],
  name: "<value>",
  path: "/opt/share",
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  operator: "is",
  type: "string",
  name: "<value>",
  path: "/private",
};
```

