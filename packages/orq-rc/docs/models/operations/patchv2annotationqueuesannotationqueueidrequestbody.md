# PatchV2AnnotationQueuesAnnotationQueueIdRequestBody

## Example Usage

```typescript
import { PatchV2AnnotationQueuesAnnotationQueueIdRequestBody } from "@orq-ai/node/models/operations";

let value: PatchV2AnnotationQueuesAnnotationQueueIdRequestBody = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | The display name of the annotation queue                                                   |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | The description of the annotation queue                                                    |
| `projectId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | The project ID. When set, human reviews are resolved from the project automatically        |
| `humanReviewIds`                                                                           | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | Legacy: update manually selected human review IDs. Only allowed when project_id is not set |