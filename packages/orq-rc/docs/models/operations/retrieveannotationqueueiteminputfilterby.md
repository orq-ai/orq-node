# RetrieveAnnotationQueueItemInputFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: operations.RetrieveAnnotationQueueItemFilterByAnnotationQueues1 }`

```typescript
const value: {
  [k: string]: operations.RetrieveAnnotationQueueItemFilterByAnnotationQueues1;
} = {
  "key": {
    ne: "<value>",
  },
};
```

### `operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyAnd`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyAnd =
    {
      and: [
        {
          "key": {
            exists: true,
          },
        },
        {
          "key": {
            exists: true,
          },
        },
        {
          "key": {
            exists: true,
          },
        },
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyOr`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200ApplicationJSONResponseBodyOr =
    {
      or: [
        {
          "key": {
            gt: 1770.81,
          },
        },
        {},
      ],
    };
```

