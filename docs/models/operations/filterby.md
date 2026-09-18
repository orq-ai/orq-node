# FilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/ai-studio/ai-engineering/knowledge-bases#search-a-knowledge-base) for more information.


## Supported Types

### `{ [k: string]: operations.FilterBy1 }`

```typescript
const value: { [k: string]: operations.FilterBy1 } = {};
```

### `operations.FilterByAnd`

```typescript
const value: operations.FilterByAnd = {
  and: [
    {
      "key": {
        in: [],
      },
    },
    {},
    {},
  ],
};
```

### `operations.FilterByOr`

```typescript
const value: operations.FilterByOr = {
  or: [
    {
      "key": {
        in: [
          true,
        ],
      },
    },
  ],
};
```

