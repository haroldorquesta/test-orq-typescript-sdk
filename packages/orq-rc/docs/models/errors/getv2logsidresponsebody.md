# GetV2LogsIdResponseBody

Bad request - validation error

## Example Usage

```typescript
import { GetV2LogsIdResponseBody } from "orq-poc-typescript-multi-env-version/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `code`                                                               | *number*                                                             | :heavy_check_mark:                                                   | HTTP status code                                                     |
| `error`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Error message                                                        |
| `source`                                                             | [errors.GetV2LogsIdSource](../../models/errors/getv2logsidsource.md) | :heavy_check_mark:                                                   | The source where the error came from                                 |