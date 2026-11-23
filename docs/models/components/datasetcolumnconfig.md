# DatasetColumnConfig

Configuration of a dataset column.

## Example Usage

```typescript
import { DatasetColumnConfig } from "@orq-ai/node/models/components";

let value: DatasetColumnConfig = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `columnType`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | `inputs`, `messages` or `expected_output`. Dataset cells are read-only. |