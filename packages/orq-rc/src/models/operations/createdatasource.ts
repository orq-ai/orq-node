/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CreateDatasourceChunkingConfigurationType = {
  Advanced: "advanced",
} as const;
export type CreateDatasourceChunkingConfigurationType = ClosedEnum<
  typeof CreateDatasourceChunkingConfigurationType
>;

/**
 * Provides advanced settings for customizing chunking behavior, enabling fine-grained control to better meet specific data processing needs.
 */
export type ChunkingConfiguration2 = {
  type: CreateDatasourceChunkingConfigurationType;
  /**
   * Defines the absolute maximum character length per chunk. Text elements exceeding this size will be automatically split into multiple chunks.
   */
  chunkMaxCharacters?: number | undefined;
  /**
   * Specifies the number of characters to overlap between consecutive chunks. This overlap helps maintain semantic continuity when splitting large text elements.
   */
  chunkOverlap?: number | undefined;
};

export const ChunkingConfigurationType = {
  Default: "default",
} as const;
export type ChunkingConfigurationType = ClosedEnum<
  typeof ChunkingConfigurationType
>;

/**
 * Optimized chunking strategy focusing on speed and avoiding duplication of content chunks.
 */
export type ChunkingConfiguration1 = {
  type: ChunkingConfigurationType;
};

/**
 * The chunking configuration settings for the datasource. Defaults to the system's standard chunking configuration if not specified.
 */
export type ChunkingConfiguration =
  | ChunkingConfiguration1
  | ChunkingConfiguration2;

/**
 * The cleanup options applied to the datasource content. All options are enabled by default to ensure enhanced security and optimal chunk quality. Defaults to system-standard cleanup options if not specified.
 */
export type ChunkingCleanupOptions = {
  /**
   * Removes email addresses from the provided text.
   */
  deleteEmails?: boolean | undefined;
  /**
   * Removes credit card numbers from the provided text.
   */
  deleteCreditCards?: boolean | undefined;
  /**
   * Removes phone numbers from the provided text.
   */
  deletePhoneNumbers?: boolean | undefined;
  /**
   * Removes bullet points formatting from the text.
   */
  cleanBulletPoints?: boolean | undefined;
  /**
   * Removes numbered list formatting from the text.
   */
  cleanNumberedList?: boolean | undefined;
  /**
   * Normalizes or removes unnecessary unicode characters from the text.
   */
  cleanUnicode?: boolean | undefined;
  /**
   * Normalizes or removes various dash characters to standardize the text.
   */
  cleanDashes?: boolean | undefined;
  /**
   * Trims and normalizes excessive whitespace throughout the text.
   */
  cleanWhitespaces?: boolean | undefined;
};

/**
 * Configuration options specifying how the datasource file is chunked. Required if `file_id` is specified. Defaults to standard chunking options if omitted.
 */
export type ChunkingOptions = {
  /**
   * The chunking configuration settings for the datasource. Defaults to the system's standard chunking configuration if not specified.
   */
  chunkingConfiguration?:
    | ChunkingConfiguration1
    | ChunkingConfiguration2
    | undefined;
  /**
   * The cleanup options applied to the datasource content. All options are enabled by default to ensure enhanced security and optimal chunk quality. Defaults to system-standard cleanup options if not specified.
   */
  chunkingCleanupOptions?: ChunkingCleanupOptions | undefined;
};

export type CreateDatasourceRequestBody = {
  /**
   * The display name for the datasource visible in the UI. If omitted, the display name is derived from the uploaded file. When both `display_name` and `file_id` are provided, the provided `display_name` is prioritized.
   */
  displayName?: string | undefined;
  /**
   * The unique identifier of the file used for datasource creation. If provided, the file is immediately queued for chunking.
   */
  fileId?: string | undefined;
  /**
   * Configuration options specifying how the datasource file is chunked. Required if `file_id` is specified. Defaults to standard chunking options if omitted.
   */
  chunkingOptions?: ChunkingOptions | undefined;
};

export type CreateDatasourceRequest = {
  /**
   * The unique identifier of the knowledge base
   */
  knowledgeId: string;
  requestBody: CreateDatasourceRequestBody;
};

export const CreateDatasourceStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Queued: "queued",
} as const;
export type CreateDatasourceStatus = ClosedEnum<typeof CreateDatasourceStatus>;

/**
 * Datasource successfully created
 */
