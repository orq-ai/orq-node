/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { memoryStoresListMemories } from "../../funcs/memoryStoresListMemories.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAllMemoriesRequest$inboundSchema,
};

export const tool$memoryStoresListMemories: ToolDefinition<typeof args> = {
  name: "memory-stores-list-memories",
  description: `List all memories

Retrieves a paginated list of memories for the memory store`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await memoryStoresListMemories(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
