# DeploymentStreamKnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.KnowledgeFilter1 }`

```typescript
const value: { [k: string]: operations.KnowledgeFilter1 } = {};
```

### `operations.DeploymentStreamKnowledgeFilterAnd`

```typescript
const value: operations.DeploymentStreamKnowledgeFilterAnd = {
  and: [],
};
```

### `operations.DeploymentStreamKnowledgeFilterOr`

```typescript
const value: operations.DeploymentStreamKnowledgeFilterOr = {
  or: [
    {},
  ],
};
```

