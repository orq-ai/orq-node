# DetectRequest

The workspace is resolved from the API key, never sent in the body.

## Example Usage

```typescript
import { DetectRequest } from "@orq-ai/node/models/components";

let value: DetectRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `text`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Text to analyse.                                                            |
| `language`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | BCP-47 language code. Unset means auto-detect.                              |
| `threshold`                                                                 | *number*                                                                    | :heavy_minus_sign:                                                          | Global minimum recognizer score (0.0-1.0). Unset uses the provider default. |
| `includeEntities`                                                           | *boolean*                                                                   | :heavy_minus_sign:                                                          | When true, the response includes a per-type entity breakdown.               |