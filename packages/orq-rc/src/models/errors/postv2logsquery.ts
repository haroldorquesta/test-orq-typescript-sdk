/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The source where the error came from
 */
export const PostV2LogsQuerySource = {
  Provider: "provider",
  System: "system",
} as const;
/**
 * The source where the error came from
 */
export type PostV2LogsQuerySource = ClosedEnum<typeof PostV2LogsQuerySource>;

/**
 * Internal server error
 */
export type PostV2LogsQueryResponse500ResponseBodyData = {
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
  source: PostV2LogsQuerySource;
};

/**
 * Internal server error
 */
export class PostV2LogsQueryResponse500ResponseBody extends Error {
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
  source: PostV2LogsQuerySource;

  /** The original data that was passed to this error instance. */
  data$: PostV2LogsQueryResponse500ResponseBodyData;

  constructor(err: PostV2LogsQueryResponse500ResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    this.error = err.error;
    this.source = err.source;

    this.name = "PostV2LogsQueryResponse500ResponseBody";
  }
}

/**
 * Authorization error
 */
export type PostV2LogsQueryResponseResponseBodyData = {
  message: string;
};

/**
 * Authorization error
 */
export class PostV2LogsQueryResponseResponseBody extends Error {
  /** The original data that was passed to this error instance. */
  data$: PostV2LogsQueryResponseResponseBodyData;

  constructor(err: PostV2LogsQueryResponseResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "PostV2LogsQueryResponseResponseBody";
  }
}

/**
 * The source where the error came from
 */
export const Source = {
  Provider: "provider",
  System: "system",
} as const;
/**
 * The source where the error came from
 */
export type Source = ClosedEnum<typeof Source>;

/**
 * Bad request - validation error
 */
export type PostV2LogsQueryResponseBodyData = {
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
  source: Source;
};

/**
 * Bad request - validation error
 */
export class PostV2LogsQueryResponseBody extends Error {
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
  source: Source;

  /** The original data that was passed to this error instance. */
  data$: PostV2LogsQueryResponseBodyData;

  constructor(err: PostV2LogsQueryResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    this.error = err.error;
    this.source = err.source;

    this.name = "PostV2LogsQueryResponseBody";
  }
}

/** @internal */
export const PostV2LogsQuerySource$inboundSchema: z.ZodNativeEnum<
  typeof PostV2LogsQuerySource
> = z.nativeEnum(PostV2LogsQuerySource);

/** @internal */
export const PostV2LogsQuerySource$outboundSchema: z.ZodNativeEnum<
  typeof PostV2LogsQuerySource
> = PostV2LogsQuerySource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2LogsQuerySource$ {
  /** @deprecated use `PostV2LogsQuerySource$inboundSchema` instead. */
  export const inboundSchema = PostV2LogsQuerySource$inboundSchema;
  /** @deprecated use `PostV2LogsQuerySource$outboundSchema` instead. */
  export const outboundSchema = PostV2LogsQuerySource$outboundSchema;
}

/** @internal */
export const PostV2LogsQueryResponse500ResponseBody$inboundSchema: z.ZodType<
  PostV2LogsQueryResponse500ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number(),
  error: z.string(),
  source: PostV2LogsQuerySource$inboundSchema,
})
  .transform((v) => {
    return new PostV2LogsQueryResponse500ResponseBody(v);
  });

/** @internal */
export type PostV2LogsQueryResponse500ResponseBody$Outbound = {
  code: number;
  error: string;
  source: string;
};

/** @internal */
export const PostV2LogsQueryResponse500ResponseBody$outboundSchema: z.ZodType<
  PostV2LogsQueryResponse500ResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2LogsQueryResponse500ResponseBody
> = z.instanceof(PostV2LogsQueryResponse500ResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number(),
    error: z.string(),
    source: PostV2LogsQuerySource$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2LogsQueryResponse500ResponseBody$ {
  /** @deprecated use `PostV2LogsQueryResponse500ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV2LogsQueryResponse500ResponseBody$inboundSchema;
  /** @deprecated use `PostV2LogsQueryResponse500ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2LogsQueryResponse500ResponseBody$outboundSchema;
  /** @deprecated use `PostV2LogsQueryResponse500ResponseBody$Outbound` instead. */
  export type Outbound = PostV2LogsQueryResponse500ResponseBody$Outbound;
}

/** @internal */
export const PostV2LogsQueryResponseResponseBody$inboundSchema: z.ZodType<
  PostV2LogsQueryResponseResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
})
  .transform((v) => {
    return new PostV2LogsQueryResponseResponseBody(v);
  });

/** @internal */
export type PostV2LogsQueryResponseResponseBody$Outbound = {
  message: string;
};

/** @internal */
export const PostV2LogsQueryResponseResponseBody$outboundSchema: z.ZodType<
  PostV2LogsQueryResponseResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2LogsQueryResponseResponseBody
> = z.instanceof(PostV2LogsQueryResponseResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2LogsQueryResponseResponseBody$ {
  /** @deprecated use `PostV2LogsQueryResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    PostV2LogsQueryResponseResponseBody$inboundSchema;
  /** @deprecated use `PostV2LogsQueryResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2LogsQueryResponseResponseBody$outboundSchema;
  /** @deprecated use `PostV2LogsQueryResponseResponseBody$Outbound` instead. */
  export type Outbound = PostV2LogsQueryResponseResponseBody$Outbound;
}

/** @internal */
export const Source$inboundSchema: z.ZodNativeEnum<typeof Source> = z
  .nativeEnum(Source);

/** @internal */
export const Source$outboundSchema: z.ZodNativeEnum<typeof Source> =
  Source$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Source$ {
  /** @deprecated use `Source$inboundSchema` instead. */
  export const inboundSchema = Source$inboundSchema;
  /** @deprecated use `Source$outboundSchema` instead. */
  export const outboundSchema = Source$outboundSchema;
}

/** @internal */
export const PostV2LogsQueryResponseBody$inboundSchema: z.ZodType<
  PostV2LogsQueryResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number(),
  error: z.string(),
  source: Source$inboundSchema,
})
  .transform((v) => {
    return new PostV2LogsQueryResponseBody(v);
  });

/** @internal */
export type PostV2LogsQueryResponseBody$Outbound = {
  code: number;
  error: string;
  source: string;
};

/** @internal */
export const PostV2LogsQueryResponseBody$outboundSchema: z.ZodType<
  PostV2LogsQueryResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2LogsQueryResponseBody
> = z.instanceof(PostV2LogsQueryResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number(),
    error: z.string(),
    source: Source$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2LogsQueryResponseBody$ {
  /** @deprecated use `PostV2LogsQueryResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostV2LogsQueryResponseBody$inboundSchema;
  /** @deprecated use `PostV2LogsQueryResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostV2LogsQueryResponseBody$outboundSchema;
  /** @deprecated use `PostV2LogsQueryResponseBody$Outbound` instead. */
  export type Outbound = PostV2LogsQueryResponseBody$Outbound;
}