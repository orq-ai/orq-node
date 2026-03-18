# ResponseBodyInput


## Supported Types

### `operations.Input1`

```typescript
const value: operations.Input1 = {
  messages: [],
  model: "Beetle",
  fallbacks: [
    {
      model: "openai/gpt-4o-mini",
    },
  ],
  retry: {
    onCodes: [
      429,
      500,
      502,
      503,
      504,
    ],
  },
  cache: {
    ttl: 3600,
    type: "exact_match",
  },
  loadBalancer: {
    type: "weight_based",
    models: [
      {
        model: "openai/gpt-4o",
        weight: 0.7,
      },
    ],
  },
  timeout: {
    callTimeout: 30000,
  },
  stream: true,
};
```

### `operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInput2`

```typescript
const value:
  operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInput2 = {
    messages: [],
    model: "Mercielago",
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    },
    timeout: {
      callTimeout: 30000,
    },
    stream: false,
  };
```

