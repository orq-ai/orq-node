# RedactResponse

## Example Usage

```typescript
import { RedactResponse } from "@orq-ai/node/models/components";

let value: RedactResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `redactedText`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `mappings`                                                                   | Record<string, *string*>                                                     | :heavy_minus_sign:                                                           | Maps each placeholder (e.g. "<PERSON_1>") to the original value it replaced. |