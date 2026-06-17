# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: components.One }`

```typescript
const value: { [k: string]: components.One } = {};
```

### `components.KnowledgeFilterAnd`

```typescript
const value: components.KnowledgeFilterAnd = {
  and: [
    {},
    {
      "key": {
        nin: [
          "<value>",
        ],
      },
    },
  ],
};
```

### `components.KnowledgeFilterOr`

```typescript
const value: components.KnowledgeFilterOr = {
  or: [
    {
      "key": {
        ne: true,
      },
    },
    {
      "key": {
        lte: 2414.33,
      },
    },
  ],
};
```

