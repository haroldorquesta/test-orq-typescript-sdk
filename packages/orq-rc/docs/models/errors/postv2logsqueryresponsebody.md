# PostV2LogsQueryResponseBody

Bad request - validation error

## Example Usage

```typescript
import { PostV2LogsQueryResponseBody } from "orq-poc-typescript-multi-env-version/models/errors";

// No examples available for this model
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `code`                                         | *number*                                       | :heavy_check_mark:                             | HTTP status code                               |
| `error`                                        | *string*                                       | :heavy_check_mark:                             | Error message                                  |
| `source`                                       | [errors.Source](../../models/errors/source.md) | :heavy_check_mark:                             | The source where the error came from           |