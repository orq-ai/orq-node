/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { datasetsUpdate } from "../../funcs/datasetsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateDatasetRequest$inboundSchema,
};

export const tool$datasetsUpdate: ToolDefinition<typeof args> = {
  name: "datasets-update",
  description: `Update a dataset

Update a dataset`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await datasetsUpdate(
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
