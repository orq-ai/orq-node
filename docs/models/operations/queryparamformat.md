# QueryParamFormat

File format: `json` (an array of records), `jsonl` (one record per line) or `csv`. Each record is one row and task column.

## Example Usage

```typescript
import { QueryParamFormat } from "@orq-ai/node/models/operations";

let value: QueryParamFormat = "csv";
```

## Values

```typescript
"csv" | "json" | "jsonl"
```