# ResponseFormat

An object specifying the format that the model must output


## Supported Types

### `operations.ResponseFormat1`

```typescript
const value: operations.ResponseFormat1 = {
  type: "text",
};
```

### `operations.ResponseFormat2`

```typescript
const value: operations.ResponseFormat2 = {
  type: "json_object",
};
```

### `operations.ResponseFormat3`

```typescript
const value: operations.ResponseFormat3 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

