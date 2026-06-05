# ListApiKeysResponse

## Example Usage

```typescript
import { ListApiKeysResponse } from "@orq-ai/node/models/components";

let value: ListApiKeysResponse = {
  object: "<value>",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Object discriminator for list responses; always `list`.                                                  |
| `data`                                                                                                   | [components.ApiKey](../../models/components/apikey.md)[]                                                 | :heavy_check_mark:                                                                                       | Page of api-keys, ordered newest first. `token_hash` and<br/> `api_key` are always elided in list responses. |
| `hasMore`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Whether more api-keys are available in the selected pagination<br/> direction.                           |