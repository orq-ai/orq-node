# ClassifyPromptCacheOptions

## Example Usage

```typescript
import { ClassifyPromptCacheOptions } from "@orq-ai/node/models/components";

let value: ClassifyPromptCacheOptions = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                 | [components.ClassifyPromptCacheOptionsMode](../../models/components/classifypromptcacheoptionsmode.md) | :heavy_minus_sign:                                                                                     | Implicit uses the shared input boundary by default; explicit uses only marked input boundaries.        |
| `ttl`                                                                                                  | [components.Ttl](../../models/components/ttl.md)                                                       | :heavy_minus_sign:                                                                                     | Minimum cache lifetime. Only 30m is supported by native OpenAI Decisions.                              |