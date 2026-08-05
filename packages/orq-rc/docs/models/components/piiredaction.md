# PiiRedaction

PiiRedaction is the workspace-default configuration for the pii_redaction
 plugin: an enable flag plus the optional plugin config the gateway applies as
 a floor for requests that send no plugins of their own.

## Example Usage

```typescript
import { PiiRedaction } from "@orq-ai/node/models/components";

let value: PiiRedaction = {
  enabled: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether the workspace-default PII redaction plugin is enabled.                 |
| `config`                                                                       | [components.PiiRedactionConfig](../../models/components/piiredactionconfig.md) | :heavy_minus_sign:                                                             | Plugin configuration applied when enabled. Optional.                           |