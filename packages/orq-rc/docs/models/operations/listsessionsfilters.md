# ListSessionsFilters


## Supported Types

### `operations.ListSessionsFilters1`

```typescript
const value: operations.ListSessionsFilters1 = {
  type: "id",
  id: "<id>",
  path: "/opt/bin",
};
```

### `operations.ListSessionsFilters2`

```typescript
const value: operations.ListSessionsFilters2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.ListSessionsFilters3`

```typescript
const value: operations.ListSessionsFilters3 = {
  type: "string",
  operator: "contains",
  value: "<value>",
  path: "/private/var",
};
```

### `operations.ListSessionsFilters4`

```typescript
const value: operations.ListSessionsFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/sys",
};
```

