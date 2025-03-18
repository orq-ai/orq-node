/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RetrieveDatasetRequest = {
  datasetId: string;
};

export type RetrieveDatasetMetadata = {
  totalVersions: number;
  datapointsCount: number;
};

/**
 * Dataset retrieved successfully. Returns the complete dataset object.
 */
export type RetrieveDatasetResponseBody = {
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
  metadata: RetrieveDatasetMetadata;
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
export const RetrieveDatasetRequest$inboundSchema: z.ZodType<
  RetrieveDatasetRequest,
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
export type RetrieveDatasetRequest$Outbound = {
  dataset_id: string;
};

/** @internal */
export const RetrieveDatasetRequest$outboundSchema: z.ZodType<
  RetrieveDatasetRequest$Outbound,
  z.ZodTypeDef,
  RetrieveDatasetRequest
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
export namespace RetrieveDatasetRequest$ {
  /** @deprecated use `RetrieveDatasetRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatasetRequest$inboundSchema;
  /** @deprecated use `RetrieveDatasetRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatasetRequest$outboundSchema;
  /** @deprecated use `RetrieveDatasetRequest$Outbound` instead. */
  export type Outbound = RetrieveDatasetRequest$Outbound;
}

export function retrieveDatasetRequestToJSON(
  retrieveDatasetRequest: RetrieveDatasetRequest,
): string {
  return JSON.stringify(
    RetrieveDatasetRequest$outboundSchema.parse(retrieveDatasetRequest),
  );
}

export function retrieveDatasetRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatasetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatasetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatasetRequest' from JSON`,
  );
}

/** @internal */
export const RetrieveDatasetMetadata$inboundSchema: z.ZodType<
  RetrieveDatasetMetadata,
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
export type RetrieveDatasetMetadata$Outbound = {
  total_versions: number;
  datapoints_count: number;
};

/** @internal */
export const RetrieveDatasetMetadata$outboundSchema: z.ZodType<
  RetrieveDatasetMetadata$Outbound,
  z.ZodTypeDef,
  RetrieveDatasetMetadata
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
export namespace RetrieveDatasetMetadata$ {
  /** @deprecated use `RetrieveDatasetMetadata$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatasetMetadata$inboundSchema;
  /** @deprecated use `RetrieveDatasetMetadata$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatasetMetadata$outboundSchema;
  /** @deprecated use `RetrieveDatasetMetadata$Outbound` instead. */
  export type Outbound = RetrieveDatasetMetadata$Outbound;
}

export function retrieveDatasetMetadataToJSON(
  retrieveDatasetMetadata: RetrieveDatasetMetadata,
): string {
  return JSON.stringify(
    RetrieveDatasetMetadata$outboundSchema.parse(retrieveDatasetMetadata),
  );
}

export function retrieveDatasetMetadataFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatasetMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatasetMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatasetMetadata' from JSON`,
  );
}

/** @internal */
export const RetrieveDatasetResponseBody$inboundSchema: z.ZodType<
  RetrieveDatasetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  display_name: z.string(),
  project_id: z.string(),
  workspace_id: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  metadata: z.lazy(() => RetrieveDatasetMetadata$inboundSchema),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-03-18T06:18:03.063Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "display_name": "displayName",
    "project_id": "projectId",
    "workspace_id": "workspaceId",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
  });
});

/** @internal */
export type RetrieveDatasetResponseBody$Outbound = {
  _id: string;
  display_name: string;
  project_id: string;
  workspace_id: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  metadata: RetrieveDatasetMetadata$Outbound;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const RetrieveDatasetResponseBody$outboundSchema: z.ZodType<
  RetrieveDatasetResponseBody$Outbound,
  z.ZodTypeDef,
  RetrieveDatasetResponseBody
> = z.object({
  id: z.string(),
  displayName: z.string(),
  projectId: z.string(),
  workspaceId: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  metadata: z.lazy(() => RetrieveDatasetMetadata$outboundSchema),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-03-18T06:18:03.063Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    displayName: "display_name",
    projectId: "project_id",
    workspaceId: "workspace_id",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveDatasetResponseBody$ {
  /** @deprecated use `RetrieveDatasetResponseBody$inboundSchema` instead. */
  export const inboundSchema = RetrieveDatasetResponseBody$inboundSchema;
  /** @deprecated use `RetrieveDatasetResponseBody$outboundSchema` instead. */
  export const outboundSchema = RetrieveDatasetResponseBody$outboundSchema;
  /** @deprecated use `RetrieveDatasetResponseBody$Outbound` instead. */
  export type Outbound = RetrieveDatasetResponseBody$Outbound;
}

export function retrieveDatasetResponseBodyToJSON(
  retrieveDatasetResponseBody: RetrieveDatasetResponseBody,
): string {
  return JSON.stringify(
    RetrieveDatasetResponseBody$outboundSchema.parse(
      retrieveDatasetResponseBody,
    ),
  );
}

export function retrieveDatasetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveDatasetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveDatasetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveDatasetResponseBody' from JSON`,
  );
}