export type CreateDatasourceResponseBody = {
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
  status: CreateDatasourceStatus;
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

/** @internal */
export const CreateDatasourceChunkingConfigurationType$inboundSchema:
  z.ZodNativeEnum<typeof CreateDatasourceChunkingConfigurationType> = z
    .nativeEnum(CreateDatasourceChunkingConfigurationType);

/** @internal */
export const CreateDatasourceChunkingConfigurationType$outboundSchema:
  z.ZodNativeEnum<typeof CreateDatasourceChunkingConfigurationType> =
    CreateDatasourceChunkingConfigurationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatasourceChunkingConfigurationType$ {
  /** @deprecated use `CreateDatasourceChunkingConfigurationType$inboundSchema` instead. */
  export const inboundSchema =
    CreateDatasourceChunkingConfigurationType$inboundSchema;
  /** @deprecated use `CreateDatasourceChunkingConfigurationType$outboundSchema` instead. */
  export const outboundSchema =
    CreateDatasourceChunkingConfigurationType$outboundSchema;
}

/** @internal */
export const ChunkingConfiguration2$inboundSchema: z.ZodType<
  ChunkingConfiguration2,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CreateDatasourceChunkingConfigurationType$inboundSchema,
  chunk_max_characters: z.number().default(500),
  chunk_overlap: z.number().default(0),
}).transform((v) => {
  return remap$(v, {
    "chunk_max_characters": "chunkMaxCharacters",
    "chunk_overlap": "chunkOverlap",
  });
});

/** @internal */
export type ChunkingConfiguration2$Outbound = {
  type: string;
  chunk_max_characters: number;
  chunk_overlap: number;
};

/** @internal */
export const ChunkingConfiguration2$outboundSchema: z.ZodType<
  ChunkingConfiguration2$Outbound,
  z.ZodTypeDef,
  ChunkingConfiguration2
> = z.object({
  type: CreateDatasourceChunkingConfigurationType$outboundSchema,
  chunkMaxCharacters: z.number().default(500),
  chunkOverlap: z.number().default(0),
}).transform((v) => {
  return remap$(v, {
    chunkMaxCharacters: "chunk_max_characters",
    chunkOverlap: "chunk_overlap",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChunkingConfiguration2$ {
  /** @deprecated use `ChunkingConfiguration2$inboundSchema` instead. */
  export const inboundSchema = ChunkingConfiguration2$inboundSchema;
  /** @deprecated use `ChunkingConfiguration2$outboundSchema` instead. */
  export const outboundSchema = ChunkingConfiguration2$outboundSchema;
  /** @deprecated use `ChunkingConfiguration2$Outbound` instead. */
  export type Outbound = ChunkingConfiguration2$Outbound;
}

export function chunkingConfiguration2ToJSON(
  chunkingConfiguration2: ChunkingConfiguration2,
): string {
  return JSON.stringify(
    ChunkingConfiguration2$outboundSchema.parse(chunkingConfiguration2),
  );
}

export function chunkingConfiguration2FromJSON(
  jsonString: string,
): SafeParseResult<ChunkingConfiguration2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChunkingConfiguration2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChunkingConfiguration2' from JSON`,
  );
}

/** @internal */
export const ChunkingConfigurationType$inboundSchema: z.ZodNativeEnum<
  typeof ChunkingConfigurationType
> = z.nativeEnum(ChunkingConfigurationType);

/** @internal */
export const ChunkingConfigurationType$outboundSchema: z.ZodNativeEnum<
  typeof ChunkingConfigurationType
> = ChunkingConfigurationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChunkingConfigurationType$ {
  /** @deprecated use `ChunkingConfigurationType$inboundSchema` instead. */
  export const inboundSchema = ChunkingConfigurationType$inboundSchema;
  /** @deprecated use `ChunkingConfigurationType$outboundSchema` instead. */
  export const outboundSchema = ChunkingConfigurationType$outboundSchema;
}

/** @internal */
export const ChunkingConfiguration1$inboundSchema: z.ZodType<
  ChunkingConfiguration1,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ChunkingConfigurationType$inboundSchema,
});

/** @internal */
export type ChunkingConfiguration1$Outbound = {
  type: string;
};

/** @internal */
export const ChunkingConfiguration1$outboundSchema: z.ZodType<
  ChunkingConfiguration1$Outbound,
  z.ZodTypeDef,
  ChunkingConfiguration1
