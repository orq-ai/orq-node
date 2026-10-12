# ClassifyCacheConfig

## Example Usage

```typescript
import { ClassifyCacheConfig } from "@orq-ai/node/models/components";

let value: ClassifyCacheConfig = {
  type: "exact_match",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `ttl`                                                                                     | *number*                                                                                  | :heavy_minus_sign:                                                                        | Time to live for the cached response in seconds, up to 259200 (3 days). Defaults to 3600. |
| `type`                                                                                    | [components.ClassifyCacheConfigType](../../models/components/classifycacheconfigtype.md)  | :heavy_check_mark:                                                                        | Cache type. Only exact_match is supported.                                                |