# GetAllPromptsPromptsFilters


## Supported Types

### `operations.GetAllPromptsFiltersPrompts1`

```typescript
const value: operations.GetAllPromptsFiltersPrompts1 = {
  type: "id",
  id: "<id>",
  path: "/media",
};
```

### `operations.GetAllPromptsFiltersPrompts2`

```typescript
const value: operations.GetAllPromptsFiltersPrompts2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.GetAllPromptsFiltersPrompts3`

```typescript
const value: operations.GetAllPromptsFiltersPrompts3 = {
  type: "string",
  operator: "contains",
  value: "<value>",
  path: "/etc/periodic",
};
```

### `operations.GetAllPromptsFilters4`

```typescript
const value: operations.GetAllPromptsFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/lib",
};
```

