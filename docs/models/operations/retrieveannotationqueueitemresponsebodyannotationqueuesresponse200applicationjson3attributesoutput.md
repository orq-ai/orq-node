# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson3AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody31`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody31 =
    {
      id: "<id>",
      status: "in_progress",
      role: "assistant",
      content: [],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody32`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody32 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "in_progress",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueues3`

```typescript
const value: operations.RetrieveAnnotationQueueItemOutputAnnotationQueues3 = {
  id: "<id>",
  callId: "<id>",
  output: [
    {
      type: "input_image",
      imageUrl: "https://irresponsible-gift.org",
      detail: "low",
    },
  ],
  status: "in_progress",
};
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueues4`

```typescript
const value: operations.RetrieveAnnotationQueueItemOutputAnnotationQueues4 = {
  id: "<id>",
  summary: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueues5`

```typescript
const value: operations.RetrieveAnnotationQueueItemOutputAnnotationQueues5 = {
  id: "<id>",
  type: "<value>",
  status: "<value>",
};
```

