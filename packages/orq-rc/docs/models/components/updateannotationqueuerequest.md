# UpdateAnnotationQueueRequest

## Example Usage

```typescript
import { UpdateAnnotationQueueRequest } from "@orq-ai/node/models/components";

let value: UpdateAnnotationQueueRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional. New display name.                                                                   |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional. New description.                                                                    |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional. New project. Setting this clears the legacy `human_review_ids` selection.           |
| `humanReviewIds`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Legacy: update manually selected human review IDs. Only applied when `project_id` is not set. |