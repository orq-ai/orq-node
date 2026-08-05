# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson14Input

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson14Input,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson14Input =
    {
      messages: [
        {
          role: "system",
          content: "<value>",
        },
      ],
      variables: [
        {
          key: "<key>",
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                                                                                   | [operations.ResponseBodyMessages](../../models/operations/responsebodymessages.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `variables`                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesVariables](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesvariables.md)[] | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `tools`                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyTools](../../models/operations/retrieveannotationqueueitemresponsebodytools.md)[]                                         | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |