# RunAgentEngine

Template engine for variable interpolation. Text uses {{variable}} syntax, Jinja supports loops/conditionals/filters, Mustache uses {{#section}} syntax.

## Example Usage

```typescript
import { RunAgentEngine } from "@orq-ai/node/models/operations";

let value: RunAgentEngine = "text";
```

## Values

```typescript
"text" | "jinja" | "mustache"
```