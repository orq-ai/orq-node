# CreateAnnotationQueueRequestBody

## Example Usage

```typescript
import { CreateAnnotationQueueRequestBody } from "@orq-ai/node/models/operations";

let value: CreateAnnotationQueueRequestBody = {
  displayName: "Nia.Baumbach61",
  description: "hello neatly than relieve although for likewise",
  projectId: "<id>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `displayName`                                   | *string*                                        | :heavy_check_mark:                              | The display name of the annotation queue        |
| `description`                                   | *string*                                        | :heavy_check_mark:                              | The description of the annotation queue         |
| `projectId`                                     | *string*                                        | :heavy_check_mark:                              | The project ID to link this annotation queue to |