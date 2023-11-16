import { PREFIX, APPLICATION_TYPE } from "./name-definitions";
import type { PrefixKey, ApplicationTypeKey, ProjectName } from "./name-definitions";

type GenerateNameFunctionParam =
  | { prefixKey: Exclude<PrefixKey, "APPLICATION">; name: string }
  | { prefixKey: "APPLICATION"; applicationTypeKey: ApplicationTypeKey; name: string };

export function generateProjectName(params: GenerateNameFunctionParam): ProjectName {
  if (params.prefixKey === "APPLICATION") {
    return `${PREFIX[params.prefixKey]}_${APPLICATION_TYPE[params.applicationTypeKey]}__${params.name.toLowerCase()}`;
  }

  return `${PREFIX[params.prefixKey]}__${params.name.toLowerCase()}`;
}
