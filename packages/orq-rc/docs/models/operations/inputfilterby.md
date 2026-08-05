# InputFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse1 }`

```typescript
const value: {
  [k: string]:
    operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse1;
} = {};
```

### `operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONAnd`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONAnd =
    {
      and: [
        {
          "key": {
            eq: "<value>",
          },
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONOr`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONOr =
    {
      or: [
        {
          "key": {
            gte: 2465.01,
          },
        },
        {},
      ],
    };
```

