# ResponseBodyToolChoice

How the model should select which tool (or tools) to use when generating a response. Can be a string (`none`, `auto`, `required`) or an object to force a specific tool.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice1`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice1 =
    "auto";
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice2`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice2 = {
    type: "code_interpreter",
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice3`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice3 = {
    type: "function",
    name: "<value>",
  };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice4`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice4 = {
    type: "mcp",
    serverLabel: "<value>",
  };
```

