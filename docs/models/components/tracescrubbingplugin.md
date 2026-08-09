# TraceScrubbingPlugin

## Example Usage

```typescript
import { TraceScrubbingPlugin } from "@orq-ai/node/models/components";

let value: TraceScrubbingPlugin = {
  id: "trace_scrubbing",
  mask: [],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | [components.TraceScrubbingPluginId](../../models/components/tracescrubbingpluginid.md)  | :heavy_check_mark:                                                                      | Plugin discriminator. Must be `trace_scrubbing`.                                        |
| `mask`                                                                                  | [components.Mask](../../models/components/mask.md)[]                                    | :heavy_check_mark:                                                                      | Trace surfaces to scrub. `all` includes system, input, output, metadata, and variables. |