# GetAllToolsResponseBody

Successfully retrieved the list of tools.

## Example Usage

```typescript
import { GetAllToolsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllToolsResponseBody = {
  object: "list",
  data: [
    {
      id: "tool_01JRXNDRG7DTQP5HWY5T2MBQB4",
      path: "Customer Service/Billing/Refund",
      key: "<key>",
      description:
        "especially see extremely pearl sentimental phooey although wherever microblog aha",
      projectId: "<id>",
      workspaceId: "<id>",
      created: "<value>",
      updated: "<value>",
      status: "live",
      versionHash: "<value>",
      type: "json_schema",
      jsonSchema: {
        name: "<value>",
        schema: {
          "key": "<value>",
        },
        strict: false,
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.GetAllToolsObject](../../models/operations/getalltoolsobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | *operations.GetAllToolsData*[]                                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |