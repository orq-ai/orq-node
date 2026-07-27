# UpdateMcpGatewayRequest

## Example Usage

```typescript
import { UpdateMcpGatewayRequest } from "@orq-ai/node/models/components";

let value: UpdateMcpGatewayRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `key`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `serverLinks`                                                                        | [components.McpGatewayServerLink](../../models/components/mcpgatewayserverlink.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `toolNaming`                                                                         | [components.McpToolNaming](../../models/components/mcptoolnaming.md)                 | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `runtimeLimits`                                                                      | [components.McpRuntimeLimits](../../models/components/mcpruntimelimits.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `egressPolicy`                                                                       | [components.McpEgressPolicy](../../models/components/mcpegresspolicy.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `status`                                                                             | [components.McpGatewayStatus](../../models/components/mcpgatewaystatus.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |