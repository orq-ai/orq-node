/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Model17 = {
  JinaJinaEmbeddingsV3: "jina/jina-embeddings-v3",
} as const;
export type Model17 = ClosedEnum<typeof Model17>;

export const Model16 = {
  JinaJinaClipV2: "jina/jina-clip-v2",
} as const;
export type Model16 = ClosedEnum<typeof Model16>;

export const Model15 = {
  JinaJinaEmbeddingsV2BaseDe: "jina/jina-embeddings-v2-base-de",
} as const;
export type Model15 = ClosedEnum<typeof Model15>;

export const Model14 = {
  JinaJinaEmbeddingsV2BaseCode: "jina/jina-embeddings-v2-base-code",
} as const;
export type Model14 = ClosedEnum<typeof Model14>;

export const Model13 = {
  JinaJinaEmbeddingsV2BaseZh: "jina/jina-embeddings-v2-base-zh",
} as const;
export type Model13 = ClosedEnum<typeof Model13>;

export const Model12 = {
  JinaJinaEmbeddingsV2BaseEn: "jina/jina-embeddings-v2-base-en",
} as const;
export type Model12 = ClosedEnum<typeof Model12>;

export const Model11 = {
  JinaJinaEmbeddingsV2BaseEs: "jina/jina-embeddings-v2-base-es",
} as const;
export type Model11 = ClosedEnum<typeof Model11>;

export const Model10 = {
  JinaJinaClipV1: "jina/jina-clip-v1",
} as const;
export type Model10 = ClosedEnum<typeof Model10>;

export const Model9 = {
  GoogleAiTextEmbedding004: "google-ai/text-embedding-004",
} as const;
export type Model9 = ClosedEnum<typeof Model9>;

export const Model8 = {
  OpenaiTextEmbeddingAda002: "openai/text-embedding-ada-002",
} as const;
export type Model8 = ClosedEnum<typeof Model8>;

export const Model7 = {
  OpenaiTextEmbedding3Small: "openai/text-embedding-3-small",
} as const;
export type Model7 = ClosedEnum<typeof Model7>;

export const Model6 = {
  OpenaiTextEmbedding3Large: "openai/text-embedding-3-large",
} as const;
export type Model6 = ClosedEnum<typeof Model6>;

export const Model5 = {
  AzureTextEmbeddingAda002: "azure/text-embedding-ada-002",
} as const;
export type Model5 = ClosedEnum<typeof Model5>;

export const Model4 = {
  CohereEmbedEnglishV30: "cohere/embed-english-v3.0",
} as const;
export type Model4 = ClosedEnum<typeof Model4>;

export const UpdateMemoryStoreModel3 = {
  CohereEmbedEnglishLightV30: "cohere/embed-english-light-v3.0",
} as const;
export type UpdateMemoryStoreModel3 = ClosedEnum<
  typeof UpdateMemoryStoreModel3
>;

export const UpdateMemoryStoreModel2 = {
  CohereEmbedMultilingualLightV30: "cohere/embed-multilingual-light-v3.0",
} as const;
export type UpdateMemoryStoreModel2 = ClosedEnum<
  typeof UpdateMemoryStoreModel2
>;

export const UpdateMemoryStoreModel1 = {
  CohereEmbedMultilingualV30: "cohere/embed-multilingual-v3.0",
} as const;
export type UpdateMemoryStoreModel1 = ClosedEnum<
  typeof UpdateMemoryStoreModel1
>;

export type UpdateMemoryStoreModel =
  | UpdateMemoryStoreModel1
  | UpdateMemoryStoreModel2
  | UpdateMemoryStoreModel3
  | Model4
  | Model5
  | Model6
  | Model7
  | Model8
  | Model9
  | Model10
  | Model11
  | Model12
  | Model13
  | Model14
  | Model15
  | Model16
  | Model17;

export type UpdateMemoryStoreEmbeddingConfig = {
  model:
    | UpdateMemoryStoreModel1
    | UpdateMemoryStoreModel2
    | UpdateMemoryStoreModel3
    | Model4
    | Model5
    | Model6
    | Model7
    | Model8
    | Model9
    | Model10
    | Model11
    | Model12
    | Model13
    | Model14
    | Model15
    | Model16
    | Model17;
};

