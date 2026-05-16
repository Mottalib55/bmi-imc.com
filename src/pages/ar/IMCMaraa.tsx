import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, AlertTriangle, CheckCircle2, Sparkles, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCMaraa = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(72);
  const [height, setHeight] = useState(160);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

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
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم للنساء العربيات
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">مؤشر كتلة الجسم للمرأة العربية</span> : حاسبة BMI للنساء
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            في العالم العربي، أكثر من 65% من النساء يعانين من زيادة الوزن أو السمنة (منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط 2023). حاسبة مؤشر كتلة الجسم بمراجع من WHO EMRO والهيئات الصحية العربية.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              أدخلي قياساتك
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} كغ</span>
                </div>
                <Slider value={[weight]} onValueChange={handleWeightChange} min={35} max={150} step={1} className="py-4" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-pink-500">{height} سم</span>
                </div>
                <Slider value={[height]} onValueChange={handleHeightChange} min={130} max={200} step={1} className="py-4" />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">فهم مؤشر كتلة الجسم للنساء في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                يسجّل <strong>العالم العربي أعلى معدلات سمنة النساء عالمياً</strong> وفقاً لمنظمة الصحة العالمية (WHO). تتمتع النساء بطبيعتهن بـ<strong>نسبة دهون أعلى</strong> (20-25% مقابل 15-20% للرجال)، وهذا ضروري لوظائف الهرمونات والصحة الإنجابية.
              </p>
              <p>
                <strong>إحصائيات السمنة عند النساء العربيات:</strong> الكويت: 48% من النساء يعانين من السمنة (الأعلى عالمياً) — السعودية: 44% من النساء يعانين من السمنة — مصر: 42% من النساء يعانين من السمنة — الإمارات: 39% من النساء يعانين من السمنة.
              </p>
              <p>
                <strong>متوسط قياسات المرأة العربية:</strong> الطول 160 سم، الوزن 72 كغ. بالنسبة لـ<strong>محيط الخصر</strong>، حددت منظمة الصحة العالمية (المكتب الإقليمي لشرق المتوسط) أن <strong>80 سم</strong> يمثل خطراً معتدلاً و<strong>88 سم</strong> يمثل خطراً مرتفعاً للأمراض المزمنة.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">جدول مؤشر كتلة الجسم للنساء (160 سم — متوسط عربي)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { category: "نقص الوزن (أقل من 18.5)", range: "< 47 كغ", color: "text-blue-500" },
                { category: "وزن طبيعي (18.5 - 24.9)", range: "47 - 64 كغ", color: "text-success" },
                { category: "زيادة في الوزن (25 - 29.9)", range: "64 - 77 كغ", color: "text-warning" },
                { category: "سمنة (30 أو أكثر)", range: "> 77 كغ", color: "text-destructive" },
              ].map((item) => (
                <div key={item.category} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className={`font-semibold ${item.color}`}>{item.category}</span>
                  <span className="text-muted-foreground font-bold">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * مثال لامرأة طولها 160 سم (متوسط عربي). القيم محسوبة وفقاً لتصنيف منظمة الصحة العالمية (WHO EMRO).
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الوزن المثالي للنساء العربيات حسب الطول</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "152 سم", min: 43, max: 58, ideal: 51 },
                { height: "156 سم", min: 45, max: 61, ideal: 54 },
                { height: "160 سم (متوسط)", min: 47, max: 64, ideal: 56 },
                { height: "164 سم", min: 50, max: 67, ideal: 59 },
                { height: "168 سم", min: 52, max: 70, ideal: 62 },
                { height: "172 سم", min: 55, max: 74, ideal: 65 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} كغ <span className="text-success">(مثالي: {item.ideal} كغ)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">الدورة الشهرية والوزن في المنطقة العربية</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>يمكن أن يتغير الوزن بمقدار <strong>1-3 كغ</strong> حسب الدورة الشهرية بسبب التغيرات الهرمونية</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>احتباس الماء</strong> طبيعي قبل الدورة — لا داعي للقلق من زيادة الميزان المؤقتة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>قيسي وزنك دائماً في <strong>نفس الفترة</strong> من دورتك للحصول على قراءة دقيقة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>سن اليأس</strong> يغير أنماط توزيع الدهون — استشيري طبيبتك حول التعامل مع التغيرات الجسدية</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">المتابعة الطبية للحامل في المنظومة الصحية العربية</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>مؤشر كتلة الجسم <strong>لا ينطبق</strong> أثناء الحمل — توصيات وزارة الصحة السعودية للرعاية قبل الولادة</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>زيادة الوزن الموصى بها: <strong>11-16 كغ</strong> (مؤشر طبيعي) حسب إرشادات الصحة الخليجية</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>السكري الحملي</strong> يصيب 18-24% من الحوامل في دول الخليج — نسبة أعلى من المعدل العالمي</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>استشيري <strong>طبيبة النساء والتوليد</strong> للمتابعة الشخصية وفحص سكري الحمل بانتظام</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">تحديات صحة المرأة العربية والوزن</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>نمط الحياة الخامل</strong> بين النساء العربيات يساهم في ارتفاع معدلات السمنة مع محدودية خيارات الرياضة في الأماكن المفتوحة</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>العوامل الثقافية:</strong> المناسبات الاجتماعية والاحتفالات التقليدية الغنية بالسعرات الحرارية كالأفراح والعزائم</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>رؤية 2030:</strong> تمكين المرأة السعودية من ممارسة الرياضة — فتح الأندية الرياضية النسائية والمرافق الرياضية</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>نمو الصالات الرياضية النسائية</strong> في دول الخليج — خيارات متزايدة للمرأة العربية لممارسة النشاط البدني</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">الحجاب والنشاط البدني</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>الملابس الرياضية المحتشمة</strong> تشهد نمواً كبيراً في الأسواق — خيارات متعددة من علامات عالمية ومحلية</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>المرافق الرياضية المغلقة</strong> المخصصة للنساء في دول الخليج توفر بيئة مريحة لممارسة الرياضة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>هيئة الرياضة السعودية:</strong> برامج مخصصة لتشجيع النساء على ممارسة النشاط البدني والرياضات المختلفة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>السباحة والمشي والبيلاتس</strong> من أكثر الرياضات شعبية بين النساء العربيات في الأندية المغلقة</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم وسن اليأس عند المرأة العربية</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                خلال <strong>سن اليأس</strong>، تعزز التغيرات الهرمونية زيادة الوزن خاصة في منطقة البطن. يتباطأ الأيض وتنخفض كتلة العضلات بشكل طبيعي. في المنطقة العربية، قد يتأخر اكتشاف هذه التغيرات بسبب قلة الوعي الصحي أحياناً.
              </p>
              <p>
                للحفاظ على <strong>مؤشر كتلة جسم صحي بعد 50</strong>، ركزي على نظام غذائي غني بـ<strong>البروتين</strong> و<strong>الكالسيوم</strong> — التمر واللبن والأسماك مصادر ممتازة. حافظي على نشاط بدني منتظم يشمل <strong>تمارين القوة</strong> والمشي اليومي.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">سمنة النساء في الخليج: الأعلى عالمياً وأسبابها المتعددة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                تُسجّل <strong>نساء دول الخليج العربي</strong> أعلى معدلات سمنة نسائية في العالم وفقاً لمنظمة الصحة العالمية. في <strong>الكويت</strong>، تبلغ نسبة السمنة بين النساء <strong>48%</strong>، مما يجعلها الأعلى عالمياً. وفي <strong>السعودية</strong> تصل النسبة إلى <strong>44%</strong>، وفي <strong>مصر 42%</strong>، وفي <strong>الإمارات 39%</strong>، وفي <strong>قطر 41%</strong>. هذه الأرقام تتجاوز بكثير المعدل العالمي البالغ حوالي 15% وتضع المرأة الخليجية في مواجهة مخاطر صحية جسيمة تشمل السكري وأمراض القلب وبعض أنواع السرطان.
              </p>
              <p>
                تتضافر عدة <strong>عوامل ثقافية واجتماعية</strong> في تفسير هذه المعدلات المرتفعة. تاريخياً، كانت فرص ممارسة <strong>النشاط البدني للنساء في الأماكن العامة</strong> محدودة في بعض دول الخليج بسبب عوامل اجتماعية ومناخية. ارتفاع درجات الحرارة الشديد يمنع الأنشطة الخارجية لأشهر طويلة. كما أن عدم توفر مرافق رياضية نسائية كافية في السابق أدى إلى قلة الخيارات المتاحة للمرأة لممارسة الرياضة بانتظام. يُضاف إلى ذلك <strong>نمط الحياة المنزلي الخامل</strong> وقلة المشي بسبب الاعتماد الكلي على السيارات في التنقل.
              </p>
              <p>
                من الناحية الغذائية، تواجه المرأة الخليجية <strong>تحديات مضاعفة</strong>. المناسبات الاجتماعية المتكررة كالأعراس والعزائم والتجمعات العائلية تتضمن وجبات دسمة وحلويات غنية بالسكريات والدهون. <strong>المشروبات المحلاة</strong> كالعصائر والمشروبات الغازية شائعة الاستهلاك. كما أن عادة الأكل العاطفي والأكل أمام الشاشات منتشرة بين النساء في المنطقة. هذا التراكم من العوامل الغذائية والسلوكية يرفع مؤشر كتلة الجسم عند النساء بشكل مستمر ويصعّب من عملية إدارة الوزن.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">الإصلاحات السعودية والإماراتية لتمكين المرأة صحياً</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                شهدت <strong>المملكة العربية السعودية</strong> تحولات جذرية في مجال صحة المرأة ضمن رؤية 2030. من أبرز هذه الإصلاحات <strong>السماح بافتتاح الصالات الرياضية النسائية</strong> في جميع أنحاء المملكة، وهو قرار تاريخي صدر عام 2017 وأحدث ثورة في خيارات اللياقة البدنية المتاحة للنساء السعوديات. اليوم، تنتشر المئات من الأندية الرياضية النسائية في المدن السعودية الكبرى مثل الرياض وجدة والدمام ومكة المكرمة، وتقدم برامج متنوعة تشمل اليوغا والبيلاتس والسباحة وتمارين القوة والتمارين الجماعية.
              </p>
              <p>
                كما أُدرجت <strong>حصص التربية البدنية في مدارس البنات</strong> للمرة الأولى، مما يُربي جيلاً جديداً من الفتيات السعوديات على أهمية النشاط البدني منذ الصغر. أطلقت <strong>هيئة الرياضة السعودية</strong> برامج مخصصة للنساء مثل <strong>"تحدي المشي"</strong> و<strong>"رياضة للجميع"</strong> التي تهدف إلى تشجيع النساء من جميع الأعمار على ممارسة الرياضة بانتظام. كما تم تنظيم ماراثونات ومسابقات جري نسائية في مدن سعودية عدة.
              </p>
              <p>
                في <strong>الإمارات العربية المتحدة</strong>، أطلقت الحكومة مبادرات صحية نسائية رائدة. أبرزها <strong>مجلس الإمارات للسعادة وجودة الحياة</strong> الذي يتضمن برامج صحية تستهدف النساء تحديداً. كما تُقدم <strong>وزارة الصحة ووقاية المجتمع (MOHAP)</strong> فحوصات دورية مجانية تشمل قياس مؤشر كتلة الجسم ومحيط الخصر ونسبة الدهون. أطلقت دبي <strong>تحدي دبي للياقة 30×30</strong> الذي يشجع جميع السكان — بما فيهم النساء — على ممارسة 30 دقيقة من النشاط البدني يومياً لمدة 30 يوماً.
              </p>
              <p>
                تنمو <strong>صناعة الملابس الرياضية المحتشمة</strong> بسرعة في الخليج، مع ظهور علامات تجارية محلية وعالمية تقدم أزياء رياضية تجمع بين الحشمة والعملية. هذا التطور يُسهل على النساء المحجبات ممارسة الرياضة بأريحية تامة. كما انتشرت <strong>التطبيقات الصحية العربية</strong> التي تقدم تمارين منزلية ونصائح غذائية مخصصة للمرأة العربية، مما يتيح للنساء اللواتي يفضلن التمرين في المنزل خيارات فعالة ومتنوعة لإدارة وزنهن ومراقبة مؤشر كتلة الجسم.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم للمرأة العربية: دليل شامل</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>حاسبة مؤشر كتلة الجسم للنساء العربيات</strong> ضرورية لتقييم <strong>تكوين الجسم</strong> مع مراعاة الخصائص الإقليمية. بالنسبة لامرأة عربية طولها <strong>160 سم</strong> (المتوسط العربي)، الوزن المثالي حوالي 56 كغ مع مؤشر كتلة جسم بين 18.5 و24.9.
              </p>
              <p>
                <strong>مثال عملي:</strong> امرأة عربية طولها 160 سم ووزنها 72 كغ — مؤشر كتلة الجسم = 28.1 (زيادة في الوزن). الهدف الصحي: الوصول إلى 56-64 كغ عبر نظام غذائي متوازن ونشاط بدني منتظم.
              </p>
              <p>
                <strong>المراجع والمصادر:</strong> منظمة الصحة العالمية — المكتب الإقليمي لشرق المتوسط (WHO EMRO)، وزارة الصحة السعودية (Saudi MOH)، وزارة الصحة ووقاية المجتمع الإماراتية (UAE MOHAP)، هيئة الرياضة السعودية. جميع القيم بالنظام المتري (كغ وسم).
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للنساء العربيات - أداة إعلامية | المراجع: WHO EMRO، وزارة الصحة السعودية، MOHAP الإمارات</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCMaraa;
