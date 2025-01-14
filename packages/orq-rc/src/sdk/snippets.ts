/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { promptSnippetsFindOne } from "../funcs/promptSnippetsFindOne.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Snippets extends ClientSDK {
  /**
   * Get one prompt snippet
   */
  async findOne(
    request: operations.FindOnePromptSnippetRequest,
    options?: RequestOptions,
  ): Promise<operations.FindOnePromptSnippetResponseBody> {
    return unwrapAsync(promptSnippetsFindOne(
      this,
      request,
      options,
    ));
  }
}
