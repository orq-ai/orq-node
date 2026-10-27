# ~~McpAuthConfigEnterprise~~

Superseded by `oauth` for ENTERPRISE_MANAGED; accepted on write and mirrored on read.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { McpAuthConfigEnterprise } from "@orq-ai/node/models/components";

let value: McpAuthConfigEnterprise = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `resource`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | RFC 9728 resource identifier the tokens are bound to; defaults to the connection URL. |
| `clientId`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | OAuth client identifier registered at the upstream authorization server.              |
| `maskedValue`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | Redacted preview of `client_secret`, returned in its place.                           |
| `scopes`                                                                              | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Scopes requested when redeeming the identity assertion grant.                         |