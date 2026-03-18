# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson27AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody271`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody271 =
    {
      id: "<id>",
      status: "completed",
      role: "system",
      content: [],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody272`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody272 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "completed",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody273`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody273 =
    {
      id: "<id>",
      callId: "<id>",
      output: "<value>",
      status: "incomplete",
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody274`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody274 =
    {
      id: "<id>",
      summary: [
        {
          type: "output_text",
          text: "<value>",
          annotations: [
            {
              type: "url_citation",
              url: "https://crafty-godfather.com",
              startIndex: 408469,
              endIndex: 97473,
              title: "<value>",
            },
          ],
          logprobs: [
            {
              token: "<value>",
              logprob: 1153.48,
              bytes: [
                707355,
                476586,
                19361,
              ],
              topLogprobs: [],
            },
          ],
        },
      ],
    };
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody275`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody275 =
    {
      id: "<id>",
      type: "<value>",
      status: "<value>",
    };
```

