# CreateBudgetRequestBody

Create budget configuration for API key, contact, or workspace


## Supported Types

### `operations.APIKeyBudget`

```typescript
const value: operations.APIKeyBudget = {
  type: "api_key",
  entityId:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6IjYxNGJiMTQ0LTE5NzgtNGMzNS05ODM1LWFkY2Q5NjM3ZmI2ZiIsImlzcyI6Im9ycSIsImlhdCI6MTc1NzA1NDE5Nn0...",
  period: "monthly",
  amount: 100,
};
```

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

