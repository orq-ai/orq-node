/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { toolsCreate } from "../../funcs/toolsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateToolRequestBody$inboundSchema.optional(),
};

export const tool$toolsCreate: ToolDefinition<typeof args> = {
  name: "tools-create",
  description: `Create tool

Creates a new tool in the workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await toolsCreate(
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
