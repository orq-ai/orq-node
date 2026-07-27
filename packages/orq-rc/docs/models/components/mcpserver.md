# McpServer

## Example Usage

```typescript
import { McpServer } from "@orq-ai/node/models/components";

let value: McpServer = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `key`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `displayName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `connection`                                                               | [components.McpConnection](../../models/components/mcpconnection.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `auth`                                                                     | [components.McpAuthConfig](../../models/components/mcpauthconfig.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `defaultToolExposure`                                                      | [components.McpToolExposure](../../models/components/mcptoolexposure.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `status`                                                                   | [components.McpServerStatus](../../models/components/mcpserverstatus.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `syncState`                                                                | [components.McpSyncState](../../models/components/mcpsyncstate.md)         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `tools`                                                                    | [components.McpTool](../../models/components/mcptool.md)[]                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `created`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `updated`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sharing`                                                                  | [components.McpServerSharing](../../models/components/mcpserversharing.md) | :heavy_minus_sign:                                                         | N/A                                                                        |