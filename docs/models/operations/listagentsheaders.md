# ListAgentsHeaders

## Example Usage

```typescript
import { ListAgentsHeaders } from "@orq-ai/node/models/operations";

let value: ListAgentsHeaders = {
  value: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                                                                         | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | Header value. **Update behavior**: Provide empty string ("") to preserve existing encrypted value without re-entering credentials. Provide new value to rotate. Omit header entirely to remove. |
| `encrypted`                                                                                                                                                                                     | *boolean*                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |