# PostV2TracesSessionsCountRequestFilters


## Supported Types

### `operations.PostV2TracesSessionsCountFiltersRequest1`

```typescript
const value: operations.PostV2TracesSessionsCountFiltersRequest1 = {
  type: "id",
  id: "<id>",
  path: "/usr/include",
};
```

### `operations.PostV2TracesSessionsCountFiltersRequest2`

```typescript
const value: operations.PostV2TracesSessionsCountFiltersRequest2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.PostV2TracesSessionsCountFiltersRequest3`

```typescript
const value: operations.PostV2TracesSessionsCountFiltersRequest3 = {
  type: "string",
  operator: "contains",
  value: "<value>",
  path: "/System",
};
```

### `operations.PostV2TracesSessionsCountFiltersRequest4`

```typescript
const value: operations.PostV2TracesSessionsCountFiltersRequest4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/usr/local/src",
};
```

