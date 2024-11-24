/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The source where the error came from
 */
export const GetV2LogsIdResponseSource = {
  Provider: "provider",
  System: "system",
} as const;
/**
 * The source where the error came from
 */
export type GetV2LogsIdResponseSource = ClosedEnum<
  typeof GetV2LogsIdResponseSource
>;

/**
 * Internal server error
 */
export type GetV2LogsIdResponse500ResponseBodyData = {
  /**
   * HTTP status code
   */
  code: number;
  /**
   * Error message
   */
  error: string;
  /**
   * The source where the error came from
   */
  source: GetV2LogsIdResponseSource;
};

/**
 * Internal server error
 */
export class GetV2LogsIdResponse500ResponseBody extends Error {
  /**
   * HTTP status code
   */
  code: number;
  /**
   * Error message
   */
  error: string;
  /**
   * The source where the error came from
   */
  source: GetV2LogsIdResponseSource;

  /** The original data that was passed to this error instance. */
  data$: GetV2LogsIdResponse500ResponseBodyData;

  constructor(err: GetV2LogsIdResponse500ResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    this.error = err.error;
    this.source = err.source;

    this.name = "GetV2LogsIdResponse500ResponseBody";
  }
}

/**
 * Error message
 */
export type GetV2LogsIdResponse404ResponseBodyData = {
  message: string;
};

/**
 * Error message
 */
export class GetV2LogsIdResponse404ResponseBody extends Error {
  /** The original data that was passed to this error instance. */
  data$: GetV2LogsIdResponse404ResponseBodyData;

  constructor(err: GetV2LogsIdResponse404ResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "GetV2LogsIdResponse404ResponseBody";
  }
}

/**
 * Authorization error
 */
export type GetV2LogsIdResponseResponseBodyData = {
  message: string;
};

/**
 * Authorization error
 */
export class GetV2LogsIdResponseResponseBody extends Error {
  /** The original data that was passed to this error instance. */
  data$: GetV2LogsIdResponseResponseBodyData;

  constructor(err: GetV2LogsIdResponseResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "GetV2LogsIdResponseResponseBody";
  }
}

/**
 * The source where the error came from
 */
export const GetV2LogsIdSource = {
  Provider: "provider",
  System: "system",
} as const;
/**
 * The source where the error came from
 */
export type GetV2LogsIdSource = ClosedEnum<typeof GetV2LogsIdSource>;

/**
 * Bad request - validation error
 */
export type GetV2LogsIdResponseBodyData = {
  /**
   * HTTP status code
   */
  code: number;
  /**
   * Error message
   */
  error: string;
  /**
   * The source where the error came from
   */
  source: GetV2LogsIdSource;
};

/**
 * Bad request - validation error
 */
export class GetV2LogsIdResponseBody extends Error {
  /**
   * HTTP status code
   */
  code: number;
  /**
   * Error message
   */
  error: string;
  /**
   * The source where the error came from
   */
  source: GetV2LogsIdSource;

  /** The original data that was passed to this error instance. */
  data$: GetV2LogsIdResponseBodyData;

  constructor(err: GetV2LogsIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    this.error = err.error;
    this.source = err.source;

    this.name = "GetV2LogsIdResponseBody";
  }
}

/** @internal */
export const GetV2LogsIdResponseSource$inboundSchema: z.ZodNativeEnum<
  typeof GetV2LogsIdResponseSource
> = z.nativeEnum(GetV2LogsIdResponseSource);

/** @internal */
export const GetV2LogsIdResponseSource$outboundSchema: z.ZodNativeEnum<
  typeof GetV2LogsIdResponseSource
> = GetV2LogsIdResponseSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2LogsIdResponseSource$ {
  /** @deprecated use `GetV2LogsIdResponseSource$inboundSchema` instead. */
  export const inboundSchema = GetV2LogsIdResponseSource$inboundSchema;
  /** @deprecated use `GetV2LogsIdResponseSource$outboundSchema` instead. */
  export const outboundSchema = GetV2LogsIdResponseSource$outboundSchema;
}

/** @internal */
export const GetV2LogsIdResponse500ResponseBody$inboundSchema: z.ZodType<
  GetV2LogsIdResponse500ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number(),
  error: z.string(),
  source: GetV2LogsIdResponseSource$inboundSchema,
})
  .transform((v) => {
    return new GetV2LogsIdResponse500ResponseBody(v);
  });

/** @internal */
export type GetV2LogsIdResponse500ResponseBody$Outbound = {
  code: number;
  error: string;
  source: string;
};

/** @internal */
export const GetV2LogsIdResponse500ResponseBody$outboundSchema: z.ZodType<
  GetV2LogsIdResponse500ResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2LogsIdResponse500ResponseBody
