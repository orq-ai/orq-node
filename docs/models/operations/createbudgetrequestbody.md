# CreateBudgetRequestBody

Create budget configuration for contact or workspace


## Supported Types

### `operations.ContactBudget`

```typescript
const value: operations.ContactBudget = {
  type: "contact",
  entityId: "user_123",
  period: "monthly",
  amount: 250,
};
```

### `operations.WorkspaceBudget`

```typescript
const value: operations.WorkspaceBudget = {
  type: "workspace",
  period: "monthly",
  amount: 250,
};
```

