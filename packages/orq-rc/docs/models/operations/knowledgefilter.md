# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.KnowledgeFilter1 }`

```typescript
const value: { [k: string]: operations.KnowledgeFilter1 } = {};
```

### `operations.And`

```typescript
const value: operations.And = {
  and: [
    {
      "key": {
        exists: false,
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
        ne: 551.63,
      },
    },
    {
      "key": {
        exists: false,
      },
    },
  ],
};
```

