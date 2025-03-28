/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { knowledgeSearch } from "../../funcs/knowledgeSearch.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SearchKnowledgeRequest$inboundSchema,
};

export const tool$knowledgeSearch: ToolDefinition<typeof args> = {
  name: "knowledge-search",
  description: `Retrieves the documents used for retrieval`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await knowledgeSearch(
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
