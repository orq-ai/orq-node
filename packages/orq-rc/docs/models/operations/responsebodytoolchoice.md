# ResponseBodyToolChoice

How the model should select which tool (or tools) to use when generating a response. Can be a string (`none`, `auto`, `required`) or an object to force a specific tool.


## Supported Types

### `operations.RetrieveAnnotationQueueItemToolChoice1`

```typescript
const value: operations.RetrieveAnnotationQueueItemToolChoice1 = "auto";
```

### `operations.RetrieveAnnotationQueueItemToolChoice2`

```typescript
const value: operations.RetrieveAnnotationQueueItemToolChoice2 = {
  type: "web_search_preview_2025_03_11",
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

