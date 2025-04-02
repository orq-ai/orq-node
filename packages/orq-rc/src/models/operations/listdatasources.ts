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
 * Filter datasources by status.
 */
export type Status = Array<string> | string;

export type ListDatasourcesRequest = {
  /**
   * Unique identifier of the knowledge base
   */
  knowledgeId: string;
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
  /**
   * Search query to find datasources by name.
   */
  q?: string | undefined;
  /**
   * Filter datasources by status.
   */
  status?: Array<string> | string | undefined;
};

export const ListDatasourcesObject = {
  List: "list",
} as const;
export type ListDatasourcesObject = ClosedEnum<typeof ListDatasourcesObject>;

export const ListDatasourcesStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Queued: "queued",
} as const;
export type ListDatasourcesStatus = ClosedEnum<typeof ListDatasourcesStatus>;

export type ListDatasourcesData = {
  /**
   * The id of the resource
   */
  id?: string | undefined;
  /**
   * The display name of the datasource. Normally the name of the uploaded file
   */
  displayName: string;
  /**
   * The description of the knowledge base
   */
  description?: string | undefined;
  status: ListDatasourcesStatus;
  /**
   * The unique identifier of the file used to create the datasource.
   */
  fileId?: string | null | undefined;
  /**
   * The date and time the datasource was created
   */
  created: string;
  /**
   * The date and time the datasource was updated
   */
  updated: string;
  /**
   * The id of the resource
   */
  createdById?: string | undefined;
  /**
   * The id of the resource
   */
  updateById?: string | undefined;
  /**
   * The unique identifier of the knowledge base
   */
  knowledgeId: string;
  /**
   * The number of chunks in the datasource
   */
  chunksCount: number;
};

/**
 * Datasources successfully retrieved
 */
export type ListDatasourcesResponseBody = {
  object: ListDatasourcesObject;
  data: Array<ListDatasourcesData>;
  hasMore: boolean;
};

/** @internal */
export const Status$inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown> = z
  .union([z.array(z.string()), z.string()]);

/** @internal */
export type Status$Outbound = Array<string> | string;

/** @internal */
export const Status$outboundSchema: z.ZodType<
  Status$Outbound,
  z.ZodTypeDef,
  Status
> = z.union([z.array(z.string()), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
  /** @deprecated use `Status$Outbound` instead. */
  export type Outbound = Status$Outbound;
}

export function statusToJSON(status: Status): string {
  return JSON.stringify(Status$outboundSchema.parse(status));
}

export function statusFromJSON(
  jsonString: string,
): SafeParseResult<Status, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Status$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Status' from JSON`,
  );
}

/** @internal */
export const ListDatasourcesRequest$inboundSchema: z.ZodType<
  ListDatasourcesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  limit: z.number().default(10),
  starting_after: z.string().optional(),
  ending_before: z.string().optional(),
  q: z.string().optional(),
  status: z.union([z.array(z.string()), z.string()]).optional(),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "starting_after": "startingAfter",
    "ending_before": "endingBefore",
  });
});

/** @internal */
export type ListDatasourcesRequest$Outbound = {
  knowledge_id: string;
  limit: number;
  starting_after?: string | undefined;
  ending_before?: string | undefined;
  q?: string | undefined;
  status?: Array<string> | string | undefined;
};

/** @internal */
export const ListDatasourcesRequest$outboundSchema: z.ZodType<
  ListDatasourcesRequest$Outbound,
  z.ZodTypeDef,
  ListDatasourcesRequest
> = z.object({
  knowledgeId: z.string(),
  limit: z.number().default(10),
  startingAfter: z.string().optional(),
  endingBefore: z.string().optional(),
  q: z.string().optional(),
  status: z.union([z.array(z.string()), z.string()]).optional(),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
    startingAfter: "starting_after",
    endingBefore: "ending_before",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasourcesRequest$ {
  /** @deprecated use `ListDatasourcesRequest$inboundSchema` instead. */
  export const inboundSchema = ListDatasourcesRequest$inboundSchema;
  /** @deprecated use `ListDatasourcesRequest$outboundSchema` instead. */
  export const outboundSchema = ListDatasourcesRequest$outboundSchema;
  /** @deprecated use `ListDatasourcesRequest$Outbound` instead. */
  export type Outbound = ListDatasourcesRequest$Outbound;
}

export function listDatasourcesRequestToJSON(
  listDatasourcesRequest: ListDatasourcesRequest,
): string {
  return JSON.stringify(
    ListDatasourcesRequest$outboundSchema.parse(listDatasourcesRequest),
  );
}

export function listDatasourcesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasourcesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasourcesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasourcesRequest' from JSON`,
  );
}

/** @internal */
export const ListDatasourcesObject$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasourcesObject
> = z.nativeEnum(ListDatasourcesObject);

/** @internal */
export const ListDatasourcesObject$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasourcesObject
> = ListDatasourcesObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasourcesObject$ {
  /** @deprecated use `ListDatasourcesObject$inboundSchema` instead. */
  export const inboundSchema = ListDatasourcesObject$inboundSchema;
  /** @deprecated use `ListDatasourcesObject$outboundSchema` instead. */
  export const outboundSchema = ListDatasourcesObject$outboundSchema;
}

