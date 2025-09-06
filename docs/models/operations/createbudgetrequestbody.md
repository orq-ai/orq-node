# CreateBudgetRequestBody

Create budget configuration for contact or workspace


## Supported Types

### `operations.RequestBody1`

```typescript
const value: operations.RequestBody1 = {
  type: "contact",
  entityId: "user_123",
  period: "monthly",
  amount: 250,
};
```

### `operations.RequestBody2`

```typescript
const value: operations.RequestBody2 = {
  type: "workspace",
  period: "monthly",
  amount: 250,
};
```

