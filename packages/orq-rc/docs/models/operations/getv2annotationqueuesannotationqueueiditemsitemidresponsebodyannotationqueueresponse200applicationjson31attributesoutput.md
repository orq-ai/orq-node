# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson31AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody311`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody311 =
    {
      id: "<id>",
      status: "in_progress",
      role: "system",
      content: [],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody312`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody312 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "incomplete",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody313`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody313 =
    {
      id: "<id>",
      callId: "<id>",
      output: [],
      status: "incomplete",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody314`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody314 =
    {
      id: "<id>",
      summary: [
        {
          type: "output_text",
          text: "<value>",
          annotations: [
            {
              type: "url_citation",
              url: "https://stark-instruction.name/",
              startIndex: 460441,
              endIndex: 857362,
              title: "<value>",
            },
          ],
          logprobs: [
            {
              token: "<value>",
              logprob: 6072.35,
              bytes: [
                395263,
              ],
              topLogprobs: [],
            },
          ],
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody315`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody315 =
    {
      id: "<id>",
      type: "<value>",
      status: "<value>",
    };
```

