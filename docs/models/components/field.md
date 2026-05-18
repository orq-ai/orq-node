# Field

Public reporting dimension to filter on. Valid fields depend on the selected metric.

## Example Usage

```typescript
import { Field } from "@orq-ai/node/models/components";

let value: Field = "dimension_type";
```

## Values

```typescript
"project" | "identity" | "provider" | "model" | "product" | "api_key" | "status_code" | "http_status_code" | "credential_type" | "billing_billable" | "dimension" | "dimension_type" | "tag" | "agent" | "tool" | "deployment" | "evaluator" | "dataset" | "prompt" | "policy" | "conversation" | "thread" | "memory_store" | "knowledge" | "sheet" | "guardrail_origin" | "evaluator_name" | "evaluator_type" | "evaluator_version" | "result_type" | "evaluation_stage" | "guardrail_stage" | "evaluator_stage" | "guardrail_action" | "result_label"
```