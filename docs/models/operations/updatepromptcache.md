# UpdatePromptCache

Cache configuration for the request.

## Example Usage

```typescript
import { UpdatePromptCache } from "@orq-ai/node/models/operations";

let value: UpdatePromptCache = {
  ttl: 3600,
  type: "exact_match",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `ttl`                                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days). | 3600                                                                           |
| `type`                                                                         | [operations.UpdatePromptType](../../models/operations/updateprompttype.md)     | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |