# UpdatePromptResponseFormatJsonSchema

## Example Usage

```typescript
import { UpdatePromptResponseFormatJsonSchema } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormatJsonSchema = {
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `strict`              | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `schema`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |