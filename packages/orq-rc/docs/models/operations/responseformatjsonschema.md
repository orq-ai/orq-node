# ResponseFormatJsonSchema

## Example Usage

```typescript
import { ResponseFormatJsonSchema } from "@orq-ai/node/models/operations";

let value: ResponseFormatJsonSchema = {
  name: "<value>",
  strict: false,
  schema: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `strict`              | *boolean*             | :heavy_check_mark:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |