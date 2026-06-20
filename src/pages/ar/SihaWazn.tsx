import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const SihaWazn = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
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
            الصحة والعافية
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">الصحة والوزن</span> : دليل شامل للوزن الصحي
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فهم العلاقة بين الوزن ومؤشر كتلة الجسم والصحة العامة
          </p>
        </header>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">الوزن والصحة: علاقة معقدة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>الوزن</strong> هو مجرد مؤشر واحد من بين مؤشرات أخرى لحالتك الصحية. <strong>الوزن الصحي</strong> يعتمد على عوامل كثيرة: الوراثة، نوع الجسم، النشاط البدني، التغذية، النوم والصحة النفسية.</p>
              <p>الهوس برقم الميزان يمكن أن يكون عكسياً. الأهم هو التركيز على <strong>عادات الحياة الصحية</strong> بدلاً من وزن محدد كهدف. الصحة لا تُقاس بالكيلوغرامات فقط.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">المخاطر المرتبطة بالوزن</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">مخاطر زيادة الوزن والسمنة</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>أمراض القلب والأوعية الدموية (نوبة قلبية، سكتة)</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>السكري من النوع الثاني</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>ارتفاع ضغط الدم</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>انقطاع النفس أثناء النوم</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>بعض أنواع السرطان</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>مشاكل المفاصل</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">مخاطر نقص الوزن</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>نقص التغذية</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>ضعف جهاز المناعة</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>هشاشة العظام</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>اضطرابات هرمونية</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>إرهاق مزمن</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>مشاكل الخصوبة</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">الركائز الخمس للوزن الصحي</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-green-500/10"><Apple className="w-6 h-6 text-green-500" /></div><h3 className="font-bold">التغذية</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>فضّل الأطعمة غير المصنعة</li>
                  <li>تناول الخضروات مع كل وجبة</li>
                  <li>قلل السكريات المضافة</li>
                  <li>حافظ على ترطيب جيد</li>
                  <li>استمع لإشارات الجوع والشبع</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-orange-500/10"><Activity className="w-6 h-6 text-orange-500" /></div><h3 className="font-bold">النشاط البدني</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 دقيقة نشاط معتدل/أسبوع</li>
                  <li>أضف تمارين القوة</li>
                  <li>تحرك بانتظام طوال اليوم</li>
                  <li>اختر نشاطاً تستمتع به</li>
                  <li>تقدم تدريجياً</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-purple-500/10"><Moon className="w-6 h-6 text-purple-500" /></div><h3 className="font-bold">النوم</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>نم 7-9 ساعات في الليلة</li>
                  <li>جدول منتظم</li>
                  <li>تجنب الشاشات قبل النوم</li>
                  <li>غرفة باردة ومظلمة</li>
                  <li>نقص النوم يعزز زيادة الوزن</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-blue-500/10"><Brain className="w-6 h-6 text-blue-500" /></div><h3 className="font-bold">الصحة النفسية</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>أدر توترك</li>
                  <li>تجنب الأكل العاطفي</li>
                  <li>مارس الوعي الذاتي</li>
                  <li>تقبل جسمك</li>
                  <li>اطلب المساعدة عند الحاجة</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-pink-500/10"><Heart className="w-6 h-6 text-pink-500" /></div><h3 className="font-bold">المتابعة الطبية</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>فحص صحي سنوي</li>
                  <li>متابعة محيط الخصر</li>
                  <li>فحص الضغط والسكر والكوليسترول</li>
                  <li>استشر أخصائي تغذية عند الحاجة</li>
                  <li>لا تتبع حميات متطرفة</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-success/10"><TrendingUp className="w-6 h-6 text-success" /></div><h3 className="font-bold">التقدم</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>ضع أهدافاً واقعية</li>
                  <li>حد أقصى 0.5-1 كغ/أسبوع</li>
                  <li>احتفل بالانتصارات الصغيرة</li>
                  <li>الاستمرارية فوق الشدة</li>
                  <li>فكر على المدى الطويل</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">نصائح للوزن الصحي</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">ما ينجح</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>تغييرات <strong>تدريجية ومستدامة</strong> في العادات</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>نظام غذائي <strong>متوازن</strong> بدون تقييد شديد</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>نشاط بدني <strong>منتظم وممتع</strong></span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>نوم <strong>جيد</strong> (7-8 ساعات/ليلة)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>إدارة <strong>التوتر</strong> والعواطف</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>متابعة <strong>متخصصة</strong> عند الحاجة</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">ما لا ينجح</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>الحميات <strong>القاسية</strong> والمقيدة</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>المكملات <strong>المعجزة</strong> وحبوب التنحيف</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>وزن نفسك <strong>كل يوم</strong> (تغيرات طبيعية)</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>أهداف <strong>غير واقعية</strong> لفقدان الوزن</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>مقارنة جسمك <strong>بالآخرين</strong></span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>تجاهل إشارات <strong>الجوع/الشبع</strong></span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arab World Health Context */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10">
                <Globe className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">أزمة السمنة في العالم العربي: أرقام مقلقة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>يواجه العالم العربي أزمة سمنة حادة تُعدّ من الأخطر عالمياً. وفقاً لبيانات منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط (WHO EMRO)، فإن منطقة الشرق الأوسط وشمال أفريقيا تسجّل من أعلى معدلات السمنة في العالم. تتصدر <strong>الكويت</strong> القائمة بنسبة سمنة تبلغ <strong>37.9%</strong> من السكان البالغين، تليها <strong>المملكة العربية السعودية</strong> بنسبة <strong>35.4%</strong>، ثم <strong>قطر</strong> بنسبة <strong>35.1%</strong>. هذه الأرقام تضع دول الخليج العربي ضمن أعلى عشر دول سمنةً على مستوى العالم.</p>
              <p>الوضع في <strong>مصر</strong> مقلق أيضاً، حيث تشير بيانات وزارة الصحة والسكان المصرية إلى أن نسبة زيادة الوزن والسمنة مجتمعتَيْن تتجاوز <strong>60%</strong> بين البالغين، مع ارتفاع ملحوظ بين النساء. أطلقت الوزارة حملات توعوية متعددة لمكافحة هذه الظاهرة، تشمل برامج التغذية المدرسية وحملات إعلامية حول مخاطر السمنة وأهمية النشاط البدني.</p>
              <p>تختلف أنماط السمنة بين <strong>شمال أفريقيا</strong> و<strong>دول الخليج</strong> اختلافاً ملحوظاً. ففي دول المغرب العربي (المغرب، الجزائر، تونس)، لا تزال التقاليد الغذائية المتوسطية حاضرة نسبياً - مع الاعتماد على زيت الزيتون والبقوليات والخضروات والحبوب الكاملة - مما يخفف من حدة المشكلة مقارنةً بدول الخليج. إلا أن التحضر السريع وانتشار الوجبات السريعة بدأ يُضعف هذا التأثير الوقائي. في المقابل، شهدت دول الخليج تحولاً غذائياً دراماتيكياً خلال العقود الخمسة الأخيرة، مع التخلي التدريجي عن النظام الغذائي التقليدي لصالح الأغذية المصنعة والمشروبات السكرية والوجبات عالية السعرات.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">العوامل الثقافية والاجتماعية في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>تلعب <strong>العوامل الثقافية</strong> دوراً محورياً في أزمة السمنة بالعالم العربي. في دول الخليج بشكل خاص، أدى الازدهار الاقتصادي السريع إلى نمط حياة يتسم بالخمول البدني الشديد. المدن الخليجية مصممة أساساً للسيارات، مما يجعل المشي وسيلة تنقل شبه مستحيلة في كثير من الأحيان. درجات الحرارة المرتفعة التي تتجاوز 45 درجة مئوية صيفاً تدفع السكان للبقاء في بيئات مكيفة معظم العام، مما يقلل بشكل كبير من مستويات النشاط البدني اليومي.</p>
              <p>ثقافة <strong>الكرم والضيافة العربية</strong> ترتبط تقليدياً بتقديم الطعام بكميات وفيرة. رفض الطعام المقدم من المضيف يُعتبر في كثير من الثقافات العربية أمراً غير لائق، مما يؤدي إلى الإفراط في تناول الطعام في المناسبات الاجتماعية. كذلك، فإن التجمعات العائلية والاجتماعية المتكررة - وهي ركيزة أساسية في المجتمع العربي - غالباً ما تتمحور حول وجبات دسمة وحلويات عربية غنية بالسكر والدهون.</p>
              <p>من العوامل المهمة أيضاً <strong>محدودية النشاط البدني لدى النساء</strong> في بعض المجتمعات العربية. القيود الاجتماعية والثقافية على ممارسة الرياضة في الأماكن العامة، ونقص المرافق الرياضية المخصصة للنساء، تساهم في ارتفاع معدلات السمنة بين النساء العربيات بشكل ملحوظ مقارنة بالرجال. إلا أن هذا الوضع يتغير بسرعة، خاصة في المملكة العربية السعودية والإمارات، حيث تُشجع الحكومات بنشاط مشاركة المرأة في الرياضة.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-teal-500/10">
                <Stethoscope className="w-6 h-6 text-teal-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">المبادرات الحكومية لمكافحة السمنة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>تضع <strong>رؤية السعودية 2030</strong> الصحة العامة في صدارة أولوياتها. أطلقت المملكة العربية السعودية برنامج جودة الحياة ضمن الرؤية، والذي يهدف إلى رفع نسبة ممارسة الرياضة بين السكان من 13% إلى 40%. كما فرضت وزارة الصحة السعودية ضريبة على المشروبات الغازية (50%) ومشروبات الطاقة (100%)، وأنشأت مسارات للمشي والدراجات في المدن الكبرى. برنامج "عيش بصحة" التابع لوزارة الصحة السعودية يقدم إرشادات غذائية مصممة خصيصاً للسياق السعودي.</p>
              <p>في <strong>الإمارات العربية المتحدة</strong>، أطلقت وزارة الصحة ووقاية المجتمع (MOHAP) الاستراتيجية الوطنية للتغذية 2022-2030، التي تهدف إلى خفض معدلات السمنة بنسبة 15%. فرضت الإمارات ضرائب على السكر والدهون المشبعة في المنتجات الغذائية، وأطلقت مبادرة "صحتك ثروتك" لتعزيز الوعي الغذائي. دبي وأبوظبي تنافستا في إنشاء بنية تحتية رياضية متطورة، بما في ذلك حدائق عامة مجهزة بمعدات رياضية مجانية ومسارات جري مكيفة.</p>
              <p>على المستوى الإقليمي، يعمل <strong>المكتب الإقليمي لمنظمة الصحة العالمية لشرق المتوسط (WHO EMRO)</strong> على دعم الدول الأعضاء في تطوير سياسات مكافحة السمنة. يتضمن ذلك تقديم إرشادات حول وضع العلامات الغذائية، وتنظيم إعلانات الأغذية غير الصحية الموجهة للأطفال، وتعزيز التثقيف الغذائي في المدارس. كما يدعم المكتب الإقليمي جهود الدول في رصد ومراقبة معدلات السمنة وعوامل الخطر المرتبطة بها.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10">
                <BookOpen className="w-6 h-6 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">رمضان وإدارة الوزن: بين المفاهيم الخاطئة والنصائح العلمية</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>يُعدّ <strong>شهر رمضان</strong> فترة فريدة من نوعها من الناحية الغذائية والصحية. يعتقد كثيرون أن الصيام يؤدي تلقائياً إلى فقدان الوزن، لكن الدراسات العلمية في المنطقة العربية تُظهر أن كثيراً من الصائمين يزيد وزنهم خلال رمضان بسبب الإفراط في تناول الطعام عند الإفطار والسحور، وكثرة تناول الحلويات الرمضانية مثل القطايف والكنافة والمعمول.</p>
              <p>للحفاظ على وزن صحي خلال رمضان، يوصي أخصائيو التغذية في المنطقة بعدة استراتيجيات: <strong>أولاً</strong>، البدء بتناول التمر والماء ثم الانتظار قليلاً قبل الوجبة الرئيسية، مما يسمح للجسم بالشعور بالشبع تدريجياً. <strong>ثانياً</strong>، تجنب المقالي والأطعمة الدسمة قدر الإمكان، والتركيز على الشوربات والسلطات والبروتينات المشوية. <strong>ثالثاً</strong>، الاعتدال في تناول الحلويات الرمضانية وعدم اعتبارها جزءاً إلزامياً من كل وجبة إفطار.</p>
              <p>من المفاهيم الخاطئة الشائعة أيضاً أن <strong>السحور يجب أن يكون وجبة ثقيلة</strong> لتحمّل ساعات الصيام الطويلة. العكس هو الصحيح: سحور متوازن يحتوي على بروتينات وألياف ونشويات معقدة (كالشوفان والخبز الأسمر والبيض) يمنح طاقة مستدامة أفضل بكثير من وجبة دسمة ثقيلة. كما أن شرب كميات كافية من الماء بين الإفطار والسحور أمر بالغ الأهمية، خاصة في الصيف حيث قد تمتد ساعات الصيام إلى أكثر من 15 ساعة في بعض الدول العربية.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-lime-500/10">
                <Apple className="w-6 h-6 text-lime-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">النظام الغذائي العربي التقليدي: كنز صحي مهمل</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>يمتلك العالم العربي تراثاً غذائياً غنياً يتميز بعناصر صحية عديدة. النظام الغذائي التقليدي في بلاد الشام وشمال أفريقيا يتقاطع مع <strong>حمية البحر الأبيض المتوسط</strong> - التي تُعتبر من أصح الأنظمة الغذائية في العالم - في اعتماده على زيت الزيتون والبقوليات (الحمص، العدس، الفول) والخضروات الطازجة والأعشاب العطرية والحبوب الكاملة.</p>
              <p><strong>التمر</strong> هو أحد أهم الأغذية التقليدية العربية، وهو غني بالألياف والبوتاسيوم والمغنيسيوم ومضادات الأكسدة. تناول 2-3 تمرات يومياً يوفر طاقة طبيعية دون الإفراط في السعرات الحرارية. <strong>القهوة العربية</strong> (بدون سكر مضاف) غنية بمضادات الأكسدة وقد ربطتها الأبحاث بتحسين عملية الأيض. الهيل المضاف إلى القهوة العربية له خصائص مضادة للالتهابات ويساعد في الهضم.</p>
              <p>من الأطباق التقليدية الصحية: <strong>الفتوش</strong> و<strong>التبولة</strong> (سلطات غنية بالخضروات والأعشاب)، <strong>الحمص بالطحينة</strong> (مصدر ممتاز للبروتين النباتي والدهون الصحية)، <strong>الفول المدمس</strong> (غني بالبروتين والألياف)، و<strong>المجدرة</strong> (العدس مع الأرز أو البرغل). هذه الأطباق توفر تغذية متوازنة بتكلفة منخفضة. التحدي الحقيقي ليس في ابتكار نظام غذائي جديد، بل في العودة إلى هذا التراث الغذائي الغني والابتعاد عن الوجبات السريعة والأغذية المصنعة التي غزت الأسواق العربية.</p>
              <p>يؤكد خبراء التغذية في المنطقة أن <strong>التحول الغذائي</strong> الذي شهدته الدول العربية خلال العقود الأخيرة هو السبب الرئيسي لارتفاع معدلات السمنة. فقد تراجع استهلاك البقوليات والخضروات والفواكه الطازجة لصالح الوجبات السريعة والمشروبات الغازية والحلويات المصنعة. إعادة الاعتبار للمطبخ العربي الأصيل، مع تعديلات بسيطة في طرق الطهي (كالشوي بدل القلي، وتقليل الزيت والسمن)، يمكن أن يكون الخطوة الأولى نحو نمط غذائي أكثر صحة يتوافق مع الذوق المحلي والتقاليد الثقافية.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">نحو مستقبل صحي: توصيات عملية للعالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>بناءً على توصيات منظمة الصحة العالمية لإقليم شرق المتوسط ووزارات الصحة في الدول العربية، إليك خطوات عملية مناسبة للسياق العربي:</p>
              <ul className="space-y-3 mr-4">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>أعد اكتشاف المطبخ التقليدي:</strong> استبدل الوجبات السريعة بأطباق عربية صحية مثل شوربة العدس والفتوش والمشاوي. هذه الأطعمة لذيذة ومغذية ومتجذرة في ثقافتنا.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>تحرّك رغم الحرارة:</strong> استغل الصباح الباكر أو المساء للمشي والرياضة. استخدم المراكز التجارية المكيفة للمشي في أشهر الصيف الحارة. خصص وقتاً للتمارين المنزلية.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>اعتدل في المناسبات:</strong> يمكنك الاستمتاع بالمناسبات الاجتماعية دون إفراط. اختر الأطباق الصحية أولاً، وتناول حصة صغيرة من الحلويات بدلاً من حرمان نفسك تماماً.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>قلّل المشروبات السكرية:</strong> استبدل المشروبات الغازية والعصائر المحلاة بالماء والشاي الأخضر واللبن. المشروبات السكرية هي أكبر مصدر خفي للسعرات الزائدة في النظام الغذائي العربي الحديث.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>استثمر في صحة أطفالك:</strong> السمنة في مرحلة الطفولة مشكلة متنامية في العالم العربي. شجّع أطفالك على النشاط البدني، وقلّل وقت الشاشات، وقدم لهم وجبات صحية في المنزل والمدرسة.</span></li>
              </ul>
              <p>تذكّر أن <strong>الهدف ليس الوصول إلى جسم مثالي</strong>، بل تبني نمط حياة صحي ومستدام يناسب ثقافتنا وبيئتنا. التغيير التدريجي أفضل من الحميات القاسية، والاستمرارية أهم من السرعة. صحتك أمانة، فحافظ عليها.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">الصحة والوزن: الأساسيات</h2>
            <div className="text-muted-foreground space-y-4">
              <p>الحفاظ على <strong>وزن صحي</strong> مهم لعافيتك العامة. العلاقة بين <strong>الوزن والصحة</strong> معقدة وتعتمد على عوامل كثيرة. <strong>مؤشر كتلة الجسم</strong> هو مجرد مؤشر واحد من بين مؤشرات أخرى.</p>
              <p>لـ<strong>فقدان الوزن بصحة</strong> أو <strong>الحفاظ على الوزن</strong>، فضّل نهجاً شاملاً: تغذية متوازنة، نشاط بدني منتظم، نوم كافٍ وإدارة التوتر. تجنب حميات اليويو الضارة بالصحة.</p>
              <p><strong>نمط الحياة الصحي</strong> أهم من رقم على الميزان. ركز على <strong>العادات اليومية</strong> بدلاً من الوزن. عند الشك، استشر متخصصاً للحصول على دعم شخصي.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك</h3>
            <p className="text-muted-foreground mb-6">المؤشر الأول لتقييم وزنك الصحي</p>
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

export default SihaWazn;
