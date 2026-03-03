# ~~CreateCompletionInputs~~

@deprecated Use top-level `variables` field instead. Values to replace in the prompt messages using {{variableName}} syntax.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


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

