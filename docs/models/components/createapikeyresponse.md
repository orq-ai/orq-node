# CreateApiKeyResponse

## Example Usage

```typescript
import { CreateApiKeyResponse } from "@orq-ai/node/models/components";

let value: CreateApiKeyResponse = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                                                                              | [components.ApiKey](../../models/components/apikey.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                    | Newly minted api-key record.                                                                                                                                          |
| `token`                                                                                                                                                               | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Raw bearer token in the form `sk-orq-<api_key_id>-<secret>`.<br/> Returned ONCE; the API never exposes this value again. Clients<br/> must persist it immediately on receipt. |