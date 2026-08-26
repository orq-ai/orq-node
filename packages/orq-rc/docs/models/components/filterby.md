# FilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: components.FilterBy1 }`

```typescript
const value: { [k: string]: components.FilterBy1 } = {};
```

### `components.FilterByAnd`

```typescript
const value: components.FilterByAnd = {
  and: [
    {
      "key": {
        nin: [],
      },
    },
    {},
    {},
  ],
};
```

### `components.FilterByOr`

```typescript
const value: components.FilterByOr = {
  or: [
    {
      "key": {
        nin: [
          true,
        ],
      },
    },
  ],
};
```

