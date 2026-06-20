import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const JiankangTizhong = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            健康与养生
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">健康与体重</span>：完整健康管理指南
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解体重、BMI与整体健康之间的关系
          </p>
        </header>

        <div className="space-y-8">
          {/* 引言 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">体重与健康：一种复杂的关系</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>体重</strong>只是反映您健康状况的众多指标之一。
                <strong>健康体重</strong>取决于许多因素：遗传、体型、体力活动、
                饮食、睡眠和心理健康。
              </p>
              <p>
                过度关注体重秤上的数字可能适得其反。比起追求一个精确的目标体重，
                更重要的是培养<strong>健康的生活习惯</strong>。
                健康不能仅仅用公斤来衡量。
              </p>
            </div>
          </div>

          {/* 健康风险 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">与体重相关的健康风险</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">超重和肥胖的风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>心血管疾病（心肌梗死、中风）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>2型糖尿病</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>高血压</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>睡眠呼吸暂停综合征</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>某些类型的癌症</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>关节问题</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">体重过轻的风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>营养不良</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>免疫系统减弱</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>骨质疏松症</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>内分泌紊乱</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>慢性疲劳</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>生育问题</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 健康体重的支柱 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">健康体重的六大支柱</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">营养</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>优先选择天然未加工食品</li>
                  <li>每餐搭配蔬菜</li>
                  <li>限制添加糖的摄入</li>
                  <li>保证充足的水分摄入</li>
                  <li>倾听身体的饥饿与饱腹信号</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">运动</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>每周至少150分钟中等强度运动</li>
                  <li>加入力量训练</li>
                  <li>日常生活中多活动</li>
                  <li>选择自己喜欢的运动方式</li>
                  <li>循序渐进地提高强度</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">睡眠</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>每晚保证7-9小时睡眠</li>
                  <li>保持规律的作息时间</li>
                  <li>睡前避免使用电子设备</li>
                  <li>保持卧室凉爽且黑暗</li>
                  <li>睡眠不足容易导致体重增加</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">心理健康</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>学会管理压力</li>
                  <li>避免情绪化饮食</li>
                  <li>练习正念冥想</li>
                  <li>接纳自己的身体</li>
                  <li>必要时寻求专业帮助</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">医疗随访</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>每年进行健康体检</li>
                  <li>关注腰围变化</li>
                  <li>定期检测血压、血糖和胆固醇</li>
                  <li>必要时咨询营养师</li>
                  <li>不要盲目追求极端饮食</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">进步追踪</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>设定切实可行的目标</li>
                  <li>每周减重不超过0.5-1公斤</li>
                  <li>庆祝每一个小小的进步</li>
                  <li>坚持比强度更重要</li>
                  <li>着眼长远发展</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 健康体重建议 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">健康体重管理建议</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">有效方法</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>循序渐进、持之以恒</strong>地改变生活习惯</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>均衡饮食</strong>，而非极端限制饮食</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>规律且愉快</strong>的体育锻炼</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>高质量</strong>的睡眠（每晚7-8小时）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>管理好<strong>压力</strong>和情绪</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>必要时寻求<strong>专业人士</strong>的指导</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">无效方法</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>极端</strong>且限制性的节食</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>所谓的<strong>"神奇"</strong>保健品和减肥药</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>每天</strong>称体重（体重正常波动是普遍现象）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>设定<strong>不切实际</strong>的减重目标</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>将自己的身材与<strong>他人</strong>比较</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>忽视身体的<strong>饥饿/饱腹</strong>信号</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 中国肥胖流行现状 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <TrendingUp className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国肥胖流行现状与挑战</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                根据《中国居民营养与慢性病状况报告》，中国成年人中<strong>超重率已达34.3%</strong>，
                <strong>肥胖率为16.4%</strong>。这意味着全国约有<strong>超过6亿人</strong>面临体重超标问题。
                过去三十年来，中国的肥胖率增长速度远超世界平均水平，城市化进程加速、久坐生活方式普及、
                高热量加工食品消费增加是主要推动因素。
              </p>
              <p>
                国家卫生健康委员会（NHC）和中国疾病预防控制中心（CDC China）的监测数据显示，
                肥胖已不再是城市的"专属"问题。农村地区的超重和肥胖率在近十年间增长迅猛，
                部分农村地区的肥胖率甚至已接近甚至超过城市水平。这一趋势与农村居民饮食结构的西化、
                体力劳动的减少以及健康教育的不足密切相关。
              </p>
              <p>
                尤其令人担忧的是<strong>儿童青少年肥胖</strong>问题。最新调查显示，
                我国6至17岁儿童青少年中，<strong>超重和肥胖率已接近20%</strong>，
                较2000年增长了近三倍。教育部和国家卫健委已联合出台《学校食品安全与营养健康管理规定》，
                推动学校营养午餐计划的实施，限制校园周边高糖高脂食品的销售。然而，课业压力大、
                课外运动时间不足、电子产品使用过度等问题仍然严峻。
              </p>
            </div>
          </div>

          {/* 中国BMI标准 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国BMI分类标准：为何与国际标准不同？</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                世界卫生组织（WHO）将BMI 25定义为超重起点，BMI 30为肥胖起点。然而，
                <strong>中国采用更严格的标准</strong>：BMI ≥ 24即为超重，BMI ≥ 28即为肥胖。
                这一标准由中国营养学会（CNS）和中华医学会根据大规模流行病学研究制定，
                并获得了世界卫生组织西太平洋区域办事处（WHO WPRO）的认可。
              </p>
              <p>
                为何中国人需要更低的临界值？研究表明，<strong>亚洲人群在相同BMI水平下，
                体脂率显著高于欧美人群</strong>。中国人在BMI仅为24时，其罹患2型糖尿病、
                高血压和心血管疾病的风险就已经明显升高。这种差异与体脂分布有关——
                亚洲人更容易出现腹型肥胖（内脏脂肪堆积），即使整体体重并不算高，
                腹部脂肪的代谢危害已十分显著。因此，除了BMI之外，<strong>腰围</strong>在中国被视为
                更重要的健康指标：男性腰围≥85厘米、女性腰围≥80厘米即为中心性肥胖。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-3">WHO国际标准</h4>
                  <ul className="space-y-1 text-sm">
                    <li>体重过轻：BMI &lt; 18.5</li>
                    <li>正常体重：18.5 – 24.9</li>
                    <li>超重：25.0 – 29.9</li>
                    <li>肥胖：≥ 30.0</li>
                  </ul>
                </div>
                <div className="border border-primary/30 rounded-xl p-4 bg-primary/5">
                  <h4 className="font-bold mb-3">中国标准（NHC/CNS）</h4>
                  <ul className="space-y-1 text-sm">
                    <li>体重过轻：BMI &lt; 18.5</li>
                    <li>正常体重：18.5 – 23.9</li>
                    <li>超重：24.0 – 27.9</li>
                    <li>肥胖：≥ 28.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 健康中国2030 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">"健康中国2030"国家战略与慢病防控</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                2016年，中共中央、国务院正式印发《"健康中国2030"规划纲要》，
                将国民健康提升到<strong>国家优先战略</strong>的高度。该纲要明确提出，
                到2030年要实现主要健康指标进入高收入国家行列。在慢性病防控方面，
                纲要设定了降低超重肥胖率增长速度、提高居民健康素养水平等具体目标。
              </p>
              <p>
                在"健康中国"框架下，国家卫健委推出了一系列"三减三健"专项行动——
                <strong>减盐、减油、减糖</strong>以及<strong>健康口腔、健康体重、健康骨骼</strong>。
                这些行动深入社区、学校和企业，通过健康讲座、营养标签宣传、公共体育设施建设等方式，
                引导居民形成健康生活方式。全民健身计划的推广也取得了显著成效——
                截至目前，全国经常参加体育锻炼的人口比例已超过38.5%。
              </p>
              <p>
                此外，国家医保制度也在向"预防为主"转型。越来越多的城市将慢性病管理纳入基本公共卫生服务，
                提供免费的BMI监测、血压血糖筛查和个性化健康管理服务。社区卫生服务中心的家庭医生签约服务
                让居民在家门口就能获得体重管理方面的专业指导。
              </p>
            </div>
          </div>

          {/* 中医与体重管理 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Stethoscope className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中医视角下的体重管理</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国拥有独特的传统医学体系来理解和管理体重问题。中医认为，
                肥胖的根本原因在于<strong>脾胃功能失调</strong>和<strong>气机运化不畅</strong>。
                当脾胃虚弱时，食物精微不能正常转化为气血，反而化为痰湿（病理性的体液）蓄积体内，
                表现为体重增加和身体沉重。因此，中医治疗肥胖的核心思路不是简单的"少吃多动"，
                而是<strong>健脾益气、化痰祛湿</strong>，恢复人体正常的代谢功能。
              </p>
              <p>
                <strong>食疗（食物疗法）</strong>是中医体重管理的重要手段。中医讲究食物的"四气五味"——
                寒、热、温、凉四种属性和酸、苦、甘、辛、咸五种味道。脾胃虚寒者不宜多吃生冷瓜果，
                应以温性食物为主，如生姜、红枣、山药等，以健运脾胃。湿热体质者则应多吃薏苡仁、
                冬瓜、荷叶等清热利湿之品。中医还强调<strong>"饮食有节"</strong>——
                进食应定时定量、细嚼慢咽，晚餐宜少不宜多，且不宜过晚进食，
                以保护脾胃的消化吸收功能。
              </p>
              <p>
                传统养生功法如<strong>太极拳、八段锦、五禽戏</strong>也是中医推荐的运动方式。
                这些功法动作舒缓、强调呼吸与动作的配合，不仅有助于消耗热量，
                更重要的是能调节气血运行、改善脾胃功能。现代研究已证实，
                长期练习太极拳可有效降低体脂率、改善胰岛素敏感性，并减轻慢性炎症反应。
                对于中老年人和运动基础较弱的群体，这些传统运动是一种安全且有效的体重管理选择。
              </p>
            </div>
          </div>

          {/* 中国膳食指南 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <BookOpen className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">《中国居民膳食指南（2022）》与膳食宝塔</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国营养学会于2022年发布的最新版《中国居民膳食指南》提出了
                <strong>八大核心推荐</strong>，其中"食物多样，合理搭配"位列首条。
                与西方的"食物金字塔"不同，中国采用<strong>"膳食宝塔"模型</strong>——
                底层为谷薯类（每日250-400克），依次向上为蔬菜水果类（蔬菜300-500克、水果200-350克）、
                畜禽鱼蛋类（120-200克）、奶及豆制品（奶300-500克、大豆及坚果25-35克），
                塔尖为油盐（烹调油25-30克、盐不超过5克）。
              </p>
              <p>
                2022版指南特别强调了几个与中国饮食实际密切相关的要点：
                <strong>控制烹调油用量</strong>（中国居民平均每日食用油达43克，远超推荐量）、
                <strong>减少在外就餐频率</strong>（餐馆菜品通常高油高盐高糖）、
                <strong>增加全谷物和杂豆的比例</strong>（至少占谷薯类的四分之一）。
                指南还首次将"规律进餐，足量饮水"单独列为核心推荐，
                建议成年人每日饮水1500-1700毫升，并以白水和茶水为主要饮水来源。
              </p>
            </div>
          </div>

          {/* 中国地域饮食与茶文化 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Users className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">地域饮食差异与茶文化的健康价值</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国幅员辽阔，各地饮食文化差异巨大，对居民体重和健康状况产生深远影响。
                <strong>广东菜（粤菜）</strong>以清淡鲜美著称，注重食材原味，蒸煮手法居多，
                油盐用量相对较少，这与广东地区较低的肥胖率存在一定关联。
                <strong>四川菜（川菜）</strong>以麻辣为特色，辣椒素虽然有促进新陈代谢的作用，
                但川菜中大量使用的食用油和花椒油也增加了热量摄入。
                <strong>北方菜系</strong>以面食、馒头等小麦制品为主食，份量较大，
                冬季炖菜和涮肉的传统也导致热量摄入偏高，北方地区的肥胖率普遍高于南方。
                <strong>江浙菜</strong>讲究"浓油赤酱"，菜品中糖的使用较多，
                过多摄入精制糖同样是体重增加的隐患。
              </p>
              <p>
                值得一提的是，中国深厚的<strong>茶文化</strong>为健康体重管理提供了天然的辅助手段。
                <strong>绿茶</strong>富含儿茶素（EGCG），多项研究证实其能增强脂肪氧化、
                提高基础代谢率，每日饮用3-5杯绿茶可额外消耗约70-80千卡热量。
                <strong>普洱茶</strong>经过微生物发酵，含有独特的他汀类化合物，
                有助于降低血脂和胆固醇水平，云南大学的研究团队已对此机制进行了深入阐明。
                <strong>乌龙茶</strong>兼具绿茶和红茶的特点，其多酚类物质有助于抑制脂肪吸收。
                传统上，中国人饭后饮茶、以茶待客的习惯，不仅是文化礼仪，
                也在无形中为代谢健康提供了保护作用。用茶水替代含糖饮料，
                是中国膳食指南明确推荐的健康饮水方式之一。
              </p>
              <p>
                快速城市化带来的生活方式变迁正在深刻改变中国人的饮食习惯。
                外卖平台的普及使高热量快餐触手可及，奶茶等含糖饮品的流行也推高了糖分摄入。
                与此同时，久坐办公、出行依赖汽车、休闲时间沉迷手机等现代生活方式
                进一步降低了日常能量消耗。面对这一挑战，重新审视和传承中国传统饮食智慧——
                食物多样、均衡搭配、适时适量——与现代营养科学相结合，
                是应对肥胖流行的有效途径。
              </p>
            </div>
          </div>

          {/* SEO 内容 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">健康与体重：核心要点</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                保持<strong>健康体重</strong>对您的整体健康至关重要。<strong>体重与健康</strong>之间的关系
                是复杂的，受到众多因素的影响。<strong>BMI（身体质量指数）</strong>只是评估您是否处于健康
                体重范围内的指标之一。
              </p>
              <p>
                要想<strong>健康地减重</strong>或<strong>维持体重</strong>，请采取全面的方法：均衡饮食、
                规律运动、充足睡眠以及有效的压力管理。避免反复节食的"溜溜球效应"，这对健康有害。
              </p>
              <p>
                <strong>健康的生活方式</strong>比体重秤上的数字更重要。专注于<strong>生活习惯</strong>
                的改善，而不是体重本身。如有疑虑，请咨询健康专业人士，获取个性化的指导和建议。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">计算您的BMI</h3>
            <p className="text-muted-foreground mb-6">
              评估健康体重的第一步指标
            </p>
            <Link
              to="/zh/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              计算我的BMI
            </Link>
          </div>
        </div>


        <RelatedPages />

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default JiankangTizhong;