> = z.instanceof(GetV2LogsIdResponse500ResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number(),
    error: z.string(),
    source: GetV2LogsIdResponseSource$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2LogsIdResponse500ResponseBody$ {
  /** @deprecated use `GetV2LogsIdResponse500ResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2LogsIdResponse500ResponseBody$inboundSchema;
  /** @deprecated use `GetV2LogsIdResponse500ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2LogsIdResponse500ResponseBody$outboundSchema;
  /** @deprecated use `GetV2LogsIdResponse500ResponseBody$Outbound` instead. */
  export type Outbound = GetV2LogsIdResponse500ResponseBody$Outbound;
}

/** @internal */
export const GetV2LogsIdResponse404ResponseBody$inboundSchema: z.ZodType<
  GetV2LogsIdResponse404ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
})
  .transform((v) => {
    return new GetV2LogsIdResponse404ResponseBody(v);
  });

/** @internal */
export type GetV2LogsIdResponse404ResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const GetV2LogsIdResponse404ResponseBody$outboundSchema: z.ZodType<
  GetV2LogsIdResponse404ResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2LogsIdResponse404ResponseBody
> = z.instanceof(GetV2LogsIdResponse404ResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2LogsIdResponse404ResponseBody$ {
  /** @deprecated use `GetV2LogsIdResponse404ResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2LogsIdResponse404ResponseBody$inboundSchema;
  /** @deprecated use `GetV2LogsIdResponse404ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2LogsIdResponse404ResponseBody$outboundSchema;
  /** @deprecated use `GetV2LogsIdResponse404ResponseBody$Outbound` instead. */
  export type Outbound = GetV2LogsIdResponse404ResponseBody$Outbound;
}

/** @internal */
export const GetV2LogsIdResponseResponseBody$inboundSchema: z.ZodType<
  GetV2LogsIdResponseResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
})
  .transform((v) => {
    return new GetV2LogsIdResponseResponseBody(v);
  });

/** @internal */
export type GetV2LogsIdResponseResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const GetV2LogsIdResponseResponseBody$outboundSchema: z.ZodType<
  GetV2LogsIdResponseResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2LogsIdResponseResponseBody
> = z.instanceof(GetV2LogsIdResponseResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2LogsIdResponseResponseBody$ {
  /** @deprecated use `GetV2LogsIdResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2LogsIdResponseResponseBody$inboundSchema;
  /** @deprecated use `GetV2LogsIdResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2LogsIdResponseResponseBody$outboundSchema;
  /** @deprecated use `GetV2LogsIdResponseResponseBody$Outbound` instead. */
  export type Outbound = GetV2LogsIdResponseResponseBody$Outbound;
}

/** @internal */
export const GetV2LogsIdSource$inboundSchema: z.ZodNativeEnum<
  typeof GetV2LogsIdSource
> = z.nativeEnum(GetV2LogsIdSource);

/** @internal */
export const GetV2LogsIdSource$outboundSchema: z.ZodNativeEnum<
  typeof GetV2LogsIdSource
> = GetV2LogsIdSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2LogsIdSource$ {
  /** @deprecated use `GetV2LogsIdSource$inboundSchema` instead. */
  export const inboundSchema = GetV2LogsIdSource$inboundSchema;
  /** @deprecated use `GetV2LogsIdSource$outboundSchema` instead. */
  export const outboundSchema = GetV2LogsIdSource$outboundSchema;
}

/** @internal */
export const GetV2LogsIdResponseBody$inboundSchema: z.ZodType<
  GetV2LogsIdResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number(),
  error: z.string(),
  source: GetV2LogsIdSource$inboundSchema,
})
  .transform((v) => {
    return new GetV2LogsIdResponseBody(v);
  });

/** @internal */
export type GetV2LogsIdResponseBody$Outbound = {
  code: number;
  error: string;
  source: string;
};

/** @internal */
export const GetV2LogsIdResponseBody$outboundSchema: z.ZodType<
  GetV2LogsIdResponseBody$Outbound,
  z.ZodTypeDef,
  GetV2LogsIdResponseBody
> = z.instanceof(GetV2LogsIdResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number(),
    error: z.string(),
    source: GetV2LogsIdSource$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2LogsIdResponseBody$ {
  /** @deprecated use `GetV2LogsIdResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetV2LogsIdResponseBody$inboundSchema;
  /** @deprecated use `GetV2LogsIdResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetV2LogsIdResponseBody$outboundSchema;
  /** @deprecated use `GetV2LogsIdResponseBody$Outbound` instead. */
  export type Outbound = GetV2LogsIdResponseBody$Outbound;
}
