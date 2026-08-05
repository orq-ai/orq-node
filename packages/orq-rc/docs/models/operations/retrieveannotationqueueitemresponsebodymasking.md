# RetrieveAnnotationQueueItemResponseBodyMasking

Masking state applied to span input, system, or output

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyMasking } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyMasking = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `input`                                    | *boolean*                                  | :heavy_minus_sign:                         | Whether input content masking was applied  |
| `output`                                   | *boolean*                                  | :heavy_minus_sign:                         | Whether output content masking was applied |
| `system`                                   | *boolean*                                  | :heavy_minus_sign:                         | Whether system content masking was applied |