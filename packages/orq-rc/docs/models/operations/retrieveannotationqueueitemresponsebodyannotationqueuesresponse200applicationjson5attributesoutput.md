# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson5AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2001`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2001 = {
    id: "<id>",
    status: "incomplete",
    role: "developer",
    content: [],
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2002`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2002 = {
    id: "<id>",
    callId: "<id>",
    name: "<value>",
    arguments: "<value>",
    status: "in_progress",
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2003`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2003 = {
    id: "<id>",
    callId: "<id>",
    output: "<value>",
    status: "in_progress",
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2004`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2004 = {
    id: "<id>",
    summary: [
      {
        type: "input_image",
        imageUrl: "https://front-siege.info",
        detail: "high",
      },
    ],
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2005`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2005 = {
    id: "<id>",
    type: "<value>",
    status: "<value>",
  };
```

