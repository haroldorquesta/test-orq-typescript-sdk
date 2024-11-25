# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4Evals7WorkflowRun1

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import {
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4Evals7WorkflowRun1,
} from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4Evals7WorkflowRun1 =
    {
      type: "evaluator",
      evaluatorId: "5d64c1e6-539f-4533-913a-b6f2b6332f69",
    };
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                 | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4Evals7WorkflowRunType](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody4evals7workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `evaluatorId`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | The id of the resource                                                                                                                                                                                                 |