export type UpdateMemoryStoreRequestBody = {
  embeddingConfig: UpdateMemoryStoreEmbeddingConfig;
  /**
   * The description of the memory store. Be as precise as possible to help the AI to understand the purpose of the memory store.
   */
  description: string;
  /**
   * The default time to live of every memory document created within the memory store. Useful to control if the documents in the memory should be store for short or long term.
   */
  ttl?: number | undefined;
  /**
   * The path where the entity is stored in the project structure. The first element of the path always represents the project name. Any subsequent path element after the project will be created as a folder in the project if it does not exists.
   */
  path: string;
};

export type UpdateMemoryStoreRequest = {
  /**
   * The unique key identifier of the memory store
   */
  memoryStoreKey: string;
  requestBody?: UpdateMemoryStoreRequestBody | undefined;
};

/**
 * The provider of the AI service
 */
export const UpdateMemoryStoreProvider = {
  Cohere: "cohere",
  Openai: "openai",
  Anthropic: "anthropic",
  Huggingface: "huggingface",
  Replicate: "replicate",
  Google: "google",
  GoogleAi: "google-ai",
  Azure: "azure",
  Aws: "aws",
  Anyscale: "anyscale",
  Perplexity: "perplexity",
  Groq: "groq",
  Fal: "fal",
  Leonardoai: "leonardoai",
  Nvidia: "nvidia",
  Jina: "jina",
  Togetherai: "togetherai",
  Elevenlabs: "elevenlabs",
} as const;
/**
 * The provider of the AI service
 */
export type UpdateMemoryStoreProvider = ClosedEnum<
  typeof UpdateMemoryStoreProvider
>;

export type UpdateMemoryStoreMemoryStoresEmbeddingConfig = {
  modelId: string;
  integrationId?: string | undefined;
  /**
   * Number of results to return
   */
  topK?: number | undefined;
  /**
   * The provider of the AI service
   */
  provider: UpdateMemoryStoreProvider;
};

/**
 * Memory store successfully updated.
 */
export type UpdateMemoryStoreResponseBody = {
  /**
   * The unique identifier of the memory store
   */
  id: string;
  /**
   * The unique key of the memory store. The key is unique and inmmutable and cannot be repeated within the same workspace.
   */
  key: string;
  /**
   * The project unique identifier. This entity is assigned based on the provided `path` property
   */
  projectId: string;
  /**
   * The description of the memory store. Be as precise as possible to help the AI to understand the purpose of the memory store.
   */
  description: string;
  /**
   * The user ID of the creator
   */
  createdById?: string | undefined;
  /**
   * The user ID of the last updater
   */
  updatedById?: string | undefined;
  /**
   * The creation date of the memory store
   */
  created: string;
  /**
   * The last update date of the memory store
   */
  updated: string;
  /**
   * The default time to live of every memory document created within the memory store. Useful to control if the documents in the memory should be store for short or long term.
   */
  ttl?: number | undefined;
  embeddingConfig: UpdateMemoryStoreMemoryStoresEmbeddingConfig;
};

/** @internal */
export const Model17$inboundSchema: z.ZodNativeEnum<typeof Model17> = z
  .nativeEnum(Model17);

/** @internal */
export const Model17$outboundSchema: z.ZodNativeEnum<typeof Model17> =
  Model17$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model17$ {
  /** @deprecated use `Model17$inboundSchema` instead. */
  export const inboundSchema = Model17$inboundSchema;
  /** @deprecated use `Model17$outboundSchema` instead. */
  export const outboundSchema = Model17$outboundSchema;
}

/** @internal */
export const Model16$inboundSchema: z.ZodNativeEnum<typeof Model16> = z
  .nativeEnum(Model16);

/** @internal */
export const Model16$outboundSchema: z.ZodNativeEnum<typeof Model16> =
  Model16$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model16$ {
  /** @deprecated use `Model16$inboundSchema` instead. */
  export const inboundSchema = Model16$inboundSchema;
  /** @deprecated use `Model16$outboundSchema` instead. */
  export const outboundSchema = Model16$outboundSchema;
}

/** @internal */
export const Model15$inboundSchema: z.ZodNativeEnum<typeof Model15> = z
  .nativeEnum(Model15);

/** @internal */
export const Model15$outboundSchema: z.ZodNativeEnum<typeof Model15> =
  Model15$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model15$ {
  /** @deprecated use `Model15$inboundSchema` instead. */
  export const inboundSchema = Model15$inboundSchema;
  /** @deprecated use `Model15$outboundSchema` instead. */
  export const outboundSchema = Model15$outboundSchema;
}

/** @internal */
export const Model14$inboundSchema: z.ZodNativeEnum<typeof Model14> = z
  .nativeEnum(Model14);

/** @internal */
export const Model14$outboundSchema: z.ZodNativeEnum<typeof Model14> =
  Model14$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model14$ {
  /** @deprecated use `Model14$inboundSchema` instead. */
  export const inboundSchema = Model14$inboundSchema;
  /** @deprecated use `Model14$outboundSchema` instead. */
  export const outboundSchema = Model14$outboundSchema;
}

/** @internal */
export const Model13$inboundSchema: z.ZodNativeEnum<typeof Model13> = z
  .nativeEnum(Model13);

/** @internal */
export const Model13$outboundSchema: z.ZodNativeEnum<typeof Model13> =
  Model13$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model13$ {
  /** @deprecated use `Model13$inboundSchema` instead. */
  export const inboundSchema = Model13$inboundSchema;
  /** @deprecated use `Model13$outboundSchema` instead. */
  export const outboundSchema = Model13$outboundSchema;
}

/** @internal */
export const Model12$inboundSchema: z.ZodNativeEnum<typeof Model12> = z
  .nativeEnum(Model12);

/** @internal */
export const Model12$outboundSchema: z.ZodNativeEnum<typeof Model12> =
  Model12$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model12$ {
  /** @deprecated use `Model12$inboundSchema` instead. */
  export const inboundSchema = Model12$inboundSchema;
  /** @deprecated use `Model12$outboundSchema` instead. */
  export const outboundSchema = Model12$outboundSchema;
}

/** @internal */
export const Model11$inboundSchema: z.ZodNativeEnum<typeof Model11> = z
  .nativeEnum(Model11);

/** @internal */
export const Model11$outboundSchema: z.ZodNativeEnum<typeof Model11> =
  Model11$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model11$ {
  /** @deprecated use `Model11$inboundSchema` instead. */
  export const inboundSchema = Model11$inboundSchema;
  /** @deprecated use `Model11$outboundSchema` instead. */
  export const outboundSchema = Model11$outboundSchema;
}

/** @internal */
export const Model10$inboundSchema: z.ZodNativeEnum<typeof Model10> = z
  .nativeEnum(Model10);

/** @internal */
export const Model10$outboundSchema: z.ZodNativeEnum<typeof Model10> =
  Model10$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model10$ {
  /** @deprecated use `Model10$inboundSchema` instead. */
  export const inboundSchema = Model10$inboundSchema;
  /** @deprecated use `Model10$outboundSchema` instead. */
  export const outboundSchema = Model10$outboundSchema;
}

/** @internal */
export const Model9$inboundSchema: z.ZodNativeEnum<typeof Model9> = z
  .nativeEnum(Model9);

/** @internal */
export const Model9$outboundSchema: z.ZodNativeEnum<typeof Model9> =
  Model9$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model9$ {
  /** @deprecated use `Model9$inboundSchema` instead. */
  export const inboundSchema = Model9$inboundSchema;
  /** @deprecated use `Model9$outboundSchema` instead. */
  export const outboundSchema = Model9$outboundSchema;
}

/** @internal */
export const Model8$inboundSchema: z.ZodNativeEnum<typeof Model8> = z
  .nativeEnum(Model8);

/** @internal */
export const Model8$outboundSchema: z.ZodNativeEnum<typeof Model8> =
  Model8$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model8$ {
  /** @deprecated use `Model8$inboundSchema` instead. */
  export const inboundSchema = Model8$inboundSchema;
  /** @deprecated use `Model8$outboundSchema` instead. */
  export const outboundSchema = Model8$outboundSchema;
}

/** @internal */
export const Model7$inboundSchema: z.ZodNativeEnum<typeof Model7> = z
  .nativeEnum(Model7);

/** @internal */
export const Model7$outboundSchema: z.ZodNativeEnum<typeof Model7> =
  Model7$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model7$ {
  /** @deprecated use `Model7$inboundSchema` instead. */
  export const inboundSchema = Model7$inboundSchema;
  /** @deprecated use `Model7$outboundSchema` instead. */
  export const outboundSchema = Model7$outboundSchema;
}

/** @internal */
export const Model6$inboundSchema: z.ZodNativeEnum<typeof Model6> = z
  .nativeEnum(Model6);

/** @internal */
export const Model6$outboundSchema: z.ZodNativeEnum<typeof Model6> =
  Model6$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model6$ {
  /** @deprecated use `Model6$inboundSchema` instead. */
  export const inboundSchema = Model6$inboundSchema;
  /** @deprecated use `Model6$outboundSchema` instead. */
  export const outboundSchema = Model6$outboundSchema;
}

/** @internal */
export const Model5$inboundSchema: z.ZodNativeEnum<typeof Model5> = z
  .nativeEnum(Model5);

/** @internal */
export const Model5$outboundSchema: z.ZodNativeEnum<typeof Model5> =
  Model5$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model5$ {
  /** @deprecated use `Model5$inboundSchema` instead. */
  export const inboundSchema = Model5$inboundSchema;
  /** @deprecated use `Model5$outboundSchema` instead. */
  export const outboundSchema = Model5$outboundSchema;
}

/** @internal */
export const Model4$inboundSchema: z.ZodNativeEnum<typeof Model4> = z
  .nativeEnum(Model4);

/** @internal */
export const Model4$outboundSchema: z.ZodNativeEnum<typeof Model4> =
  Model4$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Model4$ {
  /** @deprecated use `Model4$inboundSchema` instead. */
  export const inboundSchema = Model4$inboundSchema;
  /** @deprecated use `Model4$outboundSchema` instead. */
  export const outboundSchema = Model4$outboundSchema;
}

/** @internal */
export const UpdateMemoryStoreModel3$inboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreModel3
> = z.nativeEnum(UpdateMemoryStoreModel3);

/** @internal */
export const UpdateMemoryStoreModel3$outboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreModel3
> = UpdateMemoryStoreModel3$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreModel3$ {
  /** @deprecated use `UpdateMemoryStoreModel3$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreModel3$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreModel3$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreModel3$outboundSchema;
}

/** @internal */
export const UpdateMemoryStoreModel2$inboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreModel2
> = z.nativeEnum(UpdateMemoryStoreModel2);

/** @internal */
export const UpdateMemoryStoreModel2$outboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreModel2
> = UpdateMemoryStoreModel2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreModel2$ {
  /** @deprecated use `UpdateMemoryStoreModel2$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreModel2$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreModel2$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreModel2$outboundSchema;
}

/** @internal */
export const UpdateMemoryStoreModel1$inboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreModel1
> = z.nativeEnum(UpdateMemoryStoreModel1);

/** @internal */
export const UpdateMemoryStoreModel1$outboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreModel1
> = UpdateMemoryStoreModel1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreModel1$ {
  /** @deprecated use `UpdateMemoryStoreModel1$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreModel1$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreModel1$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreModel1$outboundSchema;
}

/** @internal */
export const UpdateMemoryStoreModel$inboundSchema: z.ZodType<
  UpdateMemoryStoreModel,
  z.ZodTypeDef,
  unknown
> = z.union([
  UpdateMemoryStoreModel1$inboundSchema,
  UpdateMemoryStoreModel2$inboundSchema,
  UpdateMemoryStoreModel3$inboundSchema,
  Model4$inboundSchema,
  Model5$inboundSchema,
  Model6$inboundSchema,
  Model7$inboundSchema,
  Model8$inboundSchema,
  Model9$inboundSchema,
  Model10$inboundSchema,
  Model11$inboundSchema,
  Model12$inboundSchema,
  Model13$inboundSchema,
  Model14$inboundSchema,
  Model15$inboundSchema,
  Model16$inboundSchema,
  Model17$inboundSchema,
]);

/** @internal */
export type UpdateMemoryStoreModel$Outbound =
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string;

/** @internal */
export const UpdateMemoryStoreModel$outboundSchema: z.ZodType<
  UpdateMemoryStoreModel$Outbound,
  z.ZodTypeDef,
  UpdateMemoryStoreModel
> = z.union([
  UpdateMemoryStoreModel1$outboundSchema,
  UpdateMemoryStoreModel2$outboundSchema,
  UpdateMemoryStoreModel3$outboundSchema,
  Model4$outboundSchema,
  Model5$outboundSchema,
  Model6$outboundSchema,
  Model7$outboundSchema,
  Model8$outboundSchema,
  Model9$outboundSchema,
  Model10$outboundSchema,
  Model11$outboundSchema,
  Model12$outboundSchema,
  Model13$outboundSchema,
  Model14$outboundSchema,
  Model15$outboundSchema,
  Model16$outboundSchema,
  Model17$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreModel$ {
  /** @deprecated use `UpdateMemoryStoreModel$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreModel$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreModel$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreModel$outboundSchema;
  /** @deprecated use `UpdateMemoryStoreModel$Outbound` instead. */
  export type Outbound = UpdateMemoryStoreModel$Outbound;
}

export function updateMemoryStoreModelToJSON(
  updateMemoryStoreModel: UpdateMemoryStoreModel,
): string {
  return JSON.stringify(
    UpdateMemoryStoreModel$outboundSchema.parse(updateMemoryStoreModel),
  );
}

export function updateMemoryStoreModelFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMemoryStoreModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMemoryStoreModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMemoryStoreModel' from JSON`,
  );
}

/** @internal */
export const UpdateMemoryStoreEmbeddingConfig$inboundSchema: z.ZodType<
  UpdateMemoryStoreEmbeddingConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.union([
    UpdateMemoryStoreModel1$inboundSchema,
    UpdateMemoryStoreModel2$inboundSchema,
    UpdateMemoryStoreModel3$inboundSchema,
    Model4$inboundSchema,
    Model5$inboundSchema,
    Model6$inboundSchema,
    Model7$inboundSchema,
    Model8$inboundSchema,
    Model9$inboundSchema,
    Model10$inboundSchema,
    Model11$inboundSchema,
    Model12$inboundSchema,
    Model13$inboundSchema,
    Model14$inboundSchema,
    Model15$inboundSchema,
    Model16$inboundSchema,
    Model17$inboundSchema,
  ]),
});

/** @internal */
export type UpdateMemoryStoreEmbeddingConfig$Outbound = {
  model:
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | string;
};

/** @internal */
export const UpdateMemoryStoreEmbeddingConfig$outboundSchema: z.ZodType<
  UpdateMemoryStoreEmbeddingConfig$Outbound,
  z.ZodTypeDef,
  UpdateMemoryStoreEmbeddingConfig
> = z.object({
  model: z.union([
    UpdateMemoryStoreModel1$outboundSchema,
    UpdateMemoryStoreModel2$outboundSchema,
    UpdateMemoryStoreModel3$outboundSchema,
    Model4$outboundSchema,
    Model5$outboundSchema,
    Model6$outboundSchema,
    Model7$outboundSchema,
    Model8$outboundSchema,
    Model9$outboundSchema,
    Model10$outboundSchema,
    Model11$outboundSchema,
    Model12$outboundSchema,
    Model13$outboundSchema,
    Model14$outboundSchema,
    Model15$outboundSchema,
    Model16$outboundSchema,
    Model17$outboundSchema,
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreEmbeddingConfig$ {
  /** @deprecated use `UpdateMemoryStoreEmbeddingConfig$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreEmbeddingConfig$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreEmbeddingConfig$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreEmbeddingConfig$outboundSchema;
  /** @deprecated use `UpdateMemoryStoreEmbeddingConfig$Outbound` instead. */
  export type Outbound = UpdateMemoryStoreEmbeddingConfig$Outbound;
}

export function updateMemoryStoreEmbeddingConfigToJSON(
  updateMemoryStoreEmbeddingConfig: UpdateMemoryStoreEmbeddingConfig,
): string {
  return JSON.stringify(
    UpdateMemoryStoreEmbeddingConfig$outboundSchema.parse(
      updateMemoryStoreEmbeddingConfig,
    ),
  );
}

export function updateMemoryStoreEmbeddingConfigFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMemoryStoreEmbeddingConfig, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMemoryStoreEmbeddingConfig$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMemoryStoreEmbeddingConfig' from JSON`,
  );
}

/** @internal */
export const UpdateMemoryStoreRequestBody$inboundSchema: z.ZodType<
  UpdateMemoryStoreRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  embedding_config: z.lazy(() =>
    UpdateMemoryStoreEmbeddingConfig$inboundSchema
  ),
  description: z.string(),
  ttl: z.number().optional(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    "embedding_config": "embeddingConfig",
  });
});

/** @internal */
export type UpdateMemoryStoreRequestBody$Outbound = {
  embedding_config: UpdateMemoryStoreEmbeddingConfig$Outbound;
  description: string;
  ttl?: number | undefined;
  path: string;
};

