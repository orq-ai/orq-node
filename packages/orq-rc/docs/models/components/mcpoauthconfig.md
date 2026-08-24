# McpOAuthConfig

## Example Usage

```typescript
import { McpOAuthConfig } from "@orq-ai/node/models/components";

let value: McpOAuthConfig = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | OAuth client identifier presented to the upstream authorization server. |
| `clientSecret`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | OAuth client secret; accepted on write and never returned.              |
| `tokenUrl`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Token endpoint the gateway calls to mint upstream access tokens.        |
| `scopes`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Scopes requested when minting upstream access tokens.                   |
| `maskedValue`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Redacted preview of `client_secret`, returned in its place.             |