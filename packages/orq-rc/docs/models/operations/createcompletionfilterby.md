# CreateCompletionFilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://dash.readme.com/project/orqai/v2.0/docs/searching-a-knowledge-base) for more information.


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

