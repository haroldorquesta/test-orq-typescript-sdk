# PostV2LogsQueryItemsResponseKnowledgeBases

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponseKnowledgeBases } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponseKnowledgeBases = {
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
| `configuration`                                                                            | *operations.PostV2LogsQueryItemsResponseConfiguration*                                     | :heavy_check_mark:                                                                         | Defines the configuration settings which can either be for a user message or a text entry. |