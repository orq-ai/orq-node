# CreateMcpServerRequest

## Example Usage

```typescript
import { CreateMcpServerRequest } from "@orq-ai/node/models/components";

let value: CreateMcpServerRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `key`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `displayName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `projectId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `connection`                                                               | [components.McpConnection](../../models/components/mcpconnection.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `auth`                                                                     | [components.McpAuthConfig](../../models/components/mcpauthconfig.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `defaultToolExposure`                                                      | [components.McpToolExposure](../../models/components/mcptoolexposure.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `sharing`                                                                  | [components.McpServerSharing](../../models/components/mcpserversharing.md) | :heavy_minus_sign:                                                         | N/A                                                                        |