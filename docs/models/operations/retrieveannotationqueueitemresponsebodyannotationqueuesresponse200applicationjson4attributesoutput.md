# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson4AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse1 = {
    id: "<id>",
    status: "completed",
    role: "user",
    content: [
      {
        type: "input_image",
        imageUrl: "https://infamous-fowl.com/",
        detail: "auto",
      },
    ],
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse2 = {
    id: "<id>",
    callId: "<id>",
    name: "<value>",
    arguments: "<value>",
    status: "incomplete",
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse3`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse3 = {
    id: "<id>",
    callId: "<id>",
    output: [
      {
        type: "input_image",
        imageUrl: "https://equatorial-babushka.biz",
        detail: "auto",
      },
    ],
    status: "incomplete",
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse4`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse4 = {
    id: "<id>",
    summary: [
      {
        type: "summary_text",
        text: "<value>",
      },
    ],
  };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse5`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse5 = {
    id: "<id>",
    type: "<value>",
    status: "<value>",
  };
```

