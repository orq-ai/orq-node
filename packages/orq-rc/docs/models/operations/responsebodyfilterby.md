# ResponseBodyFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: operations.RetrieveAnnotationQueueItemFilterBy1 }`

```typescript
const value: { [k: string]: operations.RetrieveAnnotationQueueItemFilterBy1 } =
  {
    "key": {
      gt: 9635.68,
    },
  };
```

### `operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200And`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200And =
    {
      and: [
        {
          "key": {
            exists: false,
          },
        },
        {
          "key": {
            lte: 1961.85,
          },
        },
        {},
      ],
    };
```

### `operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200Or`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemFilterByAnnotationQueuesResponse200Or =
    {
      or: [
        {},
        {
          "key": {
            in: [
              4095.27,
            ],
          },
        },
        {
          "key": {
            ne: false,
          },
        },
      ],
    };
```

