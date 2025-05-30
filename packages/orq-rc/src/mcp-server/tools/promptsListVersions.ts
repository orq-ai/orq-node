/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { promptsListVersions } from "../../funcs/promptsListVersions.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListPromptVersionsRequest$inboundSchema,
};

export const tool$promptsListVersions: ToolDefinition<typeof args> = {
  name: "prompts-list-versions",
  description: `List all prompt versions

Returns a list of your prompt versions. The prompt versions are returned sorted by creation date, with the most recent prompt versions appearing first`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await promptsListVersions(
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
