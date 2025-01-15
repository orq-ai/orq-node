/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesBulkUpload } from "../funcs/filesBulkUpload.js";
import { filesDelete } from "../funcs/filesDelete.js";
import { filesGet } from "../funcs/filesGet.js";
import { filesList } from "../funcs/filesList.js";
import { filesUpdate } from "../funcs/filesUpdate.js";
import { filesUpload } from "../funcs/filesUpload.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Files extends ClientSDK {
  /**
   * Upload file
   *
   * @remarks
   * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
   */
  async upload(
    request?: operations.FileUploadRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.FileUploadResponseBody> {
    return unwrapAsync(filesUpload(
      this,
      request,
      options,
    ));
  }

  /**
   * List all files
   */
  async list(
    request?: operations.FileListRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.FileListResponseBody> {
    return unwrapAsync(filesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get file by ID
   */
  async get(
    request: operations.FileGetRequest,
    options?: RequestOptions,
  ): Promise<operations.FileGetResponseBody> {
    return unwrapAsync(filesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update file name
   */
  async update(
    request: operations.FileUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.FileUpdateResponseBody> {
    return unwrapAsync(filesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete file
   */
  async delete(
    request: operations.FileDeleteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(filesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk upload file
   *
   * @remarks
   * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
   */
  async bulkUpload(
    request: operations.BulkFileUploadRequestBody,
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(filesBulkUpload(
      this,
      request,
      options,
    ));
  }
}
