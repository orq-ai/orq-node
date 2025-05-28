# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.KnowledgeFilter1 }`

```typescript
const value: { [k: string]: operations.KnowledgeFilter1 } = {
  "key": {
    gt: 8696.99,
  },
};
```

### `operations.And`

```typescript
const value: operations.And = {
  and: [
    {
      "key": {
        nin: [
          1426.48,
        ],
      },
    },
  ],
};
```

### `operations.Or`

```typescript
const value: operations.Or = {
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

