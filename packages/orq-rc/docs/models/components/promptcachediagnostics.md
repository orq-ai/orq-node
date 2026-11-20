# PromptCacheDiagnostics

## Example Usage

```typescript
import { PromptCacheDiagnostics } from "@orq-ai/node/models/components";

let value: PromptCacheDiagnostics = {
  type: "comparison_response_not_found",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cacheMissedTokens`                                                                            | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `comparisonReusableTokens`                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `reason`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [components.PromptCacheDiagnosticsType](../../models/components/promptcachediagnosticstype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |