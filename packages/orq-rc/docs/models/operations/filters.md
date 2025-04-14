# Filters


## Supported Types

### `operations.Filters1`

```typescript
const value: operations.Filters1 = {
  operator: "is_not_empty",
  type: "boolean",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/private/tmp",
};
```

### `operations.Filters2`

```typescript
const value: operations.Filters2 = {
  operator: "is_empty",
  value: [
    "<value>",
  ],
  type: "single-value-array",
  options: [
    6371.93,
  ],
  name: "<value>",
  path: "/usr/libexec",
};
```

### `operations.Filters3`

```typescript
const value: operations.Filters3 = {
  operator: "is_between",
  value: {
    criteria: {},
    mode: "datetime",
  },
  type: "string",
  name: "<value>",
  path: "/var",
};
```

### `operations.Filters4`

```typescript
const value: operations.Filters4 = {
  operator: "is_not_empty",
  value: [
    6893.26,
  ],
  type: "single-value-array",
  name: "<value>",
  path: "/rescue",
};
```

### `operations.Filters5`

```typescript
const value: operations.Filters5 = {
  operator: "is_empty",
  value: "<value>",
  type: "string",
  name: "<value>",
  path: "/usr/bin",
};
```

### `operations.Filters6`

```typescript
const value: operations.Filters6 = {
  operator: "starts_with",
  type: "boolean",
  options: [
    {
      name: "<value>",
      path: "/System",
      type: "multi-value-array",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/usr/lib",
};
```

### `operations.Filters7`

```typescript
const value: operations.Filters7 = {
  operator: "is",
  type: "date",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/opt/bin",
      type: "single-value-array",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "python_eval",
      evaluatorOutputType: "number",
    },
  ],
  name: "<value>",
  path: "/var/tmp",
};
```

### `operations.Filters8`

```typescript
const value: operations.Filters8 = {
  operator: "is",
  type: "object",
  name: "<value>",
  path: "/usr/sbin",
};
```

