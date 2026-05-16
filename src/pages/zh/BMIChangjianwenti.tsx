import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

interface FAQItemProps { question: string; answer: string; }

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors">
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const BMIChangjianwenti = () => {
  const faqs = [
    {
      question: "什么是BMI？",
      answer: "<strong>身体质量指数（BMI）</strong>是一种用于评估人体体重是否健康的指标。它通过将体重（公斤）除以身高（米）的平方来计算。BMI的计算公式为：BMI = 体重(kg) / 身高(m)²。这是全球医疗专业人员广泛使用的一种快速筛查工具，由比利时数学家阿道夫·凯特勒于19世纪提出。"
    },
    {
      question: "如何计算BMI？",
      answer: "计算BMI非常简单：将您的体重（公斤）除以身高（米）的平方。例如：如果您体重70公斤，身高1.75米，则 BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.9</strong>。您也可以使用我们的<a href='/zh/bmi' class='text-primary hover:underline'>免费BMI计算器</a>来快速获取结果，无需手动计算。"
    },
    {
      question: "正常的BMI范围是多少？",
      answer: "根据世界卫生组织（WHO）的标准，<strong>正常BMI</strong>范围为<strong>18.5至24.9</strong>。具体分类如下：低于18.5为体重过轻，18.5至24.9为正常体重，25至29.9为超重，30及以上为肥胖。在这一正常范围内，健康风险最低。不过，理想的BMI值通常在21至22之间。您可以查看我们的<a href='/zh/bmi-biao' class='text-primary hover:underline'>BMI对照表</a>了解更多详情。"
    },
    {
      question: "BMI适用于所有人吗？",
      answer: "BMI作为一种通用指标，对大多数成年人是有效的，但它<strong>并不适用于所有人</strong>。以下人群的BMI结果可能不准确：<strong>1)</strong> 运动员和健身者（肌肉量较高），<strong>2)</strong> 孕妇，<strong>3)</strong> 老年人（65岁以上），<strong>4)</strong> 儿童和青少年（需使用年龄别BMI），<strong>5)</strong> 不同种族人群（亚洲人的健康BMI范围可能更低）。请参阅我们的<a href='/zh/bmi-jiedu' class='text-primary hover:underline'>BMI解读</a>页面获取详细信息。"
    },
    {
      question: "BMI和体脂率有什么区别？",
      answer: "<strong>BMI</strong>仅根据身高和体重进行计算，无法区分肌肉和脂肪。<strong>体脂率</strong>则直接测量身体中脂肪所占的比例。健康的体脂率因性别而异：男性一般为15-20%，女性一般为20-25%。体脂率可以通过皮脂钳、生物电阻抗分析（BIA）或DEXA扫描来测量。两者结合使用可以更全面地评估健康状况。"
    },
    {
      question: "运动员的BMI准确吗？",
      answer: "BMI对运动员来说<strong>往往不够准确</strong>。由于肌肉密度高于脂肪，肌肉发达的运动员体重较重，导致BMI偏高。例如，一名体脂率仅10%的健美运动员，其BMI可能超过30（被归类为&laquo;肥胖&raquo;）。对运动员而言，<strong>去脂体重指数（FFMI）</strong>、体脂率或腰围等指标更为可靠。"
    },
    {
      question: "儿童的BMI如何计算？",
      answer: "儿童的BMI计算公式与成人相同（体重/身高²），但<strong>结果的解读方式完全不同</strong>。成人的固定分类标准（18.5/25/30）不适用于儿童。儿童需要使用年龄别BMI百分位曲线来评估，这些曲线考虑了年龄和性别因素。一般来说：低于第5百分位为体重过轻，第5至85百分位为正常，第85至95百分位为超重，高于第95百分位为肥胖。建议咨询儿科医生进行专业评估。"
    },
    {
      question: "BMI过高怎么办？",
      answer: "如果您的BMI超过25，建议采取以下措施：<strong>1)</strong> 咨询医生进行全面健康评估，<strong>2)</strong> 建立适度的热量缺口（每天减少300-500千卡），<strong>3)</strong> 增加体力活动（每周至少150分钟中等强度运动），<strong>4)</strong> 选择均衡饮食，多吃蔬菜、水果、全谷物和优质蛋白质，<strong>5)</strong> 保证充足睡眠（7-8小时），<strong>6)</strong> 设定合理目标，每周减重0.5-1公斤为宜。持之以恒比快速减重更重要。"
    },
    {
      question: "BMI过低有什么风险？",
      answer: "BMI低于18.5属于<strong>体重过轻</strong>，可能带来以下健康风险：<strong>1)</strong> 免疫力下降，容易感染疾病，<strong>2)</strong> 骨质疏松风险增加，<strong>3)</strong> 营养不良和贫血，<strong>4)</strong> 肌肉流失和体力下降，<strong>5)</strong> 女性可能出现月经不调或不孕，<strong>6)</strong> 伤口愈合缓慢，<strong>7)</strong> 心理健康问题如抑郁和焦虑。如果您的BMI过低，建议咨询医生或营养师，制定健康的增重计划。"
    },
    {
      question: "多久应该测量一次BMI？",
      answer: "对于一般成年人，建议<strong>每3至6个月</strong>测量一次BMI。但以下情况可能需要更频繁地监测：<strong>1)</strong> 正在进行减重或增重计划时，每月测量一次，<strong>2)</strong> 患有慢性疾病（如糖尿病、高血压）时，遵医嘱定期监测，<strong>3)</strong> 儿童和青少年在每次体检时都应测量。需要注意的是，短期内的体重波动是正常的，不必过于焦虑。建议在每次测量时保持相同条件（如早晨空腹、穿轻便衣物）。"
    },
    {
      question: "BMI和健康的关系是什么？",
      answer: "BMI与多种<strong>健康风险</strong>密切相关。研究表明：BMI过高会增加患<strong>2型糖尿病</strong>、<strong>心血管疾病</strong>、<strong>高血压</strong>、某些癌症和关节问题的风险。BMI过低则与营养不良、免疫力低下和骨质疏松相关。然而，BMI并非唯一的健康指标。腰围、血压、血糖、血脂等指标同样重要。健康的生活方式——均衡饮食、规律运动、充足睡眠和良好的心理状态——比单纯追求某个BMI数值更为重要。"
    },
    {
      question: "有哪些BMI的替代指标？",
      answer: "除BMI外，还有多种评估身体成分和健康风险的指标：<strong>1)</strong> <strong>腰围</strong>——男性应低于90厘米，女性应低于80厘米（亚洲标准），<strong>2)</strong> <strong>腰臀比（WHR）</strong>——衡量腹部脂肪分布，<strong>3)</strong> <strong>体脂率</strong>——直接测量脂肪比例，<strong>4)</strong> <strong>去脂体重指数（FFMI）</strong>——特别适合运动人群，<strong>5)</strong> <strong>内脏脂肪指数</strong>——评估内脏脂肪水平，<strong>6)</strong> <strong>身体形态指数（ABSI）</strong>——结合腰围、身高和BMI的综合指标。建议将多种指标结合使用，以获得更全面的健康评估。"
    },
    {
      question: "中国人的BMI标准和世界标准不同吗？",
      answer: "是的，中国采用不同于WHO的BMI切点。根据<strong>《中国成人超重和肥胖症预防控制指南》</strong>，中国标准为：BMI<strong>&ge;24</strong>为超重（WHO标准为25），BMI<strong>&ge;28</strong>为肥胖（WHO标准为30）。这是因为大量研究表明，<strong>中国人在相同BMI水平下，体脂百分比和内脏脂肪含量均高于白种人</strong>，患2型糖尿病、高血压和心血管疾病的风险也更高。因此，中国的体检报告和临床诊断均采用这一更为严格的本土化标准。这意味着按WHO标准属于正常的BMI值（如24.5），在中国标准下已属超重，需引起重视。"
    },
    {
      question: "体检报告上的BMI偏高该怎么办？",
      answer: "在中国，大多数企事业单位每年安排<strong>职工体检（单位体检）</strong>，BMI是必查项目之一。如果体检报告显示BMI偏高，建议按以下步骤处理：<strong>1)</strong> 首先确认是否使用中国标准（超重&ge;24，肥胖&ge;28），<strong>2)</strong> 前往<strong>社区卫生服务中心</strong>进行免费的慢性病风险评估，包括血压、血糖和血脂检测，<strong>3)</strong> 如果BMI&ge;28或伴有代谢异常，可通过社区转诊到上级医院的<strong>营养科或内分泌科</strong>就诊，<strong>4)</strong> 城镇职工医保和居民医保可报销肥胖相关并发症的诊疗费用，部分城市已将营养咨询门诊纳入医保覆盖范围。建议每3个月复查一次，监测体重管理效果。"
    },
    {
      question: "中医如何看待体重管理？",
      answer: "中医从<strong>体质辨识</strong>角度理解肥胖，认为体重过重多与<strong>痰湿体质</strong>和<strong>脾虚</strong>有关。痰湿体质的特征包括身体沉重、腹部肥满、口中粘腻，中医认为其根本在于脾胃运化功能失调，水湿内停聚而成痰。治疗原则以<strong>健脾化湿、理气祛痰</strong>为主。<strong>针灸减肥</strong>是中国广泛应用的辅助手段，部分临床研究表明针刺特定穴位（如天枢、中脘、足三里）可能有助于调节食欲和改善代谢，但证据质量有待提高。中国三甲医院的<strong>治未病中心</strong>提供&ldquo;BMI评估 + 中医体质辨识&rdquo;的综合方案。需要强调的是，中医应作为现代临床评估的<strong>补充而非替代</strong>，严重肥胖患者仍需接受规范的医学管理。"
    },
    {
      question: "中国儿童青少年肥胖率为什么越来越高？",
      answer: "中国儿童青少年肥胖率在过去20年间<strong>增长了近三倍</strong>，7-17岁年龄组超重肥胖率已超过<strong>19%</strong>。主要原因包括：<strong>1)</strong> <strong>久坐不动</strong>——繁重的课业负担和课外辅导导致儿童体力活动严重不足，<strong>2)</strong> <strong>不健康饮食</strong>——高糖高脂零食和含糖饮料的大量消费，外卖平台使垃圾食品触手可及，<strong>3)</strong> <strong>屏幕时间过长</strong>——手机、平板电脑和网络游戏进一步减少了户外活动时间，<strong>4)</strong> <strong>学校餐饮管理不足</strong>——部分学校食堂营养搭配不合理。政府已采取应对措施：<strong>「双减」政策</strong>减轻课业负担以增加运动时间，要求中小学保证每天<strong>1小时体育活动</strong>，并出台校园食品安全和营养标准。家长应鼓励孩子参加户外运动，限制屏幕时间，培养健康饮食习惯。"
    },
    {
      question: "减肥药和代餐在中国安全吗？",
      answer: "中国市场上的减肥产品鱼龙混杂，安全性差异极大。<strong>国家药品监督管理局（NMPA）</strong>目前批准的处方减肥药非常有限，<strong>奥利司他（orlistat）</strong>是唯一可在药店购买的非处方减肥药物。需要警惕以下风险：<strong>1)</strong> 网络平台（如淘宝、拼多多）销售的大量&ldquo;减肥保健品&rdquo;未经严格审批，部分被查出非法添加<strong>西布曲明</strong>等禁用成分，<strong>2)</strong> 海外代购的减肥药物可能不适合中国人体质且缺乏医疗监督，<strong>3)</strong> 部分代餐产品营养成分不全面，长期使用可能导致营养不良。建议：选择有<strong>国药准字或保健食品（蓝帽子）</strong>标识的产品，BMI&ge;28的患者可在医生指导下使用处方药物，<strong>切勿自行购买来源不明的减肥产品</strong>。三甲医院的减重门诊可提供规范的药物治疗方案。"
    },
    {
      question: "腰围和腰臀比在中国的标准是什么？",
      answer: "中国人群的腰围和腰臀比标准低于西方人群，这与亚洲人更容易在腹部堆积<strong>内脏脂肪</strong>有关。<strong>中国成人腰围标准：</strong>男性腰围&ge;85厘米为风险增高，&ge;90厘米为高风险；女性腰围&ge;80厘米为风险增高，&ge;85厘米为高风险。<strong>腰臀比标准：</strong>男性&ge;0.90、女性&ge;0.85提示腹型肥胖。<strong>正确测量方法：</strong>站立位，双脚分开25-30厘米，在肋骨下缘与髂嵴连线的中点水平，用软尺紧贴皮肤但不压迫组织，在正常呼气末读数。腰围比BMI能更准确地反映腹部脂肪含量和心血管代谢风险，建议与BMI结合使用。即使BMI正常，如果腰围超标（即&ldquo;<strong>正常体重型肥胖</strong>&rdquo;），仍需注意控制腹部脂肪。"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            常见问题
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI常见问题</span>：关于BMI的所有问题解答
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            关于身体质量指数（BMI）最常见问题的详细解答
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">立即计算您的BMI</h3>
          <p className="text-muted-foreground mb-6">使用我们的免费计算器，快速了解您的身体质量指数</p>
          <Link to="/zh/bmi" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">计算我的BMI</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">全面了解BMI</h2>
          <div className="text-muted-foreground space-y-4">
            <p>本<strong>BMI常见问题</strong>页面解答了关于身体质量指数计算和解读的最常见问题。无论您想了解<strong>如何计算BMI</strong>、<strong>正常BMI范围是多少</strong>，还是<strong>BMI是否可靠</strong>，这里都能找到答案。</p>
            <p>BMI是一个简单而实用的体重评估工具，但它也有其局限性，应结合其他健康指标综合判断。如需全面的健康评估，建议咨询专业医生。您也可以查看我们的<a href="/zh/bmi-biao" className="text-primary hover:underline">BMI对照表</a>和<a href="/zh/bmi-jiedu" className="text-primary hover:underline">BMI解读指南</a>获取更多信息。</p>
            <p>
              中国已建立覆盖<strong>13.6亿人口</strong>的基本医疗保险体系，为肥胖相关疾病治疗提供保障。
              <strong>城镇职工医保</strong>和<strong>城乡居民医保</strong>覆盖2型糖尿病、高血压等
              肥胖并发症的门诊和住院费用。<strong>减重代谢手术</strong>（如袖状胃切除术）自2019年起
              在多个省份纳入医保范围，适用于<strong>BMI&ge;32.5</strong>且合并严重代谢疾病的患者。
              <strong>国家基本公共卫生服务项目</strong>中的慢性病管理包含免费的BMI监测、血压和血糖检测。
              三甲医院的<strong>内分泌科、营养科和治未病中心</strong>可提供"BMI + 中医体质辨识"的
              综合体重管理方案，体现了中国<strong>中西医结合</strong>的医疗特色。
            </p>
            <p>
              根据<strong>《中国居民营养与慢性病状况报告(2020年)》</strong>，中国成年居民超重肥胖率
              已超过<strong>50%</strong>（按中国标准BMI&ge;24计算），其中超重率为34.3%，肥胖率为16.4%。
              这一比例从2002年的约25%上升到2020年的50%以上，增长速度令人警惕。
              在地域分布上，<strong>北方省份</strong>（如河北、山东、内蒙古）超重肥胖率明显高于南方省份，
              这与饮食习惯（面食为主、饮食偏咸偏油）和气候因素有关。值得注意的是，
              过去城市肥胖率远高于农村的格局正在改变，<strong>城乡差距逐步缩小</strong>，
              农村地区超重肥胖率的增长速度甚至超过了城市，这与农村居民生活方式的快速变化密切相关。
            </p>
            <p>
              <strong>「健康中国2030」规划纲要</strong>将控制肥胖列为重要目标，提出到2030年
              将居民肥胖增长率明显减缓。<strong>国家基本公共卫生服务项目</strong>为所有城乡居民
              提供免费的年度健康体检，包括BMI测量、血压血糖检测和健康指导，服务由
              <strong>社区卫生服务中心</strong>和<strong>乡镇卫生院</strong>负责实施。
              <strong>基本医疗保险</strong>覆盖肥胖相关慢性病（如糖尿病、高血压、高血脂症）的门诊用药
              和定期检查费用。对于严重肥胖患者，三甲医院开设的<strong>减重门诊</strong>
              提供多学科联合诊疗（MDT），由内分泌科、营养科、运动医学科和心理科共同制定
              个性化方案。部分城市（如北京、上海、广州）已将<strong>医学营养治疗</strong>
              纳入门诊慢性病报销范围，降低了患者的经济负担。
            </p>
            <p>
              中国人的<strong>传统膳食模式</strong>——以谷物为主食、蔬菜豆制品丰富、适量鱼禽肉蛋——
              曾被认为是预防肥胖的保护因素。然而近二十年来，饮食结构正经历<strong>快速西化</strong>：
              红肉和加工肉类消费大幅增加，含糖饮料和高脂零食普及，外卖平台（如美团、饿了么）
              使高热量食物获取极为便利，年轻人的烹饪习惯逐渐减少。这些变化是推动肥胖流行的
              重要因素。<strong>《中国居民膳食指南(2022)》</strong>推荐遵循<strong>「中国居民平衡膳食宝塔」</strong>
              模式：每日谷薯类200-300克、蔬菜300-500克、水果200-350克、
              畜禽鱼蛋120-200克、奶及奶制品300-500克，同时控制油盐糖的摄入
              （每日烹调油25-30克、食盐不超过5克、添加糖低于25克）。
              回归传统的均衡膳食结构，结合规律体力活动，是应对中国肥胖流行的根本策略。
            </p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI常见问题</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIChangjianwenti;
