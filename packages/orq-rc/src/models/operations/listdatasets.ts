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
export const ListDatasetsQueryParamSort = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * List sorting preference.
 */
export type ListDatasetsQueryParamSort = ClosedEnum<
  typeof ListDatasetsQueryParamSort
>;

export type ListDatasetsRequest = {
  /**
   * List sorting preference.
   */
  sort?: ListDatasetsQueryParamSort | undefined;
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

export const ListDatasetsObject = {
  List: "list",
} as const;
export type ListDatasetsObject = ClosedEnum<typeof ListDatasetsObject>;

export type ListDatasetsMetadata = {
  totalVersions: number;
  datapointsCount: number;
};

export type ListDatasetsData = {
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
  metadata: ListDatasetsMetadata;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
  /**
   * The date and time the resource was last updated
   */
  updated?: Date | undefined;
};

/**
 * Datasets Retrieved Successfully
 */
export type ListDatasetsResponseBody = {
  object: ListDatasetsObject;
  data: Array<ListDatasetsData>;
  hasMore: boolean;
};

/** @internal */
export const ListDatasetsQueryParamSort$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetsQueryParamSort
> = z.nativeEnum(ListDatasetsQueryParamSort);

/** @internal */
export const ListDatasetsQueryParamSort$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetsQueryParamSort
> = ListDatasetsQueryParamSort$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetsQueryParamSort$ {
  /** @deprecated use `ListDatasetsQueryParamSort$inboundSchema` instead. */
  export const inboundSchema = ListDatasetsQueryParamSort$inboundSchema;
  /** @deprecated use `ListDatasetsQueryParamSort$outboundSchema` instead. */
  export const outboundSchema = ListDatasetsQueryParamSort$outboundSchema;
}

/** @internal */
export const ListDatasetsRequest$inboundSchema: z.ZodType<
  ListDatasetsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sort: ListDatasetsQueryParamSort$inboundSchema.default("asc"),
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
export type ListDatasetsRequest$Outbound = {
  sort: string;
  limit: number;
  starting_after?: string | undefined;
  ending_before?: string | undefined;
};

/** @internal */
export const ListDatasetsRequest$outboundSchema: z.ZodType<
  ListDatasetsRequest$Outbound,
  z.ZodTypeDef,
  ListDatasetsRequest
> = z.object({
  sort: ListDatasetsQueryParamSort$outboundSchema.default("asc"),
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
export namespace ListDatasetsRequest$ {
  /** @deprecated use `ListDatasetsRequest$inboundSchema` instead. */
  export const inboundSchema = ListDatasetsRequest$inboundSchema;
  /** @deprecated use `ListDatasetsRequest$outboundSchema` instead. */
  export const outboundSchema = ListDatasetsRequest$outboundSchema;
  /** @deprecated use `ListDatasetsRequest$Outbound` instead. */
  export type Outbound = ListDatasetsRequest$Outbound;
}

export function listDatasetsRequestToJSON(
  listDatasetsRequest: ListDatasetsRequest,
): string {
  return JSON.stringify(
    ListDatasetsRequest$outboundSchema.parse(listDatasetsRequest),
  );
}

export function listDatasetsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetsRequest' from JSON`,
  );
}

/** @internal */
export const ListDatasetsObject$inboundSchema: z.ZodNativeEnum<
  typeof ListDatasetsObject
> = z.nativeEnum(ListDatasetsObject);

/** @internal */
export const ListDatasetsObject$outboundSchema: z.ZodNativeEnum<
  typeof ListDatasetsObject
> = ListDatasetsObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDatasetsObject$ {
  /** @deprecated use `ListDatasetsObject$inboundSchema` instead. */
  export const inboundSchema = ListDatasetsObject$inboundSchema;
  /** @deprecated use `ListDatasetsObject$outboundSchema` instead. */
  export const outboundSchema = ListDatasetsObject$outboundSchema;
}

/** @internal */
export const ListDatasetsMetadata$inboundSchema: z.ZodType<
  ListDatasetsMetadata,
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
export type ListDatasetsMetadata$Outbound = {
  total_versions: number;
  datapoints_count: number;
};

/** @internal */
export const ListDatasetsMetadata$outboundSchema: z.ZodType<
  ListDatasetsMetadata$Outbound,
  z.ZodTypeDef,
  ListDatasetsMetadata
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
export namespace ListDatasetsMetadata$ {
  /** @deprecated use `ListDatasetsMetadata$inboundSchema` instead. */
  export const inboundSchema = ListDatasetsMetadata$inboundSchema;
  /** @deprecated use `ListDatasetsMetadata$outboundSchema` instead. */
  export const outboundSchema = ListDatasetsMetadata$outboundSchema;
  /** @deprecated use `ListDatasetsMetadata$Outbound` instead. */
  export type Outbound = ListDatasetsMetadata$Outbound;
}

export function listDatasetsMetadataToJSON(
  listDatasetsMetadata: ListDatasetsMetadata,
): string {
  return JSON.stringify(
    ListDatasetsMetadata$outboundSchema.parse(listDatasetsMetadata),
  );
}

export function listDatasetsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetsMetadata' from JSON`,
  );
}

