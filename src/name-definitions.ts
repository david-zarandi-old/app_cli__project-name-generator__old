import { Equal, Expect, ValueOf } from "./helpers/type-utils";

export const PREFIX = {
  APPLICATION: "app",
  LIBRARY: "lib",
  WORKSHOP: "wshp",
  PROOF_OF_CONCEPT: "poc",
  TEMPLATE: "tmpl",
} as const;

export const APPLICATION_TYPE = {
  WEB: "web",
  CLI: "cli",
} as const;

export type Prefix = typeof PREFIX;
export type PrefixKey = keyof Prefix;
export type ApplicationType = typeof APPLICATION_TYPE;
export type ApplicationTypeKey = keyof typeof APPLICATION_TYPE;

export type ProjectName =
  | `${Prefix[Exclude<PrefixKey, "APPLICATION">]}__${string}`
  | `${Prefix["APPLICATION"]}_${ApplicationType[ApplicationTypeKey]}__${string}`;

type _tests = [
  Expect<
    Equal<
      ProjectName,
      | `app_cli__${string}`
      | `app_web__${string}`
      | `lib__${string}`
      | `poc__${string}`
      | `tmpl__${string}`
      | `wshp__${string}`
    >
  >
];
