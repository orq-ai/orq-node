# PublicBatchErrors

## Example Usage

```typescript
import { PublicBatchErrors } from "@orq-ai/node/models/components";

let value: PublicBatchErrors = {
  data: [
    {
      code: "<value>",
      message: "<value>",
    },
  ],
  object: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.PublicBatchError](../../models/components/publicbatcherror.md)[] | :heavy_check_mark:                                                           | Errors that stopped the batch.                                               |
| `object`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | Object type, always list.                                                    |