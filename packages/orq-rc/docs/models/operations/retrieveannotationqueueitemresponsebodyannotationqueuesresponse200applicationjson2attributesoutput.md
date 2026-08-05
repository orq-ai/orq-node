# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson2AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody21`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody21 =
    {
      id: "<id>",
      status: "in_progress",
      role: "system",
      content: [
        {
          type: "input_video",
          videoUrl: "https://honored-wilderness.org/",
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody22`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody22 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "in_progress",
    };
```

### `operations.RetrieveAnnotationQueueItemOutput3`

```typescript
const value: operations.RetrieveAnnotationQueueItemOutput3 = {
  id: "<id>",
  callId: "<id>",
  output: "<value>",
  status: "incomplete",
};
```

### `operations.RetrieveAnnotationQueueItemOutput4`

```typescript
const value: operations.RetrieveAnnotationQueueItemOutput4 = {
  id: "<id>",
  summary: [
    {
      type: "input_file",
    },
  ],
};
```

### `operations.RetrieveAnnotationQueueItemOutput5`

```typescript
const value: operations.RetrieveAnnotationQueueItemOutput5 = {
  id: "<id>",
  type: "<value>",
  status: "<value>",
};
```