> = z.object({
  type: ChunkingConfigurationType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChunkingConfiguration1$ {
  /** @deprecated use `ChunkingConfiguration1$inboundSchema` instead. */
  export const inboundSchema = ChunkingConfiguration1$inboundSchema;
  /** @deprecated use `ChunkingConfiguration1$outboundSchema` instead. */
  export const outboundSchema = ChunkingConfiguration1$outboundSchema;
  /** @deprecated use `ChunkingConfiguration1$Outbound` instead. */
  export type Outbound = ChunkingConfiguration1$Outbound;
}

export function chunkingConfiguration1ToJSON(
  chunkingConfiguration1: ChunkingConfiguration1,
): string {
  return JSON.stringify(
    ChunkingConfiguration1$outboundSchema.parse(chunkingConfiguration1),
  );
}

export function chunkingConfiguration1FromJSON(
  jsonString: string,
): SafeParseResult<ChunkingConfiguration1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChunkingConfiguration1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChunkingConfiguration1' from JSON`,
  );
}

/** @internal */
export const ChunkingConfiguration$inboundSchema: z.ZodType<
  ChunkingConfiguration,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ChunkingConfiguration1$inboundSchema),
  z.lazy(() => ChunkingConfiguration2$inboundSchema),
]);

/** @internal */
export type ChunkingConfiguration$Outbound =
  | ChunkingConfiguration1$Outbound
  | ChunkingConfiguration2$Outbound;

/** @internal */
export const ChunkingConfiguration$outboundSchema: z.ZodType<
  ChunkingConfiguration$Outbound,
  z.ZodTypeDef,
  ChunkingConfiguration
> = z.union([
  z.lazy(() => ChunkingConfiguration1$outboundSchema),
  z.lazy(() => ChunkingConfiguration2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChunkingConfiguration$ {
  /** @deprecated use `ChunkingConfiguration$inboundSchema` instead. */
  export const inboundSchema = ChunkingConfiguration$inboundSchema;
  /** @deprecated use `ChunkingConfiguration$outboundSchema` instead. */
  export const outboundSchema = ChunkingConfiguration$outboundSchema;
  /** @deprecated use `ChunkingConfiguration$Outbound` instead. */
  export type Outbound = ChunkingConfiguration$Outbound;
}

export function chunkingConfigurationToJSON(
  chunkingConfiguration: ChunkingConfiguration,
): string {
  return JSON.stringify(
    ChunkingConfiguration$outboundSchema.parse(chunkingConfiguration),
  );
}

export function chunkingConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<ChunkingConfiguration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChunkingConfiguration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChunkingConfiguration' from JSON`,
  );
}

/** @internal */
export const ChunkingCleanupOptions$inboundSchema: z.ZodType<
  ChunkingCleanupOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  delete_emails: z.boolean().optional(),
  delete_credit_cards: z.boolean().optional(),
  delete_phone_numbers: z.boolean().optional(),
  clean_bullet_points: z.boolean().optional(),
  clean_numbered_list: z.boolean().optional(),
  clean_unicode: z.boolean().optional(),
  clean_dashes: z.boolean().optional(),
  clean_whitespaces: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "delete_emails": "deleteEmails",
    "delete_credit_cards": "deleteCreditCards",
    "delete_phone_numbers": "deletePhoneNumbers",
    "clean_bullet_points": "cleanBulletPoints",
    "clean_numbered_list": "cleanNumberedList",
    "clean_unicode": "cleanUnicode",
    "clean_dashes": "cleanDashes",
    "clean_whitespaces": "cleanWhitespaces",
  });
});

/** @internal */
export type ChunkingCleanupOptions$Outbound = {
  delete_emails?: boolean | undefined;
  delete_credit_cards?: boolean | undefined;
  delete_phone_numbers?: boolean | undefined;
  clean_bullet_points?: boolean | undefined;
  clean_numbered_list?: boolean | undefined;
  clean_unicode?: boolean | undefined;
  clean_dashes?: boolean | undefined;
  clean_whitespaces?: boolean | undefined;
};

/** @internal */
export const ChunkingCleanupOptions$outboundSchema: z.ZodType<
  ChunkingCleanupOptions$Outbound,
  z.ZodTypeDef,
  ChunkingCleanupOptions
