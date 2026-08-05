# Structured

## Example Usage

```typescript
import { Structured } from "@orq-ai/node/models/operations";

let value: Structured = {
  type: "structured",
  value: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `type`                | *"structured"*        | :heavy_check_mark:    | N/A                   |
| `value`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |