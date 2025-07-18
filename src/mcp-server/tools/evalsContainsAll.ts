/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { evalsContainsAll } from "../../funcs/evalsContainsAll.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.EvalsContainsAllRequestBody$inboundSchema.optional(),
};

export const tool$evalsContainsAll: ToolDefinition<typeof args> = {
  name: "evals-contains-all",
  description: `Run Contains All Evaluator`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await evalsContainsAll(
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
