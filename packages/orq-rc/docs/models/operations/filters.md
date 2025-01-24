# Filters


## Supported Types

### `operations.Filters1`

```typescript
const value: operations.Filters1 = {
  operator: "is_not_empty",
  type: "date",
  options: [
    5413.81,
  ],
  name: "<value>",
  path: "/var/log",
};
```

### `operations.Filters2`

```typescript
const value: operations.Filters2 = {
  operator: "is_not_empty",
  value: [
    "<value>",
  ],
  type: "evaluator",
  options: [
    360.33,
  ],
  name: "<value>",
  path: "/etc/ppp",
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
  type: "single-value-array",
  name: "<value>",
  path: "/etc/periodic",
};
```

### `operations.Filters4`

```typescript
const value: operations.Filters4 = {
  operator: "is_empty",
  value: 9078.76,
  type: "multi-value-array",
  name: "<value>",
  path: "/Users",
};
```

### `operations.Filters5`

```typescript
const value: operations.Filters5 = {
  operator: "does_not_contain",
  value: "<value>",
  type: "string",
  name: "<value>",
  path: "/usr/X11R6",
};
```

### `operations.Six`

```typescript
const value: operations.Six = {
  operator: "is",
  type: "string",
  options: [
    {
      name: "<value>",
      path: "/boot/defaults",
      type: "evaluator",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/usr/lib",
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  operator: "is_between",
  type: "date",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/mnt",
      type: "evaluator",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "json_schema",
      evaluatorOutputType: "number",
    },
  ],
  name: "<value>",
  path: "/opt/bin",
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  operator: "is",
  type: "evaluator",
  name: "<value>",
  path: "/etc/ppp",
};
```

