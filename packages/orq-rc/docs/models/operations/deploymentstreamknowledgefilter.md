# DeploymentStreamKnowledgeFilter

A filter to apply to the knowledge base chunk metadata when using  knowledge bases in the deployment.


## Supported Types

### `{ [k: string]: operations.DeploymentStreamKnowledgeFilter1 }`

```typescript
const value: { [k: string]: operations.DeploymentStreamKnowledgeFilter1 } = {
  "key": {
    dollarNin: [
      3892.14,
    ],
  },
};
```

### `operations.DeploymentStreamKnowledgeFilterDollarAnd`

```typescript
const value: operations.DeploymentStreamKnowledgeFilterDollarAnd = {
  dollarAnd: [
    {
      "key": {
        dollarExists: false,
      },
    },
  ],
};
```

### `operations.DeploymentStreamKnowledgeFilterDollarOr`

```typescript
const value: operations.DeploymentStreamKnowledgeFilterDollarOr = {
  dollarOr: [
    {
      "key": {
        dollarLt: 1314.67,
      },
    },
  ],
};
```

