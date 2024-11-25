# PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBody4

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import { PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBody4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBody4 = {
    type: "evaluator",
    evaluatorId: "4bd6d0c8-d36b-4d7d-b8fe-6fc8fb314b86",
  };
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                               | [operations.PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBodyItems1Evals64Type](../../models/operations/postv2logsqueryrelatedentitiesresponse200applicationjsonresponsebodyitems1evals64type.md) | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  |
| `evaluatorId`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | The id of the resource                                                                                                                                                                                               |