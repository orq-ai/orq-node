# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Input

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Input,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Input =
    {
      messages: [],
      variables: [
        {
          key: "<key>",
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemResponseBodyMessages](../../models/operations/retrieveannotationqueueitemresponsebodymessages.md)[]                                                   | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `variables`                                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseVariables](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponsevariables.md)[] | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |
| `tools`                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTools](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuestools.md)[]                         | :heavy_minus_sign:                                                                                                                                                                           | N/A                                                                                                                                                                                          |