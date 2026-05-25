# ListApiKeysResponse

## Example Usage

```typescript
import { ListApiKeysResponse } from "@orq-ai/node/models/components";

let value: ListApiKeysResponse = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Object discriminator for list responses; always `list`.                                                  |
| `data`                                                                                                   | [components.ApiKey](../../models/components/apikey.md)[]                                                 | :heavy_minus_sign:                                                                                       | Page of api-keys, ordered newest first. `token_hash` and<br/> `api_key` are always elided in list responses. |
| `hasMore`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether more api-keys are available in the selected pagination<br/> direction.                           |