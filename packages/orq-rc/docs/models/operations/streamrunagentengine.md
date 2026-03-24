# StreamRunAgentEngine

Template engine for variable interpolation. Text uses {{variable}} syntax, Jinja supports loops/conditionals/filters, Mustache uses {{#section}} syntax.

## Example Usage

```typescript
import { StreamRunAgentEngine } from "@orq-ai/node/models/operations";

let value: StreamRunAgentEngine = "mustache";
```

## Values

```typescript
"text" | "jinja" | "mustache"
```