# PostV2AnnotationQueuesQueryResponseBody

Annotation queues Retrieved Successfully

## Example Usage

```typescript
import { PostV2AnnotationQueuesQueryResponseBody } from "@orq-ai/node/models/operations";

let value: PostV2AnnotationQueuesQueryResponseBody = {
  queues: [
    {
      id: "<id>",
      displayName: "General_Schuppe-Leuschke",
      description: "sternly profitable offend excepting annually to",
      workspaceId: "<id>",
      humanReviewIds: [
        "<value 1>",
      ],
      metadata: {
        itemsCount: 7086.83,
      },
      createdById: "7c9af8bd-8a9f-46e3-b4de-f810a85ca226",
      updatedById: "3242032f-1122-4cd5-a2cc-a103e53f4054",
    },
  ],
  overallTotal: 901.06,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `queues`                                                 | [operations.Queues](../../models/operations/queues.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `overallTotal`                                           | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |