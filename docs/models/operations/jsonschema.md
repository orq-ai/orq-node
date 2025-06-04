# JsonSchema

## Example Usage

```typescript
import { JsonSchema } from "@orq-ai/node/models/operations";

let value: JsonSchema = {
  name: "<value>",
  strict: false,
  schema: {},
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `strict`              | *boolean*             | :heavy_check_mark:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |