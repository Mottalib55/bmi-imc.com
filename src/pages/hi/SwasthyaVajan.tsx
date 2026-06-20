import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2, BookOpen, Globe, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const SwasthyaVajan = () => {
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
            स्वास्थ्य और कल्याण
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">स्वास्थ्य और वजन</span> : संपूर्ण कल्याण मार्गदर्शिका
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            वजन, बीएमआई और समग्र स्वास्थ्य के बीच संबंध को समझें
          </p>
        </header>

        <div className="space-y-8">
          {/* परिचय */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">वजन और स्वास्थ्य : एक जटिल संबंध</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>वजन</strong> आपके स्वास्थ्य की स्थिति का केवल एक संकेतक है।
                एक <strong>स्वस्थ वजन</strong> कई कारकों पर निर्भर करता है: आनुवंशिकी, शरीर की बनावट, शारीरिक गतिविधि,
                आहार, नींद और मानसिक स्वास्थ्य।
              </p>
              <p>
                तराजू पर अंकों का जुनून उल्टा असर कर सकता है। किसी निश्चित लक्ष्य वजन की तुलना में
                <strong> स्वस्थ जीवनशैली की आदतों</strong> पर ध्यान केंद्रित करना अधिक महत्वपूर्ण है।
                स्वास्थ्य केवल किलोग्राम में नहीं मापा जाता।
              </p>
            </div>
          </div>

          {/* स्वास्थ्य जोखिम */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">वजन से जुड़े जोखिम</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">अधिक वजन और मोटापे के जोखिम</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>हृदय रोग (दिल का दौरा, स्ट्रोक)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>टाइप 2 मधुमेह</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>उच्च रक्तचाप</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>स्लीप एपनिया</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>कुछ प्रकार के कैंसर</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>जोड़ों की समस्याएं</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">कम वजन के जोखिम</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>पोषण संबंधी कमियां</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>कमजोर प्रतिरक्षा प्रणाली</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>ऑस्टियोपोरोसिस</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>हार्मोनल विकार</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>पुरानी थकान</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>प्रजनन संबंधी समस्याएं</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* स्वस्थ वजन के 5 स्तंभ */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">स्वस्थ वजन के 5 स्तंभ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">पोषण</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>असंसाधित खाद्य पदार्थों को प्राथमिकता दें</li>
                  <li>हर भोजन में सब्जियां शामिल करें</li>
                  <li>अतिरिक्त चीनी सीमित करें</li>
                  <li>पर्याप्त पानी पिएं</li>
                  <li>भूख और तृप्ति के संकेतों को सुनें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">शारीरिक गतिविधि</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>प्रति सप्ताह 150 मिनट मध्यम गतिविधि</li>
                  <li>मांसपेशियों को मजबूत करने वाले व्यायाम शामिल करें</li>
                  <li>दिन भर नियमित रूप से चलें-फिरें</li>
                  <li>ऐसी गतिविधि खोजें जो आपको पसंद हो</li>
                  <li>धीरे-धीरे प्रगति करें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">नींद</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>प्रति रात 7-9 घंटे सोएं</li>
                  <li>नियमित समय पर सोएं और जागें</li>
                  <li>सोने से पहले स्क्रीन से बचें</li>
                  <li>कमरा ठंडा और अंधेरा रखें</li>
                  <li>नींद की कमी वजन बढ़ने को बढ़ावा देती है</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">मानसिक स्वास्थ्य</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>अपने तनाव को प्रबंधित करें</li>
                  <li>भावनात्मक खान-पान से बचें</li>
                  <li>माइंडफुलनेस का अभ्यास करें</li>
                  <li>अपने शरीर को स्वीकार करें</li>
                  <li>जरूरत पड़ने पर विशेषज्ञ से परामर्श लें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">चिकित्सा देखभाल</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>वार्षिक स्वास्थ्य जांच</li>
                  <li>कमर की परिधि पर नज़र रखें</li>
                  <li>रक्तचाप, रक्त शर्करा, कोलेस्ट्रॉल की जांच</li>
                  <li>जरूरत पड़ने पर पोषण विशेषज्ञ से मिलें</li>
                  <li>अत्यधिक डाइट का पालन न करें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">प्रगति</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>यथार्थवादी लक्ष्य निर्धारित करें</li>
                  <li>अधिकतम 0.5-1 किग्रा/सप्ताह</li>
                  <li>छोटी सफलताओं का जश्न मनाएं</li>
                  <li>निरंतरता तीव्रता से अधिक महत्वपूर्ण है</li>
                  <li>दीर्घकालिक सोचें</li>
                </ul>
              </div>
            </div>
          </div>

          {/* स्वस्थ वजन के सुझाव */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">स्वस्थ वजन के लिए सुझाव</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">क्या काम करता है</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>आदतों में <strong>क्रमिक और स्थायी</strong> बदलाव</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>संतुलित</strong> आहार, अत्यधिक प्रतिबंध नहीं</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>नियमित और आनंददायक</strong> शारीरिक गतिविधि</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>गुणवत्तापूर्ण</strong> नींद (7-8 घंटे/रात)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>तनाव</strong> और भावनाओं का प्रबंधन</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>जरूरत पड़ने पर <strong>विशेषज्ञ</strong> से परामर्श</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">क्या काम नहीं करता</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>कठोर</strong> और प्रतिबंधात्मक डाइट</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>चमत्कारी</strong> सप्लीमेंट और वजन घटाने की गोलियां</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>हर दिन</strong> वजन तौलना (सामान्य उतार-चढ़ाव)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>वजन घटाने के <strong>अवास्तविक</strong> लक्ष्य</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>अपने शरीर की <strong>दूसरों</strong> से तुलना करना</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>भूख/तृप्ति</strong> के संकेतों को अनदेखा करना</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* भारत में कुपोषण का दोहरा बोझ */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत में कुपोषण का दोहरा बोझ</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत दुनिया के उन अनोखे देशों में से एक है जो <strong>कुपोषण के दोहरे बोझ</strong> का सामना कर रहा है।
                एक ओर जहां <strong>राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण (NFHS-5, 2019-21)</strong> के अनुसार लगभग
                <strong> 15.1% वयस्क कम वजन</strong> की श्रेणी में आते हैं, वहीं दूसरी ओर <strong>40.3% वयस्क अधिक वजन
                या मोटापे</strong> से ग्रस्त हैं। यह विरोधाभासी स्थिति भारत की जटिल पोषण चुनौतियों को दर्शाती है।
              </p>
              <p>
                <strong>ICMR (भारतीय आयुर्विज्ञान अनुसंधान परिषद)</strong> और <strong>NIN (राष्ट्रीय पोषण संस्थान, हैदराबाद)</strong> के
                शोध के अनुसार, भारत में ग्रामीण क्षेत्रों में कुपोषण और शहरी क्षेत्रों में मोटापा एक साथ बढ़ रहा है।
                महानगरों जैसे दिल्ली, मुंबई, बेंगलुरु और हैदराबाद में मोटापे की दर ग्रामीण क्षेत्रों की तुलना में
                <strong> दोगुनी से भी अधिक</strong> है। शहरी जीवनशैली — बैठे-बैठे काम करना, फास्ट फूड का बढ़ता सेवन,
                और शारीरिक गतिविधि में कमी — इसके प्रमुख कारण हैं।
              </p>
              <p>
                <strong>WHO SEARO (विश्व स्वास्थ्य संगठन, दक्षिण-पूर्व एशिया क्षेत्रीय कार्यालय)</strong> ने भारत को
                इस दोहरे बोझ से निपटने के लिए एक समेकित रणनीति अपनाने की सिफारिश की है जो एक साथ कुपोषण और
                अतिपोषण दोनों को संबोधित करे। ग्रामीण भारत में सूक्ष्म पोषक तत्वों की कमी (विशेषकर आयरन, विटामिन डी,
                और विटामिन बी12) एक गंभीर समस्या बनी हुई है, जबकि शहरी भारत में अत्यधिक कैलोरी सेवन और
                परिष्कृत खाद्य पदार्थों का बढ़ता उपभोग चिंता का विषय है।
              </p>
            </div>
          </div>

          {/* भारतीय BMI मानदंड */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीयों के लिए विशेष BMI मानदंड</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                अंतरराष्ट्रीय BMI वर्गीकरण में <strong>25 से ऊपर अधिक वजन</strong> और <strong>30 से ऊपर मोटापा</strong> माना
                जाता है। लेकिन <strong>WHO और ICMR</strong> ने एशियाई आबादी, विशेषकर भारतीयों, के लिए <strong>कम कटऑफ
                मान</strong> की सिफारिश की है। भारतीयों में <strong>BMI 23 को अधिक वजन</strong> और <strong>BMI 25 को
                मोटापे</strong> की सीमा माना जाना चाहिए।
              </p>
              <p>
                इसका कारण यह है कि <strong>दक्षिण एशियाई आनुवंशिक रूप से</strong> समान BMI पर भी पश्चिमी आबादी की
                तुलना में <strong>अधिक शरीर वसा और पेट की चर्बी</strong> जमा करते हैं। भारतीयों में
                <strong> "पतले बाहर, मोटे अंदर" (TOFI — Thin Outside, Fat Inside)</strong> की प्रवृत्ति आम है, जिसमें
                व्यक्ति सामान्य वजन का दिखता है लेकिन आंतरिक अंगों के आसपास खतरनाक मात्रा में वसा जमा होती है।
                यही कारण है कि भारत को <strong>"मधुमेह की विश्व राजधानी"</strong> कहा जाता है — भारतीयों में कम BMI पर
                भी <strong>मेटाबॉलिक सिंड्रोम, टाइप 2 मधुमेह और हृदय रोग</strong> का खतरा काफी अधिक होता है।
              </p>
              <p>
                <strong>ICMR-NIN</strong> के अनुसार, भारतीय पुरुषों के लिए कमर की परिधि <strong>90 सेमी से कम</strong> और
                महिलाओं के लिए <strong>80 सेमी से कम</strong> होनी चाहिए। इससे अधिक होने पर पेट के मोटापे और उससे
                जुड़े चयापचय संबंधी रोगों का खतरा बढ़ जाता है। केवल BMI पर निर्भर न रहें — कमर-कूल्हे
                का अनुपात (WHR) और कमर की परिधि भारतीयों के लिए अधिक सटीक संकेतक हैं।
              </p>
            </div>
          </div>

          {/* ICMR-NIN आहार दिशानिर्देश */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-600/10">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">ICMR-NIN आहार दिशानिर्देश (2024 अपडेट)</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>ICMR-NIN ने 2024 में "भारतीयों के लिए आहार दिशानिर्देश"</strong> का अद्यतन संस्करण जारी किया है।
                ये दिशानिर्देश भारत की विविध खाद्य संस्कृति और पोषण आवश्यकताओं को ध्यान में रखते हुए तैयार किए गए हैं।
                प्रमुख सिफारिशों में शामिल हैं:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>प्रतिदिन <strong>कम से कम 400 ग्राम फल और सब्जियां</strong> खाएं — मौसमी और स्थानीय उपज को प्राथमिकता दें</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>साबुत अनाज</strong> (गेहूं, ज्वार, बाजरा, रागी, जौ) को परिष्कृत अनाज (मैदा) की जगह चुनें</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>दालें, फलियां और अंकुरित अनाज</strong> को प्रतिदिन आहार में शामिल करें — ये प्रोटीन के सस्ते और सुलभ स्रोत हैं</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span>तेल का सेवन <strong>प्रतिदिन 25-30 ग्राम</strong> तक सीमित रखें और विभिन्न तेलों (सरसों, तिल, मूंगफली, नारियल) का बारी-बारी उपयोग करें</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>नमक 5 ग्राम/दिन से कम</strong> और <strong>चीनी 25 ग्राम/दिन से कम</strong> रखें — अचार, पापड़ और प्रसंस्कृत खाद्य में छिपे नमक से सावधान रहें</span>
                </li>
              </ul>
              <p>
                NIN ने विशेष रूप से <strong>मिलेट्स (मोटे अनाज)</strong> जैसे रागी, ज्वार, बाजरा, कोदो और सांवा के सेवन को
                बढ़ावा दिया है। ये अनाज न केवल पोषक तत्वों से भरपूर हैं बल्कि <strong>कम ग्लाइसेमिक इंडेक्स</strong> वाले
                होने के कारण मधुमेह प्रबंधन और वजन नियंत्रण में भी सहायक हैं। 2023 को संयुक्त राष्ट्र द्वारा
                <strong> "अंतरराष्ट्रीय मिलेट वर्ष"</strong> घोषित किया गया था, जो भारत की पहल पर हुआ।
              </p>
            </div>
          </div>

          {/* भारतीय क्षेत्रीय आहार विविधता */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Apple className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय क्षेत्रीय आहार और स्वस्थ वजन</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत की सबसे बड़ी ताकत उसकी <strong>खाद्य विविधता</strong> है। हर क्षेत्र की अपनी अनूठी खाद्य परंपरा है
                जो सदियों से स्थानीय जलवायु और उपलब्ध सामग्री के अनुसार विकसित हुई है। स्वस्थ वजन बनाए रखने के
                लिए इन पारंपरिक आहार पद्धतियों को समझना और अपनाना महत्वपूर्ण है:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-2">दक्षिण भारतीय थाली</h4>
                  <p className="text-sm">
                    चावल, सांभर, रसम, दही, सब्जी और पापड़ — यह संतुलित थाली <strong>कार्बोहाइड्रेट, प्रोटीन (दाल से),
                    प्रोबायोटिक्स (दही)</strong> और विटामिन्स का उत्कृष्ट संयोजन है। रागी दोसा और इडली जैसे किण्वित
                    खाद्य पदार्थ पाचन स्वास्थ्य के लिए लाभकारी हैं। नारियल तेल और करी पत्ता स्वस्थ वसा प्रदान करते हैं।
                  </p>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-2">उत्तर भारतीय रोटी-सब्जी</h4>
                  <p className="text-sm">
                    गेहूं की रोटी, दाल, हरी सब्जियां और सलाद — यह <strong>फाइबर और जटिल कार्बोहाइड्रेट</strong> से भरपूर
                    आहार है। हालांकि, अत्यधिक घी, मक्खन और तले हुए खाद्य पदार्थों (पराठे, पूरी, समोसे) से बचना
                    चाहिए। सरसों का साग, चने की दाल और मिश्रित सब्जियां पोषक तत्वों से भरपूर विकल्प हैं।
                  </p>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-2">बंगाली मछली-आधारित आहार</h4>
                  <p className="text-sm">
                    मछली <strong>ओमेगा-3 फैटी एसिड और उच्च गुणवत्ता प्रोटीन</strong> का उत्कृष्ट स्रोत है। बंगाली
                    आहार में माछेर झोल (मछली का शोरबा), शुक्तो (मिश्रित सब्जी), और पांच फोड़न (पांच मसालों का
                    तड़का) हृदय स्वास्थ्य के लिए फायदेमंद हैं। हालांकि, मिठाइयों (रसगुल्ला, संदेश) का सेवन सीमित रखें।
                  </p>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-2">गुजराती शाकाहारी आहार</h4>
                  <p className="text-sm">
                    गुजरात की <strong>पूर्ण शाकाहारी परंपरा</strong> में दाल, कढ़ी, शाक (सब्जी), रोटला (बाजरे की रोटी),
                    और ढोकला जैसे किण्वित खाद्य शामिल हैं। बाजरा, तुअर दाल और छाछ का नियमित सेवन
                    <strong> कैल्शियम, आयरन और प्रोटीन</strong> की आपूर्ति सुनिश्चित करता है। यह आहार वजन प्रबंधन
                    के लिए आदर्श हो सकता है यदि तेल और चीनी को नियंत्रित रखा जाए।
                  </p>
                </div>
              </div>
              <p>
                भारत की लगभग <strong>30% आबादी शाकाहारी</strong> है — यह विश्व में सबसे अधिक अनुपात है। शाकाहारी
                आहार में <strong>प्रोटीन पर्याप्तता</strong> सबसे बड़ी चिंता है। ICMR अनुशंसा करता है कि शाकाहारी लोग
                <strong> दालें, सोयाबीन, पनीर, दूध, दही, मेवे और बीज</strong> को नियमित रूप से आहार में शामिल करें।
                अनाज और दाल का संयोजन (जैसे खिचड़ी, दाल-चावल) <strong>पूर्ण प्रोटीन</strong> प्रदान करता है क्योंकि
                दोनों के एमिनो एसिड एक-दूसरे की कमी पूरी करते हैं।
              </p>
            </div>
          </div>

          {/* आयुर्वेद और वजन प्रबंधन */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-600/10">
                <Stethoscope className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुर्वेद और वजन प्रबंधन</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>आयुष मंत्रालय (Ministry of Ayush)</strong> द्वारा मान्यता प्राप्त <strong>आयुर्वेद</strong> भारत की
                प्राचीन चिकित्सा पद्धति है जो वजन प्रबंधन के लिए एक समग्र दृष्टिकोण प्रदान करती है। आयुर्वेद के अनुसार,
                प्रत्येक व्यक्ति की <strong>प्रकृति (शरीर संरचना)</strong> अलग होती है — <strong>वात, पित्त और कफ</strong> —
                और आहार तथा जीवनशैली को इसी प्रकृति के अनुसार अनुकूलित करना चाहिए।
              </p>
              <p>
                <strong>कफ प्रकृति</strong> के लोगों में वजन बढ़ने की प्रवृत्ति अधिक होती है और उन्हें हल्का, गर्म और
                सूखा भोजन पसंद करना चाहिए। <strong>वात प्रकृति</strong> के लोग प्रायः दुबले-पतले होते हैं और उन्हें
                पौष्टिक, गर्म और तेल युक्त भोजन की आवश्यकता होती है। <strong>पित्त प्रकृति</strong> के लोगों को
                शीतल और मध्यम भोजन से लाभ होता है।
              </p>
              <p>
                आयुर्वेदिक वजन प्रबंधन में कई पारंपरिक जड़ी-बूटियां महत्वपूर्ण भूमिका निभाती हैं।
                <strong> त्रिफला</strong> (आंवला, हरीतकी, बिभीतकी का मिश्रण) पाचन सुधारने और शरीर के विषहरण (detox)
                के लिए प्रसिद्ध है। <strong>अश्वगंधा</strong> तनाव कम करने और चयापचय को संतुलित करने में सहायक है,
                जो तनाव-जनित वजन वृद्धि को रोकने में मदद करता है। <strong>गुग्गुल</strong> को पारंपरिक रूप से
                वसा चयापचय (fat metabolism) में सहायक माना जाता है। हालांकि, इन जड़ी-बूटियों का सेवन किसी
                योग्य आयुर्वेदिक चिकित्सक की देखरेख में ही करना चाहिए।
              </p>
              <p>
                आयुर्वेद में <strong>दिनचर्या (दैनिक दिनचर्या)</strong> और <strong>ऋतुचर्या (मौसमी आहार-विहार)</strong> के
                सिद्धांत वजन प्रबंधन के लिए अत्यंत प्रासंगिक हैं। सूर्योदय से पहले उठना, दोपहर में मुख्य भोजन
                (जब पाचन अग्नि सबसे तेज होती है), और सूर्यास्त से पहले हल्का रात्रि भोजन — ये सिद्धांत
                आधुनिक क्रोनो-न्यूट्रिशन (chrono-nutrition) विज्ञान से भी मेल खाते हैं।
              </p>
            </div>
          </div>

          {/* मधुमेह और भारत */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत : मधुमेह की विश्व राजधानी और BMI का संबंध</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत में अनुमानित <strong>10 करोड़ से अधिक लोग मधुमेह</strong> से पीड़ित हैं, जो इसे दुनिया में
                मधुमेह रोगियों की सबसे बड़ी आबादी वाला देश बनाता है। <strong>ICMR-INDIAB अध्ययन</strong> के अनुसार,
                भारत के शहरी क्षेत्रों में मधुमेह की व्यापकता <strong>11.4%</strong> और ग्रामीण क्षेत्रों में
                <strong> 5.2%</strong> है। सबसे चिंताजनक बात यह है कि भारतीयों में मधुमेह <strong>पश्चिमी देशों की
                तुलना में कम BMI</strong> पर विकसित होता है।
              </p>
              <p>
                भारतीयों में <strong>आनुवंशिक रूप से इंसुलिन प्रतिरोध</strong> की प्रवृत्ति अधिक होती है। इसका अर्थ है
                कि जहां एक यूरोपीय व्यक्ति को BMI 30 पर मधुमेह का खतरा होता है, वहीं एक भारतीय को <strong>BMI 23-25
                पर ही</strong> समान स्तर का खतरा हो सकता है। यही कारण है कि ICMR और WHO ने भारतीयों के लिए
                BMI कटऑफ को कम रखने की सिफारिश की है। इसलिए अपना BMI मापते समय अंतरराष्ट्रीय मानदंड की बजाय
                <strong> एशियाई/भारतीय मानदंड</strong> का उपयोग करना अत्यंत महत्वपूर्ण है।
              </p>
            </div>
          </div>

          {/* सरकारी पहल और FSSAI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10">
                <Users className="w-6 h-6 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">सरकारी स्वास्थ्य पहल और FSSAI के प्रयास</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत सरकार ने स्वस्थ वजन और जीवनशैली को बढ़ावा देने के लिए कई महत्वपूर्ण पहल शुरू की हैं:
              </p>
              <p>
                <strong>FSSAI (भारतीय खाद्य सुरक्षा और मानक प्राधिकरण)</strong> ने <strong>"ईट राइट इंडिया" (Eat Right
                India)</strong> अभियान शुरू किया है जो नागरिकों को स्वस्थ, स्वच्छ और टिकाऊ भोजन चुनने के लिए
                प्रेरित करता है। इस पहल के तहत FSSAI ने <strong>फ्रंट-ऑफ-पैक लेबलिंग (FOPL)</strong> प्रणाली
                लागू करने का प्रस्ताव रखा है जिससे उपभोक्ता पैकेज्ड खाद्य में चीनी, नमक और वसा की मात्रा
                आसानी से पहचान सकें। <strong>"हेल्थ स्टार रेटिंग"</strong> प्रणाली भी विचाराधीन है जो खाद्य
                उत्पादों को उनकी पोषण गुणवत्ता के आधार पर 1 से 5 स्टार देगी।
              </p>
              <p>
                <strong>फिट इंडिया मूवमेंट</strong> (2019 में शुरू) शारीरिक गतिविधि और खेलकूद को दैनिक जीवन का
                अंग बनाने की एक राष्ट्रीय पहल है। इसके अंतर्गत स्कूलों, कॉलेजों और कार्यस्थलों पर फिटनेस
                गतिविधियों को बढ़ावा दिया जाता है। <strong>आयुष्मान भारत योजना</strong> देश के 50 करोड़ से अधिक
                नागरिकों को प्रति परिवार 5 लाख रुपये तक का मुफ्त स्वास्थ्य बीमा प्रदान करती है, जिससे मोटापे
                और उससे जुड़ी बीमारियों का इलाज सुलभ हो रहा है।
              </p>
              <p>
                <strong>आयुष मंत्रालय</strong> ने <strong>"Y-Break" (योग ब्रेक)</strong> प्रोटोकॉल विकसित किया है —
                कार्यस्थल पर 5 मिनट का योग अभ्यास जो बैठे-बैठे काम करने से होने वाले दुष्प्रभावों को कम करता है।
                सूर्य नमस्कार, प्राणायाम और ध्यान जैसी भारतीय पद्धतियां वजन प्रबंधन में सहायक सिद्ध हुई हैं
                और WHO ने भी इन्हें शारीरिक गतिविधि के वैध रूपों के रूप में मान्यता दी है।
              </p>
            </div>
          </div>

          {/* SEO सामग्री */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">स्वास्थ्य और वजन : सार</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>स्वस्थ वजन</strong> बनाए रखना आपके समग्र कल्याण के लिए महत्वपूर्ण है। <strong>वजन और
                स्वास्थ्य</strong> के बीच का संबंध जटिल है और कई कारकों पर निर्भर करता है। <strong>बीएमआई</strong> यह
                मूल्यांकन करने के लिए कई संकेतकों में से एक है कि आप स्वस्थ वजन सीमा में हैं या नहीं।
              </p>
              <p>
                <strong>स्वस्थ तरीके से वजन कम करने</strong> या <strong>अपना वजन बनाए रखने</strong> के लिए, एक समग्र
                दृष्टिकोण अपनाएं: संतुलित आहार, नियमित शारीरिक गतिविधि, पर्याप्त नींद और तनाव प्रबंधन।
                यो-यो डाइटिंग से बचें क्योंकि यह स्वास्थ्य के लिए हानिकारक है।
              </p>
              <p>
                एक <strong>स्वस्थ जीवनशैली</strong> तराजू पर किसी अंक से अधिक महत्वपूर्ण है। वजन की बजाय
                <strong> जीवनशैली की आदतों</strong> पर ध्यान केंद्रित करें। संदेह होने पर, व्यक्तिगत मार्गदर्शन के
                लिए किसी स्वास्थ्य विशेषज्ञ से परामर्श लें।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">अपना बीएमआई जानें</h3>
            <p className="text-muted-foreground mb-6">
              अपने स्वस्थ वजन का मूल्यांकन करने का पहला संकेतक
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              मेरा बीएमआई जानें
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

export default SwasthyaVajan;
