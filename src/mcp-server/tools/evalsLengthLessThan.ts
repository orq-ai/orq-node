/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { evalsLengthLessThan } from "../../funcs/evalsLengthLessThan.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.EvalsLengthLessThanRequestBody$inboundSchema.optional(),
};

export const tool$evalsLengthLessThan: ToolDefinition<typeof args> = {
  name: "evals-length-less-than",
  description: `Run Length Less Than Evaluator`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await evalsLengthLessThan(
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
