import { Header } from "@/components/Header";
import { Table as TableIcon, Scale, AlertTriangle, CheckCircle2, Heart, Activity, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const BMIBiao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <TableIcon className="w-4 h-4" />
            中国标准 vs WHO分类
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI分类表</span>：中国标准与WHO国际标准对照
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            中国使用不同的BMI标准（WS/T 428-2013）：超重≥24，肥胖≥28。WHO国际标准与中国标准对照表。
          </p>
        </header>

        <div className="space-y-8">
          {/* DUAL TABLE: WHO vs China */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">WHO国际标准 vs 中国标准（WS/T 428-2013）对照表</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              中国采用不同于WHO的BMI切点。根据卫生行业标准<strong>WS/T 428-2013《成人体重判定》</strong>，中国的超重和肥胖界值分别为<strong>24</strong>和<strong>28</strong>，低于WHO的25和30。这是因为东亚人群在较低BMI水平时已出现更高的代谢风险。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">分类</th>
                    <th className="text-left py-4 px-4 font-bold">WHO国际标准<br />(kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">中国标准 WS/T 428-2013<br />(kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">差异说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 18.5</td>
                    <td className="py-4 px-4 font-mono">&lt; 18.5</td>
                    <td className="py-4 px-4 text-muted-foreground">标准一致</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">正常体重</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 23.9</td>
                    <td className="py-4 px-4 text-warning font-medium">中国标准上限低1个点</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">超重</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 font-mono">24.0 - 27.9</td>
                    <td className="py-4 px-4 text-warning font-medium">中国标准：24起算，非25</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 30.0</td>
                    <td className="py-4 px-4 font-mono">≥ 28.0</td>
                    <td className="py-4 px-4 text-destructive font-medium">中国标准：28起算，非30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-warning/10 border border-warning/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-warning">关键差异：</strong>一个BMI为25的中国成年人按WHO标准刚进入"超重"，但按中国标准已经<strong>超重超过1个BMI单位</strong>。同样，BMI为29的人按WHO标准仍属于"超重"，但按中国标准已经属于<strong>"肥胖"</strong>。这意味着使用国际标准可能低估中国人的健康风险。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：世界卫生组织（WHO）；中华人民共和国卫生行业标准 WS/T 428-2013
            </p>
          </div>

          {/* WHO BMI Classification Table (detailed) */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">WHO成人BMI分类标准（详细）</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">分类</th>
                    <th className="text-left py-4 px-4 font-bold">BMI (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">合并症风险</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">严重体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16.0</td>
                    <td className="py-4 px-4 text-info">高（营养不良）</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">中度体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16.0 - 16.9</td>
                    <td className="py-4 px-4 text-info">中等</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">轻度体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17.0 - 18.4</td>
                    <td className="py-4 px-4 text-info">较低</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">正常体重</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 text-success">低（参考值）</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">超重（前期肥胖）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 text-warning">增高</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖I级（中度）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30.0 - 34.9</td>
                    <td className="py-4 px-4 text-destructive">高</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖II级（重度）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35.0 - 39.9</td>
                    <td className="py-4 px-4 text-destructive">非常高</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖III级（病态）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40.0</td>
                    <td className="py-4 px-4 text-destructive">极高</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：世界卫生组织（WHO）
            </p>
          </div>

          {/* Weight by Height Table - Dual Standards with Chinese average heights */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">身高与体重对照表：WHO vs 中国标准</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              中国成年男性平均身高约<strong>172 cm</strong>，女性约<strong>160 cm</strong>。下表以中国常见身高为基准，同时对比WHO和中国标准的体重切点差异。
            </p>

            <h3 className="font-bold text-lg mb-3">按WHO国际标准</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">身高</th>
                    <th className="text-left py-3 px-3 font-bold text-info">体重过轻<br />&lt;18.5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">正常<br />18.5-24.9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">超重<br />25-29.9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">肥胖<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, label: "（女性均高）" },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 172, u: 55, nMin: 55, nMax: 74, sMin: 74, sMax: 89, o: 89, label: "（男性均高）" },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                  ].map((row) => (
                    <tr key={`who-${row.h}`} className={`border-b border-border/50 ${row.label ? "bg-primary/5" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm {row.label && <span className="text-xs text-primary font-normal">{row.label}</span>}</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-lg mb-3">按中国标准（WS/T 428-2013）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">身高</th>
                    <th className="text-left py-3 px-3 font-bold text-info">体重过轻<br />&lt;18.5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">正常<br />18.5-23.9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">超重<br />24-27.9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">肥胖<br />≥28</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 57, sMin: 58, sMax: 67, o: 67 },
                    { h: 160, u: 47, nMin: 47, nMax: 61, sMin: 61, sMax: 72, o: 72, label: "（女性均高）" },
                    { h: 165, u: 50, nMin: 50, nMax: 65, sMin: 65, sMax: 76, o: 76 },
                    { h: 170, u: 53, nMin: 53, nMax: 69, sMin: 69, sMax: 81, o: 81 },
                    { h: 172, u: 55, nMin: 55, nMax: 71, sMin: 71, sMax: 83, o: 83, label: "（男性均高）" },
                    { h: 175, u: 57, nMin: 57, nMax: 73, sMin: 73, sMax: 86, o: 86 },
                    { h: 180, u: 60, nMin: 60, nMax: 77, sMin: 78, sMax: 91, o: 91 },
                    { h: 185, u: 63, nMin: 63, nMax: 82, sMin: 82, sMax: 96, o: 96 },
                  ].map((row) => (
                    <tr key={`cn-${row.h}`} className={`border-b border-border/50 ${row.label ? "bg-primary/5" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm {row.label && <span className="text-xs text-primary font-normal">{row.label}</span>}</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-destructive">对比示例：</strong>一位身高172 cm、体重75 kg的中国男性，按WHO标准BMI为25.4（刚进入"超重"），但按中国标准已属于<strong>"超重"区间中段</strong>。如果体重达到83 kg（BMI 28.1），按WHO标准仍为"超重"，按中国标准已进入<strong>"肥胖"</strong>。
              </p>
            </div>
          </div>

          {/* China Obesity Prevalence Stats */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Activity className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国BMI分类的流行率</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              按照中国自身的BMI标准（WS/T 428-2013），中国超重和肥胖问题比使用WHO标准时显得更为严峻。以下是基于中国疾病预防控制中心（CDC）数据的流行率统计：
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-destructive/10 text-center">
                <p className="text-3xl font-bold text-destructive mb-1">16.4%</p>
                <p className="text-sm text-muted-foreground">成人肥胖率（中国标准 BMI≥28）</p>
              </div>
              <div className="p-4 rounded-xl bg-warning/10 text-center">
                <p className="text-3xl font-bold text-warning mb-1">34.3%</p>
                <p className="text-sm text-muted-foreground">成人超重率（中国标准 BMI 24-27.9）</p>
              </div>
              <div className="p-4 rounded-xl bg-destructive/5 text-center">
                <p className="text-3xl font-bold text-destructive mb-1">50%+</p>
                <p className="text-sm text-muted-foreground">超重+肥胖合计比例</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 text-center">
                <p className="text-3xl font-bold text-primary mb-1">6亿+</p>
                <p className="text-sm text-muted-foreground">受超重或肥胖影响的人口</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                如果按照WHO国际标准（超重≥25、肥胖≥30）来统计，中国的肥胖率会显得较低。但采用中国自身标准后，超过一半的成年人口已处于超重或肥胖状态。这一巨大差异恰恰证明了<strong>采用针对中国人群的BMI标准的必要性</strong>。
              </p>
              <p>
                中国CDC的监测数据显示，过去30年间中国超重和肥胖率持续攀升。城市地区肥胖率高于农村，但农村地区的增长速度更快。青少年和儿童的超重肥胖问题同样令人担忧，已成为重大公共卫生挑战。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：中国疾病预防控制中心（China CDC）；《中国居民营养与慢性病状况报告》
            </p>
          </div>

          {/* Why China Uses Different Standards */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">为什么中国使用不同标准？</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                中国采用比WHO更严格的BMI切点（超重≥24、肥胖≥28而非25和30），这一决定基于大量科学研究证据，并非随意调整。主要原因如下：
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">东亚人体成分差异</h4>
                  <p className="text-sm">
                    与欧美人群相比，中国人及其他东亚人群在相同BMI水平下具有<strong>更高的体脂百分比</strong>。北京大学和中国CDC的联合研究表明，BMI为25的中国人其体脂含量约相当于BMI为30的白人人群。这意味着即使BMI数值看起来"正常"，实际健康风险已经偏高。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">胰岛素抵抗与2型糖尿病</h4>
                  <p className="text-sm">
                    研究发现，中国人群在BMI≥24时就开始出现显著的<strong>胰岛素抵抗</strong>，而西方人群通常在BMI≥25甚至更高时才出现。这解释了为什么中国2型糖尿病患者中很多人BMI并未达到WHO的"超重"标准。中国CDC的流行病学调查证实，BMI 24是中国人代谢风险的重要转折点。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">代谢综合征风险</h4>
                  <p className="text-sm">
                    代谢综合征（包括高血压、高血糖、血脂异常和腹型肥胖）在中国人群中发病的BMI阈值明显低于西方人群。中国多中心前瞻性研究表明，BMI≥24时高血压、高甘油三酯血症和低HDL胆固醇的患病风险已显著升高。BMI≥28时心血管疾病综合风险接近WHO标准下BMI≥30的风险水平。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">腹部脂肪分布特征</h4>
                  <p className="text-sm">
                    中国人群具有更明显的<strong>腹型（内脏型）肥胖</strong>倾向。即使在整体BMI不高的情况下，腹部脂肪堆积就可能较为明显。内脏脂肪与代谢疾病的关系比皮下脂肪更为密切。北京大学公共卫生学院的研究指出，这种脂肪分布特征是中国人需要更严格BMI标准的关键原因之一。
                  </p>
                </div>
              </div>
              <p>
                因此，<strong>WS/T 428-2013</strong>标准的制定是基于中国人群大规模流行病学数据的科学决策，旨在更准确地识别中国人群中的代谢健康风险人群，实现早期预防和干预。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              参考文献：中国疾病预防控制中心（China CDC）；北京大学公共卫生学院；《中华流行病学杂志》
            </p>
          </div>

          {/* Waist Circumference: China vs WHO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Scale className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">腰围标准：中国与WHO对比</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              除BMI外，腰围是评估腹型肥胖的重要指标。中国同样制定了不同于WHO的腰围切点，以更准确地反映中国人群的健康风险。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">指标</th>
                    <th className="text-left py-4 px-4 font-bold">WHO国际标准</th>
                    <th className="text-left py-4 px-4 font-bold">中国标准</th>
                    <th className="text-left py-4 px-4 font-bold">差异</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">男性腰围（风险增高）</td>
                    <td className="py-4 px-4 font-mono">≥ 94 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-warning">≥ 85 cm</td>
                    <td className="py-4 px-4 text-warning">低9 cm</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">女性腰围（风险增高）</td>
                    <td className="py-4 px-4 font-mono">≥ 80 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-warning">≥ 80 cm</td>
                    <td className="py-4 px-4 text-muted-foreground">标准一致</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">男性腰围（高风险）</td>
                    <td className="py-4 px-4 font-mono">≥ 102 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-destructive">≥ 90 cm</td>
                    <td className="py-4 px-4 text-destructive">低12 cm</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">女性腰围（高风险）</td>
                    <td className="py-4 px-4 font-mono">≥ 88 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-destructive">≥ 85 cm</td>
                    <td className="py-4 px-4 text-destructive">低3 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-bold mb-2">为什么腰围比BMI更重要？</h4>
                <p className="text-sm text-muted-foreground">
                  腰围能直接反映腹部（内脏）脂肪堆积程度。内脏脂肪与代谢综合征、2型糖尿病和心血管疾病的关联比皮下脂肪更强。对于BMI处于"正常"范围但腰围超标的人群（"隐性肥胖"），心血管风险同样显著升高。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-bold mb-2">中国人群的腹型肥胖特征</h4>
                <p className="text-sm text-muted-foreground">
                  中国人群较欧美人群更容易出现腹型肥胖，即脂肪优先堆积在腹部而非四肢。因此中国男性的腰围标准（≥85 cm）远低于WHO标准（≥94 cm）。建议将BMI与腰围联合评估，以获得更准确的健康风险判断。
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：WS/T 428-2013《成人体重判定》；WHO腰围分类标准
            </p>
          </div>

          {/* BMI by Age Ranges */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">不同年龄段的BMI参考值</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              随着年龄的增长，理想BMI范围会有所变化。以下是各年龄段建议的BMI参考范围：
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">年龄段</th>
                    <th className="text-left py-4 px-4 font-bold">建议BMI范围 (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">18 - 24岁</td>
                    <td className="py-4 px-4 font-mono">18.5 - 23.9</td>
                    <td className="py-4 px-4 text-muted-foreground">中国标准正常范围</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">25 - 34岁</td>
                    <td className="py-4 px-4 font-mono">19.0 - 24.0</td>
                    <td className="py-4 px-4 text-muted-foreground">新陈代谢开始变化</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">35 - 44岁</td>
                    <td className="py-4 px-4 font-mono">20.0 - 25.0</td>
                    <td className="py-4 px-4 text-muted-foreground">体脂比例逐渐增加</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">45 - 54岁</td>
                    <td className="py-4 px-4 font-mono">21.0 - 26.0</td>
                    <td className="py-4 px-4 text-muted-foreground">肌肉量自然减少</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">55 - 64岁</td>
                    <td className="py-4 px-4 font-mono">22.0 - 27.0</td>
                    <td className="py-4 px-4 text-muted-foreground">稍高的BMI可能具有保护作用</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">65岁及以上</td>
                    <td className="py-4 px-4 font-mono">23.0 - 28.0</td>
                    <td className="py-4 px-4 text-muted-foreground">需综合考虑肌肉流失与骨密度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              注：以上数据为一般参考值，结合中国标准调整。个体差异较大，建议咨询医生获取个性化建议。
            </p>
          </div>

          {/* BMI Categories Explained in Detail */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <TableIcon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI各类别详细解读</h2>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-info/5 border-l-4 border-info">
                <h4 className="font-bold text-info mb-2">体重过轻（BMI &lt; 18.5）</h4>
                <p className="text-muted-foreground">
                  BMI低于18.5表明体重不足。这可能是由于营养摄入不足、消化吸收障碍、
                  慢性疾病或过度运动等原因所致。体重过轻会导致免疫力下降、骨质疏松、
                  贫血以及生育能力降低等问题。建议增加营养摄入，尤其是蛋白质和健康脂肪。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-success/5 border-l-4 border-success">
                <h4 className="font-bold text-success mb-2">正常体重 — WHO: 18.5-24.9 / 中国: 18.5-23.9</h4>
                <p className="text-muted-foreground">
                  按中国标准，BMI在18.5至23.9之间为正常体重。注意WHO标准的正常上限为24.9，
                  但对于中国人群，BMI 24时代谢风险已经开始显著增加。维持正常体重有助于心血管健康、
                  代谢功能正常运转以及关节健康。建议通过均衡饮食和规律运动来保持这一理想范围。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-warning/5 border-l-4 border-warning">
                <h4 className="font-bold text-warning mb-2">超重 — WHO: 25.0-29.9 / 中国: 24.0-27.9</h4>
                <p className="text-muted-foreground">
                  按中国标准，BMI在24至27.9之间属于超重。中国人群在此BMI范围内已出现胰岛素抵抗加剧、
                  血压升高和血脂异常。WHO标准下的超重起点为25，但中国研究表明BMI 24即为中国人
                  代谢风险的转折点。建议在此阶段就积极调整饮食结构，增加体力活动。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border-l-4 border-destructive">
                <h4 className="font-bold text-destructive mb-2">肥胖 — WHO: ≥30 / 中国: ≥28</h4>
                <p className="text-muted-foreground">
                  按中国标准，BMI≥28即为肥胖（WHO标准为≥30）。此阶段各种慢性疾病风险显著升高，
                  包括心脏病、中风、2型糖尿病和某些癌症。中国标准将肥胖阈值设为28，是因为
                  中国人群在此BMI水平的心血管和代谢疾病风险已接近WHO标准下BMI≥30的风险水平。
                  建议在医生指导下制定科学的减重计划。
                </p>
              </div>
            </div>
          </div>

          {/* Health Risks per Category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">各BMI类别的健康风险</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-info">体重过轻的健康风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>免疫系统功能减弱，容易感染疾病</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>骨质疏松和骨折风险增加</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>贫血和营养缺乏</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>生育能力下降和月经不调</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-destructive">超重和肥胖的健康风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>2型糖尿病和胰岛素抵抗</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>高血压和心血管疾病</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>睡眠呼吸暂停综合征</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>某些癌症风险增高（如结肠癌、乳腺癌）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>关节炎和骨关节退行性病变</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>脂肪肝和胆囊疾病</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BMI Interpretation Caveats */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">正确理解BMI的局限性</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI不适用于以下人群：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>肌肉发达的运动员</strong>：肌肉量大导致BMI偏高</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>孕妇</strong>：孕期体重增加属正常现象</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>老年人</strong>：肌肉流失导致BMI失准</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>儿童和青少年</strong>：需使用专门的生长曲线</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">补充健康指标：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰围</strong>：评估腹部脂肪堆积（中国男性≥85cm）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>体脂率</strong>：反映身体成分构成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰臀比</strong>：评估脂肪分布</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>去脂体重指数（FFMI）</strong>：适用于运动员</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy China 2030 Strategy */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Heart className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">"健康中国2030"战略与体重管理目标</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>2016年，中共中央、国务院印发了<strong>《"健康中国2030"规划纲要》</strong>，这是中国建设"健康中国"的行动纲领。在体重管理和肥胖防控方面，该战略设定了明确的量化目标：到2030年，将超重肥胖人口的增长速度明显放缓，成人肥胖增长率每年控制在1%以内，居民健康素养水平提升至30%以上。</p>
              <p>"健康中国2030"战略强调<strong>"预防为主"</strong>的理念，将慢性病防控作为重要工作方向。根据《中国居民营养与慢性病状况报告》数据，中国成人超重率为<strong>34.3%</strong>，肥胖率为<strong>16.4%</strong>（按中国标准BMI≥28），超重和肥胖合计影响超过<strong>6亿人口</strong>。这一庞大的数字使得肥胖防控成为国家健康战略的核心议题之一。</p>
              <p>在具体措施方面，国家卫生健康委员会联合多部门推出了一系列行动计划。<strong>《国民营养计划（2017-2030年）》</strong>提出了"三减三健"（减盐、减油、减糖，健康口腔、健康体重、健康骨骼）专项行动。全国各地的社区卫生服务中心已将BMI监测纳入居民健康档案管理，为超重和肥胖人群提供个性化的饮食和运动指导。学校也被要求加强学生体质健康监测，将BMI评估作为学生体检的必检项目。</p>
              <p>国家医保局也开始探索将<strong>肥胖相关的医学营养治疗</strong>纳入基本医疗保险覆盖范围。这意味着未来符合条件的超重/肥胖患者可以获得医保报销的营养干预服务，这将极大地促进肥胖的早期预防和系统化管理。同时，国家体育总局推动的<strong>"全民健身计划"</strong>旨在到2030年实现经常参加体育锻炼的人口比例达到40%以上，人均体育场地面积达到2.5平方米以上。</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                <h4 className="font-bold text-success mb-2">"健康中国2030"关键指标</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>成人肥胖年增长率控制在1%以内</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>经常锻炼人口比例达到40%</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>人均预期寿命从76.3岁提高到79岁</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>居民健康素养水平达到30%以上</span></li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-bold text-primary mb-2">"三减三健"专项行动</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong>减盐：</strong>每人每天食盐摄入量降至5克以下</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong>减油：</strong>每人每天烹调用油降至25-30克</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong>减糖：</strong>每人每天添加糖摄入量降至25克以下</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span><strong>健康体重：</strong>BMI控制在18.5-23.9之间</span></li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">数据来源：《"健康中国2030"规划纲要》，国家卫生健康委员会，国民营养计划（2017-2030年）</p>
          </div>

          {/* Regional Differences in China */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-info/10">
                <Globe className="w-6 h-6 text-info" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国各地区BMI差异：城乡与南北分化</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>中国幅员辽阔，不同地区的<strong>超重肥胖率存在显著差异</strong>，这反映了各地在经济发展水平、饮食文化、气候条件和生活方式等方面的巨大差异。了解这些地区差异对于制定有针对性的BMI管理策略至关重要。</p>
              <p>从<strong>城乡差异</strong>来看，城市地区的肥胖率（按中国标准BMI≥28）为<strong>18.6%</strong>，高于农村地区的<strong>14.7%</strong>。然而值得关注的是，过去十年间农村地区的肥胖增速<strong>显著快于城市</strong>——农村肥胖率年均增长约8%，而城市约为4%。这一趋势与农村地区经济快速发展、膳食结构西化以及体力劳动减少密切相关。随着电动车和汽车在农村普及、外卖服务向县域和乡镇扩展，农村居民的生活方式正在快速向城市靠拢。</p>
              <p>从<strong>南北差异</strong>来看，中国北方地区的超重肥胖率明显高于南方。数据显示，北方省份（如河北、山东、辽宁、黑龙江）的成人超重肥胖合计率超过<strong>55%</strong>，而南方省份（如广东、浙江、福建）约为<strong>40-45%</strong>。造成这一差异的主要原因包括：北方冬季漫长寒冷，户外活动减少；北方传统饮食以面食为主，热量密度较高；北方居民饮酒量普遍高于南方；以及南方居民传统上饮食更为清淡，蔬菜水果摄入量更大。</p>
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">地区</th>
                    <th className="text-left py-3 px-4 font-bold">超重率（BMI 24-27.9）</th>
                    <th className="text-left py-3 px-4 font-bold">肥胖率（BMI ≥28）</th>
                    <th className="text-left py-3 px-4 font-bold">特征</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-3 px-4 font-medium">华北（京津冀）</td>
                    <td className="py-3 px-4 font-mono text-warning">38.5%</td>
                    <td className="py-3 px-4 font-mono text-destructive">21.3%</td>
                    <td className="py-3 px-4">经济发达，久坐生活方式</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-3 px-4 font-medium">东北三省</td>
                    <td className="py-3 px-4 font-mono text-warning">37.8%</td>
                    <td className="py-3 px-4 font-mono text-destructive">20.5%</td>
                    <td className="py-3 px-4">冬季漫长，饮食高热量</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">华东（长三角）</td>
                    <td className="py-3 px-4 font-mono text-warning">33.2%</td>
                    <td className="py-3 px-4 font-mono text-destructive">15.4%</td>
                    <td className="py-3 px-4">经济发达，健康意识较高</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">华南（珠三角）</td>
                    <td className="py-3 px-4 font-mono text-warning">29.6%</td>
                    <td className="py-3 px-4 font-mono text-destructive">12.1%</td>
                    <td className="py-3 px-4">饮食清淡，蔬果丰富</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">西南（川渝贵云）</td>
                    <td className="py-3 px-4 font-mono text-warning">30.8%</td>
                    <td className="py-3 px-4 font-mono text-destructive">13.7%</td>
                    <td className="py-3 px-4">多辣饮食，地形多山</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">西北（陕甘宁青新）</td>
                    <td className="py-3 px-4 font-mono text-warning">35.1%</td>
                    <td className="py-3 px-4 font-mono text-destructive">17.9%</td>
                    <td className="py-3 px-4">面食为主，蔬果不足</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 rounded-xl bg-info/5 border border-info/20">
              <p className="text-sm text-muted-foreground">
                <strong>城乡趋同趋势：</strong>值得关注的是，中国城乡之间的BMI差距正在缩小。中国CDC的追踪数据显示，2002年城乡超重率之差为12个百分点，到2020年已缩小至不足4个百分点。这说明农村地区的"营养过剩"问题正在快速追赶城市水平，未来农村可能成为肥胖防控的重点战场。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">数据来源：中国疾病预防控制中心慢性非传染性疾病预防控制中心；《中国居民营养与慢性病状况报告（2020年）》</p>
          </div>

          {/* Chinese Dietary Guidelines 2022 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">《中国居民膳食指南（2022）》与膳食宝塔模型</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>2022年4月，中国营养学会发布了最新版<strong>《中国居民膳食指南（2022）》</strong>，这是自2016年以来的首次修订。新版指南以<strong>"中国居民平衡膳食宝塔"</strong>为核心模型，针对中国人群的饮食特点和营养需求提出了科学合理的膳食建议，是维持健康BMI的重要参考依据。</p>
              <p>"膳食宝塔"模型将每日食物分为五层，自下而上依次为：<strong>第一层（底层）</strong>——谷薯类，每天摄入200-300克，其中全谷物和杂豆50-150克、薯类50-100克，这是能量的主要来源；<strong>第二层</strong>——蔬菜水果，蔬菜300-500克（深色蔬菜占一半以上）、水果200-350克；<strong>第三层</strong>——畜禽肉40-75克、水产品40-75克、蛋类40-50克；<strong>第四层</strong>——奶及奶制品300-500克、大豆及坚果25-35克；<strong>第五层（塔尖）</strong>——烹调油25-30克、盐不超过5克。</p>
              <p>新版指南特别强调了以下与BMI管理密切相关的要点：首先，<strong>增加了全谷物和杂豆的推荐摄入量</strong>，因为精白米面的大量摄入是中国居民肥胖和2型糖尿病高发的重要饮食因素。研究表明，每天摄入50克以上全谷物可使2型糖尿病风险降低26%。其次，<strong>首次将"规律进餐"作为核心准则之一</strong>，建议成人每天进食3次正餐，有规律地定时定量进食，合理分配三餐能量比例（早餐25-30%、午餐30-40%、晚餐30-35%），杜绝不吃早餐或暴饮暴食的不良习惯。</p>
              <p>此外，新版指南还<strong>首次提出了"东方健康膳食模式"的概念</strong>，以浙江、上海、江苏、广东等沿海省份的传统饮食为蓝本，强调清淡少盐、食物多样、多蒸煮少煎炸。流行病学研究表明，遵循这种东方健康膳食模式的人群，其超重肥胖率和心血管疾病发生率显著低于其他饮食模式的人群。该模式被认为是适合中国人的"地中海饮食"替代方案。</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-bold text-primary mb-2">膳食宝塔每日推荐量</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>谷薯类 200-300克（含全谷物50-150克）</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>蔬菜 300-500克，水果 200-350克</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>肉鱼蛋 120-200克</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>奶制品 300-500克</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>烹调油 ≤30克，盐 ≤5克</span></li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold text-warning mb-2">中国人常见不良饮食习惯</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>精白米面摄入过多，全谷物严重不足</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>食用油超标：实际人均42克/天（推荐≤30克）</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>食盐超标：实际人均10.5克/天（推荐≤5克）</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>含糖饮料消费量十年翻一番</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>外卖依赖度高，营养成分不透明</span></li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">数据来源：中国营养学会《中国居民膳食指南（2022）》；中国居民营养与健康状况监测</p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">中国BMI表格与标准：WS/T 428-2013完整解读</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>中国BMI分类标准</strong>（WS/T 428-2013）是中国卫生行业的权威体重评估标准，与WHO国际标准存在重要差异。中国标准规定<strong>超重切点为BMI≥24</strong>，<strong>肥胖切点为BMI≥28</strong>，均低于WHO的25和30。这份<strong>BMI表格</strong>完整呈现了两套标准的对比。
              </p>
              <p>
                根据<strong>中国CDC</strong>（中国疾病预防控制中心）的数据，采用中国标准（<strong>24/28标准</strong>）计算，超过50%的中国成年人处于超重或肥胖状态。了解<strong>中国BMI分类</strong>与WHO标准的差异，有助于中国人群更准确地评估自身健康风险。
              </p>
              <p>
                <strong>WS/T 428-2013</strong>标准基于大量中国人群流行病学数据制定，考虑了东亚人群独特的体成分特征和代谢风险阈值。结合<strong>BMI表格</strong>和腰围标准共同评估，能更全面地了解个体健康状况。
              </p>
              <p>
                如需了解更多信息，请访问我们的
                <Link to="/zh/bmi-jiedu" className="text-primary hover:underline">BMI解读页面</Link>
                或了解
                <Link to="/zh/bmi-juxianxing" className="text-primary hover:underline">BMI的局限性</Link>。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-2xl font-display font-bold mb-4">计算您的BMI</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              使用我们的免费BMI计算器，按照中国标准查看您的BMI分类
            </p>
            <Link
              to="/zh/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              计算BMI
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI分类表 — 中国标准 WS/T 428-2013</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIBiao;
