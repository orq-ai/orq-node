# CreateAnnotationRequestBody

## Example Usage

```typescript
import { CreateAnnotationRequestBody } from "@orq-ai/node/models/operations";

let value: CreateAnnotationRequestBody = {
  annotations: [
    {
      key: "<key>",
      value: [
        "<value 1>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `annotations`                                                                              | [operations.Annotations](../../models/operations/annotations.md)[]                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | [operations.CreateAnnotationMetadata](../../models/operations/createannotationmetadata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |