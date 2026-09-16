# DeploymentGetConfigKnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.KnowledgeFilter1 }`

```typescript
const value: { [k: string]: operations.KnowledgeFilter1 } = {};
```

### `operations.DeploymentGetConfigKnowledgeFilterAnd`

```typescript
const value: operations.DeploymentGetConfigKnowledgeFilterAnd = {
  and: [
    {},
  ],
};
```

### `operations.DeploymentGetConfigKnowledgeFilterOr`

```typescript
const value: operations.DeploymentGetConfigKnowledgeFilterOr = {
  or: [
    {
      "key": {
        gt: 3522.44,
      },
    },
    {},
    {},
  ],
};
```

