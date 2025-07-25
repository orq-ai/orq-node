/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveDatasourceRequest = {
  /**
   * The unique identifier of the knowledge base
   */
  knowledgeId: string;
  /**
   * The unique identifier of the datasource.
   */
  datasourceId: string;
};

export const RetrieveDatasourceStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Queued: "queued",
} as const;
export type RetrieveDatasourceStatus = ClosedEnum<
  typeof RetrieveDatasourceStatus
>;

/**
 * Datasource successfully retrieved
 */
export type RetrieveDatasourceResponseBody = {
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
  status: RetrieveDatasourceStatus;
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
  createdById?: string | null | undefined;
  /**
   * The id of the resource
   */
  updateById?: string | null | undefined;
  /**
   * The unique identifier of the knowledge base
   */
  knowledgeId: string;
  /**
   * The number of chunks in the datasource
   */
  chunksCount: number;
};

/** @internal */
export const RetrieveDatasourceRequest$inboundSchema: z.ZodType<
  RetrieveDatasourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  datasource_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "datasource_id": "datasourceId",
  });
});

/** @internal */
export type RetrieveDatasourceRequest$Outbound = {
  knowledge_id: string;
  datasource_id: string;
};

/** @internal */
export const RetrieveDatasourceRequest$outboundSchema: z.ZodType<
  RetrieveDatasourceRequest$Outbound,
  z.ZodTypeDef,
  RetrieveDatasourceRequest
> = z.object({
  knowledgeId: z.string(),
  datasourceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
    datasourceId: "datasource_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatasourceRequest$ {
  /** @deprecated use `RetrieveDatasourceRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatasourceRequest$inboundSchema;
  /** @deprecated use `RetrieveDatasourceRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatasourceRequest$outboundSchema;
  /** @deprecated use `RetrieveDatasourceRequest$Outbound` instead. */
  export type Outbound = RetrieveDatasourceRequest$Outbound;
}

export function retrieveDatasourceRequestToJSON(
  retrieveDatasourceRequest: RetrieveDatasourceRequest,
): string {
  return JSON.stringify(
    RetrieveDatasourceRequest$outboundSchema.parse(retrieveDatasourceRequest),
  );
}

export function retrieveDatasourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatasourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatasourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatasourceRequest' from JSON`,
  );
}

/** @internal */
export const RetrieveDatasourceStatus$inboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatasourceStatus
> = z.nativeEnum(RetrieveDatasourceStatus);

/** @internal */
export const RetrieveDatasourceStatus$outboundSchema: z.ZodNativeEnum<
  typeof RetrieveDatasourceStatus
> = RetrieveDatasourceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatasourceStatus$ {
  /** @deprecated use `RetrieveDatasourceStatus$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatasourceStatus$inboundSchema;
  /** @deprecated use `RetrieveDatasourceStatus$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatasourceStatus$outboundSchema;
}

/** @internal */
export const RetrieveDatasourceResponseBody$inboundSchema: z.ZodType<
  RetrieveDatasourceResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().default("01K10R2YZF1GBJTJZKYRTP9BM9"),
  display_name: z.string(),
  description: z.string().optional(),
  status: RetrieveDatasourceStatus$inboundSchema,
  file_id: z.nullable(z.string()).optional(),
  created: z.string(),
  updated: z.string(),
  created_by_id: z.nullable(z.string()).optional(),
  update_by_id: z.nullable(z.string()).optional(),
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
export type RetrieveDatasourceResponseBody$Outbound = {
  _id: string;
  display_name: string;
  description?: string | undefined;
  status: string;
  file_id?: string | null | undefined;
  created: string;
  updated: string;
  created_by_id?: string | null | undefined;
  update_by_id?: string | null | undefined;
  knowledge_id: string;
  chunks_count: number;
};

/** @internal */
export const RetrieveDatasourceResponseBody$outboundSchema: z.ZodType<
  RetrieveDatasourceResponseBody$Outbound,
  z.ZodTypeDef,
  RetrieveDatasourceResponseBody
> = z.object({
  id: z.string().default("01K10R2YZF1GBJTJZKYRTP9BM9"),
  displayName: z.string(),
  description: z.string().optional(),
  status: RetrieveDatasourceStatus$outboundSchema,
  fileId: z.nullable(z.string()).optional(),
  created: z.string(),
  updated: z.string(),
  createdById: z.nullable(z.string()).optional(),
  updateById: z.nullable(z.string()).optional(),
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
export namespace RetrieveDatasourceResponseBody$ {
  /** @deprecated use `RetrieveDatasourceResponseBody$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatasourceResponseBody$inboundSchema;
  /** @deprecated use `RetrieveDatasourceResponseBody$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatasourceResponseBody$outboundSchema;
  /** @deprecated use `RetrieveDatasourceResponseBody$Outbound` instead. */
  export type Outbound = RetrieveDatasourceResponseBody$Outbound;
}

export function retrieveDatasourceResponseBodyToJSON(
  retrieveDatasourceResponseBody: RetrieveDatasourceResponseBody,
): string {
  return JSON.stringify(
    RetrieveDatasourceResponseBody$outboundSchema.parse(
      retrieveDatasourceResponseBody,
    ),
  );
}

export function retrieveDatasourceResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatasourceResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatasourceResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatasourceResponseBody' from JSON`,
  );
}
