# Filters


## Supported Types

### `operations.Filters1`

```typescript
const value: operations.Filters1 = {
  type: "id",
  id: "<id>",
  path: "/var/yp",
};
```

### `operations.Filters2`

```typescript
const value: operations.Filters2 = {
  type: "search",
  value: "<value>",
  searchPaths: [
    "<value>",
  ],
};
```

### `operations.Filters3`

```typescript
const value: operations.Filters3 = {
  type: "string",
  operator: "contains",
  value: "<value>",
  path: "/private/tmp",
};
```

### `operations.Four`

```typescript
const value: operations.Four = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/opt/bin",
};
```
