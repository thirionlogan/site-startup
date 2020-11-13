/* eslint-disable @typescript-eslint/no-explicit-any */
/* To use non-code assets with TypeScript, we need to defer the type for these imports. This requires a custom.d.ts file which signifies custom definitions */
declare module '*.svg' {
  const content: any;
  export default content;
}
