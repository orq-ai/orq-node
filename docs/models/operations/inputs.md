# Inputs

Values to replace in the prompt messages using {{variableName}} syntax


## Supported Types

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "customer_name": "John Smith",
  "product_name": "Premium Plan",
  "issue_type": "billing",
};
```

### `operations.Inputs2[]`

```typescript
const value: operations.Inputs2[] = [
  {
    key: "<key>",
  },
];
```