> = z.object({
  deleteEmails: z.boolean().optional(),
  deleteCreditCards: z.boolean().optional(),
  deletePhoneNumbers: z.boolean().optional(),
  cleanBulletPoints: z.boolean().optional(),
  cleanNumberedList: z.boolean().optional(),
  cleanUnicode: z.boolean().optional(),
  cleanDashes: z.boolean().optional(),
  cleanWhitespaces: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    deleteEmails: "delete_emails",
    deleteCreditCards: "delete_credit_cards",
    deletePhoneNumbers: "delete_phone_numbers",
    cleanBulletPoints: "clean_bullet_points",
    cleanNumberedList: "clean_numbered_list",
    cleanUnicode: "clean_unicode",
    cleanDashes: "clean_dashes",
    cleanWhitespaces: "clean_whitespaces",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChunkingCleanupOptions$ {
  /** @deprecated use `ChunkingCleanupOptions$inboundSchema` instead. */
  export const inboundSchema = ChunkingCleanupOptions$inboundSchema;
  /** @deprecated use `ChunkingCleanupOptions$outboundSchema` instead. */
  export const outboundSchema = ChunkingCleanupOptions$outboundSchema;
  /** @deprecated use `ChunkingCleanupOptions$Outbound` instead. */
  export type Outbound = ChunkingCleanupOptions$Outbound;
}

export function chunkingCleanupOptionsToJSON(
  chunkingCleanupOptions: ChunkingCleanupOptions,
): string {
  return JSON.stringify(
    ChunkingCleanupOptions$outboundSchema.parse(chunkingCleanupOptions),
  );
}

export function chunkingCleanupOptionsFromJSON(
  jsonString: string,
): SafeParseResult<ChunkingCleanupOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChunkingCleanupOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChunkingCleanupOptions' from JSON`,
  );
}

/** @internal */
export const ChunkingOptions$inboundSchema: z.ZodType<
  ChunkingOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  chunking_configuration: z.union([
    z.lazy(() => ChunkingConfiguration1$inboundSchema),
    z.lazy(() => ChunkingConfiguration2$inboundSchema),
  ]).optional(),
  chunking_cleanup_options: z.lazy(() => ChunkingCleanupOptions$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "chunking_configuration": "chunkingConfiguration",
    "chunking_cleanup_options": "chunkingCleanupOptions",
  });
});

/** @internal */
export type ChunkingOptions$Outbound = {
  chunking_configuration?:
    | ChunkingConfiguration1$Outbound
    | ChunkingConfiguration2$Outbound
    | undefined;
  chunking_cleanup_options?: ChunkingCleanupOptions$Outbound | undefined;
};

/** @internal */
export const ChunkingOptions$outboundSchema: z.ZodType<
  ChunkingOptions$Outbound,
  z.ZodTypeDef,
  ChunkingOptions
> = z.object({
  chunkingConfiguration: z.union([
    z.lazy(() => ChunkingConfiguration1$outboundSchema),
    z.lazy(() => ChunkingConfiguration2$outboundSchema),
  ]).optional(),
  chunkingCleanupOptions: z.lazy(() => ChunkingCleanupOptions$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    chunkingConfiguration: "chunking_configuration",
    chunkingCleanupOptions: "chunking_cleanup_options",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChunkingOptions$ {
  /** @deprecated use `ChunkingOptions$inboundSchema` instead. */
  export const inboundSchema = ChunkingOptions$inboundSchema;
  /** @deprecated use `ChunkingOptions$outboundSchema` instead. */
  export const outboundSchema = ChunkingOptions$outboundSchema;
  /** @deprecated use `ChunkingOptions$Outbound` instead. */
  export type Outbound = ChunkingOptions$Outbound;
}

export function chunkingOptionsToJSON(
  chunkingOptions: ChunkingOptions,
): string {
  return JSON.stringify(ChunkingOptions$outboundSchema.parse(chunkingOptions));
}

export function chunkingOptionsFromJSON(
  jsonString: string,
): SafeParseResult<ChunkingOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChunkingOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChunkingOptions' from JSON`,
  );
}

/** @internal */
export const CreateDatasourceRequestBody$inboundSchema: z.ZodType<
  CreateDatasourceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  display_name: z.string().optional(),
  file_id: z.string().optional(),
  chunking_options: z.lazy(() => ChunkingOptions$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "display_name": "displayName",
    "file_id": "fileId",
    "chunking_options": "chunkingOptions",
  });
});

/** @internal */
export type CreateDatasourceRequestBody$Outbound = {
  display_name?: string | undefined;
  file_id?: string | undefined;
  chunking_options?: ChunkingOptions$Outbound | undefined;
};

/** @internal */
export const CreateDatasourceRequestBody$outboundSchema: z.ZodType<
  CreateDatasourceRequestBody$Outbound,
  z.ZodTypeDef,
  CreateDatasourceRequestBody
