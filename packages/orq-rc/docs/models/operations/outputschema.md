# OutputSchema

The expected shape of the value. Derived from the human review type, or inherited from the parent annotation for corrections.

## Example Usage

```typescript
import { OutputSchema } from "@orq-ai/node/models/operations";

let value: OutputSchema = "categorical";
```

## Values

```typescript
"boolean" | "number" | "categorical" | "string"
```