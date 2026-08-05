# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson21AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody211`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody211 =
    {
      id: "<id>",
      status: "in_progress",
      role: "assistant",
      content: [
        {
          type: "input_image",
          imageUrl: "https://wretched-dusk.net/",
          detail: "auto",
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody212`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody212 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "in_progress",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody213`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody213 =
    {
      id: "<id>",
      callId: "<id>",
      output: [],
      status: "completed",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody214`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody214 =
    {
      id: "<id>",
      summary: [
        {
          type: "output_text",
          text: "<value>",
          annotations: [],
          logprobs: [
            {
              token: "<value>",
              logprob: 1604.27,
              bytes: [
                228929,
              ],
              topLogprobs: [],
            },
          ],
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody215`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody215 =
    {
      id: "<id>",
      type: "<value>",
      status: "<value>",
    };
```

