# Call

## Example Usage

```typescript
import { Call } from "@orq-ai/node/models/operations";

let value: Call = {};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *string*                     | :heavy_minus_sign:           | Tool call identifier         |
| `arguments`                  | *any*                        | :heavy_minus_sign:           | Arguments passed to the tool |
| `result`                     | *any*                        | :heavy_minus_sign:           | Result returned by the tool  |