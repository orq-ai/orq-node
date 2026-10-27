# McpOAuthConfig

McpOAuthConfig is the OAuth client orq presents to the upstream authorization
 server for OAUTH_CLIENT_CREDENTIALS, PER_USER_OAUTH and ENTERPRISE_MANAGED.

## Example Usage

```typescript
import { McpOAuthConfig } from "@orq-ai/node/models/components";

let value: McpOAuthConfig = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | OAuth client identifier presented to the upstream authorization server.                                         |
| `clientSecret`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | OAuth client secret; accepted on write and never returned.                                                      |
| `tokenUrl`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Token endpoint for OAUTH_CLIENT_CREDENTIALS; PER_USER_OAUTH and ENTERPRISE_MANAGED discover it from `resource`. |
| `scopes`                                                                                                        | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | Scopes requested when minting upstream access tokens.                                                           |
| `maskedValue`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Redacted preview of `client_secret`, returned in its place.                                                     |
| `issuer`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Exact authorization-server issuer; pins discovery for PER_USER_OAUTH and ENTERPRISE_MANAGED.                    |
| `resource`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Protected resource identifier; defaults to the upstream connection URL.                                         |