/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateDatasetRequestBody = {
  displayName: string;
};

export type UpdateDatasetRequest = {
  datasetId: string;
  requestBody?: UpdateDatasetRequestBody | undefined;
};

export type UpdateDatasetMetadata = {
  totalVersions: number;
  datapointsCount: number;
};

/**
 * Dataset updated.
 */
export type UpdateDatasetResponseBody = {
  /**
   * The unique identifier of the dataset
   */
  id: string;
  /**
   * The display name of the dataset
   */
  displayName: string;
  /**
   * The unique identifier of the project it belongs to
   */
  projectId: string;
  /**
   * The unique identifier of the workspace it belongs to
   */
  workspaceId: string;
  /**
   * The unique identifier of the user who created the dataset
   */
  createdById?: string | undefined;
  /**
   * The unique identifier of the user who last updated the dataset
   */
  updatedById?: string | undefined;
  metadata: UpdateDatasetMetadata;
  /**
   * The unique identifier for the parent of the committed version
   */
  parentId?: string | undefined;
  /**
   * The version of the dataset
   */
  version?: string | undefined;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
  /**
   * The date and time the resource was last updated
   */
  updated?: Date | undefined;
};

/** @internal */
export const UpdateDatasetRequestBody$inboundSchema: z.ZodType<
  UpdateDatasetRequestBody,
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
export type UpdateDatasetRequestBody$Outbound = {
  display_name: string;
};

/** @internal */
export const UpdateDatasetRequestBody$outboundSchema: z.ZodType<
  UpdateDatasetRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateDatasetRequestBody
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
export namespace UpdateDatasetRequestBody$ {
  /** @deprecated use `UpdateDatasetRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasetRequestBody$inboundSchema;
  /** @deprecated use `UpdateDatasetRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasetRequestBody$outboundSchema;
  /** @deprecated use `UpdateDatasetRequestBody$Outbound` instead. */
  export type Outbound = UpdateDatasetRequestBody$Outbound;
}

export function updateDatasetRequestBodyToJSON(
  updateDatasetRequestBody: UpdateDatasetRequestBody,
): string {
  return JSON.stringify(
    UpdateDatasetRequestBody$outboundSchema.parse(updateDatasetRequestBody),
  );
}

export function updateDatasetRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasetRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasetRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasetRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateDatasetRequest$inboundSchema: z.ZodType<
  UpdateDatasetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dataset_id: z.string(),
  RequestBody: z.lazy(() => UpdateDatasetRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "dataset_id": "datasetId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateDatasetRequest$Outbound = {
  dataset_id: string;
  RequestBody?: UpdateDatasetRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateDatasetRequest$outboundSchema: z.ZodType<
  UpdateDatasetRequest$Outbound,
  z.ZodTypeDef,
  UpdateDatasetRequest
> = z.object({
  datasetId: z.string(),
  requestBody: z.lazy(() => UpdateDatasetRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    datasetId: "dataset_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDatasetRequest$ {
  /** @deprecated use `UpdateDatasetRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasetRequest$inboundSchema;
  /** @deprecated use `UpdateDatasetRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasetRequest$outboundSchema;
  /** @deprecated use `UpdateDatasetRequest$Outbound` instead. */
  export type Outbound = UpdateDatasetRequest$Outbound;
}

export function updateDatasetRequestToJSON(
  updateDatasetRequest: UpdateDatasetRequest,
): string {
  return JSON.stringify(
    UpdateDatasetRequest$outboundSchema.parse(updateDatasetRequest),
  );
}

export function updateDatasetRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasetRequest' from JSON`,
  );
}

/** @internal */
export const UpdateDatasetMetadata$inboundSchema: z.ZodType<
  UpdateDatasetMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  total_versions: z.number(),
  datapoints_count: z.number(),
}).transform((v) => {
  return remap$(v, {
    "total_versions": "totalVersions",
    "datapoints_count": "datapointsCount",
  });
});

/** @internal */
export type UpdateDatasetMetadata$Outbound = {
  total_versions: number;
  datapoints_count: number;
};

/** @internal */
export const UpdateDatasetMetadata$outboundSchema: z.ZodType<
  UpdateDatasetMetadata$Outbound,
  z.ZodTypeDef,
  UpdateDatasetMetadata
> = z.object({
  totalVersions: z.number(),
  datapointsCount: z.number(),
}).transform((v) => {
  return remap$(v, {
    totalVersions: "total_versions",
    datapointsCount: "datapoints_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDatasetMetadata$ {
  /** @deprecated use `UpdateDatasetMetadata$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasetMetadata$inboundSchema;
  /** @deprecated use `UpdateDatasetMetadata$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasetMetadata$outboundSchema;
  /** @deprecated use `UpdateDatasetMetadata$Outbound` instead. */
  export type Outbound = UpdateDatasetMetadata$Outbound;
}

export function updateDatasetMetadataToJSON(
  updateDatasetMetadata: UpdateDatasetMetadata,
): string {
  return JSON.stringify(
    UpdateDatasetMetadata$outboundSchema.parse(updateDatasetMetadata),
  );
}

export function updateDatasetMetadataFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasetMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasetMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasetMetadata' from JSON`,
  );
}

/** @internal */
export const UpdateDatasetResponseBody$inboundSchema: z.ZodType<
  UpdateDatasetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  display_name: z.string(),
  project_id: z.string(),
  workspace_id: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  metadata: z.lazy(() => UpdateDatasetMetadata$inboundSchema),
  parent_id: z.string().optional(),
  version: z.string().optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-03-25T12:37:14.599Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "display_name": "displayName",
    "project_id": "projectId",
    "workspace_id": "workspaceId",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
    "parent_id": "parentId",
  });
});

/** @internal */
export type UpdateDatasetResponseBody$Outbound = {
  _id: string;
  display_name: string;
  project_id: string;
  workspace_id: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  metadata: UpdateDatasetMetadata$Outbound;
  parent_id?: string | undefined;
  version?: string | undefined;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const UpdateDatasetResponseBody$outboundSchema: z.ZodType<
  UpdateDatasetResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateDatasetResponseBody
> = z.object({
  id: z.string(),
  displayName: z.string(),
  projectId: z.string(),
  workspaceId: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  metadata: z.lazy(() => UpdateDatasetMetadata$outboundSchema),
  parentId: z.string().optional(),
  version: z.string().optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-03-25T12:37:14.599Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    displayName: "display_name",
    projectId: "project_id",
    workspaceId: "workspace_id",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
    parentId: "parent_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDatasetResponseBody$ {
  /** @deprecated use `UpdateDatasetResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateDatasetResponseBody$inboundSchema;
  /** @deprecated use `UpdateDatasetResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateDatasetResponseBody$outboundSchema;
  /** @deprecated use `UpdateDatasetResponseBody$Outbound` instead. */
  export type Outbound = UpdateDatasetResponseBody$Outbound;
}

export function updateDatasetResponseBodyToJSON(
  updateDatasetResponseBody: UpdateDatasetResponseBody,
): string {
  return JSON.stringify(
    UpdateDatasetResponseBody$outboundSchema.parse(updateDatasetResponseBody),
  );
}

export function updateDatasetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDatasetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDatasetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDatasetResponseBody' from JSON`,
  );
}
