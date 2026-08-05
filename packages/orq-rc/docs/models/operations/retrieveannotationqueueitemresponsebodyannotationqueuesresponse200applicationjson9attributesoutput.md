# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody91`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody91 =
    {
      id: "<id>",
      status: "incomplete",
      role: "assistant",
      content: [
        {
          type: "output_text",
          text: "<value>",
          annotations: [],
          logprobs: [
            {
              token: "<value>",
              logprob: 2478.6,
              bytes: [
                369201,
              ],
              topLogprobs: [],
            },
          ],
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody92`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody92 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "completed",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody93`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody93 =
    {
      id: "<id>",
      callId: "<id>",
      output: "<value>",
      status: "in_progress",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody94`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody94 =
    {
      id: "<id>",
      summary: [
        {
          type: "reasoning_text",
          text: "<value>",
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody95`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody95 =
    {
      id: "<id>",
      type: "<value>",
      status: "<value>",
    };
```

