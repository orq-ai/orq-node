# TextContentPartSchema

The type of the content part.

## Example Usage

```typescript
import { TextContentPartSchema } from "@orq-ai/node/models/components";

let value: TextContentPartSchema = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [components.Type](../../models/components/type.md)                 | :heavy_check_mark:                                                 | The type of the content part.                                      |
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The text content.                                                  |
| `cacheControl`                                                     | [components.CacheControl](../../models/components/cachecontrol.md) | :heavy_minus_sign:                                                 | N/A                                                                |