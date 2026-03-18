# PostV2AnnotationQueuesResponseBody

Annotation queue created

## Example Usage

```typescript
import { PostV2AnnotationQueuesResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2AnnotationQueuesResponseBody = {
  id: "<id>",
  displayName: "Elvie.Mosciski40",
  description: "yuck oddly redevelop tune-up coarse who midst except",
  workspaceId: "<id>",
  humanReviewIds: [],
  metadata: {
    itemsCount: 3378.71,
  },
  createdById: "26a02826-af9d-4120-a0b7-7ae5d05af53d",
  updatedById: "28656327-561f-4c6a-ade1-f572c5a26671",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier of the annotation queue                                                          |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The display name of the annotation queue                                                               |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the annotation queue                                                                |
| `workspaceId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier of the workspace it belongs to                                                   |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The project ID. When set, human reviews are resolved from the project automatically                    |
| `humanReviewIds`                                                                                       | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | Legacy: manually selected human review IDs. Used only when project_id is not set                       |
| `metadata`                                                                                             | [operations.PostV2AnnotationQueuesMetadata](../../models/operations/postv2annotationqueuesmetadata.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdById`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The id of the user who created the resource                                                            |
| `updatedById`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The id of the user who last updated the resource                                                       |
| `created`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time the resource was created                                                             |
| `updated`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The date and time the resource was last updated                                                        |