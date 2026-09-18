# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: components.KnowledgeFilter1 }`

```typescript
const value: { [k: string]: components.KnowledgeFilter1 } = {};
```

### `components.KnowledgeFilterAnd`

```typescript
const value: components.KnowledgeFilterAnd = {
  and: [
    {},
    {
      "key": {
        in: [
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
        eq: true,
      },
    },
    {
      "key": {
        lt: 2414.33,
      },
    },
  ],
};
```

