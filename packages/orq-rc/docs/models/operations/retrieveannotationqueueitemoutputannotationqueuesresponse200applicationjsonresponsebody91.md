# RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody91

A message to or from the model.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody91,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody91 =
    {
      id: "<id>",
      status: "incomplete",
      role: "assistant",
      content: [
        {
          type: "output_text",
          text: "<value>",
          annotations: [],
          logprobs: [
            {
              token: "<value>",
              logprob: 2478.6,
              bytes: [
                369201,
              ],
              topLogprobs: [],
            },
          ],
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody9Type](../../models/operations/retrieveannotationqueueitemoutputannotationqueuesresponse200applicationjsonresponsebody9type.md)     | :heavy_minus_sign:                                                                                                                                                                                                                     | The type of the message. Always set to `message`.                                                                                                                                                                                      |
| `id`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | The unique ID of the message.                                                                                                                                                                                                          |
| `status`                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody9Status](../../models/operations/retrieveannotationqueueitemoutputannotationqueuesresponse200applicationjsonresponsebody9status.md) | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `role`                                                                                                                                                                                                                                 | [operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody9Role](../../models/operations/retrieveannotationqueueitemoutputannotationqueuesresponse200applicationjsonresponsebody9role.md)     | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `content`                                                                                                                                                                                                                              | *operations.RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody9Content*[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                     | The content of the message                                                                                                                                                                                                             |