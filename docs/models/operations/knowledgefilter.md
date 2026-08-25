# KnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.One }`

```typescript
const value: { [k: string]: operations.One } = {
  "key": {
    gt: 4428.74,
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
          true,
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
        ne: 551.63,
      },
    },
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

