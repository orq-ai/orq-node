/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { promptsCreate } from "../funcs/promptsCreate.js";
import { promptsDelete } from "../funcs/promptsDelete.js";
import { promptsGetVersion } from "../funcs/promptsGetVersion.js";
import { promptsList } from "../funcs/promptsList.js";
import { promptsListVersions } from "../funcs/promptsListVersions.js";
import { promptsRetrieve } from "../funcs/promptsRetrieve.js";
import { promptsUpdate } from "../funcs/promptsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Prompts extends ClientSDK {
  /**
   * List all prompts
   *
   * @remarks
   * Returns a list of your prompts. The prompts are returned sorted by creation date, with the most recent prompts appearing first
   */
  async list(
    request?: operations.GetAllPromptsRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetAllPromptsResponseBody> {
    return unwrapAsync(promptsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a prompt
   */
  async create(
    request?: operations.CreatePromptRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreatePromptResponseBody> {
    return unwrapAsync(promptsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a prompt
   *
   * @remarks
   * Retrieves a prompt object
   */
  async retrieve(
    request: operations.GetOnePromptRequest,
    options?: RequestOptions,
  ): Promise<operations.GetOnePromptResponseBody> {
    return unwrapAsync(promptsRetrieve(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a prompt
   */
  async update(
    request: operations.UpdatePromptRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdatePromptResponseBody> {
    return unwrapAsync(promptsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a prompt
   */
  async delete(
    request: operations.DeletePromptRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(promptsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List all prompt versions
   *
   * @remarks
   * Returns a list of your prompt versions. The prompt versions are returned sorted by creation date, with the most recent prompt versions appearing first
   */
  async listVersions(
    request: operations.ListPromptVersionsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPromptVersionsResponseBody> {
    return unwrapAsync(promptsListVersions(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a prompt version
   *
   * @remarks
   * Retrieves a specific version of a prompt by its ID and version ID.
   */
  async getVersion(
    request: operations.GetPromptVersionRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPromptVersionResponseBody> {
    return unwrapAsync(promptsGetVersion(
      this,
      request,
      options,
    ));
  }
}
