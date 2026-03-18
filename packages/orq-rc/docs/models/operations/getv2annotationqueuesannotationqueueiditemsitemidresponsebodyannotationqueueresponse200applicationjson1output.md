# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson1Output

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody11`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody11 =
    {
      id: "<id>",
      status: "completed",
      role: "user",
      content: [
        {
          type: "input_text",
          text: "<value>",
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody12`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody12 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "in_progress",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody13`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody13 =
    {
      id: "<id>",
      callId: "<id>",
      output: [
        {
          type: "input_image",
          imageUrl: "https://happy-go-lucky-duster.name",
          detail: "high",
        },
      ],
      status: "incomplete",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody14`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody14 =
    {
      id: "<id>",
      summary: [],
    };
```

### `operations.Output5`

```typescript
const value: operations.Output5 = {
  id: "<id>",
  type: "<value>",
  status: "<value>",
};
```

