# RetrieveAnnotationQueueItemToolChoiceAnnotationQueuesResponse2

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemToolChoiceAnnotationQueuesResponse2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemToolChoiceAnnotationQueuesResponse2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemToolChoiceAnnotationQueuesResponse200ApplicationJSONType](../../models/operations/retrieveannotationqueueitemtoolchoiceannotationqueuesresponse200applicationjsontype.md) | :heavy_minus_sign:                                                                                                                                                                                               | The type of the tool. Currently, only function is supported.                                                                                                                                                     |
| `function`                                                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemToolChoiceAnnotationQueuesResponseFunction](../../models/operations/retrieveannotationqueueitemtoolchoiceannotationqueuesresponsefunction.md)                             | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |