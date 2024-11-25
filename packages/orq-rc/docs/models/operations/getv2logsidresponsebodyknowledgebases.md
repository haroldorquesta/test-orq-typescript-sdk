# GetV2LogsIdResponseBodyKnowledgeBases

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyKnowledgeBases } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyKnowledgeBases = {
  knowledgeId: "<id>",
  configuration: {
    type: "query",
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | The id of the resource                                                                     |
| `configuration`                                                                            | *operations.GetV2LogsIdResponseBodyConfiguration*                                          | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |