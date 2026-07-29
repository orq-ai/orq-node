# McpAuthConfig

## Example Usage

```typescript
import { McpAuthConfig } from "@orq-ai/node/models/components";

let value: McpAuthConfig = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.McpAuthType](../../models/components/mcpauthtype.md)           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `staticHeaders`                                                            | [components.McpHeaderSecret](../../models/components/mcpheadersecret.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `oauth`                                                                    | [components.McpOAuthConfig](../../models/components/mcpoauthconfig.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |