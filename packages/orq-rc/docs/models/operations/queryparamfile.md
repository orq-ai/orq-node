# QueryParamFile

Which result file to download: output holds successful responses, errors holds the per-line failures. Defaults to output, and answers the errors file when the batch produced no output file. Requesting errors on a batch with no error file returns 409 output_unavailable.

## Example Usage

```typescript
import { QueryParamFile } from "@orq-ai/node/models/operations";

let value: QueryParamFile = "errors";
```

## Values

```typescript
"output" | "errors"
```