# ResponseFormatJsonSchema

## Example Usage

```typescript
import { ResponseFormatJsonSchema } from "@orq-ai/node/models/operations";

let value: ResponseFormatJsonSchema = {
  name: "<value>",
  strict: true,
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `strict`              | *boolean*             | :heavy_check_mark:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |