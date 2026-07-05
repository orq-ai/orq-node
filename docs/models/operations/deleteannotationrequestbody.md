# DeleteAnnotationRequestBody

## Example Usage

```typescript
import { DeleteAnnotationRequestBody } from "@orq-ai/node/models/operations";

let value: DeleteAnnotationRequestBody = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `keys`                                                                                     | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | Unique keys of the reviews to remove                                                       |
| `parentAnnotationIds`                                                                      | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | Eval ids whose corrections should be removed                                               |
| `metadata`                                                                                 | [operations.DeleteAnnotationMetadata](../../models/operations/deleteannotationmetadata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |