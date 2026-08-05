# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson6AttributesOutput

An item representing a message, tool call, tool output, reasoning, or other response element.


## Supported Types

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson1 =
    {
      id: "<id>",
      status: "completed",
      role: "developer",
      content: [],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson2`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson2 =
    {
      id: "<id>",
      callId: "<id>",
      name: "<value>",
      arguments: "<value>",
      status: "in_progress",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson3`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson3 =
    {
      id: "<id>",
      callId: "<id>",
      output: "<value>",
      status: "completed",
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson4`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson4 =
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
              logprob: 1103.72,
              bytes: [
                993888,
                825281,
              ],
              topLogprobs: [
                {
                  token: "<value>",
                  logprob: 1650.9,
                  bytes: [
                    814913,
                    984826,
                    666270,
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson5`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJson5 =
    {
      id: "<id>",
      type: "<value>",
      status: "<value>",
    };
```

