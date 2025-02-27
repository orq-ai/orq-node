/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateDatasetRequestBody = {
  /**
   * The display name of the dataset
   */
  displayName: string;
  /**
   * The path where the entity is stored in the project structure. The first element of the path always represents the project name. Any subsequent path element after the project will be created as a folder in the project if it does not exists.
   */
  path: string;
};

export type CreateDatasetMetadata = {
  totalVersions: number;
  datapointsCount: number;
};

/**
 * Dataset created successfully. Returns the newly created dataset object.
 */
export type CreateDatasetResponseBody = {
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
  metadata: CreateDatasetMetadata;
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
export const CreateDatasetRequestBody$inboundSchema: z.ZodType<
  CreateDatasetRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  display_name: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    "display_name": "displayName",
  });
});

/** @internal */
export type CreateDatasetRequestBody$Outbound = {
  display_name: string;
  path: string;
};

/** @internal */
export const CreateDatasetRequestBody$outboundSchema: z.ZodType<
  CreateDatasetRequestBody$Outbound,
  z.ZodTypeDef,
  CreateDatasetRequestBody
> = z.object({
  displayName: z.string(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    displayName: "display_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatasetRequestBody$ {
  /** @deprecated use `CreateDatasetRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateDatasetRequestBody$inboundSchema;
  /** @deprecated use `CreateDatasetRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateDatasetRequestBody$outboundSchema;
  /** @deprecated use `CreateDatasetRequestBody$Outbound` instead. */
  export type Outbound = CreateDatasetRequestBody$Outbound;
}

export function createDatasetRequestBodyToJSON(
  createDatasetRequestBody: CreateDatasetRequestBody,
): string {
  return JSON.stringify(
    CreateDatasetRequestBody$outboundSchema.parse(createDatasetRequestBody),
  );
}

export function createDatasetRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatasetRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatasetRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatasetRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateDatasetMetadata$inboundSchema: z.ZodType<
  CreateDatasetMetadata,
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
export type CreateDatasetMetadata$Outbound = {
  total_versions: number;
  datapoints_count: number;
};

/** @internal */
export const CreateDatasetMetadata$outboundSchema: z.ZodType<
  CreateDatasetMetadata$Outbound,
  z.ZodTypeDef,
  CreateDatasetMetadata
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
export namespace CreateDatasetMetadata$ {
  /** @deprecated use `CreateDatasetMetadata$inboundSchema` instead. */
  export const inboundSchema = CreateDatasetMetadata$inboundSchema;
  /** @deprecated use `CreateDatasetMetadata$outboundSchema` instead. */
  export const outboundSchema = CreateDatasetMetadata$outboundSchema;
  /** @deprecated use `CreateDatasetMetadata$Outbound` instead. */
  export type Outbound = CreateDatasetMetadata$Outbound;
}

export function createDatasetMetadataToJSON(
  createDatasetMetadata: CreateDatasetMetadata,
): string {
  return JSON.stringify(
    CreateDatasetMetadata$outboundSchema.parse(createDatasetMetadata),
  );
}

export function createDatasetMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatasetMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatasetMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatasetMetadata' from JSON`,
  );
}

/** @internal */
export const CreateDatasetResponseBody$inboundSchema: z.ZodType<
  CreateDatasetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  display_name: z.string(),
  project_id: z.string(),
  workspace_id: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  metadata: z.lazy(() => CreateDatasetMetadata$inboundSchema),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-02-27T17:20:05.594Z",
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
export type CreateDatasetResponseBody$Outbound = {
  _id: string;
  display_name: string;
  project_id: string;
  workspace_id: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  metadata: CreateDatasetMetadata$Outbound;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const CreateDatasetResponseBody$outboundSchema: z.ZodType<
  CreateDatasetResponseBody$Outbound,
  z.ZodTypeDef,
  CreateDatasetResponseBody
> = z.object({
  id: z.string(),
  displayName: z.string(),
  projectId: z.string(),
  workspaceId: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  metadata: z.lazy(() => CreateDatasetMetadata$outboundSchema),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-02-27T17:20:05.594Z"))
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
export namespace CreateDatasetResponseBody$ {
  /** @deprecated use `CreateDatasetResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateDatasetResponseBody$inboundSchema;
  /** @deprecated use `CreateDatasetResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateDatasetResponseBody$outboundSchema;
  /** @deprecated use `CreateDatasetResponseBody$Outbound` instead. */
  export type Outbound = CreateDatasetResponseBody$Outbound;
}

export function createDatasetResponseBodyToJSON(
  createDatasetResponseBody: CreateDatasetResponseBody,
): string {
  return JSON.stringify(
    CreateDatasetResponseBody$outboundSchema.parse(createDatasetResponseBody),
  );
}

export function createDatasetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatasetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatasetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatasetResponseBody' from JSON`,
  );
}
