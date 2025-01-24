# Data1

The schema for a remote config workflow run

## Example Usage

```typescript
import { Data1 } from "@orq-ai/node/models/operations";

let value: Data1 = {
  id: "<id>",
  workspaceId: "70d48e2d-8ed7-410d-87ae-4e04cdf4cf84",
  startedAt: new Date("2025-04-12T13:54:50.989Z"),
  evals: [
    {
      type: "number",
      value: 3869.42,
      id: "<id>",
      status: "pending",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "contact",
          contactId: "<id>",
        },
      ],
      evaluatorType: "output_guardrail",
    },
  ],
  productType: "remoteconfigs",
  relatedEntities: [
    {
      type: "remoteconfig_variant",
      remoteConfigVariantId: "<id>",
    },
  ],
  data: {
    remoteConfigId: "ec4559af-e908-4680-bf04-1856ce247164",
    remoteConfigKey: "<value>",
    remoteConfigType: "<value>",
    remoteConfigVersion: 1985.34,
    remoteConfigVariantId: "b3a97d37-f284-41d9-9982-91a0344c4112",
    remoteConfigVariantPosition: 1968.14,
    isDefaultMatched: false,
    action: "get_config",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workflow run                                                    |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workspace                                                       |
| `workflowMetadata`                                                                            | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Metadata for the workflow run                                                                 |
| `workflowInput`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Input for the workflow run                                                                    |
| `workflowOutput`                                                                              | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Output for the workflow run                                                                   |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The optional project_id for the entity of the event                                           |
| `requestProperties`                                                                           | [operations.RequestProperties](../../models/operations/requestproperties.md)                  | :heavy_minus_sign:                                                                            | An optional field that is filled if the workflow was triggered by an HTTP request             |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `finishedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `evals`                                                                                       | *operations.Evals*[]                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productType`                                                                                 | [operations.ProductType](../../models/operations/producttype.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntities`                                                                             | *operations.RelatedEntities*[]                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [operations.DataData](../../models/operations/datadata.md)                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |