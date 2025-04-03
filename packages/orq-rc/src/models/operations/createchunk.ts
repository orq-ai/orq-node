/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Metadata of the chunk
 */
export type CreateChunkMetadata = {
  /**
   * In case you are using PDFs, Word, PowerPoint, etc. this is the page number of the chunk.
   */
  pageNumber?: number | undefined;
};

export type RequestBody = {
  /**
   * The text content of the chunk
   */
  text: string;
  /**
   * The embedding vector of the chunk. If not provided the chunk will be embedded with the knowledge base embeddings model.
   */
  embedding?: Array<number> | undefined;
  /**
   * Metadata of the chunk
   */
  metadata?: CreateChunkMetadata | undefined;
};

export type CreateChunkRequest = {
  /**
   * Unique identifier of the knowledge
   */
  knowledgeId: string;
  /**
   * Unique identifier of the datasource
   */
  datasourceId: string;
  requestBody?: Array<RequestBody> | undefined;
};

export type CreateChunkKnowledgeMetadata = {
  /**
   * Filename
   */
  filename?: string | undefined;
  /**
   * Last modified date in ISO 8601 format
   */
  lastModified?: string | undefined;
  /**
   * File type
   */
  filetype?: string | undefined;
  /**
   * Document Languages. List is ordered by probability of being the primary language of the text.
   */
  languages?: Array<string> | undefined;
  /**
   * Page number. Optional field.
   */
  pageNumber?: number | null | undefined;
  /**
   * Number of words in the text
   */
  wordsCount?: number | undefined;
  /**
   * Number of sentences in the text
   */
  sentencesCount?: number | undefined;
  /**
   * Number of paragraphs in the text
   */
  paragraphsCount?: number | undefined;
  /**
   * Number of tokens in the text
   */
  tokensCount?: number | undefined;
  /**
   * Number of characters in the text
   */
  charactersCount?: number | undefined;
  /**
   * Number of total chunks
   */
  chunksCount?: number | undefined;
};

export type Errors = {
  code: number;
  message: string;
};

export type ProcessingAttempts = {
  id: string;
  startedAt: string;
  queuedAt?: string | undefined;
  completedAt?: string | undefined;
  errors?: Array<Errors> | undefined;
};

export type CreateChunkResponseBody = {
  /**
   * The id of the resource
   */
  knowledgeId: string;
  /**
   * The id of the resource
   */
  workspaceId: string;
  /**
   * The id of the resource
   */
  dataSourceId: string;
  /**
   * Unique identifier for the element
   */
  id?: string | undefined;
  /**
   * Text content of the element
   */
  text: string;
  enabled?: boolean | undefined;
  metadata?: CreateChunkKnowledgeMetadata | undefined;
  processingAttempts: Array<ProcessingAttempts>;
  /**
   * The date and time the chunk was created
   */
  created: string;
  /**
   * The date and time the chunk was updated
   */
  updated: string;
  /**
   * The unique identifier of the user who created the chunk
   */
  createdById: string;
  /**
   * The unique identifier of the user who updated the chunk
   */
  updatedById: string;
};

/** @internal */
export const CreateChunkMetadata$inboundSchema: z.ZodType<
  CreateChunkMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  page_number: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "page_number": "pageNumber",
  });
});

/** @internal */
export type CreateChunkMetadata$Outbound = {
  page_number?: number | undefined;
};

/** @internal */
export const CreateChunkMetadata$outboundSchema: z.ZodType<
  CreateChunkMetadata$Outbound,
  z.ZodTypeDef,
  CreateChunkMetadata
> = z.object({
  pageNumber: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    pageNumber: "page_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateChunkMetadata$ {
  /** @deprecated use `CreateChunkMetadata$inboundSchema` instead. */
  export const inboundSchema = CreateChunkMetadata$inboundSchema;
  /** @deprecated use `CreateChunkMetadata$outboundSchema` instead. */
  export const outboundSchema = CreateChunkMetadata$outboundSchema;
  /** @deprecated use `CreateChunkMetadata$Outbound` instead. */
  export type Outbound = CreateChunkMetadata$Outbound;
}

export function createChunkMetadataToJSON(
  createChunkMetadata: CreateChunkMetadata,
): string {
  return JSON.stringify(
    CreateChunkMetadata$outboundSchema.parse(createChunkMetadata),
  );
}

export function createChunkMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreateChunkMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChunkMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChunkMetadata' from JSON`,
  );
}

