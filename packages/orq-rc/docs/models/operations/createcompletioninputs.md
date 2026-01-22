# CreateCompletionInputs

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

### `operations.CreateCompletionInputs2[]`

```typescript
const value: operations.CreateCompletionInputs2[] = [
  {
    key: "<key>",
  },
];
```

