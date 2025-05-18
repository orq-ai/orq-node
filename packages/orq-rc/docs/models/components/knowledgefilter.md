# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: components.One }`

```typescript
const value: { [k: string]: components.One } = {
  "key": {
    dollarNe: 2685.96,
  },
};
```

### `components.KnowledgeFilterDollarAnd`

```typescript
const value: components.KnowledgeFilterDollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarLt: 9164.74,
      },
    },
  ],
};
```

### `components.KnowledgeFilterDollarOr`

```typescript
const value: components.KnowledgeFilterDollarOr = {
  dollarOr: [
    {
      "key": {
        dollarGte: 1813.97,
      },
    },
  ],
};
```

