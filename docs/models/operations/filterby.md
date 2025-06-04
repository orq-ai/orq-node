# FilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://dash.readme.com/project/orqai/v2.0/docs/searching-a-knowledge-base) for more information.


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
        nin: [],
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
        nin: [
          true,
        ],
      },
    },
  ],
};
```

