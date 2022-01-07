// import { ILangStats } from "./interfaces";


interface LangStats {
  label: string;
  value: number;
  color: string;
}

// declare module 'gh-polyglot' {
//   export class GhPolyglot {
//     constructor (id: string) {};
//     userStats: function((err: any, stats: ILangStats[]) => {})
//   }  
// }

// export module 'gh-polyglot'

declare module 'gh-polyglot' {
  export class GhPolyglot {
    constructor(id: string | string[] | undefined) {};
    userStats: function((err: any, stats: any) => {});
  }
}