> = z.object({
  displayName: z.string().optional(),
  fileId: z.string().optional(),
  chunkingOptions: z.lazy(() => ChunkingOptions$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    displayName: "display_name",
    fileId: "file_id",
    chunkingOptions: "chunking_options",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatasourceRequestBody$ {
  /** @deprecated use `CreateDatasourceRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateDatasourceRequestBody$inboundSchema;
  /** @deprecated use `CreateDatasourceRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateDatasourceRequestBody$outboundSchema;
  /** @deprecated use `CreateDatasourceRequestBody$Outbound` instead. */
  export type Outbound = CreateDatasourceRequestBody$Outbound;
}

export function createDatasourceRequestBodyToJSON(
  createDatasourceRequestBody: CreateDatasourceRequestBody,
): string {
  return JSON.stringify(
    CreateDatasourceRequestBody$outboundSchema.parse(
      createDatasourceRequestBody,
    ),
  );
}

export function createDatasourceRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatasourceRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatasourceRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatasourceRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateDatasourceRequest$inboundSchema: z.ZodType<
  CreateDatasourceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  RequestBody: z.lazy(() => CreateDatasourceRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateDatasourceRequest$Outbound = {
  knowledge_id: string;
  RequestBody: CreateDatasourceRequestBody$Outbound;
};

/** @internal */
export const CreateDatasourceRequest$outboundSchema: z.ZodType<
  CreateDatasourceRequest$Outbound,
  z.ZodTypeDef,
  CreateDatasourceRequest
> = z.object({
  knowledgeId: z.string(),
  requestBody: z.lazy(() => CreateDatasourceRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatasourceRequest$ {
  /** @deprecated use `CreateDatasourceRequest$inboundSchema` instead. */
  export const inboundSchema = CreateDatasourceRequest$inboundSchema;
  /** @deprecated use `CreateDatasourceRequest$outboundSchema` instead. */
  export const outboundSchema = CreateDatasourceRequest$outboundSchema;
  /** @deprecated use `CreateDatasourceRequest$Outbound` instead. */
  export type Outbound = CreateDatasourceRequest$Outbound;
}

export function createDatasourceRequestToJSON(
  createDatasourceRequest: CreateDatasourceRequest,
): string {
  return JSON.stringify(
    CreateDatasourceRequest$outboundSchema.parse(createDatasourceRequest),
  );
}

export function createDatasourceRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatasourceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatasourceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatasourceRequest' from JSON`,
  );
}

/** @internal */
export const CreateDatasourceStatus$inboundSchema: z.ZodNativeEnum<
  typeof CreateDatasourceStatus
> = z.nativeEnum(CreateDatasourceStatus);

/** @internal */
export const CreateDatasourceStatus$outboundSchema: z.ZodNativeEnum<
  typeof CreateDatasourceStatus
> = CreateDatasourceStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatasourceStatus$ {
  /** @deprecated use `CreateDatasourceStatus$inboundSchema` instead. */
  export const inboundSchema = CreateDatasourceStatus$inboundSchema;
  /** @deprecated use `CreateDatasourceStatus$outboundSchema` instead. */
  export const outboundSchema = CreateDatasourceStatus$outboundSchema;
}

/** @internal */
export const CreateDatasourceResponseBody$inboundSchema: z.ZodType<
  CreateDatasourceResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().default("01JQRGTRHBDGGHR25HNAT0ZZ7F"),
  display_name: z.string(),
  description: z.string().optional(),
  status: CreateDatasourceStatus$inboundSchema,
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
export type CreateDatasourceResponseBody$Outbound = {
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
export const CreateDatasourceResponseBody$outboundSchema: z.ZodType<
  CreateDatasourceResponseBody$Outbound,
  z.ZodTypeDef,
  CreateDatasourceResponseBody
> = z.object({
  id: z.string().default("01JQRGTRHBDGGHR25HNAT0ZZ7F"),
  displayName: z.string(),
  description: z.string().optional(),
  status: CreateDatasourceStatus$outboundSchema,
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
export namespace CreateDatasourceResponseBody$ {
  /** @deprecated use `CreateDatasourceResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateDatasourceResponseBody$inboundSchema;
  /** @deprecated use `CreateDatasourceResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateDatasourceResponseBody$outboundSchema;
  /** @deprecated use `CreateDatasourceResponseBody$Outbound` instead. */
  export type Outbound = CreateDatasourceResponseBody$Outbound;
}

export function createDatasourceResponseBodyToJSON(
  createDatasourceResponseBody: CreateDatasourceResponseBody,
): string {
  return JSON.stringify(
    CreateDatasourceResponseBody$outboundSchema.parse(
      createDatasourceResponseBody,
    ),
  );
}

export function createDatasourceResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatasourceResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatasourceResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatasourceResponseBody' from JSON`,
  );
}
