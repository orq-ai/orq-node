# ResponseBodyIncompleteDetails

Details about why the response is incomplete

## Example Usage

```typescript
import { ResponseBodyIncompleteDetails } from "@orq-ai/node/models/operations";

let value: ResponseBodyIncompleteDetails = {
  reason: "content_filter",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `reason`                                                                       | [operations.ResponseBodyReason](../../models/operations/responsebodyreason.md) | :heavy_check_mark:                                                             | The reason the response is incomplete                                          |