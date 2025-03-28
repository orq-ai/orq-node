/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesList } from "../../funcs/filesList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FileListRequest$inboundSchema.optional(),
};

export const tool$filesList: ToolDefinition<typeof args> = {
  name: "files-list",
  description: `List all files

Returns a list of the files that your account has access to. orq.ai sorts and returns the files by their creation dates, placing the most recently created files at the top.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filesList(
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
