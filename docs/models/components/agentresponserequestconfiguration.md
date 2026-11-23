# AgentResponseRequestConfiguration

A2A compatibility options. Ignored on this endpoint; use background to control whether the call waits.

## Example Usage

```typescript
import { AgentResponseRequestConfiguration } from "@orq-ai/node/models/components";

let value: AgentResponseRequestConfiguration = {};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`blocking`~~                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                         | :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Accepted for A2A compatibility and ignored on this endpoint. Use background instead. |