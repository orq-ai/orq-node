/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileDeleteRequest = {
  /**
   * The ID of the file
   */
  fileId: string;
};

/** @internal */
export const FileDeleteRequest$inboundSchema: z.ZodType<
  FileDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "file_id": "fileId",
  });
});

/** @internal */
export type FileDeleteRequest$Outbound = {
  file_id: string;
};

/** @internal */
export const FileDeleteRequest$outboundSchema: z.ZodType<
  FileDeleteRequest$Outbound,
  z.ZodTypeDef,
  FileDeleteRequest
> = z.object({
  fileId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fileId: "file_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileDeleteRequest$ {
  /** @deprecated use `FileDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = FileDeleteRequest$inboundSchema;
  /** @deprecated use `FileDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = FileDeleteRequest$outboundSchema;
  /** @deprecated use `FileDeleteRequest$Outbound` instead. */
  export type Outbound = FileDeleteRequest$Outbound;
}

export function fileDeleteRequestToJSON(
  fileDeleteRequest: FileDeleteRequest,
): string {
  return JSON.stringify(
    FileDeleteRequest$outboundSchema.parse(fileDeleteRequest),
  );
}

export function fileDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileDeleteRequest' from JSON`,
  );
}
