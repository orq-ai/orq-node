/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CreateDeploymentExperimentType = {
  DeploymentExperiment: "deployment_experiment",
} as const;
export type CreateDeploymentExperimentType = ClosedEnum<
  typeof CreateDeploymentExperimentType
>;

export type CreateDeploymentExperimentRequestBody = {
  /**
   * The unique key of the experiment
   */
  experimentKey: string;
  /**
   * The list of evaluators to use for the experiment. You can apply multiple evaluators to the same experiment. By default we always consider latency and cost as evaluators.
   */
  evaluators?: Array<string> | undefined;
  /**
   * The path where the experiment needs to be stored. If not provided, the experiment will be stored in the same path of the dataset used for the experiment.
   */
  path?: string | undefined;
  /**
   * The id of the dataset to run the experiment on
   */
  datasetId: string;
  type: CreateDeploymentExperimentType;
  /**
   * Key-value pairs that match your data model and fields declared in your deployment routing configuration. If not provided, the default variant of the deployment will be used to create the experiment
   */
  context?: { [k: string]: any } | undefined;
};

export type CreateDeploymentExperimentRequest = {
  /**
   * Deployment Key
   */
  deploymentKey: string;
  requestBody?: CreateDeploymentExperimentRequestBody | undefined;
};

/**
 * Experiment created
 */
export type CreateDeploymentExperimentResponseBody = {
  /**
   * The url of the experiment run that was just created
   */
  url: string;
  /**
   * The unique identifier of the experiment
   */
  experimentId: string;
  /**
   * The unique identifier of the experiment run
   */
  experimentRunId: string;
};

/** @internal */
export const CreateDeploymentExperimentType$inboundSchema: z.ZodNativeEnum<
  typeof CreateDeploymentExperimentType
> = z.nativeEnum(CreateDeploymentExperimentType);

/** @internal */
export const CreateDeploymentExperimentType$outboundSchema: z.ZodNativeEnum<
  typeof CreateDeploymentExperimentType
> = CreateDeploymentExperimentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDeploymentExperimentType$ {
  /** @deprecated use `CreateDeploymentExperimentType$inboundSchema` instead. */
  export const inboundSchema = CreateDeploymentExperimentType$inboundSchema;
  /** @deprecated use `CreateDeploymentExperimentType$outboundSchema` instead. */
  export const outboundSchema = CreateDeploymentExperimentType$outboundSchema;
}

/** @internal */
export const CreateDeploymentExperimentRequestBody$inboundSchema: z.ZodType<
  CreateDeploymentExperimentRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  experiment_key: z.string(),
  evaluators: z.array(z.string()).optional(),
  path: z.string().optional(),
  dataset_id: z.string(),
  type: CreateDeploymentExperimentType$inboundSchema,
  context: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "experiment_key": "experimentKey",
    "dataset_id": "datasetId",
  });
});

/** @internal */
export type CreateDeploymentExperimentRequestBody$Outbound = {
  experiment_key: string;
  evaluators?: Array<string> | undefined;
  path?: string | undefined;
  dataset_id: string;
  type: string;
  context?: { [k: string]: any } | undefined;
};

/** @internal */
export const CreateDeploymentExperimentRequestBody$outboundSchema: z.ZodType<
  CreateDeploymentExperimentRequestBody$Outbound,
  z.ZodTypeDef,
  CreateDeploymentExperimentRequestBody
