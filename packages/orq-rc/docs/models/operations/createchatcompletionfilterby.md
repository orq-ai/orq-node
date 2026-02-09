# CreateChatCompletionFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: operations.CreateChatCompletionFilterBy1 }`

```typescript
const value: { [k: string]: operations.CreateChatCompletionFilterBy1 } = {};
```

### `operations.CreateChatCompletionFilterByAnd`

```typescript
const value: operations.CreateChatCompletionFilterByAnd = {
  and: [
    {},
    {
      "key": {
        in: [],
      },
    },
    {},
  ],
};
```

### `operations.CreateChatCompletionFilterByOr`

```typescript
const value: operations.CreateChatCompletionFilterByOr = {
  or: [
    {},
    {
      "key": {
        gte: 9082.23,
      },
    },
  ],
};
```

