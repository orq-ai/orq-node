/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ClearDatasetRequest = {
  datasetId: string;
};

/** @internal */
export const ClearDatasetRequest$inboundSchema: z.ZodType<
  ClearDatasetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataset_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "dataset_id": "datasetId",
  });
});

/** @internal */
export type ClearDatasetRequest$Outbound = {
  dataset_id: string;
};

/** @internal */
export const ClearDatasetRequest$outboundSchema: z.ZodType<
  ClearDatasetRequest$Outbound,
  z.ZodTypeDef,
  ClearDatasetRequest
> = z.object({
  datasetId: z.string(),
}).transform((v) => {
  return remap$(v, {
    datasetId: "dataset_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClearDatasetRequest$ {
  /** @deprecated use `ClearDatasetRequest$inboundSchema` instead. */
  export const inboundSchema = ClearDatasetRequest$inboundSchema;
  /** @deprecated use `ClearDatasetRequest$outboundSchema` instead. */
  export const outboundSchema = ClearDatasetRequest$outboundSchema;
  /** @deprecated use `ClearDatasetRequest$Outbound` instead. */
  export type Outbound = ClearDatasetRequest$Outbound;
}

export function clearDatasetRequestToJSON(
  clearDatasetRequest: ClearDatasetRequest,
): string {
  return JSON.stringify(
    ClearDatasetRequest$outboundSchema.parse(clearDatasetRequest),
  );
}

export function clearDatasetRequestFromJSON(
  jsonString: string,
): SafeParseResult<ClearDatasetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClearDatasetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClearDatasetRequest' from JSON`,
  );
}
