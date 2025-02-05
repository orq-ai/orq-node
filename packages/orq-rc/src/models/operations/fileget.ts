/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileGetGlobals = {
  contactId?: string | undefined;
};

export type FileGetRequest = {
  /**
   * The ID of the file
   */
  fileId: string;
};

/**
 * The intended purpose of the uploaded file.
 */
export const FileGetPurpose = {
  Retrieval: "retrieval",
  KnowledgeDatasource: "knowledge_datasource",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type FileGetPurpose = ClosedEnum<typeof FileGetPurpose>;

/**
 * File details retrieved successfully
 */
export type FileGetResponseBody = {
  id: string;
  /**
   * path to the file in the storage
   */
  objectName: string;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose: FileGetPurpose;
  bytes: number;
  fileName: string;
  /**
   * The id of the resource
   */
  workspaceId: string;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
};

/** @internal */
export const FileGetGlobals$inboundSchema: z.ZodType<
  FileGetGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  contactId: z.string().optional(),
});

/** @internal */
export type FileGetGlobals$Outbound = {
  contactId?: string | undefined;
};

/** @internal */
export const FileGetGlobals$outboundSchema: z.ZodType<
  FileGetGlobals$Outbound,
  z.ZodTypeDef,
  FileGetGlobals
> = z.object({
  contactId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileGetGlobals$ {
  /** @deprecated use `FileGetGlobals$inboundSchema` instead. */
  export const inboundSchema = FileGetGlobals$inboundSchema;
  /** @deprecated use `FileGetGlobals$outboundSchema` instead. */
  export const outboundSchema = FileGetGlobals$outboundSchema;
  /** @deprecated use `FileGetGlobals$Outbound` instead. */
  export type Outbound = FileGetGlobals$Outbound;
}

export function fileGetGlobalsToJSON(fileGetGlobals: FileGetGlobals): string {
  return JSON.stringify(FileGetGlobals$outboundSchema.parse(fileGetGlobals));
}

export function fileGetGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileGetGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileGetGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileGetGlobals' from JSON`,
  );
}

/** @internal */
export const FileGetRequest$inboundSchema: z.ZodType<
  FileGetRequest,
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
export type FileGetRequest$Outbound = {
  file_id: string;
};

/** @internal */
export const FileGetRequest$outboundSchema: z.ZodType<
  FileGetRequest$Outbound,
  z.ZodTypeDef,
  FileGetRequest
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
export namespace FileGetRequest$ {
  /** @deprecated use `FileGetRequest$inboundSchema` instead. */
  export const inboundSchema = FileGetRequest$inboundSchema;
  /** @deprecated use `FileGetRequest$outboundSchema` instead. */
  export const outboundSchema = FileGetRequest$outboundSchema;
  /** @deprecated use `FileGetRequest$Outbound` instead. */
  export type Outbound = FileGetRequest$Outbound;
}

export function fileGetRequestToJSON(fileGetRequest: FileGetRequest): string {
  return JSON.stringify(FileGetRequest$outboundSchema.parse(fileGetRequest));
}

export function fileGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileGetRequest' from JSON`,
  );
}

/** @internal */
export const FileGetPurpose$inboundSchema: z.ZodNativeEnum<
  typeof FileGetPurpose
> = z.nativeEnum(FileGetPurpose);

/** @internal */
export const FileGetPurpose$outboundSchema: z.ZodNativeEnum<
  typeof FileGetPurpose
> = FileGetPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileGetPurpose$ {
  /** @deprecated use `FileGetPurpose$inboundSchema` instead. */
  export const inboundSchema = FileGetPurpose$inboundSchema;
  /** @deprecated use `FileGetPurpose$outboundSchema` instead. */
  export const outboundSchema = FileGetPurpose$outboundSchema;
}

/** @internal */
export const FileGetResponseBody$inboundSchema: z.ZodType<
  FileGetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  object_name: z.string(),
  purpose: FileGetPurpose$inboundSchema,
  bytes: z.number(),
  file_name: z.string(),
  workspace_id: z.string(),
  created: z.string().datetime({ offset: true }).default(
    "2025-02-05T18:57:07.880Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "object_name": "objectName",
    "file_name": "fileName",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type FileGetResponseBody$Outbound = {
  _id: string;
  object_name: string;
  purpose: string;
  bytes: number;
  file_name: string;
  workspace_id: string;
  created: string;
};

/** @internal */
export const FileGetResponseBody$outboundSchema: z.ZodType<
  FileGetResponseBody$Outbound,
  z.ZodTypeDef,
  FileGetResponseBody
> = z.object({
  id: z.string(),
  objectName: z.string(),
  purpose: FileGetPurpose$outboundSchema,
  bytes: z.number(),
  fileName: z.string(),
  workspaceId: z.string(),
  created: z.date().default(() => new Date("2025-02-05T18:57:07.880Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    objectName: "object_name",
    fileName: "file_name",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileGetResponseBody$ {
  /** @deprecated use `FileGetResponseBody$inboundSchema` instead. */
  export const inboundSchema = FileGetResponseBody$inboundSchema;
  /** @deprecated use `FileGetResponseBody$outboundSchema` instead. */
  export const outboundSchema = FileGetResponseBody$outboundSchema;
  /** @deprecated use `FileGetResponseBody$Outbound` instead. */
  export type Outbound = FileGetResponseBody$Outbound;
}

export function fileGetResponseBodyToJSON(
  fileGetResponseBody: FileGetResponseBody,
): string {
  return JSON.stringify(
    FileGetResponseBody$outboundSchema.parse(fileGetResponseBody),
  );
}

export function fileGetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<FileGetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileGetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileGetResponseBody' from JSON`,
  );
}
