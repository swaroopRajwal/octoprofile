interface ILangStats {
  label: string;
  value: number;
  color: string;
}
class GhPolyglot {
  constructor(id: sting);
  userStats: function ((err: any, stats: ILangStats[]) => void);
}
declare module 'gh-polyglot' {
  export default GhPolyglot;
}