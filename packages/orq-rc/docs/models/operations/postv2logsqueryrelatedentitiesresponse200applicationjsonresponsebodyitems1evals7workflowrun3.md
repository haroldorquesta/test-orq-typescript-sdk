# PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBodyItems1Evals7WorkflowRun3

Define the relationship between an entity and a human eval, also known as feedback

## Example Usage

```typescript
import {
  PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBodyItems1Evals7WorkflowRun3,
} from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBodyItems1Evals7WorkflowRun3 =
    {
      type: "human_eval",
      humanEvalId: "<id>",
    };
```

## Fields

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                               | [operations.PostV2LogsQueryRelatedEntitiesResponse200ApplicationJSONResponseBodyItems1Evals7WorkflowRunEvals1Type](../../models/operations/postv2logsqueryrelatedentitiesresponse200applicationjsonresponsebodyitems1evals7workflowrunevals1type.md) | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |
| `humanEvalId`                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                   | The id of the resource                                                                                                                                                                                                                               |