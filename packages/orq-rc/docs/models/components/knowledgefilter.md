# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: components.One }`

```typescript
const value: { [k: string]: components.One } = {
  "key": {
    ne: 2685.96,
  },
};
```

### `components.KnowledgeFilterAnd`

```typescript
const value: components.KnowledgeFilterAnd = {
  and: [
    {
      "key": {
        lt: 5617.19,
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
        nin: [
          false,
        ],
      },
    },
  ],
};
```