> = z.object({
  experimentKey: z.string(),
  evaluators: z.array(z.string()).optional(),
  path: z.string().optional(),
  datasetId: z.string(),
  type: CreateDeploymentExperimentType$outboundSchema,
  context: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    experimentKey: "experiment_key",
    datasetId: "dataset_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDeploymentExperimentRequestBody$ {
  /** @deprecated use `CreateDeploymentExperimentRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateDeploymentExperimentRequestBody$inboundSchema;
  /** @deprecated use `CreateDeploymentExperimentRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateDeploymentExperimentRequestBody$outboundSchema;
  /** @deprecated use `CreateDeploymentExperimentRequestBody$Outbound` instead. */
  export type Outbound = CreateDeploymentExperimentRequestBody$Outbound;
}

export function createDeploymentExperimentRequestBodyToJSON(
  createDeploymentExperimentRequestBody: CreateDeploymentExperimentRequestBody,
): string {
  return JSON.stringify(
    CreateDeploymentExperimentRequestBody$outboundSchema.parse(
      createDeploymentExperimentRequestBody,
    ),
  );
}

export function createDeploymentExperimentRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDeploymentExperimentRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateDeploymentExperimentRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDeploymentExperimentRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateDeploymentExperimentRequest$inboundSchema: z.ZodType<
  CreateDeploymentExperimentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  deployment_key: z.string(),
  RequestBody: z.lazy(() => CreateDeploymentExperimentRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "deployment_key": "deploymentKey",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateDeploymentExperimentRequest$Outbound = {
  deployment_key: string;
  RequestBody?: CreateDeploymentExperimentRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateDeploymentExperimentRequest$outboundSchema: z.ZodType<
  CreateDeploymentExperimentRequest$Outbound,
  z.ZodTypeDef,
  CreateDeploymentExperimentRequest
> = z.object({
  deploymentKey: z.string(),
  requestBody: z.lazy(() =>
    CreateDeploymentExperimentRequestBody$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    deploymentKey: "deployment_key",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDeploymentExperimentRequest$ {
  /** @deprecated use `CreateDeploymentExperimentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateDeploymentExperimentRequest$inboundSchema;
  /** @deprecated use `CreateDeploymentExperimentRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateDeploymentExperimentRequest$outboundSchema;
  /** @deprecated use `CreateDeploymentExperimentRequest$Outbound` instead. */
  export type Outbound = CreateDeploymentExperimentRequest$Outbound;
}

export function createDeploymentExperimentRequestToJSON(
  createDeploymentExperimentRequest: CreateDeploymentExperimentRequest,
): string {
  return JSON.stringify(
    CreateDeploymentExperimentRequest$outboundSchema.parse(
      createDeploymentExperimentRequest,
    ),
  );
}

export function createDeploymentExperimentRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateDeploymentExperimentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDeploymentExperimentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDeploymentExperimentRequest' from JSON`,
  );
}

/** @internal */
export const CreateDeploymentExperimentResponseBody$inboundSchema: z.ZodType<
  CreateDeploymentExperimentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  experiment_id: z.string(),
  experiment_run_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "experiment_id": "experimentId",
    "experiment_run_id": "experimentRunId",
  });
});

/** @internal */
export type CreateDeploymentExperimentResponseBody$Outbound = {
  url: string;
  experiment_id: string;
  experiment_run_id: string;
};

/** @internal */
export const CreateDeploymentExperimentResponseBody$outboundSchema: z.ZodType<
  CreateDeploymentExperimentResponseBody$Outbound,
  z.ZodTypeDef,
  CreateDeploymentExperimentResponseBody
> = z.object({
  url: z.string(),
  experimentId: z.string(),
  experimentRunId: z.string(),
}).transform((v) => {
  return remap$(v, {
    experimentId: "experiment_id",
    experimentRunId: "experiment_run_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDeploymentExperimentResponseBody$ {
  /** @deprecated use `CreateDeploymentExperimentResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateDeploymentExperimentResponseBody$inboundSchema;
  /** @deprecated use `CreateDeploymentExperimentResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateDeploymentExperimentResponseBody$outboundSchema;
  /** @deprecated use `CreateDeploymentExperimentResponseBody$Outbound` instead. */
  export type Outbound = CreateDeploymentExperimentResponseBody$Outbound;
}

export function createDeploymentExperimentResponseBodyToJSON(
  createDeploymentExperimentResponseBody:
    CreateDeploymentExperimentResponseBody,
): string {
  return JSON.stringify(
    CreateDeploymentExperimentResponseBody$outboundSchema.parse(
      createDeploymentExperimentResponseBody,
    ),
  );
}

export function createDeploymentExperimentResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDeploymentExperimentResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateDeploymentExperimentResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDeploymentExperimentResponseBody' from JSON`,
  );
}
