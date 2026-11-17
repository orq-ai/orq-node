# QueryRow

A row of a run with its cells.

## Example Usage

```typescript
import { QueryRow } from "@orq-ai/node/models/components";

let value: QueryRow = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `rowId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Row ID (ULID).                                                                                |
| `cells`                                                                                       | [components.Cell](../../models/components/cell.md)[]                                          | :heavy_minus_sign:                                                                            | Cells of the row, including the derived token metric cells.                                   |
| `status`                                                                                      | [components.RowStatus](../../models/components/rowstatus.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Null on rows written before timestamps were recorded.                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time of the last change to the row. Null on rows written before<br/> timestamps were recorded. |