/** @internal */
export const ListDatasourcesStatus$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasourcesStatus
> = z.nativeEnum(ListDatasourcesStatus);

/** @internal */
export const ListDatasourcesStatus$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasourcesStatus
> = ListDatasourcesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasourcesStatus$ {
  /** @deprecated use `ListDatasourcesStatus$inboundSchema` instead. */
  export const inboundSchema = ListDatasourcesStatus$inboundSchema;
  /** @deprecated use `ListDatasourcesStatus$outboundSchema` instead. */
  export const outboundSchema = ListDatasourcesStatus$outboundSchema;
}

/** @internal */
export const ListDatasourcesData$inboundSchema: z.ZodType<
  ListDatasourcesData,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().default("01JQTTXB10M2VYPJZFQMEE4D25"),
  display_name: z.string(),
  description: z.string().optional(),
  status: ListDatasourcesStatus$inboundSchema,
  file_id: z.nullable(z.string()).optional(),
  created: z.string(),
  updated: z.string(),
  created_by_id: z.string().optional(),
  update_by_id: z.string().optional(),
  knowledge_id: z.string(),
  chunks_count: z.number(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "display_name": "displayName",
    "file_id": "fileId",
    "created_by_id": "createdById",
    "update_by_id": "updateById",
    "knowledge_id": "knowledgeId",
    "chunks_count": "chunksCount",
  });
});

/** @internal */
export type ListDatasourcesData$Outbound = {
  _id: string;
  display_name: string;
  description?: string | undefined;
  status: string;
  file_id?: string | null | undefined;
  created: string;
  updated: string;
  created_by_id?: string | undefined;
  update_by_id?: string | undefined;
  knowledge_id: string;
  chunks_count: number;
};

/** @internal */
export const ListDatasourcesData$outboundSchema: z.ZodType<
  ListDatasourcesData$Outbound,
  z.ZodTypeDef,
  ListDatasourcesData
> = z.object({
  id: z.string().default("01JQTTXB10M2VYPJZFQMEE4D25"),
  displayName: z.string(),
  description: z.string().optional(),
  status: ListDatasourcesStatus$outboundSchema,
  fileId: z.nullable(z.string()).optional(),
  created: z.string(),
  updated: z.string(),
  createdById: z.string().optional(),
  updateById: z.string().optional(),
  knowledgeId: z.string(),
  chunksCount: z.number(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    displayName: "display_name",
    fileId: "file_id",
    createdById: "created_by_id",
    updateById: "update_by_id",
    knowledgeId: "knowledge_id",
    chunksCount: "chunks_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasourcesData$ {
  /** @deprecated use `ListDatasourcesData$inboundSchema` instead. */
  export const inboundSchema = ListDatasourcesData$inboundSchema;
  /** @deprecated use `ListDatasourcesData$outboundSchema` instead. */
  export const outboundSchema = ListDatasourcesData$outboundSchema;
  /** @deprecated use `ListDatasourcesData$Outbound` instead. */
  export type Outbound = ListDatasourcesData$Outbound;
}

export function listDatasourcesDataToJSON(
  listDatasourcesData: ListDatasourcesData,
): string {
  return JSON.stringify(
    ListDatasourcesData$outboundSchema.parse(listDatasourcesData),
  );
}

export function listDatasourcesDataFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasourcesData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasourcesData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasourcesData' from JSON`,
  );
}

/** @internal */
export const ListDatasourcesResponseBody$inboundSchema: z.ZodType<
  ListDatasourcesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ListDatasourcesObject$inboundSchema,
  data: z.array(z.lazy(() => ListDatasourcesData$inboundSchema)),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "has_more": "hasMore",
  });
});

/** @internal */
export type ListDatasourcesResponseBody$Outbound = {
  object: string;
  data: Array<ListDatasourcesData$Outbound>;
  has_more: boolean;
};

/** @internal */
export const ListDatasourcesResponseBody$outboundSchema: z.ZodType<
  ListDatasourcesResponseBody$Outbound,
  z.ZodTypeDef,
  ListDatasourcesResponseBody
> = z.object({
  object: ListDatasourcesObject$outboundSchema,
  data: z.array(z.lazy(() => ListDatasourcesData$outboundSchema)),
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
export namespace ListDatasourcesResponseBody$ {
  /** @deprecated use `ListDatasourcesResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListDatasourcesResponseBody$inboundSchema;
  /** @deprecated use `ListDatasourcesResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListDatasourcesResponseBody$outboundSchema;
  /** @deprecated use `ListDatasourcesResponseBody$Outbound` instead. */
  export type Outbound = ListDatasourcesResponseBody$Outbound;
}

export function listDatasourcesResponseBodyToJSON(
  listDatasourcesResponseBody: ListDatasourcesResponseBody,
): string {
  return JSON.stringify(
    ListDatasourcesResponseBody$outboundSchema.parse(
      listDatasourcesResponseBody,
    ),
  );
}

export function listDatasourcesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasourcesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasourcesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasourcesResponseBody' from JSON`,
  );
}
