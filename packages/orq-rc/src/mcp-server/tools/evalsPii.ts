/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { evalsPii } from "../../funcs/evalsPii.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.EvalsPiiRequestBody$inboundSchema.optional(),
};

export const tool$evalsPii: ToolDefinition<typeof args> = {
  name: "evals-pii",
  description: `Run PII Evaluator`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await evalsPii(
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
