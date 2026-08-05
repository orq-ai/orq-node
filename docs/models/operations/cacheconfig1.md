# CacheConfig1

Configuration schema for exact-match cache. Entries are stored and retrieved based on exact input matches.

## Example Usage

```typescript
import { CacheConfig1 } from "@orq-ai/node/models/operations";

let value: CacheConfig1 = {
  type: "exact",
  ttl: 3600,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *"exact"*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `ttl`                                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days). | 3600                                                                           |