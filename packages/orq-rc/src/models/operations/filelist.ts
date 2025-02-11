/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileListRequest = {
  page?: number | undefined;
  limit?: number | undefined;
  lastId?: string | null | undefined;
  firstId?: string | null | undefined;
};

export const FileListObject = {
  List: "list",
} as const;
export type FileListObject = ClosedEnum<typeof FileListObject>;

/**
 * The intended purpose of the uploaded file.
 */
export const FileListPurpose = {
  Retrieval: "retrieval",
  KnowledgeDatasource: "knowledge_datasource",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type FileListPurpose = ClosedEnum<typeof FileListPurpose>;

export type FileListData = {
  id: string;
  /**
   * path to the file in the storage
   */
  objectName: string;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose: FileListPurpose;
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

/**
 * Files retrieved successfully
 */
export type FileListResponseBody = {
  object: FileListObject;
  data: Array<FileListData>;
  hasMore: boolean;
};

/** @internal */
export const FileListRequest$inboundSchema: z.ZodType<
  FileListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().optional(),
  limit: z.number().default(50),
  lastId: z.nullable(z.string()).optional(),
  firstId: z.nullable(z.string()).optional(),
});

/** @internal */
export type FileListRequest$Outbound = {
  page?: number | undefined;
  limit: number;
  lastId?: string | null | undefined;
  firstId?: string | null | undefined;
};

/** @internal */
export const FileListRequest$outboundSchema: z.ZodType<
  FileListRequest$Outbound,
  z.ZodTypeDef,
  FileListRequest
> = z.object({
  page: z.number().optional(),
  limit: z.number().default(50),
  lastId: z.nullable(z.string()).optional(),
  firstId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileListRequest$ {
  /** @deprecated use `FileListRequest$inboundSchema` instead. */
  export const inboundSchema = FileListRequest$inboundSchema;
  /** @deprecated use `FileListRequest$outboundSchema` instead. */
  export const outboundSchema = FileListRequest$outboundSchema;
  /** @deprecated use `FileListRequest$Outbound` instead. */
  export type Outbound = FileListRequest$Outbound;
}

export function fileListRequestToJSON(
  fileListRequest: FileListRequest,
): string {
  return JSON.stringify(FileListRequest$outboundSchema.parse(fileListRequest));
}

export function fileListRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileListRequest' from JSON`,
  );
}

/** @internal */
export const FileListObject$inboundSchema: z.ZodNativeEnum<
  typeof FileListObject
> = z.nativeEnum(FileListObject);

/** @internal */
export const FileListObject$outboundSchema: z.ZodNativeEnum<
  typeof FileListObject
> = FileListObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileListObject$ {
  /** @deprecated use `FileListObject$inboundSchema` instead. */
  export const inboundSchema = FileListObject$inboundSchema;
  /** @deprecated use `FileListObject$outboundSchema` instead. */
  export const outboundSchema = FileListObject$outboundSchema;
}

/** @internal */
export const FileListPurpose$inboundSchema: z.ZodNativeEnum<
  typeof FileListPurpose
> = z.nativeEnum(FileListPurpose);

/** @internal */
export const FileListPurpose$outboundSchema: z.ZodNativeEnum<
  typeof FileListPurpose
> = FileListPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileListPurpose$ {
  /** @deprecated use `FileListPurpose$inboundSchema` instead. */
  export const inboundSchema = FileListPurpose$inboundSchema;
  /** @deprecated use `FileListPurpose$outboundSchema` instead. */
  export const outboundSchema = FileListPurpose$outboundSchema;
}

/** @internal */
export const FileListData$inboundSchema: z.ZodType<
  FileListData,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  object_name: z.string(),
  purpose: FileListPurpose$inboundSchema,
  bytes: z.number(),
  file_name: z.string(),
  workspace_id: z.string(),
  created: z.string().datetime({ offset: true }).default(
    "2025-02-11T09:01:53.453Z",
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
export type FileListData$Outbound = {
  _id: string;
  object_name: string;
  purpose: string;
  bytes: number;
  file_name: string;
  workspace_id: string;
  created: string;
};

/** @internal */
export const FileListData$outboundSchema: z.ZodType<
  FileListData$Outbound,
  z.ZodTypeDef,
  FileListData
> = z.object({
  id: z.string(),
  objectName: z.string(),
  purpose: FileListPurpose$outboundSchema,
  bytes: z.number(),
  fileName: z.string(),
  workspaceId: z.string(),
  created: z.date().default(() => new Date("2025-02-11T09:01:53.453Z"))
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
export namespace FileListData$ {
  /** @deprecated use `FileListData$inboundSchema` instead. */
  export const inboundSchema = FileListData$inboundSchema;
  /** @deprecated use `FileListData$outboundSchema` instead. */
  export const outboundSchema = FileListData$outboundSchema;
  /** @deprecated use `FileListData$Outbound` instead. */
  export type Outbound = FileListData$Outbound;
}

export function fileListDataToJSON(fileListData: FileListData): string {
  return JSON.stringify(FileListData$outboundSchema.parse(fileListData));
}

export function fileListDataFromJSON(
  jsonString: string,
): SafeParseResult<FileListData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileListData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileListData' from JSON`,
  );
}

/** @internal */
export const FileListResponseBody$inboundSchema: z.ZodType<
  FileListResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: FileListObject$inboundSchema,
  data: z.array(z.lazy(() => FileListData$inboundSchema)),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "has_more": "hasMore",
  });
});

/** @internal */
export type FileListResponseBody$Outbound = {
  object: string;
  data: Array<FileListData$Outbound>;
  has_more: boolean;
};

/** @internal */
export const FileListResponseBody$outboundSchema: z.ZodType<
  FileListResponseBody$Outbound,
  z.ZodTypeDef,
  FileListResponseBody
> = z.object({
  object: FileListObject$outboundSchema,
  data: z.array(z.lazy(() => FileListData$outboundSchema)),
  hasMore: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    hasMore: "has_more",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileListResponseBody$ {
  /** @deprecated use `FileListResponseBody$inboundSchema` instead. */
  export const inboundSchema = FileListResponseBody$inboundSchema;
  /** @deprecated use `FileListResponseBody$outboundSchema` instead. */
  export const outboundSchema = FileListResponseBody$outboundSchema;
  /** @deprecated use `FileListResponseBody$Outbound` instead. */
  export type Outbound = FileListResponseBody$Outbound;
}

export function fileListResponseBodyToJSON(
  fileListResponseBody: FileListResponseBody,
): string {
  return JSON.stringify(
    FileListResponseBody$outboundSchema.parse(fileListResponseBody),
  );
}

export function fileListResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<FileListResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileListResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileListResponseBody' from JSON`,
  );
}
