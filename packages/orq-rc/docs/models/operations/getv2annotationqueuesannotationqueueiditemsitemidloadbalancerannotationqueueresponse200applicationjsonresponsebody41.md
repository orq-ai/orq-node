# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody41

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody41,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody41 =
    {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          model: "anthropic/claude-3-5-sonnet",
          weight: 0.3,
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                         | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody4Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidloadbalancerannotationqueueresponse200applicationjsonresponsebody4type.md)       | :heavy_check_mark:                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                            |
| `models`                                                                                                                                                                                                                                                                                       | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody4Models](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidloadbalancerannotationqueueresponse200applicationjsonresponsebody4models.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                            |