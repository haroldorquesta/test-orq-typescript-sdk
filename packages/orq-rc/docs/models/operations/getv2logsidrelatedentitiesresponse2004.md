# GetV2LogsIdRelatedEntitiesResponse2004

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import { GetV2LogsIdRelatedEntitiesResponse2004 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdRelatedEntitiesResponse2004 = {
  type: "evaluator",
  evaluatorId: "3f336dc9-8b29-489c-aae9-465ba4e0d6fe",
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals34Type](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody1evals34type.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `evaluatorId`                                                                                                                                                                                      | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The id of the resource                                                                                                                                                                             |