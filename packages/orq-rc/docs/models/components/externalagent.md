# ExternalAgent

## Example Usage

```typescript
import { ExternalAgent } from "@orq-ai/node/models/components";

let value: ExternalAgent = {
  agentId: "<id>",
  key: "<key>",
  displayName: "Kelvin_Hodkiewicz97",
  description:
    "while average beyond likewise disposer lava now unless opposite coagulate",
  path: "/opt/sbin",
  projectId: "<id>",
  agentUrl: "https://fruitful-guidance.org",
  headers: {},
  protocolVersion: "<value>",
  preferredTransport: "<value>",
  cachedCard: {},
  createdAt: new Date("2026-09-15T10:33:50.607Z"),
  updatedAt: new Date("2026-12-28T09:26:29.781Z"),
  createdById: "<id>",
  updatedById: "<id>",
  version: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `key`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `projectId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `agentUrl`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `cardUrl`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `headers`                                                                                        | Record<string, [components.ExternalAgentHeader](../../models/components/externalagentheader.md)> | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `protocolVersion`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `preferredTransport`                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `cachedCard`                                                                                     | [components.CachedCard](../../models/components/cachedcard.md)                                   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `cardRefreshedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdById`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedById`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |