# CreateExternalAgentRequest

## Example Usage

```typescript
import { CreateExternalAgentRequest } from "@orq-ai/node/models/components";

let value: CreateExternalAgentRequest = {
  key: "<key>",
  displayName: "Janet.Sporer",
  path: "/media",
  agentUrl: "https://formal-hope.com",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `key`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `projectId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `agentUrl`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `cardUrl`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `headers`                                                                                        | Record<string, [components.ExternalAgentHeader](../../models/components/externalagentheader.md)> | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `protocolVersion`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `preferredTransport`                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |