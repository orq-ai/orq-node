# FilterBy

The metadata filter to apply to the search. Check the [Searching a Knowledge Base](https://docs.orq.ai/docs/knowledge/api#knowledge-base-search) for more information.


## Supported Types

### `{ [k: string]: components.FilterBy1 }`

```typescript
const value: { [k: string]: components.FilterBy1 } = {};
```

### `components.SearchKnowledgeRequestFilterByAnd`

```typescript
const value: components.SearchKnowledgeRequestFilterByAnd = {
  and: [],
};
```

### `components.SearchKnowledgeRequestFilterByOr`

```typescript
const value: components.SearchKnowledgeRequestFilterByOr = {
  or: [],
};
```