/** @internal */
export const ListDatasetsData$inboundSchema: z.ZodType<
  ListDatasetsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  display_name: z.string(),
  project_id: z.string(),
  workspace_id: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  metadata: z.lazy(() => ListDatasetsMetadata$inboundSchema),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2025-03-19T12:38:38.483Z",
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
export type ListDatasetsData$Outbound = {
  _id: string;
  display_name: string;
  project_id: string;
  workspace_id: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  metadata: ListDatasetsMetadata$Outbound;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const ListDatasetsData$outboundSchema: z.ZodType<
  ListDatasetsData$Outbound,
  z.ZodTypeDef,
  ListDatasetsData
> = z.object({
  id: z.string(),
  displayName: z.string(),
  projectId: z.string(),
  workspaceId: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  metadata: z.lazy(() => ListDatasetsMetadata$outboundSchema),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2025-03-19T12:38:38.483Z"))
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
export namespace ListDatasetsData$ {
  /** @deprecated use `ListDatasetsData$inboundSchema` instead. */
  export const inboundSchema = ListDatasetsData$inboundSchema;
  /** @deprecated use `ListDatasetsData$outboundSchema` instead. */
  export const outboundSchema = ListDatasetsData$outboundSchema;
  /** @deprecated use `ListDatasetsData$Outbound` instead. */
  export type Outbound = ListDatasetsData$Outbound;
}

export function listDatasetsDataToJSON(
  listDatasetsData: ListDatasetsData,
): string {
  return JSON.stringify(
    ListDatasetsData$outboundSchema.parse(listDatasetsData),
  );
}

export function listDatasetsDataFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetsData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetsData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetsData' from JSON`,
  );
}

/** @internal */
export const ListDatasetsResponseBody$inboundSchema: z.ZodType<
  ListDatasetsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: ListDatasetsObject$inboundSchema,
  data: z.array(z.lazy(() => ListDatasetsData$inboundSchema)),
  has_more: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "has_more": "hasMore",
  });
});

/** @internal */
export type ListDatasetsResponseBody$Outbound = {
  object: string;
  data: Array<ListDatasetsData$Outbound>;
  has_more: boolean;
};

/** @internal */
export const ListDatasetsResponseBody$outboundSchema: z.ZodType<
  ListDatasetsResponseBody$Outbound,
  z.ZodTypeDef,
  ListDatasetsResponseBody
> = z.object({
  object: ListDatasetsObject$outboundSchema,
  data: z.array(z.lazy(() => ListDatasetsData$outboundSchema)),
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
export namespace ListDatasetsResponseBody$ {
  /** @deprecated use `ListDatasetsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListDatasetsResponseBody$inboundSchema;
  /** @deprecated use `ListDatasetsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListDatasetsResponseBody$outboundSchema;
  /** @deprecated use `ListDatasetsResponseBody$Outbound` instead. */
  export type Outbound = ListDatasetsResponseBody$Outbound;
}

export function listDatasetsResponseBodyToJSON(
  listDatasetsResponseBody: ListDatasetsResponseBody,
): string {
  return JSON.stringify(
    ListDatasetsResponseBody$outboundSchema.parse(listDatasetsResponseBody),
  );
}

export function listDatasetsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListDatasetsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDatasetsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDatasetsResponseBody' from JSON`,
  );
}
