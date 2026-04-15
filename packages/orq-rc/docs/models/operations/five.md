# Five

A reasoning output item from the model

## Example Usage

```typescript
import { Five } from "@orq-ai/node/models/operations";

let value: Five = {
  id: "<id>",
  type: "reasoning",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                               | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The unique identifier for this reasoning item                                                                                                      |
| `type`                                                                                                                                             | *"reasoning"*                                                                                                                                      | :heavy_check_mark:                                                                                                                                 | The type of output item                                                                                                                            |
| `summary`                                                                                                                                          | [operations.OutputSummary](../../models/operations/outputsummary.md)[]                                                                             | :heavy_minus_sign:                                                                                                                                 | Summary of the reasoning                                                                                                                           |
| `encryptedContent`                                                                                                                                 | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Encrypted reasoning content                                                                                                                        |
| `status`                                                                                                                                           | [operations.CreateResponseOutputRouterResponsesResponse200Status](../../models/operations/createresponseoutputrouterresponsesresponse200status.md) | :heavy_minus_sign:                                                                                                                                 | The status of the reasoning item                                                                                                                   |