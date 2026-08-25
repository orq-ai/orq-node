# SyncMcpServerRequest

## Example Usage

```typescript
import { SyncMcpServerRequest } from "@orq-ai/node/models/components";

let value: SyncMcpServerRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `discoveryVariables`                                                                  | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | Values for the server's `template_variables`; treated as sensitive and not persisted. |