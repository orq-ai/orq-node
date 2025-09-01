# PostV2ProxyRerankCache

Cache configuration for the request.

## Example Usage

```typescript
import { PostV2ProxyRerankCache } from "@orq-ai/node/models/operations";

let value: PostV2ProxyRerankCache = {
  ttl: 3600,
  type: "exact_match",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `ttl`                                                                                | *number*                                                                             | :heavy_minus_sign:                                                                   | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days).       | 3600                                                                                 |
| `type`                                                                               | [operations.PostV2ProxyRerankType](../../models/operations/postv2proxyreranktype.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |