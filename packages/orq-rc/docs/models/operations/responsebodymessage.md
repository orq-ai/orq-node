# ResponseBodyMessage


## Supported Types

### `operations.RetrieveAnnotationQueueItemMessage1`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessage1 = {
  role: "expected_output",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

### `operations.RetrieveAnnotationQueueItemMessage2`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessage2 = {
  role: "system",
  content: "<value>",
};
```

### `operations.RetrieveAnnotationQueueItemMessage3`

```typescript
const value: operations.RetrieveAnnotationQueueItemMessage3 = {
  role: "system",
  url: "https://grown-window.biz/",
};
```

