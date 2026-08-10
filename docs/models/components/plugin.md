# Plugin

## Example Usage

```typescript
import { Plugin } from "@orq-ai/node/models/components";

let value: Plugin = {
  ofPIIRedaction: {
    id: "<id>",
  },
  ofResponseHealing: {
    id: "response_healing",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `ofPIIRedaction`                                                                     | [components.PIIRedactionPlugin](../../models/components/piiredactionplugin.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `ofResponseHealing`                                                                  | [components.ResponseHealingPlugin](../../models/components/responsehealingplugin.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |