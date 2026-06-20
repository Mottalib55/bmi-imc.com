import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, ArrowRight, BookOpen, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const BMINvxing = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(58);
  const [height, setHeight] = useState(160);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weight, height);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
    calculateBMI(value[0], height);
  };

  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    calculateBMI(weight, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            中国女性专用 · WS/T 428-2013标准
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">女性BMI计算器</span> : 中国标准与理想体重
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            中国超过2.4亿成年女性超重或肥胖（中国疾控中心）。本计算器采用中国标准：超重24，肥胖28（WS/T 428-2013）。
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              请输入您的身体数据
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">体重</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">身高</label>
                  <span className="text-2xl font-bold text-pink-500">{(height / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Understanding BMI for Chinese Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">了解中国女性BMI（中国标准）</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                根据<strong>中国疾病预防控制中心</strong>数据，中国成年女性中<strong>43%超重或肥胖</strong>。
                中国女性平均身高<strong>1.60米</strong>，平均体重<strong>58公斤</strong>。
                与西方标准不同，中国采用<strong>WS/T 428-2013</strong>标准，超重起点为<strong>BMI 24</strong>，
                肥胖起点为<strong>BMI 28</strong>，比WHO标准更严格。
              </p>
              <p>
                研究表明，<strong>中国女性在相同BMI下体脂率高于西方女性</strong>，
                因此中国标准的切点更低是有科学依据的。中国女性<strong>理想腰围</strong>应低于<strong>80厘米</strong>（中国标准严格采用80厘米），
                腰围超过此数值会显著增加<strong>2型糖尿病</strong>和<strong>心血管疾病</strong>的风险。
              </p>
            </div>
          </div>

          {/* BMI Table for Chinese Women - Dual Standard */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">女性BMI对照表（中国标准 vs WHO标准）</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">分类</th>
                    <th className="text-left py-3 px-4 font-semibold">中国标准 BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">WHO标准 BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">示例（身高1.60米）</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      偏瘦
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 47 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      正常
                    </td>
                    <td className="py-3 px-4 font-semibold">18.5 - 23.9（中国）</td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">47 - 61 kg（中国）</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      超重
                    </td>
                    <td className="py-3 px-4 font-semibold">24 - 27.9（中国）</td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">61 - 72 kg（中国）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖
                    </td>
                    <td className="py-3 px-4 font-semibold">≥ 28（中国）</td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 72 kg（中国）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-warning/10 rounded-lg text-sm text-warning flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>⚠️ 中国标准：超重从24开始，肥胖从28开始。中国女性在相同BMI下体脂率更高，因此中国标准更为严格。</span>
            </div>
          </div>

          {/* Ideal weight by height - Chinese BMI 18.5-23.9 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国女性各身高理想体重（BMI 18.5-23.9）</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1.52米", min: 43, max: 55, ideal: 50 },
                { height: "1.55米", min: 44, max: 57, ideal: 52 },
                { height: "1.58米", min: 46, max: 60, ideal: 54 },
                { height: "1.60米（中国平均）", min: 47, max: 61, ideal: 55 },
                { height: "1.63米", min: 49, max: 64, ideal: 57 },
                { height: "1.66米", min: 51, max: 66, ideal: 59 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">（理想：{item.ideal} kg）</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * 理想体重基于中国标准BMI范围18.5-23.9计算（WS/T 428-2013），非WHO标准18.5-24.9。
            </p>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">中国女性月经周期与体重关系</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>体重可能随月经周期波动<strong>2-3公斤</strong>，经前期水钠潴留是主因</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>多囊卵巢综合征</strong>影响<strong>10%</strong>的中国育龄女性，常伴随体重增加和胰岛素抵抗</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>建议在月经周期的<strong>同一时间点</strong>称重，最佳为月经结束后3-7天</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>更年期</strong>（中国女性平均49.5岁）会改变脂肪分布，腹型肥胖风险增加</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>中国女性甲状腺功能异常发病率高，<strong>甲减</strong>可导致体重增加，需定期筛查</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">中国孕产妇体重管理指南（2021版）</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>BMI在<strong>怀孕期间不适用</strong>，应参照《中国孕产妇体重管理指南（2021版）》</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>孕前BMI正常（18.5-23.9）者，建议增重<strong>11-16公斤</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>妊娠期糖尿病</strong>影响<strong>15-20%</strong>的中国孕妇，发病率高于全球平均水平</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>产后42天复查</strong>：体重和BMI是重要评估指标，社区卫生服务中心提供免费检查</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>产后恢复体重需要<strong>6-12个月</strong>，母乳喂养有助于产后体重管理</span>
                </li>
              </ul>
            </div>
          </div>

          {/* TCM and Women's Weight Management */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <BookOpen className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中医与女性体重管理</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>中医学</strong>认为女性肥胖与<strong>脾虚生湿</strong>（脾气虚弱导致水湿内停）密切相关。
                脾主运化，脾虚则水谷精微不能正常输布，聚湿成痰，痰湿内蕴则体态丰腴。
                此外，<strong>气血不足</strong>也是中国女性常见的体质问题，气血亏虚影响代谢功能，
                导致基础代谢率下降，容易发胖。
              </p>
              <p>
                针对<strong>更年期女性体重管理</strong>，中医提倡"治未病"理念。
                更年期女性多属<strong>肾阴虚</strong>或<strong>肝肾不足</strong>，可通过中药调理缓解体重增长。
                <strong>四物汤、八珍汤</strong>：这些都是中医调理女性体质的经典方剂，
                四物汤（当归、川芎、白芍、熟地黄）补血调经，八珍汤在四物汤基础上加四君子汤补气健脾。
              </p>
              <p>
                <strong>食疗</strong>推荐：薏米红豆粥（祛湿健脾）、山药莲子汤（补脾益肾）、
                玫瑰花茶（疏肝理气）、黑芝麻核桃粥（补肾益精）。
                中医强调<strong>"药食同源"</strong>，通过日常饮食调理达到健康体重管理的目的，
                比单纯节食更符合中国女性的体质特点。
              </p>
            </div>
          </div>

          {/* Healthy China 2030 & Women's Health */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">健康中国2030与妇女健康</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>《健康中国2030规划纲要》</strong>明确将妇女健康作为重点领域。
                国家卫健委推动的<strong>免费两癌筛查</strong>（乳腺癌+宫颈癌）已覆盖全国农村适龄女性，
                截至2024年累计筛查超过<strong>2亿人次</strong>。体重管理和BMI监测是两癌筛查中的基础评估项目，
                肥胖与乳腺癌等多种女性癌症的发病风险密切相关。
              </p>
              <p>
                <strong>社区卫生服务中心</strong>为辖区内女性提供免费的基本公共卫生服务，
                包括孕产妇健康管理、更年期保健咨询和体重BMI监测。
                城市女性肥胖率（<strong>约18%</strong>）高于农村女性（<strong>约15%</strong>），
                但农村女性超重率正在快速上升，城乡差距逐渐缩小。
              </p>
              <p>
                <strong>中国营养学会</strong>发布的《中国居民膳食指南（2022）》为女性提供了科学的膳食建议，
                强调每日摄入谷薯类250-400克、蔬菜300-500克、水果200-350克，
                并建议成年女性每日能量摄入约<strong>1800千卡</strong>（轻体力活动）。
                国家卫健委定期更新肥胖防控方案，将女性体重管理纳入全民健康促进行动。
              </p>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI与中国女性更年期</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国女性<strong>平均绝经年龄为49.5岁</strong>，略低于西方女性。
                更年期雌激素水平下降，促进脂肪从四肢向<strong>腹部</strong>重新分布，
                中心性肥胖风险显著增加。根据中国标准，更年期女性需特别关注<strong>腰围</strong>是否超过80厘米。
              </p>
              <p>
                中国营养学会建议更年期女性增加<strong>大豆异黄酮</strong>的摄入（豆腐、豆浆等传统中国食品），
                每日补充<strong>钙质1000毫克</strong>以预防骨质疏松，
                坚持每周至少<strong>150分钟</strong>中等强度运动，包括<strong>太极拳</strong>和<strong>八段锦</strong>等传统中国运动，
                既能维持肌肉量和骨密度，又有助于调节情绪和改善睡眠。
              </p>
            </div>
          </div>

          {/* 中国女性体重趋势与审美压力 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国女性体重趋势与审美标准的健康影响</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国女性面临着一个<strong>独特的矛盾</strong>：一方面，<strong>43%的成年女性</strong>按中国标准（BMI≥24）已属超重或肥胖；另一方面，社会审美标准却推崇极端纤瘦的身材。近年来在社交媒体上流行的<strong>"A4腰"挑战</strong>（腰部宽度不超过A4纸）、<strong>"锁骨放硬币"</strong>、<strong>"反手摸肚脐"</strong>等趋势，将不切实际的身材标准推向极端，给中国女性带来了巨大的身体焦虑。
              </p>
              <p>
                这种<strong>审美压力</strong>导致了两个极端的健康问题。一端是年轻女性为追求"白幼瘦"而<strong>过度节食</strong>，BMI降至18.5以下，甚至出现进食障碍（厌食症）。中国精神卫生调查显示，城市年轻女性的进食障碍发病率近年来<strong>上升了3倍</strong>。另一端是在日常生活中，高糖奶茶文化、外卖便利化和久坐办公等因素导致实际体重不断增长。<strong>中国营养学会</strong>强调，健康的BMI范围（18.5-23.9）是科学的评价标准，而非社交媒体上的极端瘦身标准。
              </p>
              <p>
                从<strong>城乡差异</strong>来看，中国城市女性肥胖率约<strong>18%</strong>，农村女性约<strong>15%</strong>（按WHO标准BMI≥30），但<strong>农村女性超重率正在快速上升</strong>。城市女性更容易接触到健身房、瑜伽馆和健康食品，而农村女性面临健康教育资源不足和传统饮食习惯（高碳水、高油脂）的挑战。此外，不同地区的饮食文化差异也显著影响女性体重：四川女性嗜辣但饮食均衡，广东女性注重煲汤养生，东北女性冬季高热量饮食较多。
              </p>
            </div>
          </div>

          {/* 坐月子、中医与膳食指南 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">坐月子传统、中医食疗与中国居民膳食指南</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>"坐月子"</strong>（产后30-42天的恢复期）是中国特有的产后护理传统，对女性BMI和产后体重恢复有深远影响。传统坐月子强调<strong>高蛋白、高脂肪的滋补饮食</strong>——猪蹄汤、鸡汤、鲫鱼汤、红糖鸡蛋等。虽然这些食物确实富含蛋白质，有助于产后恢复和母乳分泌，但<strong>过度进补</strong>往往导致产后体重难以恢复。研究显示，传统坐月子期间，产妇平均每日热量摄入可达<strong>3000-3500千卡</strong>，远超实际需求的2300千卡左右。
              </p>
              <p>
                现代<strong>月子中心</strong>（月子会所）的兴起为这一传统注入了科学元素。专业月子中心配备营养师，根据产妇BMI和恢复情况制定<strong>个性化膳食方案</strong>，在保证营养充足的同时控制总热量摄入。<strong>《中国孕产妇体重管理指南（2021版）》</strong>建议产后体重管理应循序渐进，产后6个月内每月减重不超过2公斤，母乳喂养期间不建议严格节食。社区卫生服务中心提供<strong>产后42天免费复查</strong>，包括体重和BMI评估。
              </p>
              <p>
                <strong>中医食疗</strong>在中国女性日常体重管理中仍然扮演重要角色。针对不同体质，中医提供差异化的食疗方案：<strong>痰湿体质</strong>（易胖型）推荐薏米红豆粥祛湿健脾；<strong>气血两虚</strong>型推荐当归黄芪炖鸡补气养血；<strong>肝郁气滞</strong>型（情绪性进食）推荐玫瑰花茶、陈皮茶疏肝解郁。中医强调<strong>"三分治七分养"</strong>，认为饮食调理和生活方式改善比药物更为根本。
              </p>
              <p>
                <strong>《中国居民膳食指南（2022）》</strong>为女性提供了科学的膳食建议：每日谷薯类<strong>250-400克</strong>、蔬菜<strong>300-500克</strong>、水果<strong>200-350克</strong>、蛋白质类<strong>120-200克</strong>。成年女性（轻体力活动）每日推荐能量摄入约<strong>1800千卡</strong>。指南特别提醒控制<strong>游离糖摄入</strong>（每日不超过50克，最好控制在25克以内），这对爱喝奶茶的年轻女性尤为重要——一杯全糖奶茶的含糖量可达50-70克，相当于一天的建议上限。了解这些科学标准，结合中国标准BMI范围（18.5-23.9），是中国女性实现健康体重管理的坚实基础。
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">关于中国女性BMI的一切</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>女性BMI计算器</strong>是评估<strong>中国女性身体成分</strong>的重要工具。
                根据<strong>中国疾控中心</strong>和<strong>WS/T 428-2013</strong>标准，
                中国女性BMI超重起点为<strong>24</strong>（非WHO的25），肥胖起点为<strong>28</strong>（非WHO的30）。
                这一标准由<strong>国家卫健委</strong>制定，并得到<strong>中国营养学会</strong>认可。
              </p>
              <p>
                <strong>中国女性理想BMI</strong>在18.5到23.9之间。对于身高<strong>1.60米</strong>的中国女性（全国平均身高），
                <strong>理想体重</strong>约为55公斤。对于身高<strong>1.55米</strong>的女性，理想体重约为52公斤。
                中国女性BMI正常范围的上限（23.9）低于WHO标准（24.9），
                这是因为亚洲人群在较低BMI时就会出现代谢异常。
              </p>
              <p>
                <strong>40岁以上中国女性</strong>应定期在社区卫生服务中心检测BMI和腰围。
                <strong>50岁以上女性</strong>进入围绝经期后，体重管理需结合中医调理和现代营养学，
                既要预防肥胖带来的慢性病风险，也要避免过度减重导致的骨质疏松。
                WS/T 428-2013中国BMI标准是科学评估中国女性健康体重的权威依据。
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">探索更多BMI工具</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/zh/bmi" className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-pink-500/10 transition-colors group">
                <span className="font-medium">BMI计算器</span>
                <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/zh/bmi-nanxing" className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-pink-500/10 transition-colors group">
                <span className="font-medium">男性BMI计算器</span>
                <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/zh/bmi-yundongyuan" className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-pink-500/10 transition-colors group">
                <span className="font-medium">运动员BMI计算器</span>
                <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>


        <RelatedPages />

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default BMINvxing;
