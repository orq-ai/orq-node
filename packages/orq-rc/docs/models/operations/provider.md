# Provider

Provider to run this search. Exa uses auto, Linkup uses standard depth, Tavily uses basic depth, and OpenAI runs one web_search tool call on gpt-5.6-luna. Workspace credentials are selected automatically for this provider.

## Example Usage

```typescript
import { Provider } from "@orq-ai/node/models/operations";

let value: Provider = "ceramic";
```

## Values

```typescript
"exa" | "ceramic" | "linkup" | "tavily" | "serper" | "openai" | "perplexity"
```