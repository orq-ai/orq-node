/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { knowledgeUpdate } from "../../funcs/knowledgeUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateKnowledgeRequest$inboundSchema,
};

export const tool$knowledgeUpdate: ToolDefinition<typeof args> = {
  name: "knowledge-update",
  description: `Updates a knowledge`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await knowledgeUpdate(
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
