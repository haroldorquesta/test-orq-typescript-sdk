# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody24

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import { GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody24 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody24 =
  {
    type: "evaluator",
    evaluatorId: "cb43beac-af24-43fe-8b64-afc690c2496b",
  };
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody2Evals14Type](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody2evals14type.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `evaluatorId`                                                                                                                                                                                      | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The id of the resource                                                                                                                                                                             |