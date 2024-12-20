# CreatePromptRequestBody

## Example Usage

```typescript
import { CreatePromptRequestBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: CreatePromptRequestBody = {
  displayName: "Loraine65",
  type: "prompt",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `displayName`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `promptConfig`                                                                           | [operations.PromptConfig](../../models/operations/promptconfig.md)                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | [operations.Metadata](../../models/operations/metadata.md)                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `key`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.CreatePromptPromptsType](../../models/operations/createpromptpromptstype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |