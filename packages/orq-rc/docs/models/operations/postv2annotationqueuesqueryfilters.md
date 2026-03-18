# PostV2AnnotationQueuesQueryFilters


## Supported Types

### `operations.Filters1`

```typescript
const value: operations.Filters1 = {
  operator: "is_empty",
  id: "<id>",
  type: "string",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/Applications",
};
```

### `operations.Filters2`

```typescript
const value: operations.Filters2 = {
  operator: "contains",
  value: [],
  options: [],
  name: "<value>",
  path: "/usr/local/bin",
  type: "multi-value-array",
  id: "<id>",
};
```

### `operations.Filters3`

```typescript
const value: operations.Filters3 = {
  operator: "is_on_or_before",
  value: {
    criteria: null,
    mode: "datetime",
  },
  id: "<id>",
  type: "number",
  name: "<value>",
  path: "/sbin",
};
```

### `operations.Filters4`

```typescript
const value: operations.Filters4 = {
  operator: "is_greater_than",
  value: [],
  id: "<id>",
  type: "number",
  name: "<value>",
  path: "/srv",
};
```

### `operations.Filters5`

```typescript
const value: operations.Filters5 = {
  operator: "contains",
  value: null,
  id: "<id>",
  type: "evaluator",
  name: "<value>",
  path: "/etc/ppp",
};
```

### `operations.Six`

```typescript
const value: operations.Six = {
  operator: "is_greater_than_or_equal_to",
  id: "<id>",
  type: "evaluator",
  options: [],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/Applications",
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  operator: "is_not_equal",
  id: "<id>",
  type: "multi-value-array",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/lost+found",
      type: "string",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "llm_eval",
      evaluatorOutputType: "boolean",
    },
  ],
  name: "<value>",
  path: "/private/tmp",
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  operator: "is",
  id: "<id>",
  type: "object",
  name: "<value>",
  path: "/media",
};
```

