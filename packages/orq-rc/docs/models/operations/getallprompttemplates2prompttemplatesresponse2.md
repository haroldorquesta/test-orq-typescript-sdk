# GetAllPromptTemplates2PromptTemplatesResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetAllPromptTemplates2PromptTemplatesResponse2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptTemplates2PromptTemplatesResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://haunting-solvency.org/",
  },
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                   | [operations.GetAllPromptTemplates2PromptTemplatesResponse200ApplicationJSONResponseBodyType](../../models/operations/getallprompttemplates2prompttemplatesresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `imageUrl`                                                                                                                                                                                               | [operations.GetAllPromptTemplates2PromptTemplatesResponseImageUrl](../../models/operations/getallprompttemplates2prompttemplatesresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |