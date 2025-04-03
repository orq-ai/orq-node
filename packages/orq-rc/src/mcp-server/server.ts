/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { OrqCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$contactsCreate } from "./tools/contactsCreate.js";
import { tool$datasetsClear } from "./tools/datasetsClear.js";
import { tool$datasetsCreate } from "./tools/datasetsCreate.js";
import { tool$datasetsCreateDatapoint } from "./tools/datasetsCreateDatapoint.js";
import { tool$datasetsCreateDatapoints } from "./tools/datasetsCreateDatapoints.js";
import { tool$datasetsDelete } from "./tools/datasetsDelete.js";
import { tool$datasetsDeleteDatapoint } from "./tools/datasetsDeleteDatapoint.js";
import { tool$datasetsList } from "./tools/datasetsList.js";
import { tool$datasetsListDatapoints } from "./tools/datasetsListDatapoints.js";
import { tool$datasetsRetrieve } from "./tools/datasetsRetrieve.js";
import { tool$datasetsRetrieveDatapoint } from "./tools/datasetsRetrieveDatapoint.js";
import { tool$datasetsUpdate } from "./tools/datasetsUpdate.js";
import { tool$datasetsUpdateDatapoint } from "./tools/datasetsUpdateDatapoint.js";
import { tool$deploymentsGetConfig } from "./tools/deploymentsGetConfig.js";
import { tool$deploymentsInvoke } from "./tools/deploymentsInvoke.js";
import { tool$deploymentsList } from "./tools/deploymentsList.js";
import { tool$deploymentsMetricsCreate } from "./tools/deploymentsMetricsCreate.js";
import { tool$deploymentsStream } from "./tools/deploymentsStream.js";
import { tool$feedbackCreate } from "./tools/feedbackCreate.js";
import { tool$filesCreate } from "./tools/filesCreate.js";
import { tool$filesDelete } from "./tools/filesDelete.js";
import { tool$filesGet } from "./tools/filesGet.js";
import { tool$filesList } from "./tools/filesList.js";
import { tool$knowledgeCreate } from "./tools/knowledgeCreate.js";
import { tool$knowledgeCreateChunks } from "./tools/knowledgeCreateChunks.js";
import { tool$knowledgeCreateDatasource } from "./tools/knowledgeCreateDatasource.js";
import { tool$knowledgeDelete } from "./tools/knowledgeDelete.js";
import { tool$knowledgeDeleteChunk } from "./tools/knowledgeDeleteChunk.js";
import { tool$knowledgeDeleteDatasource } from "./tools/knowledgeDeleteDatasource.js";
import { tool$knowledgeList } from "./tools/knowledgeList.js";
import { tool$knowledgeListChunks } from "./tools/knowledgeListChunks.js";
import { tool$knowledgeListDatasources } from "./tools/knowledgeListDatasources.js";
import { tool$knowledgeRetrieve } from "./tools/knowledgeRetrieve.js";
import { tool$knowledgeRetrieveChunk } from "./tools/knowledgeRetrieveChunk.js";
import { tool$knowledgeRetrieveDatasource } from "./tools/knowledgeRetrieveDatasource.js";
import { tool$knowledgeSearch } from "./tools/knowledgeSearch.js";
import { tool$knowledgeUpdate } from "./tools/knowledgeUpdate.js";
import { tool$knowledgeUpdateChunk } from "./tools/knowledgeUpdateChunk.js";
import { tool$knowledgeUpdateDatasource } from "./tools/knowledgeUpdateDatasource.js";
import { tool$promptsCreate } from "./tools/promptsCreate.js";
import { tool$promptsDelete } from "./tools/promptsDelete.js";
import { tool$promptsGetVersion } from "./tools/promptsGetVersion.js";
import { tool$promptsList } from "./tools/promptsList.js";
import { tool$promptsListVersions } from "./tools/promptsListVersions.js";
import { tool$promptsRetrieve } from "./tools/promptsRetrieve.js";
import { tool$promptsUpdate } from "./tools/promptsUpdate.js";
import { tool$remoteconfigsRetrieve } from "./tools/remoteconfigsRetrieve.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  apiKey?: SDKOptions["apiKey"] | undefined;
  contactId?: SDKOptions["contactId"] | undefined;
  environment?: SDKOptions["environment"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Orq",
    version: "3.4.0-rc.0",
  });

  const client = new OrqCore({
    apiKey: deps.apiKey,
    contactId: deps.contactId,
    environment: deps.environment,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$contactsCreate);
  tool(tool$feedbackCreate);
  tool(tool$deploymentsList);
  tool(tool$deploymentsGetConfig);
  tool(tool$deploymentsInvoke);
  tool(tool$deploymentsStream);
  tool(tool$filesCreate);
  tool(tool$filesList);
  tool(tool$filesGet);
  tool(tool$filesDelete);
  tool(tool$promptsList);
  tool(tool$promptsCreate);
  tool(tool$promptsRetrieve);
  tool(tool$promptsUpdate);
  tool(tool$promptsDelete);
  tool(tool$promptsListVersions);
  tool(tool$promptsGetVersion);
  tool(tool$remoteconfigsRetrieve);
  tool(tool$datasetsList);
  tool(tool$datasetsCreate);
  tool(tool$datasetsRetrieve);
  tool(tool$datasetsUpdate);
  tool(tool$datasetsDelete);
  tool(tool$datasetsListDatapoints);
  tool(tool$datasetsCreateDatapoint);
  tool(tool$datasetsRetrieveDatapoint);
  tool(tool$datasetsUpdateDatapoint);
  tool(tool$datasetsDeleteDatapoint);
  tool(tool$datasetsCreateDatapoints);
  tool(tool$datasetsClear);
  tool(tool$knowledgeList);
  tool(tool$knowledgeCreate);
  tool(tool$knowledgeRetrieve);
  tool(tool$knowledgeUpdate);
  tool(tool$knowledgeDelete);
  tool(tool$knowledgeSearch);
  tool(tool$knowledgeListDatasources);
  tool(tool$knowledgeCreateDatasource);
  tool(tool$knowledgeRetrieveDatasource);
  tool(tool$knowledgeDeleteDatasource);
  tool(tool$knowledgeUpdateDatasource);
  tool(tool$knowledgeCreateChunks);
  tool(tool$knowledgeListChunks);
  tool(tool$knowledgeUpdateChunk);
  tool(tool$knowledgeDeleteChunk);
  tool(tool$knowledgeRetrieveChunk);
  tool(tool$deploymentsMetricsCreate);

  return server;
}
