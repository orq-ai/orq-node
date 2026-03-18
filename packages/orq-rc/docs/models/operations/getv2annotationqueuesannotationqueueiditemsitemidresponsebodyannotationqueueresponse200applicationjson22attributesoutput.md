# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson22AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody221`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody221 =
    {
      id: "<id>",
      status: "in_progress",
      role: "assistant",
      content: [
        {
          type: "refusal",
          refusal: "<value>",
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody222`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody222 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "incomplete",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody223`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody223 =
    {
      id: "<id>",
      callId: "<id>",
      output: [
        {
          type: "input_image",
          imageUrl: "https://guilty-obedience.com",
          detail: "low",
        },
      ],
      status: "completed",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody224`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody224 =
    {
      id: "<id>",
      summary: [
        {
          type: "input_text",
          text: "<value>",
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody225`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody225 =
    {
      id: "<id>",
      type: "<value>",
      status: "<value>",
    };
```

