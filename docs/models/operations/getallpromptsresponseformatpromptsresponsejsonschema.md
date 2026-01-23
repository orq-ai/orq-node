# GetAllPromptsResponseFormatPromptsResponseJsonSchema

## Example Usage

```typescript
import { GetAllPromptsResponseFormatPromptsResponseJsonSchema } from "@orq-ai/node/models/operations";

let value: GetAllPromptsResponseFormatPromptsResponseJsonSchema = {
  name: "<value>",
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
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `strict`              | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |