# TemplateEngine

Template engine for variable substitution in instructions. Defaults to the agent manifest's engine when invoking an agent, otherwise text.

## Example Usage

```typescript
import { TemplateEngine } from "@orq-ai/node/models/operations";

let value: TemplateEngine = "mustache";
```

## Values

```typescript
"text" | "jinja" | "mustache"
```