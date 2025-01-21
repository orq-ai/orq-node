# DeploymentGetLogsRequest

## Example Usage

```typescript
import { DeploymentGetLogsRequest } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsRequest = {
  deploymentKey: "<value>",
  requestBody: {
    filters: [
      {
        type: "string_array",
        operator: "in",
        values: [
          "<value>",
        ],
        path: "/etc/namedb",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `deploymentKey`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Deployment Key                                                                                     |
| `requestBody`                                                                                      | [operations.DeploymentGetLogsRequestBody](../../models/operations/deploymentgetlogsrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |