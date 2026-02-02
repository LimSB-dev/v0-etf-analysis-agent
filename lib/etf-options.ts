// ETF와 기초지수 매핑
export interface EtfOption {
  id: string
  name: string
  code: string // 네이버 국내 종목 코드
  indexSymbol: string // 기초지수 심볼 (네이버 해외)
  indexName: string
}

export const ETF_OPTIONS: EtfOption[] = [
  // 나스닥 100 추종
  { id: "tiger-nas100", name: "TIGER 미국나스닥100", code: "133690", indexSymbol: "QQQ.O", indexName: "QQQ (Nasdaq 100)" },
  { id: "kodex-nas100", name: "KODEX 미국나스닥100TR", code: "379810", indexSymbol: "QQQ.O", indexName: "QQQ (Nasdaq 100)" },
  { id: "ace-nas100", name: "ACE 미국나스닥100", code: "367380", indexSymbol: "QQQ.O", indexName: "QQQ (Nasdaq 100)" },
  // S&P 500 추종
  { id: "tiger-sp500", name: "TIGER 미국S&P500", code: "360750", indexSymbol: "SPY", indexName: "SPY (S&P 500)" },
  { id: "kodex-sp500", name: "KODEX 미국S&P500TR", code: "379800", indexSymbol: "SPY", indexName: "SPY (S&P 500)" },
  { id: "ace-sp500", name: "ACE 미국S&P500", code: "360200", indexSymbol: "SPY", indexName: "SPY (S&P 500)" },
  // 필라델피아 반도체 추종
  { id: "tiger-soxx", name: "TIGER 미국필라델피아반도체나스닥", code: "381180", indexSymbol: "SOXX.O", indexName: "SOXX (Philadelphia Semiconductor)" },
  { id: "kodex-soxx", name: "KODEX 미국반도체MV", code: "390390", indexSymbol: "SOXX.O", indexName: "SOXX (Philadelphia Semiconductor)" },
]
