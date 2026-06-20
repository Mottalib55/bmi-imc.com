import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale, Activity, Heart, Building2, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const HududIMC = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            حدود مؤشر كتلة الجسم
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">حدود مؤشر كتلة الجسم</span> : ما لا يخبرك به
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لماذا لا يعتبر مؤشر كتلة الجسم مؤشراً مثالياً ومتى يمكن أن يكون مضللاً
          </p>
        </header>

        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">المؤشر أداة فحص وليس تشخيصاً</h3>
              <p className="text-muted-foreground">ابتكره أدولف كيتليه عام 1832، صُمم المؤشر للدراسات الإحصائية السكانية وليس لتقييم الصحة الفردية. له عدة حدود مهمة.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">ما لا يقيسه المؤشر</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">تكوين الجسم</h4><p className="text-sm text-muted-foreground">لا يميز المؤشر بين العضلات والدهون. 1 كغ عضلات = 1 كغ دهون بالنسبة للمؤشر.</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">توزيع الدهون</h4><p className="text-sm text-muted-foreground">دهون البطن أخطر من الدهون تحت الجلد. المؤشر لا يراها.</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">كثافة العظام</h4><p className="text-sm text-muted-foreground">العظام الأثقل تزيد المؤشر دون التأثير على الصحة.</p></div></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">الحالة الأيضية</h4><p className="text-sm text-muted-foreground">يمكن أن يكون الشخص النحيف ذا ملف أيضي سيء (كوليسترول، سكر).</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">الترطيب</h4><p className="text-sm text-muted-foreground">احتباس الماء يمكن أن يزيد المؤشر مؤقتاً بنقطة أو اثنتين.</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">اللياقة البدنية</h4><p className="text-sm text-muted-foreground">شخصان بنفس المؤشر يمكن أن يكون لديهما حالات بدنية مختلفة جداً.</p></div></div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">الفئات التي لا يناسبها المؤشر</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Dumbbell className="w-5 h-5 text-orange-500" /><h4 className="font-bold">الرياضيون ولاعبو كمال الأجسام</h4></div>
                <p className="text-sm text-muted-foreground">كتلة العضلات العالية تعطي مؤشر "زيادة وزن" أو "سمنة" بينما نسبة الدهون ضئيلة.</p>
                <Link to="/ar/imc-riyadi" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">اعرف المزيد ←</Link>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Baby className="w-5 h-5 text-cyan-500" /><h4 className="font-bold">الأطفال والمراهقون</h4></div>
                <p className="text-sm text-muted-foreground">عتبات البالغين لا تنطبق. يجب استخدام منحنيات كتلة الجسم الخاصة بالعمر والجنس.</p>
                <Link to="/ar/imc-tifl" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">اعرف المزيد ←</Link>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Clock className="w-5 h-5 text-purple-500" /><h4 className="font-bold">كبار السن</h4></div>
                <p className="text-sm text-muted-foreground">فقدان كتلة العضلات (الضمور) يمكن أن يخفي زيادة الدهون. المؤشر "الطبيعي" قد يكون مضللاً.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Users className="w-5 h-5 text-pink-500" /><h4 className="font-bold">الحوامل</h4></div>
                <p className="text-sm text-muted-foreground">زيادة الوزن طبيعية ومرغوبة أثناء الحمل. المؤشر قبل الحمل يُستخدم كمرجع.</p>
                <Link to="/ar/imc-maraa" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">اعرف المزيد ←</Link>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Globe className="w-5 h-5 text-green-500" /><h4 className="font-bold">بعض الأعراق</h4></div>
                <p className="text-sm text-muted-foreground">الشعوب الآسيوية لديها مخاطر متزايدة عند مؤشر أقل. منظمة الصحة تقترح عتبات معدلة (23 بدلاً من 25).</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Scale className="w-5 h-5 text-blue-500" /><h4 className="font-bold">أنماط الجسم المتطرفة</h4></div>
                <p className="text-sm text-muted-foreground">الأشخاص طوال القامة جداً أو قصارها لديهم مؤشرات مختلفة طبيعياً بسبب نسبة السطح/الحجم.</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">بدائل ومكملات للمؤشر</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-3 px-4 font-bold">المؤشر</th>
                    <th className="text-right py-3 px-4 font-bold">ما يقيسه</th>
                    <th className="text-right py-3 px-4 font-bold">العتبات الموصى بها</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">محيط الخصر</td><td className="py-3 px-4">الدهون الحشوية</td><td className="py-3 px-4">&lt;94 سم (رجال) / &lt;80 سم (نساء)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">نسبة الخصر/الورك</td><td className="py-3 px-4">توزيع الدهون</td><td className="py-3 px-4">&lt;0.90 (رجال) / &lt;0.85 (نساء)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">نسبة الخصر/الطول</td><td className="py-3 px-4">الدهون المركزية النسبية</td><td className="py-3 px-4">&lt;0.5 (الخصر &lt; نصف الطول)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">نسبة الدهون %</td><td className="py-3 px-4">تكوين الجسم الفعلي</td><td className="py-3 px-4">10-20% (رجال) / 18-28% (نساء)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">FFMI</td><td className="py-3 px-4">الكتلة العضلية (للرياضيين)</td><td className="py-3 px-4">18-25 (طبيعي)</td></tr>
                  <tr><td className="py-3 px-4 font-medium">المقاومة الكهربائية الحيوية</td><td className="py-3 px-4">ماء، عضلات، دهون، عظام</td><td className="py-3 px-4">يختلف حسب الجهاز</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">متى يظل المؤشر مفيداً</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>رغم حدوده، يظل المؤشر أداة قيمة في سياقات معينة:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>الفحص الأولي السريع</strong>: تحديد الأشخاص الذين يحتاجون تقييماً أكثر شمولاً</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>الدراسات الوبائية</strong>: مقارنة السكان على نطاق واسع</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>المتابعة الفردية</strong>: مراقبة تطور الوزن عبر الزمن</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>البالغ المتوسط غير الرياضي</strong>: لهذه الفئة، المؤشر موثوق بشكل معقول</span></li>
              </ul>
            </div>
          </div>

          {/* EMRO Research on Arab BMI Thresholds */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">أبحاث حول عتبات مؤشر كتلة الجسم الخاصة بالسكان العرب</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                تُثبت الأبحاث المتزايدة أن عتبات مؤشر كتلة الجسم المعتمدة دولياً (25 لزيادة الوزن و30 للسمنة) قد لا تكون مناسبة لجميع المجموعات السكانية. أجرى <strong>المكتب الإقليمي لمنظمة الصحة العالمية لشرق المتوسط (EMRO)</strong> دراسات مسحية واسعة النطاق في إقليم شرق المتوسط أظهرت أن السكان العرب، وخاصة في دول الخليج، يميلون إلى تراكم الدهون الحشوية (دهون البطن) عند مؤشرات أقل من العتبات المعيارية مقارنة بالسكان الأوروبيين. هذا يعني أن الشخص العربي ذا المؤشر 24 قد يواجه مخاطر صحية مشابهة لشخص أوروبي ذي مؤشر 27، خاصة فيما يتعلق بمقاومة الأنسولين والسكري من النوع الثاني.
              </p>
              <p>
                في <strong>جامعة الملك سعود</strong> بالرياض، أجرى فريق بحثي في كلية الطب دراسات مقطعية على عينات كبيرة من السكان السعوديين خلصت إلى أن العلاقة بين مؤشر كتلة الجسم ونسبة الدهون الفعلية تختلف لدى السعوديين مقارنة بالمعايير الغربية. أوصت هذه الأبحاث بدراسة إمكانية خفض عتبة "زيادة الوزن" إلى 23-24 بدلاً من 25 للسكان السعوديين، وهو ما يتماشى مع التعديلات التي اقترحتها منظمة الصحة العالمية لبعض الشعوب الآسيوية. كما درس باحثون في <strong>جامعة الخليج العربي</strong> بالبحرين العلاقة بين مؤشر كتلة الجسم ومتلازمة التمثيل الغذائي في مجتمعات الخليج، ووجدوا أن نسبة الخصر إلى الطول تتفوق على مؤشر كتلة الجسم في التنبؤ بمخاطر أمراض القلب والأوعية الدموية لدى العرب.
              </p>
              <p>
                تسعى <strong>مدينة الملك عبدالعزيز للعلوم والتقنية (KACST)</strong> في السعودية بالتعاون مع مراكز بحثية إقليمية إلى بناء قاعدة بيانات جينية وأنثروبومترية عربية شاملة، تهدف إلى تطوير معايير صحية خاصة بالسكان العرب تأخذ في الاعتبار العوامل الوراثية والبيئية المميزة للمنطقة. في مصر، تُجري <strong>الجامعة الأمريكية بالقاهرة</strong> أبحاثاً مشتركة مع المعهد القومي للتغذية حول عتبات المؤشر المناسبة للسكان المصريين، حيث تشير النتائج الأولية إلى أن النساء المصريات يواجهن مخاطر أيضية مرتفعة عند مؤشرات أقل من العتبات العالمية المعتمدة.
              </p>
            </div>
          </div>

          {/* Gulf Context Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Thermometer className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">حدود المؤشر في السياق الخليجي والعربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                تواجه منطقة الخليج العربي تحديات صحية فريدة تجعل الاعتماد على مؤشر كتلة الجسم وحده أمراً غير كافٍ. تسجل دول مجلس التعاون الخليجي من أعلى معدلات السمنة عالمياً، حيث تتجاوز نسبة زيادة الوزن والسمنة مجتمعتين 65% من السكان البالغين في عدة دول خليجية. هذا الواقع يرتبط بعوامل بيئية وثقافية متداخلة يعجز مؤشر كتلة الجسم عن التقاطها أو عكسها.
              </p>
              <p>
                <strong>الحرارة المفرطة وقلة النشاط البدني:</strong> تبلغ درجات الحرارة في دول الخليج خلال أشهر الصيف (من مايو إلى أكتوبر) ما بين 40 و55 درجة مئوية، مما يحد بشكل كبير من إمكانية ممارسة الأنشطة البدنية في الهواء الطلق لمدة تصل إلى ستة أشهر في السنة. هذا يعني أن كثيراً من السكان يقضون معظم وقتهم في بيئات مكيفة مع حركة محدودة، مما يؤدي إلى فقدان تدريجي للكتلة العضلية وتراكم الدهون الحشوية، وهو تغيير في تكوين الجسم لا يعكسه مؤشر كتلة الجسم بالضرورة. قد يحافظ الشخص على مؤشر ثابت بينما تتغير نسبة العضل إلى الدهون بشكل ملحوظ.
              </p>
              <p>
                <strong>العوامل الثقافية والغذائية:</strong> تتميز الثقافة العربية بكرم الضيافة الذي يتضمن تقديم وجبات غنية بالسعرات الحرارية. تشمل الأطعمة التقليدية أطباقاً غنية بالدهون والكربوهيدرات مثل الكبسة والمندي والمكبوس، إضافة إلى الحلويات مثل اللقيمات والبسبوسة والكنافة. كما أن ثقافة القهوة العربية المصحوبة بالتمر والحلويات تمثل جزءاً أساسياً من الحياة الاجتماعية اليومية. هذه الأنماط الغذائية قد تؤدي إلى تراكم دهون حشوية حتى عند أشخاص ذوي مؤشر كتلة جسم "طبيعي"، مما يجعل المؤشر أداة مضللة في هذا السياق.
              </p>
              <p>
                <strong>التحضر السريع:</strong> شهدت دول الخليج تحولاً حضرياً سريعاً خلال العقود الأخيرة، انتقل فيه السكان من نمط حياة تقليدي يعتمد على الحركة والعمل البدني إلى نمط حياة حضري يتسم بقيادة السيارات والعمل المكتبي والاعتماد الكبير على الأغذية المصنعة والوجبات السريعة. هذا التحول السريع لم يمنح الأجساد وقتاً كافياً للتكيف، مما أدى إلى ما يسمى بـ"الفجوة الأيضية" حيث يظهر الجسم بمؤشر طبيعي ظاهرياً لكنه يعاني من اضطرابات أيضية داخلية.
              </p>
            </div>
          </div>

          {/* Specific populations in Arab countries */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Activity className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">فئات محددة يفشل فيها المؤشر في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>لاعبو كرة القدم والرياضيون المحترفون:</strong> تشهد دول الخليج استثمارات ضخمة في الرياضة، خاصة كرة القدم التي تعد الأكثر شعبية. يتميز لاعبو كرة القدم المحترفون في الدوريات الخليجية بكتلة عضلية عالية في الساقين والجذع، مما يرفع مؤشر كتلة الجسم لديهم إلى مستويات تُصنف أحياناً ضمن "زيادة الوزن" رغم تمتعهم بلياقة بدنية ممتازة ونسبة دهون منخفضة. كذلك الحال مع ممارسي رياضات القوة والمصارعة المنتشرة في المنطقة. يحتاج هؤلاء إلى تقييم يعتمد على نسبة الدهون الفعلية ومؤشر الكتلة الخالية من الدهون (FFMI) بدلاً من مؤشر كتلة الجسم التقليدي.
              </p>
              <p>
                <strong>النساء خلال الحمل وبعده:</strong> تتميز المنطقة العربية بمعدلات خصوبة مرتفعة نسبياً مقارنة بالمعدل العالمي، حيث تنجب كثير من النساء أربعة أطفال أو أكثر. كل حمل يغير تكوين الجسم بشكل دائم، مع احتمال زيادة الدهون وتغير توزيعها. مؤشر كتلة الجسم لا يأخذ في الاعتبار تاريخ الحمل المتعدد ولا يميز بين زيادة الوزن الصحية المرتبطة بالرضاعة وبين السمنة المرضية. لذلك يجب أن يقترن بقياس محيط الخصر ونسبة الدهون عند تقييم صحة النساء بعد الولادة.
              </p>
              <p>
                <strong>تأثير صيام رمضان على تكوين الجسم:</strong> يصوم أكثر من 300 مليون شخص في العالم العربي خلال شهر رمضان، مما يُحدث تغيرات مؤقتة ولكن ملحوظة في تكوين الجسم. أظهرت دراسات أجريت في مصر والسعودية والإمارات أن الصيام المتقطع خلال رمضان قد يؤدي إلى فقدان الوزن (1-3 كغ في المتوسط)، لكن هذا الفقدان قد يشمل كتلة عضلية وماء بالإضافة إلى الدهون. قد يبدو مؤشر كتلة الجسم محسناً بعد رمضان، لكن التركيب الفعلي للجسم قد لا يكون أفضل صحياً. كما أن أنماط الأكل بعد الإفطار (إفراط في الطعام الغني بالسكريات والدهون) قد تزيد الدهون الحشوية دون تغيير ملحوظ في المؤشر.
              </p>
              <p>
                <strong>كبار السن في المجتمعات العربية:</strong> يعاني كبار السن العرب من ظاهرة "السمنة الساركوبينية" (sarcopenic obesity) بمعدلات مرتفعة، حيث يفقدون الكتلة العضلية مع تراكم الدهون، فيظل مؤشر كتلة الجسم ثابتاً أو حتى ينخفض بينما تزداد المخاطر الصحية. يُضاف إلى ذلك ارتفاع معدلات السكري من النوع الثاني في المنطقة (تتجاوز 20% في بعض دول الخليج)، مما يستدعي تقييماً أكثر شمولية يتجاوز مؤشر كتلة الجسم.
              </p>
            </div>
          </div>

          {/* Alternative measurements in Arab world */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Heart className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">القياسات البديلة الموصى بها في المنطقة العربية</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                توصي الجمعيات الطبية في المنطقة العربية باستخدام مجموعة من المؤشرات التكميلية التي تعطي صورة أدق عن الحالة الصحية، خاصة في ظل الاستعداد الوراثي لسكان المنطقة لتراكم الدهون الحشوية والإصابة بمتلازمة التمثيل الغذائي.
              </p>
              <p>
                <strong>محيط الخصر (Waist Circumference):</strong> يُعد قياس محيط الخصر من أهم المؤشرات التكميلية، حيث يعكس بشكل مباشر كمية الدهون الحشوية المتراكمة حول الأعضاء الداخلية. أوصت <strong>الجمعية السعودية لطب السمنة</strong> باعتماد عتبات محددة للسكان العرب: أقل من 90 سم للرجال وأقل من 80 سم للنساء (أقل من العتبة الأوروبية للرجال البالغة 94 سم). هذا القياس بسيط ويمكن إجراؤه في المنزل باستخدام شريط قياس عادي، ويُوصى بقياسه عند مستوى السرة في وضع الوقوف.
              </p>
              <p>
                <strong>نسبة الخصر إلى الورك (Waist-to-Hip Ratio):</strong> تقيس هذه النسبة توزيع الدهون في الجسم وتحدد ما إذا كان الشخص يميل إلى تخزين الدهون في منطقة البطن (شكل التفاحة) أو في الوركين والأرداف (شكل الكمثرى). الشكل الأول أخطر صحياً ويرتبط بأمراض القلب والسكري. العتبة المقبولة هي أقل من 0.90 للرجال العرب وأقل من 0.85 للنساء العربيات. تشير الدراسات إلى أن هذا المؤشر يتفوق على مؤشر كتلة الجسم في التنبؤ بمخاطر أمراض القلب والشرايين لدى السكان العرب.
              </p>
              <p>
                <strong>نسبة الدهون في الجسم (Body Fat Percentage):</strong> تُعد نسبة الدهون المؤشر الأكثر دقة لتقييم تكوين الجسم. المعدل الصحي للرجال العرب يتراوح بين 10-22%، وللنساء بين 20-32%. يمكن قياسها باستخدام أجهزة المقاومة الكهربائية الحيوية المتوفرة في معظم الصيدليات والمراكز الصحية في الدول العربية، أو عبر فحص DEXA الأكثر دقة المتوفر في المستشفيات الكبرى.
              </p>
              <p>
                <strong>تقييم الدهون الحشوية (Visceral Fat Assessment):</strong> تتوفر في المراكز الصحية المتقدمة في الخليج أجهزة متطورة لقياس الدهون الحشوية بدقة عالية. يُعطى تصنيف من 1 إلى 59، والمستوى الصحي يكون أقل من 13. هذا القياس بالغ الأهمية للسكان العرب نظراً لاستعدادهم الوراثي لتراكم الدهون حول الأعضاء الداخلية حتى عند مؤشرات كتلة جسم طبيعية ظاهرياً.
              </p>
            </div>
          </div>

          {/* Modern health assessment in Gulf */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Building2 className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">التقييم الصحي الحديث المتاح في دول الخليج</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                تتميز دول الخليج العربي ببنية تحتية صحية متقدمة توفر خيارات متعددة لتقييم تكوين الجسم تتجاوز مؤشر كتلة الجسم البسيط. تقدم المستشفيات الكبرى مثل مستشفى كليفلاند كلينك أبوظبي، ومستشفى الملك فيصل التخصصي بالرياض، ومركز سدرة للطب في قطر، حزم فحص شاملة تتضمن تحليل تكوين الجسم بالتفصيل.
              </p>
              <p>
                <strong>فحص DEXA (قياس امتصاص الأشعة السينية ثنائي الطاقة):</strong> يُعد المعيار الذهبي لتقييم تكوين الجسم، حيث يقيس بدقة عالية كتلة الدهون والعضلات والعظام في كل منطقة من الجسم. متوفر في معظم المستشفيات الكبرى في الخليج، ويُستخدم أيضاً لتقييم كثافة العظام. تتراوح تكلفته بين 200 و500 دولار أمريكي في معظم مراكز الخليج.
              </p>
              <p>
                <strong>تحليل المقاومة الكهربائية الحيوية المتقدم (BIA):</strong> تتوفر أجهزة InBody المتقدمة في كثير من المراكز الصحية والنوادي الرياضية في المنطقة. تقدم هذه الأجهزة تحليلاً شاملاً يشمل كتلة العضلات في كل طرف، ونسبة الماء داخل وخارج الخلايا، ومعدل الأيض الأساسي، والعمر البيولوجي مقارنة بالعمر الزمني. هذا الفحص سريع (أقل من دقيقتين) وغير مكلف نسبياً.
              </p>
              <p>
                <strong>المراكز الصحية المجتمعية:</strong> تقدم مراكز الرعاية الصحية الأولية في السعودية والإمارات والكويت والبحرين وقطر وعمان فحوصات مجانية أو مدعومة تشمل قياس محيط الخصر ونسبة الخصر إلى الورك وضغط الدم وسكر الدم الصائم ومستوى الدهون في الدم. هذه الباقة المتكاملة تعطي صورة صحية أفضل بكثير من مؤشر كتلة الجسم وحده. كما توفر بعض التطبيقات الصحية الحكومية مثل "صحتي" في السعودية و"الحصن" في الإمارات إمكانية تتبع هذه المؤشرات المتعددة رقمياً.
              </p>
              <p>
                <strong>العيادات الخاصة المتخصصة في السمنة:</strong> انتشرت في السنوات الأخيرة عيادات متخصصة في علاج السمنة واضطرابات التمثيل الغذائي في جميع أنحاء المنطقة العربية. تعتمد هذه العيادات منهجاً شاملاً يجمع بين تحليل تكوين الجسم بأجهزة DEXA أو BIA، والفحوصات المخبرية الشاملة (هرمونات الغدة الدرقية، مقاومة الأنسولين، فيتامين د)، والتقييم الجيني للاستعداد للسمنة. هذا النهج المتكامل يُغني عن الاعتماد على مؤشر كتلة الجسم كمقياس وحيد.
              </p>
            </div>
          </div>

          {/* Regional health studies data */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-violet-500/10">
                <Scale className="w-6 h-6 text-violet-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">بيانات من الدراسات الصحية الإقليمية</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>بيانات منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط (WHO EMRO):</strong> أظهرت بيانات المكتب الإقليمي أن إقليم شرق المتوسط يسجل ثاني أعلى معدلات سمنة بين أقاليم المنظمة الستة. تبلغ نسبة السمنة بين البالغين في الكويت حوالي 37%، وفي السعودية 35%، وفي قطر والإمارات حوالي 33%. لكن الأهم من هذه الأرقام هو أن الدراسات أظهرت أن 40-50% من الأشخاص ذوي مؤشر كتلة جسم "طبيعي" في المنطقة يعانون من عامل خطر أيضي واحد على الأقل (ارتفاع ضغط الدم، ارتفاع السكر، أو اضطراب الدهون)، وهو ما يُعرف بظاهرة "النحافة الأيضية المريضة" (Metabolically Unhealthy Normal Weight).
              </p>
              <p>
                <strong>المسح الصحي السعودي (Saudi Health Interview Survey - SHIS):</strong> أجري هذا المسح الوطني الشامل على عينة ممثلة من السكان السعوديين وكشف عن نتائج مهمة تتعلق بحدود مؤشر كتلة الجسم. وجد المسح أن 28.7% من السكان السعوديين يعانون من السمنة وفق المعايير التقليدية، لكن عند استخدام قياس محيط الخصر كمؤشر، ارتفعت نسبة من يعانون من "السمنة المركزية" إلى 44%. هذا التباين الكبير يؤكد أن مؤشر كتلة الجسم يقلل من تقدير المخاطر الصحية الحقيقية لدى السعوديين. كما وجد المسح أن النساء السعوديات يسجلن معدلات أعلى من السمنة المركزية (58%) مقارنة بالرجال (32%)، وهو فارق لا يظهر بنفس الوضوح عند الاعتماد على مؤشر كتلة الجسم وحده.
              </p>
              <p>
                <strong>المسح الصحي الوطني الإماراتي (UAE National Health Survey):</strong> قدم المسح الإماراتي بيانات قيمة حول العلاقة بين مؤشر كتلة الجسم والمؤشرات الأيضية لدى المواطنين الإماراتيين والمقيمين. أظهرت النتائج أن 19% من الإماراتيين يعانون من السكري من النوع الثاني، مع نسبة كبيرة منهم ليسوا بدينين وفق مؤشر كتلة الجسم. كما أشارت البيانات إلى أن نقص فيتامين د المنتشر في المنطقة (رغم وفرة أشعة الشمس، بسبب تجنب التعرض للحرارة) يرتبط بمقاومة الأنسولين وتراكم الدهون الحشوية، وهي عوامل لا يعكسها مؤشر كتلة الجسم.
              </p>
              <p>
                <strong>الاستعداد الوراثي لمتلازمة التمثيل الغذائي:</strong> أثبتت دراسات الجينوم التي أجرتها مراكز بحثية في قطر والسعودية أن السكان العرب يحملون متغيرات جينية تزيد من استعدادهم لمقاومة الأنسولين ومتلازمة التمثيل الغذائي عند مستويات دهون أقل مما هو معتاد لدى السكان الأوروبيين. يرتبط هذا بعوامل تطورية تاريخية حيث تكيفت أجساد سكان المنطقة عبر آلاف السنين مع بيئة صحراوية شحيحة الغذاء، مما طور آليات فعالة لتخزين الطاقة أصبحت عبئاً صحياً في ظل الوفرة الغذائية الحديثة. هذا يعني أن مؤشر كتلة جسم 24 لدى شخص عربي قد يخفي وراءه مخاطر أيضية حقيقية تستدعي تقييماً أعمق.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم حدود مؤشر كتلة الجسم</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حدود مؤشر كتلة الجسم</strong> عديدة وموثقة جيداً من المجتمع العلمي. لا ينبغي تفسير هذا المؤشر بمفرده. تشمل عيوبه عدم القدرة على التمييز بين الكتلة الدهنية والعضلية.</p>
              <p><strong>بدائل المؤشر</strong> مثل محيط الخصر أو نسبة الدهون توفر صورة أكثر اكتمالاً. المؤشر مع مؤشرات أخرى يظل أداة فحص مفيدة.</p>
              <p>يُنصح سكان المنطقة العربية تحديداً بعدم الاكتفاء بمؤشر كتلة الجسم، واعتماد نهج شامل يجمع بين قياس محيط الخصر ونسبة الدهون والفحوصات المخبرية الدورية، خاصة في ظل معدلات السكري وأمراض القلب المرتفعة في المنطقة. التقييم الصحي الشامل متاح وميسور في معظم الدول العربية ويوفر صورة أدق وأكثر فائدة من رقم واحد بسيط.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك بمعرفة كاملة</h3>
            <p className="text-muted-foreground mb-6">الآن بعد معرفتك بالحدود، استخدم حاسبتنا كمؤشر أولي</p>
            <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">احسب مؤشري</Link>
          </div>
        </div>


        <RelatedPages />

        <AuthorByline />
      </main>

      <Footer />
    </div>
  );
};

export default HududIMC;
