# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson17Input

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson17Input,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson17Input =
    {
      messages: [
        {
          role: "expected_output",
          content: "<value>",
        },
      ],
      variables: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                                                                                                                                             | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyMessages](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodymessages.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `variables`                                                                                                                                                                                                                            | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseVariables](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueueresponsevariables.md)[] | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `tools`                                                                                                                                                                                                                                | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueTools](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodyannotationqueuetools.md)[]                         | :heavy_minus_sign:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |