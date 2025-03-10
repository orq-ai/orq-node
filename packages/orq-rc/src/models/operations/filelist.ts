/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * List sorting preference.
 */
export const QueryParamSort = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * List sorting preference.
 */
export type QueryParamSort = ClosedEnum<typeof QueryParamSort>;

export type FileListRequest = {
  /**
   * List sorting preference.
   */
  sort?: QueryParamSort | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 50, and the default is 10
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, ending with `01JJ1HDHN79XAS7A01WB3HYSDB`, your subsequent call can include `after=01JJ1HDHN79XAS7A01WB3HYSDB` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, starting with `01JJ1HDHN79XAS7A01WB3HYSDB`, your subsequent call can include `before=01JJ1HDHN79XAS7A01WB3HYSDB` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
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
  Batch: "batch",
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
export const QueryParamSort$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamSort
> = z.nativeEnum(QueryParamSort);

/** @internal */
export const QueryParamSort$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamSort
> = QueryParamSort$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamSort$ {
  /** @deprecated use `QueryParamSort$inboundSchema` instead. */
  export const inboundSchema = QueryParamSort$inboundSchema;
  /** @deprecated use `QueryParamSort$outboundSchema` instead. */
  export const outboundSchema = QueryParamSort$outboundSchema;
}

/** @internal */
export const FileListRequest$inboundSchema: z.ZodType<
  FileListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sort: QueryParamSort$inboundSchema.default("asc"),
  limit: z.number().default(10),
  starting_after: z.string().optional(),
  ending_before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "starting_after": "startingAfter",
    "ending_before": "endingBefore",
  });
});

/** @internal */
export type FileListRequest$Outbound = {
  sort: string;
  limit: number;
  starting_after?: string | undefined;
  ending_before?: string | undefined;
};

/** @internal */
export const FileListRequest$outboundSchema: z.ZodType<
  FileListRequest$Outbound,
  z.ZodTypeDef,
  FileListRequest
> = z.object({
  sort: QueryParamSort$outboundSchema.default("asc"),
  limit: z.number().default(10),
  startingAfter: z.string().optional(),
  endingBefore: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    startingAfter: "starting_after",
    endingBefore: "ending_before",
  });
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
    "2025-03-10T14:37:51.333Z",
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
  created: z.date().default(() => new Date("2025-03-10T14:37:51.333Z"))
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
