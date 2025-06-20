/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { evalsContainsNone } from "../../funcs/evalsContainsNone.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.EvalsContainsNoneRequestBody$inboundSchema.optional(),
};

export const tool$evalsContainsNone: ToolDefinition<typeof args> = {
  name: "evals-contains-none",
  description: `Run Contains None Evaluator`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await evalsContainsNone(
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
