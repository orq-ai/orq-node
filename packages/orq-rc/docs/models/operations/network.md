# Network

Network access intent for orq:code_interpreter. Stored and validated today; runtime enforcement by the sandbox egress layer is rolling out and until then sandbox executions retain default public internet egress.

## Example Usage

```typescript
import { Network } from "@orq-ai/node/models/operations";

let value: Network = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `allowlist`                                                                             | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Allowed network hostnames or IPv4 addresses when mode is allowlist. Maximum 50 entries. |
| `mode`                                                                                  | [operations.ToolsMode](../../models/operations/toolsmode.md)                            | :heavy_minus_sign:                                                                      | Network mode. Defaults to disabled.                                                     |