# GetAllPromptsFilters


## Supported Types

### `operations.GetAllPromptsFilters1`

```typescript
const value: operations.GetAllPromptsFilters1 = {
  type: "id",
  id: "<id>",
  path: "/selinux",
};
```

### `operations.GetAllPromptsFilters2`

```typescript
const value: operations.GetAllPromptsFilters2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.GetAllPromptsFilters3`

```typescript
const value: operations.GetAllPromptsFilters3 = {
  type: "string",
  operator: "contains",
  value: "<value>",
  path: "/var/log",
};
```

### `operations.Filters4`

```typescript
const value: operations.Filters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/rescue",
};
```

