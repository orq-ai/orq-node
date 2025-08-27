# PostV2ProxyCompletionsFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://dash.readme.com/project/orqai/v2.0/docs/searching-a-knowledge-base) for more information.


## Supported Types

### `{ [k: string]: operations.PostV2ProxyCompletionsFilterBy1 }`

```typescript
const value: { [k: string]: operations.PostV2ProxyCompletionsFilterBy1 } = {};
```

### `operations.PostV2ProxyCompletionsFilterByAnd`

```typescript
const value: operations.PostV2ProxyCompletionsFilterByAnd = {
  and: [
    {},
    {
      "key": {
        ne: false,
      },
    },
    {
      "key": {
        gt: 459.91,
      },
    },
  ],
};
```

### `operations.PostV2ProxyCompletionsFilterByOr`

```typescript
const value: operations.PostV2ProxyCompletionsFilterByOr = {
  or: [],
};
```