/** @internal */
export const RequestBody$inboundSchema: z.ZodType<
  RequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.string(),
  embedding: z.array(z.number()).optional(),
  metadata: z.lazy(() => CreateChunkMetadata$inboundSchema).optional(),
});

/** @internal */
export type RequestBody$Outbound = {
  text: string;
  embedding?: Array<number> | undefined;
  metadata?: CreateChunkMetadata$Outbound | undefined;
};

/** @internal */
export const RequestBody$outboundSchema: z.ZodType<
  RequestBody$Outbound,
  z.ZodTypeDef,
  RequestBody
> = z.object({
  text: z.string(),
  embedding: z.array(z.number()).optional(),
  metadata: z.lazy(() => CreateChunkMetadata$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestBody$ {
  /** @deprecated use `RequestBody$inboundSchema` instead. */
  export const inboundSchema = RequestBody$inboundSchema;
  /** @deprecated use `RequestBody$outboundSchema` instead. */
  export const outboundSchema = RequestBody$outboundSchema;
  /** @deprecated use `RequestBody$Outbound` instead. */
  export type Outbound = RequestBody$Outbound;
}

export function requestBodyToJSON(requestBody: RequestBody): string {
  return JSON.stringify(RequestBody$outboundSchema.parse(requestBody));
}

export function requestBodyFromJSON(
  jsonString: string,
): SafeParseResult<RequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestBody' from JSON`,
  );
}

/** @internal */
export const CreateChunkRequest$inboundSchema: z.ZodType<
  CreateChunkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  datasource_id: z.string(),
  RequestBody: z.array(z.lazy(() => RequestBody$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "datasource_id": "datasourceId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateChunkRequest$Outbound = {
  knowledge_id: string;
  datasource_id: string;
  RequestBody?: Array<RequestBody$Outbound> | undefined;
};

/** @internal */
export const CreateChunkRequest$outboundSchema: z.ZodType<
  CreateChunkRequest$Outbound,
  z.ZodTypeDef,
  CreateChunkRequest
> = z.object({
  knowledgeId: z.string(),
  datasourceId: z.string(),
  requestBody: z.array(z.lazy(() => RequestBody$outboundSchema)).optional(),
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
export namespace CreateChunkRequest$ {
  /** @deprecated use `CreateChunkRequest$inboundSchema` instead. */
  export const inboundSchema = CreateChunkRequest$inboundSchema;
  /** @deprecated use `CreateChunkRequest$outboundSchema` instead. */
  export const outboundSchema = CreateChunkRequest$outboundSchema;
  /** @deprecated use `CreateChunkRequest$Outbound` instead. */
  export type Outbound = CreateChunkRequest$Outbound;
}

export function createChunkRequestToJSON(
  createChunkRequest: CreateChunkRequest,
): string {
  return JSON.stringify(
    CreateChunkRequest$outboundSchema.parse(createChunkRequest),
  );
}

export function createChunkRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateChunkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChunkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChunkRequest' from JSON`,
  );
}

/** @internal */
export const CreateChunkKnowledgeMetadata$inboundSchema: z.ZodType<
  CreateChunkKnowledgeMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  filename: z.string().optional(),
  last_modified: z.string().optional(),
  filetype: z.string().optional(),
  languages: z.array(z.string()).optional(),
  page_number: z.nullable(z.number()).optional(),
  words_count: z.number().optional(),
  sentences_count: z.number().optional(),
  paragraphs_count: z.number().optional(),
  tokens_count: z.number().optional(),
  characters_count: z.number().optional(),
  chunks_count: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    "last_modified": "lastModified",
    "page_number": "pageNumber",
    "words_count": "wordsCount",
    "sentences_count": "sentencesCount",
    "paragraphs_count": "paragraphsCount",
    "tokens_count": "tokensCount",
    "characters_count": "charactersCount",
    "chunks_count": "chunksCount",
  });
});

