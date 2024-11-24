# ResponseBodyRequestProperties

An optional field that is filled if the workflow was triggered by an HTTP request

## Example Usage

```typescript
import { ResponseBodyRequestProperties } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyRequestProperties = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `source`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `location`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `latitude`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `longitude`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `responseTime`        | *number*              | :heavy_minus_sign:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `status`              | *number*              | :heavy_minus_sign:    | N/A                   |
| `context`             | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `extraParams`         | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |