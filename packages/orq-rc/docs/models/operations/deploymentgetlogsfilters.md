# DeploymentGetLogsFilters


## Supported Types

### `operations.DeploymentGetLogsFilters1`

```typescript
const value: operations.DeploymentGetLogsFilters1 = {
  type: "id",
  id: "<id>",
  path: "/lib",
};
```

### `operations.DeploymentGetLogsFilters2`

```typescript
const value: operations.DeploymentGetLogsFilters2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.DeploymentGetLogsFilters3`

```typescript
const value: operations.DeploymentGetLogsFilters3 = {
  type: "string",
  operator: "equals",
  value: "<value>",
  path: "/opt/bin",
};
```

### `operations.DeploymentGetLogsFilters4`

```typescript
const value: operations.DeploymentGetLogsFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/private",
};
```