/** @internal */
export type CreateChunkKnowledgeMetadata$Outbound = {
  filename?: string | undefined;
  last_modified?: string | undefined;
  filetype?: string | undefined;
  languages?: Array<string> | undefined;
  page_number?: number | null | undefined;
  words_count?: number | undefined;
  sentences_count?: number | undefined;
  paragraphs_count?: number | undefined;
  tokens_count?: number | undefined;
  characters_count?: number | undefined;
  chunks_count?: number | undefined;
};

/** @internal */
export const CreateChunkKnowledgeMetadata$outboundSchema: z.ZodType<
  CreateChunkKnowledgeMetadata$Outbound,
  z.ZodTypeDef,
  CreateChunkKnowledgeMetadata
> = z.object({
  filename: z.string().optional(),
  lastModified: z.string().optional(),
  filetype: z.string().optional(),
  languages: z.array(z.string()).optional(),
  pageNumber: z.nullable(z.number()).optional(),
  wordsCount: z.number().optional(),
  sentencesCount: z.number().optional(),
  paragraphsCount: z.number().optional(),
  tokensCount: z.number().optional(),
  charactersCount: z.number().optional(),
  chunksCount: z.number().optional(),
}).transform((v) => {
  return remap$(v, {
    lastModified: "last_modified",
    pageNumber: "page_number",
    wordsCount: "words_count",
    sentencesCount: "sentences_count",
    paragraphsCount: "paragraphs_count",
    tokensCount: "tokens_count",
    charactersCount: "characters_count",
    chunksCount: "chunks_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateChunkKnowledgeMetadata$ {
  /** @deprecated use `CreateChunkKnowledgeMetadata$inboundSchema` instead. */
  export const inboundSchema = CreateChunkKnowledgeMetadata$inboundSchema;
  /** @deprecated use `CreateChunkKnowledgeMetadata$outboundSchema` instead. */
  export const outboundSchema = CreateChunkKnowledgeMetadata$outboundSchema;
  /** @deprecated use `CreateChunkKnowledgeMetadata$Outbound` instead. */
  export type Outbound = CreateChunkKnowledgeMetadata$Outbound;
}

export function createChunkKnowledgeMetadataToJSON(
  createChunkKnowledgeMetadata: CreateChunkKnowledgeMetadata,
): string {
  return JSON.stringify(
    CreateChunkKnowledgeMetadata$outboundSchema.parse(
      createChunkKnowledgeMetadata,
    ),
  );
}

export function createChunkKnowledgeMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreateChunkKnowledgeMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChunkKnowledgeMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChunkKnowledgeMetadata' from JSON`,
  );
}

/** @internal */
export const Errors$inboundSchema: z.ZodType<Errors, z.ZodTypeDef, unknown> = z
  .object({
    code: z.number(),
    message: z.string(),
  });

/** @internal */
export type Errors$Outbound = {
  code: number;
  message: string;
};

/** @internal */
export const Errors$outboundSchema: z.ZodType<
  Errors$Outbound,
  z.ZodTypeDef,
  Errors
> = z.object({
  code: z.number(),
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Errors$ {
  /** @deprecated use `Errors$inboundSchema` instead. */
  export const inboundSchema = Errors$inboundSchema;
  /** @deprecated use `Errors$outboundSchema` instead. */
  export const outboundSchema = Errors$outboundSchema;
  /** @deprecated use `Errors$Outbound` instead. */
  export type Outbound = Errors$Outbound;
}

export function errorsToJSON(errors: Errors): string {
  return JSON.stringify(Errors$outboundSchema.parse(errors));
}

export function errorsFromJSON(
  jsonString: string,
): SafeParseResult<Errors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Errors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Errors' from JSON`,
  );
}

/** @internal */
export const ProcessingAttempts$inboundSchema: z.ZodType<
  ProcessingAttempts,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  started_at: z.string(),
  queued_at: z.string().optional(),
  completed_at: z.string().optional(),
  errors: z.array(z.lazy(() => Errors$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "started_at": "startedAt",
    "queued_at": "queuedAt",
    "completed_at": "completedAt",
  });
});

/** @internal */
export type ProcessingAttempts$Outbound = {
  id: string;
  started_at: string;
  queued_at?: string | undefined;
  completed_at?: string | undefined;
  errors?: Array<Errors$Outbound> | undefined;
};

/** @internal */
export const ProcessingAttempts$outboundSchema: z.ZodType<
  ProcessingAttempts$Outbound,
  z.ZodTypeDef,
  ProcessingAttempts
