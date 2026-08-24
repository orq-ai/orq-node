# McpOAuthConfigOutput

## Example Usage

```typescript
import { McpOAuthConfigOutput } from "@orq-ai/node/models/components";

let value: McpOAuthConfigOutput = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | OAuth client identifier presented to the upstream authorization server. |
| `tokenUrl`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Token endpoint the gateway calls to mint upstream access tokens.        |
| `scopes`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Scopes requested when minting upstream access tokens.                   |
| `maskedValue`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Redacted preview of `client_secret`, returned in its place.             |