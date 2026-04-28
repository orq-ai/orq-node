/**
 * Graph tracker for building a graph view from LangChain callbacks.
 *
 * Tracks LangGraph node executions and builds a graph data structure
 * (nodes + edges) that gets attached to the root trace span. The frontend
 * can then render a visual state machine graph.
 *
 * Graph nodes are detected as chain callbacks whose parent is the root chain
 * (the LangGraph graph itself). Each node stores the span IDs of all its
 * invocations. Edges are built from the execution order of these nodes.
 */

interface GraphNode {
  type: string;
  spanIds: string[];
}

export class GraphTracker {
  private _nodes = new Map<string, GraphNode>();
  private _edges: [string, string][] = [];
  private _lastCompleted = new Map<string, string>();
  private _activeNode = new Map<string, string | null>();

  onNodeStart(nodeId: string, spanId: string, rootRunId: string): void {
    const nodeType =
      nodeId === "__start__" ? "start" : nodeId === "__end__" ? "end" : "chain";

    let node = this._nodes.get(nodeId);
    if (!node) {
      node = { type: nodeType, spanIds: [] };
      this._nodes.set(nodeId, node);
    }
    node.spanIds.push(spanId);

    const last = this._lastCompleted.get(rootRunId);
    if (last != null) {
      const exists = this._edges.some(([s, t]) => s === last && t === nodeId);
      if (!exists) this._edges.push([last, nodeId]);
    }

    this._activeNode.set(rootRunId, nodeId);
  }

  onNodeEnd(nodeId: string, rootRunId: string): void {
    this._lastCompleted.set(rootRunId, nodeId);
    if (this._activeNode.get(rootRunId) === nodeId) {
      this._activeNode.set(rootRunId, null);
    }
  }

  hasNodes(): boolean {
    return this._nodes.size > 0;
  }

  /**
   * Build the graph JSON string to attach as a span attribute.
   *
   * If LangGraph did not emit explicit ``__start__`` / ``__end__`` chain
   * events, synthesize them and anchor their span_ids to the root span so
   * the UI always has clean entry/exit markers.
   */
  build(rootRunId: string, rootSpanId: string): string {
    const items: { id: string; type: string; span_ids: string[] }[] = [];
    const edges: [string, string][] = [...this._edges];

    const nodeIds = [...this._nodes.keys()];

    if (nodeIds.length > 0 && !this._nodes.has("__start__")) {
      const first = nodeIds[0]!;
      items.push({ id: "__start__", type: "start", span_ids: [rootSpanId] });
      edges.unshift(["__start__", first]);
    }

    for (const [nodeId, info] of this._nodes) {
      items.push({ id: nodeId, type: info.type, span_ids: info.spanIds });
    }

    if (nodeIds.length > 0 && !this._nodes.has("__end__")) {
      const last = this._lastCompleted.get(rootRunId);
      if (last) {
        items.push({ id: "__end__", type: "end", span_ids: [rootSpanId] });
        edges.push([last, "__end__"]);
      }
    }

    return JSON.stringify({
      nodes: items,
      edges: edges.map(([source, target]) => ({ source, target })),
    });
  }
}
