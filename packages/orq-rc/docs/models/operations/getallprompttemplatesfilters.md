# GetAllPromptTemplatesFilters


## Supported Types

### `operations.GetAllPromptTemplatesFilters1`

```typescript
const value: operations.GetAllPromptTemplatesFilters1 = {
  type: "id",
  id: "<id>",
  path: "/private/var",
};
```

### `operations.GetAllPromptTemplatesFilters2`

```typescript
const value: operations.GetAllPromptTemplatesFilters2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.GetAllPromptTemplatesFilters3`

```typescript
const value: operations.GetAllPromptTemplatesFilters3 = {
  type: "string",
  operator: "contains",
  value: "<value>",
  path: "/bin",
};
```

### `operations.GetAllPromptTemplatesFilters4`

```typescript
const value: operations.GetAllPromptTemplatesFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/sbin",
};
```

