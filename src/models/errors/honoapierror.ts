/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type HonoApiErrorData = {
  /**
   * HTTP status code
   */
  code?: string | undefined;
  /**
   * Error message
   */
  message: string;
};

export class HonoApiError extends Error {
  /**
   * HTTP status code
   */
  code?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: HonoApiErrorData;

  constructor(err: HonoApiErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.code != null) this.code = err.code;

    this.name = "HonoApiError";
  }
}

/** @internal */
export const HonoApiError$inboundSchema: z.ZodType<
  HonoApiError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string().optional(),
  message: z.string(),
})
  .transform((v) => {
    return new HonoApiError(v);
  });

/** @internal */
export type HonoApiError$Outbound = {
  code?: string | undefined;
  message: string;
};

/** @internal */
export const HonoApiError$outboundSchema: z.ZodType<
  HonoApiError$Outbound,
  z.ZodTypeDef,
  HonoApiError
> = z.instanceof(HonoApiError)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.string().optional(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HonoApiError$ {
  /** @deprecated use `HonoApiError$inboundSchema` instead. */
  export const inboundSchema = HonoApiError$inboundSchema;
  /** @deprecated use `HonoApiError$outboundSchema` instead. */
  export const outboundSchema = HonoApiError$outboundSchema;
  /** @deprecated use `HonoApiError$Outbound` instead. */
  export type Outbound = HonoApiError$Outbound;
}