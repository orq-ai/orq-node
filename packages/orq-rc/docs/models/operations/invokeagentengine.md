# InvokeAgentEngine

Override template engine for this invocation. If not provided, uses the agent default.

## Example Usage

```typescript
import { InvokeAgentEngine } from "@orq-ai/node/models/operations";

let value: InvokeAgentEngine = "text";
```

## Values

```typescript
"text" | "jinja" | "mustache"
```