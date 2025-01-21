# GetAllPromptsPromptsFilters


## Supported Types

### `operations.GetAllPromptsFiltersPrompts1`

```typescript
const value: operations.GetAllPromptsFiltersPrompts1 = {
  type: "id",
  id: "<id>",
  path: "/var/yp",
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
  operator: "equals",
  value: "<value>",
  path: "/opt/bin",
};
```

### `operations.GetAllPromptsFiltersPrompts4`

```typescript
const value: operations.GetAllPromptsFiltersPrompts4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/System",
};
```

