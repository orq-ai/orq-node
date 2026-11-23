# CreateRunRequest

## Example Usage

```typescript
import { CreateRunRequest } from "@orq-ai/node/models/components";

let value: CreateRunRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `key`                                                                     | *string*                                                                  | :heavy_minus_sign:                                                        | Run name. Defaults to `Run ` plus the last four characters of the run ID. |
| `settings`                                                                | [components.RunSettings](../../models/components/runsettings.md)          | :heavy_minus_sign:                                                        | Execution settings. Concurrency defaults to 10.                           |