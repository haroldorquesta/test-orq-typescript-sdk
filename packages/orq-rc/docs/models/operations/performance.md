# Performance

## Example Usage

```typescript
import { Performance } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Performance = {
  latency: 9591.67,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `latency`                                                                 | *number*                                                                  | :heavy_check_mark:                                                        | Total time in milliseconds of the request to the LLM provider API.        |
| `timeToFirstToken`                                                        | *number*                                                                  | :heavy_minus_sign:                                                        | Total time in milliseconds to generate the first token of the completion. |