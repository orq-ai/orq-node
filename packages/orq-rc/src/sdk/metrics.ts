/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsMetricsCreate } from "../funcs/deploymentsMetricsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Metrics extends ClientSDK {
  /**
   * Add metrics
   *
   * @remarks
   * Add metrics to a deployment
   */
  async create(
    request: operations.DeploymentCreateMetricRequest,
    options?: RequestOptions,
  ): Promise<operations.DeploymentCreateMetricResponseBody> {
    return unwrapAsync(deploymentsMetricsCreate(
      this,
      request,
      options,
    ));
  }
}
