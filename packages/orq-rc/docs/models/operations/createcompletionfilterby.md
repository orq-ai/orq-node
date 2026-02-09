# CreateCompletionFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: operations.CreateCompletionFilterBy1 }`

```typescript
const value: { [k: string]: operations.CreateCompletionFilterBy1 } = {};
```

### `operations.CreateCompletionFilterByAnd`

```typescript
const value: operations.CreateCompletionFilterByAnd = {
  and: [
    {},
    {},
    {
      "key": {
        eq: 5887.79,
      },
    },
  ],
};
```

### `operations.CreateCompletionFilterByOr`

```typescript
const value: operations.CreateCompletionFilterByOr = {
  or: [
    {},
  ],
};
```

