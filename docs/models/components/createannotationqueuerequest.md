# CreateAnnotationQueueRequest

## Example Usage

```typescript
import { CreateAnnotationQueueRequest } from "@orq-ai/node/models/components";

let value: CreateAnnotationQueueRequest = {
  displayName: "Gilda74",
  description: "plus inwardly who outside premier bah stigmatize overproduce",
  projectId: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `displayName`                                           | *string*                                                | :heavy_check_mark:                                      | Required. The display name of the annotation queue.     |
| `description`                                           | *string*                                                | :heavy_check_mark:                                      | Required. The description of the annotation queue.      |
| `projectId`                                             | *string*                                                | :heavy_check_mark:                                      | Required. The project to link this annotation queue to. |