> = z.object({
  id: z.string(),
  startedAt: z.string(),
  queuedAt: z.string().optional(),
  completedAt: z.string().optional(),
  errors: z.array(z.lazy(() => Errors$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    startedAt: "started_at",
    queuedAt: "queued_at",
    completedAt: "completed_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProcessingAttempts$ {
  /** @deprecated use `ProcessingAttempts$inboundSchema` instead. */
  export const inboundSchema = ProcessingAttempts$inboundSchema;
  /** @deprecated use `ProcessingAttempts$outboundSchema` instead. */
  export const outboundSchema = ProcessingAttempts$outboundSchema;
  /** @deprecated use `ProcessingAttempts$Outbound` instead. */
  export type Outbound = ProcessingAttempts$Outbound;
}

export function processingAttemptsToJSON(
  processingAttempts: ProcessingAttempts,
): string {
  return JSON.stringify(
    ProcessingAttempts$outboundSchema.parse(processingAttempts),
  );
}

export function processingAttemptsFromJSON(
  jsonString: string,
): SafeParseResult<ProcessingAttempts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProcessingAttempts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProcessingAttempts' from JSON`,
  );
}

/** @internal */
export const CreateChunkResponseBody$inboundSchema: z.ZodType<
  CreateChunkResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  knowledge_id: z.string(),
  workspace_id: z.string(),
  data_source_id: z.string(),
  id: z.string().default("chunk_01JQXPA4JY15ZKZTMJS1MX8GBB"),
  text: z.string(),
  enabled: z.boolean().default(true),
  metadata: z.lazy(() => CreateChunkKnowledgeMetadata$inboundSchema).optional(),
  processing_attempts: z.array(z.lazy(() => ProcessingAttempts$inboundSchema)),
  created: z.string(),
  updated: z.string(),
  created_by_id: z.string(),
  updated_by_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "knowledge_id": "knowledgeId",
    "workspace_id": "workspaceId",
    "data_source_id": "dataSourceId",
    "processing_attempts": "processingAttempts",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
  });
});

/** @internal */
export type CreateChunkResponseBody$Outbound = {
  knowledge_id: string;
  workspace_id: string;
  data_source_id: string;
  id: string;
  text: string;
  enabled: boolean;
  metadata?: CreateChunkKnowledgeMetadata$Outbound | undefined;
  processing_attempts: Array<ProcessingAttempts$Outbound>;
  created: string;
  updated: string;
  created_by_id: string;
  updated_by_id: string;
};

/** @internal */
export const CreateChunkResponseBody$outboundSchema: z.ZodType<
  CreateChunkResponseBody$Outbound,
  z.ZodTypeDef,
  CreateChunkResponseBody
> = z.object({
  knowledgeId: z.string(),
  workspaceId: z.string(),
  dataSourceId: z.string(),
  id: z.string().default("chunk_01JQXPA4JY15ZKZTMJS1MX8GBB"),
  text: z.string(),
  enabled: z.boolean().default(true),
  metadata: z.lazy(() => CreateChunkKnowledgeMetadata$outboundSchema)
    .optional(),
  processingAttempts: z.array(z.lazy(() => ProcessingAttempts$outboundSchema)),
  created: z.string(),
  updated: z.string(),
  createdById: z.string(),
  updatedById: z.string(),
}).transform((v) => {
  return remap$(v, {
    knowledgeId: "knowledge_id",
    workspaceId: "workspace_id",
    dataSourceId: "data_source_id",
    processingAttempts: "processing_attempts",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateChunkResponseBody$ {
  /** @deprecated use `CreateChunkResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateChunkResponseBody$inboundSchema;
  /** @deprecated use `CreateChunkResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateChunkResponseBody$outboundSchema;
  /** @deprecated use `CreateChunkResponseBody$Outbound` instead. */
  export type Outbound = CreateChunkResponseBody$Outbound;
}

export function createChunkResponseBodyToJSON(
  createChunkResponseBody: CreateChunkResponseBody,
): string {
  return JSON.stringify(
    CreateChunkResponseBody$outboundSchema.parse(createChunkResponseBody),
  );
}

export function createChunkResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateChunkResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateChunkResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateChunkResponseBody' from JSON`,
  );
}
