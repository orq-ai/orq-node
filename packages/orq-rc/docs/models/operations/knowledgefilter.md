# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.KnowledgeFilter1 }`

```typescript
const value: { [k: string]: operations.KnowledgeFilter1 } = {
  "key": {
    dollarGt: 8696.99,
  },
};
```

### `operations.DollarAnd`

```typescript
const value: operations.DollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarExists: false,
      },
    },
  ],
};
```

### `operations.DollarOr`

```typescript
const value: operations.DollarOr = {
  dollarOr: [
    {
      "key": {
        dollarIn: [
          3802.48,
        ],
      },
    },
  ],
};
```

