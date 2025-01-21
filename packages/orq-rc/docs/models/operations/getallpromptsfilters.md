# GetAllPromptsFilters


## Supported Types

### `operations.GetAllPromptsFilters1`

```typescript
const value: operations.GetAllPromptsFilters1 = {
  operator: "is_not_empty",
  type: "date",
  options: [
    7327.49,
  ],
  name: "<value>",
  path: "/home",
};
```

### `operations.GetAllPromptsFilters2`

```typescript
const value: operations.GetAllPromptsFilters2 = {
  operator: "contains",
  value: [
    "<value>",
  ],
  type: "string",
  options: [
    8626.25,
  ],
  name: "<value>",
  path: "/Network",
};
```

### `operations.GetAllPromptsFilters3`

```typescript
const value: operations.GetAllPromptsFilters3 = {
  operator: "is_on_or_before",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "multi-value-array",
  name: "<value>",
  path: "/usr/ports",
};
```

### `operations.GetAllPromptsFilters4`

```typescript
const value: operations.GetAllPromptsFilters4 = {
  operator: "is_less_than_or_equal_to",
  value: 7971.33,
  type: "evaluator",
  name: "<value>",
  path: "/mnt",
};
```

### `operations.GetAllPromptsFilters5`

```typescript
const value: operations.GetAllPromptsFilters5 = {
  operator: "is_empty",
  value: "<value>",
  type: "evaluator",
  name: "<value>",
  path: "/usr/obj",
};
```

### `operations.Filters6`

```typescript
const value: operations.Filters6 = {
  operator: "contains",
  type: "evaluator",
  options: [
    {
      name: "<value>",
      path: "/etc/mail",
      type: "evaluator",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/proc",
};
```

### `operations.Filters7`

```typescript
const value: operations.Filters7 = {
  operator: "is_not_equal",
  type: "evaluator",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/Applications",
      type: "string",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "ragas",
      evaluatorOutputType: "enum",
    },
  ],
  name: "<value>",
  path: "/home/user/dir",
};
```

### `operations.Filters8`

```typescript
const value: operations.Filters8 = {
  operator: "is",
  type: "boolean",
  name: "<value>",
  path: "/etc/periodic",
};
```