/** @internal */
export const UpdateMemoryStoreRequestBody$outboundSchema: z.ZodType<
  UpdateMemoryStoreRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateMemoryStoreRequestBody
> = z.object({
  embeddingConfig: z.lazy(() =>
    UpdateMemoryStoreEmbeddingConfig$outboundSchema
  ),
  description: z.string(),
  ttl: z.number().optional(),
  path: z.string(),
}).transform((v) => {
  return remap$(v, {
    embeddingConfig: "embedding_config",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreRequestBody$ {
  /** @deprecated use `UpdateMemoryStoreRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreRequestBody$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreRequestBody$outboundSchema;
  /** @deprecated use `UpdateMemoryStoreRequestBody$Outbound` instead. */
  export type Outbound = UpdateMemoryStoreRequestBody$Outbound;
}

export function updateMemoryStoreRequestBodyToJSON(
  updateMemoryStoreRequestBody: UpdateMemoryStoreRequestBody,
): string {
  return JSON.stringify(
    UpdateMemoryStoreRequestBody$outboundSchema.parse(
      updateMemoryStoreRequestBody,
    ),
  );
}

export function updateMemoryStoreRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMemoryStoreRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMemoryStoreRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMemoryStoreRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateMemoryStoreRequest$inboundSchema: z.ZodType<
  UpdateMemoryStoreRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  memory_store_key: z.string(),
  RequestBody: z.lazy(() => UpdateMemoryStoreRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "memory_store_key": "memoryStoreKey",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateMemoryStoreRequest$Outbound = {
  memory_store_key: string;
  RequestBody?: UpdateMemoryStoreRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateMemoryStoreRequest$outboundSchema: z.ZodType<
  UpdateMemoryStoreRequest$Outbound,
  z.ZodTypeDef,
  UpdateMemoryStoreRequest
> = z.object({
  memoryStoreKey: z.string(),
  requestBody: z.lazy(() => UpdateMemoryStoreRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    memoryStoreKey: "memory_store_key",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreRequest$ {
  /** @deprecated use `UpdateMemoryStoreRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreRequest$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreRequest$outboundSchema;
  /** @deprecated use `UpdateMemoryStoreRequest$Outbound` instead. */
  export type Outbound = UpdateMemoryStoreRequest$Outbound;
}

export function updateMemoryStoreRequestToJSON(
  updateMemoryStoreRequest: UpdateMemoryStoreRequest,
): string {
  return JSON.stringify(
    UpdateMemoryStoreRequest$outboundSchema.parse(updateMemoryStoreRequest),
  );
}

export function updateMemoryStoreRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMemoryStoreRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMemoryStoreRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMemoryStoreRequest' from JSON`,
  );
}

/** @internal */
export const UpdateMemoryStoreProvider$inboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreProvider
> = z.nativeEnum(UpdateMemoryStoreProvider);

/** @internal */
export const UpdateMemoryStoreProvider$outboundSchema: z.ZodNativeEnum<
  typeof UpdateMemoryStoreProvider
> = UpdateMemoryStoreProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreProvider$ {
  /** @deprecated use `UpdateMemoryStoreProvider$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreProvider$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreProvider$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreProvider$outboundSchema;
}

/** @internal */
export const UpdateMemoryStoreMemoryStoresEmbeddingConfig$inboundSchema:
  z.ZodType<
    UpdateMemoryStoreMemoryStoresEmbeddingConfig,
    z.ZodTypeDef,
    unknown
  > = z.object({
    model_id: z.string(),
    integration_id: z.string().optional(),
    top_k: z.number().optional(),
    provider: UpdateMemoryStoreProvider$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "model_id": "modelId",
      "integration_id": "integrationId",
      "top_k": "topK",
    });
  });

/** @internal */
export type UpdateMemoryStoreMemoryStoresEmbeddingConfig$Outbound = {
  model_id: string;
  integration_id?: string | undefined;
  top_k?: number | undefined;
  provider: string;
};

/** @internal */
export const UpdateMemoryStoreMemoryStoresEmbeddingConfig$outboundSchema:
  z.ZodType<
    UpdateMemoryStoreMemoryStoresEmbeddingConfig$Outbound,
    z.ZodTypeDef,
    UpdateMemoryStoreMemoryStoresEmbeddingConfig
  > = z.object({
    modelId: z.string(),
    integrationId: z.string().optional(),
    topK: z.number().optional(),
    provider: UpdateMemoryStoreProvider$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      modelId: "model_id",
      integrationId: "integration_id",
      topK: "top_k",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreMemoryStoresEmbeddingConfig$ {
  /** @deprecated use `UpdateMemoryStoreMemoryStoresEmbeddingConfig$inboundSchema` instead. */
  export const inboundSchema =
    UpdateMemoryStoreMemoryStoresEmbeddingConfig$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreMemoryStoresEmbeddingConfig$outboundSchema` instead. */
  export const outboundSchema =
    UpdateMemoryStoreMemoryStoresEmbeddingConfig$outboundSchema;
  /** @deprecated use `UpdateMemoryStoreMemoryStoresEmbeddingConfig$Outbound` instead. */
  export type Outbound = UpdateMemoryStoreMemoryStoresEmbeddingConfig$Outbound;
}

export function updateMemoryStoreMemoryStoresEmbeddingConfigToJSON(
  updateMemoryStoreMemoryStoresEmbeddingConfig:
    UpdateMemoryStoreMemoryStoresEmbeddingConfig,
): string {
  return JSON.stringify(
    UpdateMemoryStoreMemoryStoresEmbeddingConfig$outboundSchema.parse(
      updateMemoryStoreMemoryStoresEmbeddingConfig,
    ),
  );
}

export function updateMemoryStoreMemoryStoresEmbeddingConfigFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateMemoryStoreMemoryStoresEmbeddingConfig,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateMemoryStoreMemoryStoresEmbeddingConfig$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateMemoryStoreMemoryStoresEmbeddingConfig' from JSON`,
  );
}

/** @internal */
export const UpdateMemoryStoreResponseBody$inboundSchema: z.ZodType<
  UpdateMemoryStoreResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  key: z.string(),
  project_id: z.string(),
  description: z.string(),
  created_by_id: z.string().optional(),
  updated_by_id: z.string().optional(),
  created: z.string(),
  updated: z.string(),
  ttl: z.number().optional(),
  embedding_config: z.lazy(() =>
    UpdateMemoryStoreMemoryStoresEmbeddingConfig$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "project_id": "projectId",
    "created_by_id": "createdById",
    "updated_by_id": "updatedById",
    "embedding_config": "embeddingConfig",
  });
});

/** @internal */
export type UpdateMemoryStoreResponseBody$Outbound = {
  _id: string;
  key: string;
  project_id: string;
  description: string;
  created_by_id?: string | undefined;
  updated_by_id?: string | undefined;
  created: string;
  updated: string;
  ttl?: number | undefined;
  embedding_config: UpdateMemoryStoreMemoryStoresEmbeddingConfig$Outbound;
};

/** @internal */
export const UpdateMemoryStoreResponseBody$outboundSchema: z.ZodType<
  UpdateMemoryStoreResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateMemoryStoreResponseBody
> = z.object({
  id: z.string(),
  key: z.string(),
  projectId: z.string(),
  description: z.string(),
  createdById: z.string().optional(),
  updatedById: z.string().optional(),
  created: z.string(),
  updated: z.string(),
  ttl: z.number().optional(),
  embeddingConfig: z.lazy(() =>
    UpdateMemoryStoreMemoryStoresEmbeddingConfig$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    projectId: "project_id",
    createdById: "created_by_id",
    updatedById: "updated_by_id",
    embeddingConfig: "embedding_config",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMemoryStoreResponseBody$ {
  /** @deprecated use `UpdateMemoryStoreResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateMemoryStoreResponseBody$inboundSchema;
  /** @deprecated use `UpdateMemoryStoreResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateMemoryStoreResponseBody$outboundSchema;
  /** @deprecated use `UpdateMemoryStoreResponseBody$Outbound` instead. */
  export type Outbound = UpdateMemoryStoreResponseBody$Outbound;
}

export function updateMemoryStoreResponseBodyToJSON(
  updateMemoryStoreResponseBody: UpdateMemoryStoreResponseBody,
): string {
  return JSON.stringify(
    UpdateMemoryStoreResponseBody$outboundSchema.parse(
      updateMemoryStoreResponseBody,
    ),
  );
}

export function updateMemoryStoreResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateMemoryStoreResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateMemoryStoreResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateMemoryStoreResponseBody' from JSON`,
  );
}
