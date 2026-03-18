# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody11Input1

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody11Input1,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody11Input1 =
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

| Field                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                                                                     | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody11InputType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidloadbalancerannotationqueueresponse200applicationjsonresponsebody11inputtype.md)       | :heavy_check_mark:                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                        |
| `models`                                                                                                                                                                                                                                                                                                   | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdLoadBalancerAnnotationQueueResponse200ApplicationJSONResponseBody11InputModels](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidloadbalancerannotationqueueresponse200applicationjsonresponsebody11inputmodels.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                        |