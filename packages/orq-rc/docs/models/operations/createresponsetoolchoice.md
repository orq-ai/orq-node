# CreateResponseToolChoice

How the model should select which tool (or tools) to use when generating a response. Can be a string (`none`, `auto`, `required`) or an object to force a specific tool.


## Supported Types

### `operations.CreateResponseToolChoice1`

```typescript
const value: operations.CreateResponseToolChoice1 = "auto";
```

### `operations.CreateResponseToolChoice2`

```typescript
const value: operations.CreateResponseToolChoice2 = {
  type: "image_generation",
};
```

### `operations.ToolChoice3`

```typescript
const value: operations.ToolChoice3 = {
  type: "function",
  name: "<value>",
};
```

### `operations.ToolChoice4`

```typescript
const value: operations.ToolChoice4 = {
  type: "mcp",
  serverLabel: "<value>",
};
```

