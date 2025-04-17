/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateDatasourceRequestBody = {
  displayName: string;
};

export type UpdateDatasourceRequest = {
  /**
   * The unique identifier of the knowledge base
   */
  knowledgeId: string;
  /**
   * The unique identifier of the datasource.
   */
  datasourceId: string;
  requestBody: UpdateDatasourceRequestBody;
};

export const UpdateDatasourceStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Queued: "queued",
} as const;
export type UpdateDatasourceStatus = ClosedEnum<typeof UpdateDatasourceStatus>;

/**
 * Datasource successfully updated
 */
export type UpdateDatasourceResponseBody = {
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
  status: UpdateDatasourceStatus;
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
export const UpdateDatasourceRequestBody$inboundSchema: z.ZodType<
  UpdateDatasourceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  display_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "display_name": "displayName",
  });
});

/** @internal */
export type UpdateDatasourceRequestBody$Outbound = {
  display_name: string;
};

/** @internal */
export const UpdateDatasourceRequestBody$outboundSchema: z.ZodType<
  UpdateDatasourceRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateDatasourceRequestBody
> = z.object({
  displayName: z.string(),
}).transform((v) => {
  return remap$(v, {
    displayName: "display_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDatasourceRequestBody$ {
  /** @deprecated use `UpdateDatasourceRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasourceRequestBody$inboundSchema;
  /** @deprecated use `UpdateDatasourceRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasourceRequestBody$outboundSchema;
  /** @deprecated use `UpdateDatasourceRequestBody$Outbound` instead. */
  export type Outbound = UpdateDatasourceRequestBody$Outbound;
}

export function updateDatasourceRequestBodyToJSON(
  updateDatasourceRequestBody: UpdateDatasourceRequestBody,
): string {
  return JSON.stringify(
    UpdateDatasourceRequestBody$outboundSchema.parse(
      updateDatasourceRequestBody,
    ),
  );
}

export function updateDatasourceRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasourceRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasourceRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasourceRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateDatasourceRequest$inboundSchema: z.ZodType<
  UpdateDatasourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  datasource_id: z.string(),
  RequestBody: z.lazy(() => UpdateDatasourceRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "datasource_id": "datasourceId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateDatasourceRequest$Outbound = {
  knowledge_id: string;
  datasource_id: string;
  RequestBody: UpdateDatasourceRequestBody$Outbound;
};

/** @internal */
export const UpdateDatasourceRequest$outboundSchema: z.ZodType<
  UpdateDatasourceRequest$Outbound,
  z.ZodTypeDef,
  UpdateDatasourceRequest
> = z.object({
  knowledgeId: z.string(),
  datasourceId: z.string(),
  requestBody: z.lazy(() => UpdateDatasourceRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
    datasourceId: "datasource_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDatasourceRequest$ {
  /** @deprecated use `UpdateDatasourceRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasourceRequest$inboundSchema;
  /** @deprecated use `UpdateDatasourceRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasourceRequest$outboundSchema;
  /** @deprecated use `UpdateDatasourceRequest$Outbound` instead. */
  export type Outbound = UpdateDatasourceRequest$Outbound;
}

export function updateDatasourceRequestToJSON(
  updateDatasourceRequest: UpdateDatasourceRequest,
): string {
  return JSON.stringify(
    UpdateDatasourceRequest$outboundSchema.parse(updateDatasourceRequest),
  );
}

export function updateDatasourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasourceRequest' from JSON`,
  );
}

/** @internal */
export const UpdateDatasourceStatus$inboundSchema: z.ZodNativeEnum<
  typeof UpdateDatasourceStatus
> = z.nativeEnum(UpdateDatasourceStatus);

/** @internal */
export const UpdateDatasourceStatus$outboundSchema: z.ZodNativeEnum<
  typeof UpdateDatasourceStatus
> = UpdateDatasourceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDatasourceStatus$ {
  /** @deprecated use `UpdateDatasourceStatus$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasourceStatus$inboundSchema;
  /** @deprecated use `UpdateDatasourceStatus$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasourceStatus$outboundSchema;
}

/** @internal */
export const UpdateDatasourceResponseBody$inboundSchema: z.ZodType<
  UpdateDatasourceResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().default("01JS22A9HT11V8NR8C0VSFRA21"),
  display_name: z.string(),
  description: z.string().optional(),
  status: UpdateDatasourceStatus$inboundSchema,
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
export type UpdateDatasourceResponseBody$Outbound = {
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
export const UpdateDatasourceResponseBody$outboundSchema: z.ZodType<
  UpdateDatasourceResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateDatasourceResponseBody
> = z.object({
  id: z.string().default("01JS22A9HT11V8NR8C0VSFRA21"),
  displayName: z.string(),
  description: z.string().optional(),
  status: UpdateDatasourceStatus$outboundSchema,
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
export namespace UpdateDatasourceResponseBody$ {
  /** @deprecated use `UpdateDatasourceResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasourceResponseBody$inboundSchema;
  /** @deprecated use `UpdateDatasourceResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasourceResponseBody$outboundSchema;
  /** @deprecated use `UpdateDatasourceResponseBody$Outbound` instead. */
  export type Outbound = UpdateDatasourceResponseBody$Outbound;
}

export function updateDatasourceResponseBodyToJSON(
  updateDatasourceResponseBody: UpdateDatasourceResponseBody,
): string {
  return JSON.stringify(
    UpdateDatasourceResponseBody$outboundSchema.parse(
      updateDatasourceResponseBody,
    ),
  );
}

export function updateDatasourceResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasourceResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasourceResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasourceResponseBody' from JSON`,
  );
}
