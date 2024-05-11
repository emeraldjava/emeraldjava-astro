/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// https://stackoverflow.com/questions/74905685/environment-variables-only-working-when-dotenv-is-imported-and-configured-in-eac
// From https://ansidev.xyz/posts/2022-12-12-how-to-read-environment-variables-in-astro-config
//  npm install dotenv
//import dotenv from "dotenv";
//dotenv.config();
//require('@dotenvx/dotenvx').config()

// https://docs.astro.build/en/guides/environment-variables/
interface ImportMetaEnv {
    readonly VITE_BASE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}