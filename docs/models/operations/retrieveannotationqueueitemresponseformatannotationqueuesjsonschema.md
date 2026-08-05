# RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesJSONSchema } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseFormatAnnotationQueuesJSONSchema =
  {
    type: "json_schema",
    jsonSchema: {
      name: "<value>",
    },
  };
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | *"json_schema"*                                                                                                                                  | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `jsonSchema`                                                                                                                                     | [operations.RetrieveAnnotationQueueItemResponseFormatJsonSchema](../../models/operations/retrieveannotationqueueitemresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |