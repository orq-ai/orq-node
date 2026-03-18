# PostV2AnnotationQueuesRequestBody

## Example Usage

```typescript
import { PostV2AnnotationQueuesRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2AnnotationQueuesRequestBody = {
  displayName: "Judy6",
  description: "yearly oof boo harmful",
  projectId: "<id>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `displayName`                                   | *string*                                        | :heavy_check_mark:                              | The display name of the annotation queue        |
| `description`                                   | *string*                                        | :heavy_check_mark:                              | The description of the annotation queue         |
| `projectId`                                     | *string*                                        | :heavy_check_mark:                              | The project ID to link this annotation queue to |