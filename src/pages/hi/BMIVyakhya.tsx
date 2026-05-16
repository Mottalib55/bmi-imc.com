import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const BMIVyakhya = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            ICMR दिशानिर्देशों के अनुसार BMI व्याख्या
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI व्याख्या</span> : भारत के लिए ICMR एशियन कटऑफ
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            भारत में दोहरा बोझ — NFHS-5 के अनुसार 18.7% महिलाएँ कम वजन वाली हैं जबकि मोटापा तेज़ी से बढ़ रहा है।
            ICMR के एशियन BMI कटऑफ (सामान्य: 18.5-22.9, अधिक वजन: 23-24.9, मोटापा: ≥25) WHO मानकों से
            काफी अलग हैं — जानें क्यों यह भारतीयों के लिए महत्वपूर्ण है।
          </p>
        </header>

        <div className="space-y-8">
          {/* आपके BMI का क्या मतलब है — भारतीय संदर्भ */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय संदर्भ में आपके BMI का क्या मतलब है?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI</strong> (बॉडी मास इंडेक्स) वजन (kg) को ऊंचाई के वर्ग (m²) से भाग देकर
                निकाला जाता है। लेकिन <strong>भारतीयों के लिए WHO के मानक कटऑफ पर्याप्त नहीं हैं</strong>।
                ICMR (Indian Council of Medical Research) ने दक्षिण एशियाई शरीर संरचना के आधार पर
                अलग कटऑफ निर्धारित किए हैं क्योंकि भारतीयों में समान BMI पर पश्चिमी आबादी की
                तुलना में अधिक विसरल (visceral) वसा और उच्च चयापचय जोखिम होता है।
              </p>
              <p>
                <strong>महत्वपूर्ण:</strong> NFHS-5 (राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण, 2019-21) के
                अनुसार भारत में कुपोषण और मोटापा दोनों एक साथ बढ़ रहे हैं — इसे "दोहरा पोषण
                बोझ" (dual burden of malnutrition) कहते हैं। BMI की सही व्याख्या के लिए ICMR
                के एशियन कटऑफ का उपयोग करना आवश्यक है।
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-primary">
                  ध्यान दें: नीचे दी गई सभी श्रेणियों में WHO और ICMR दोनों कटऑफ दिखाए गए हैं।
                  भारतीय चिकित्सक आमतौर पर ICMR एशियन कटऑफ का उपयोग करते हैं।
                </p>
              </div>
            </div>
          </div>

          {/* WHO बनाम ICMR तुलना तालिका */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">श्रेणी दर श्रेणी: WHO बनाम ICMR कटऑफ</h2>
            </div>

            {/* Quick comparison table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold">श्रेणी</th>
                    <th className="text-center py-3 px-4 font-bold">WHO कटऑफ</th>
                    <th className="text-center py-3 px-4 font-bold text-primary">ICMR एशियन कटऑफ</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">कम वजन</td>
                    <td className="text-center py-3 px-4">&lt; 18.5</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">&lt; 18.5</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4">सामान्य</td>
                    <td className="text-center py-3 px-4">18.5 – 24.9</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">18.5 – 22.9</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">अधिक वजन</td>
                    <td className="text-center py-3 px-4">25 – 29.9</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">23 – 24.9</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">मोटापा</td>
                    <td className="text-center py-3 px-4">≥ 30</td>
                    <td className="text-center py-3 px-4 text-primary font-medium">≥ 25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              {/* कम वजन */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI 18.5 से कम: कम वजन — भारत में व्यापक समस्या</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  NFHS-5 के अनुसार <strong>18.7% भारतीय महिलाएँ</strong> और <strong>16.2% भारतीय पुरुष</strong> कम
                  वजन की श्रेणी में आते हैं — यह वैश्विक औसत (~8-9%) से दोगुने से भी अधिक है। ग्रामीण
                  क्षेत्रों, आदिवासी समुदायों और निम्न आय वर्ग में यह दर और भी अधिक है।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• अपर्याप्त कैलोरी और प्रोटीन सेवन — दाल, अंडे, दूध की कमी</li>
                  <li>• आयरन, विटामिन B12, फोलिक एसिड की कमी — एनीमिया का उच्च जोखिम</li>
                  <li>• गर्भवती महिलाओं में कम वजन से शिशु में जन्म के समय कम वजन (LBW) का खतरा</li>
                  <li>• संक्रामक रोगों (TB, डायरिया) के प्रति कमज़ोर प्रतिरक्षा</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  सलाह: PHC या जिला अस्पताल में पोषण परामर्श लें। ICDS (आंगनवाड़ी) और मिड-डे मील जैसी
                  सरकारी योजनाओं का लाभ उठाएँ। डॉक्टर से मिलकर कारण की पहचान करें।
                </p>
              </div>

              {/* सामान्य वजन */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI 18.5 – 22.9 (ICMR): सामान्य वजन</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>ICMR के अनुसार भारतीयों के लिए सामान्य BMI 18.5 से 22.9 तक है</strong>, न कि
                  WHO का 24.9 तक। यह अंतर इसलिए है क्योंकि दक्षिण एशियाई लोगों में 23 के BMI पर
                  ही चयापचय संबंधी जोखिम शुरू हो जाते हैं। WHO के अनुसार यह 18.5-24.9 होता है।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• हृदय रोग और मधुमेह का न्यूनतम जोखिम</li>
                  <li>• अच्छा ऊर्जा संतुलन और प्रतिरक्षा प्रणाली</li>
                  <li>• लक्ष्य: इस सीमा में वजन बनाए रखें — संतुलित भारतीय थाली अपनाएँ</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  सलाह: नियमित शारीरिक गतिविधि (योग, पैदल चलना, या व्यायाम) जारी रखें। साल में एक बार
                  HbA1c और लिपिड प्रोफाइल की जाँच कराएँ — भारतीयों में "सामान्य" BMI पर भी मधुमेह का खतरा
                  रहता है।
                </p>
              </div>

              {/* अधिक वजन — ICMR */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI 23 – 24.9 (ICMR): अधिक वजन — चेतावनी क्षेत्र</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>WHO के अनुसार BMI 23-24.9 "सामान्य" है, लेकिन ICMR इसे "अधिक वजन" मानता है।</strong> अनुसंधान
                  दिखाता है कि इस सीमा में बहुत से भारतीयों में पहले से ही इंसुलिन प्रतिरोध, उच्च ट्राइग्लिसराइड
                  और पेट की चर्बी (visceral fat) बढ़ चुकी होती है।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• WHO कटऑफ (25-29.9) पर भरोसा करने से भारतीयों में जोखिम अनदेखा रह जाता है</li>
                  <li>• प्री-डायबिटीज़ और उच्च रक्तचाप इस सीमा में शुरू हो सकते हैं</li>
                  <li>• NFHS-5: शहरी भारत में 30%+ वयस्क इस या इससे ऊपर की श्रेणी में हैं</li>
                  <li>• पारिवारिक इतिहास (मधुमेह/हृदय रोग) हो तो जोखिम और बढ़ जाता है</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  सलाह: जीवनशैली में बदलाव शुरू करें — चीनी और रिफाइंड कार्ब्स कम करें, रोज़ाना 30-45 मिनट
                  व्यायाम करें। फ़ास्टिंग ग्लूकोज़ और HbA1c टेस्ट करवाएँ।
                </p>
              </div>

              {/* मोटापा — ICMR */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI ≥ 25 (ICMR): मोटापा — भारत "मधुमेह की राजधानी"</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>ICMR के अनुसार BMI 25 या अधिक मोटापा है</strong> (WHO में यह सीमा 30 है)। भारत में
                  <strong> 101 मिलियन से अधिक मधुमेह रोगी</strong> हैं (IDF Diabetes Atlas 2024) —
                  विश्व में सर्वाधिक। इसका सीधा संबंध बढ़ते BMI और शारीरिक निष्क्रियता से है।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• ICMR श्रेणी I (BMI 25-29.9): मध्यम मोटापा — WHO के अनुसार यह केवल "अधिक वजन" होता</li>
                  <li>• ICMR श्रेणी II (BMI ≥ 30): गंभीर मोटापा — हृदय रोग, स्ट्रोक, NAFLD का उच्च जोखिम</li>
                  <li>• भारतीय महिलाओं में PCOD/PCOS मोटापे से सीधे जुड़ा है</li>
                  <li>• मेटाबोलिक सिंड्रोम — उच्च रक्तचाप, उच्च शर्करा, उच्च ट्राइग्लिसराइड एक साथ</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  सलाह: तुरंत चिकित्सकीय परामर्श लें। एंडोक्राइनोलॉजिस्ट या डायबेटोलॉजिस्ट से मिलें।
                  व्यापक जाँच (HbA1c, लिपिड प्रोफाइल, थायरॉइड, लिवर फंक्शन) करवाएँ।
                </p>
              </div>
            </div>
          </div>

          {/* विचार करने योग्य कारक — भारत-विशिष्ट */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय संदर्भ में विचार करने योग्य कारक</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">दक्षिण एशियाई शरीर संरचना की विशेषताएँ:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>उच्च विसरल वसा (Visceral Fat)</strong>: समान BMI पर भारतीयों में पश्चिमी लोगों
                    की तुलना में 3-5% अधिक शरीर वसा होती है, विशेषकर पेट के आसपास</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>इंसुलिन प्रतिरोध की आनुवंशिक प्रवृत्ति</strong>: दक्षिण एशियाई जीनोम में
                    KCNJ11, TCF7L2 जैसे जीन वेरिएंट अधिक पाए जाते हैं जो मधुमेह का जोखिम बढ़ाते हैं</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>"Thin-Fat Indian" फेनोटाइप</strong>: कम मांसपेशी द्रव्यमान लेकिन उच्च वसा
                    प्रतिशत — BMI सामान्य दिखता है पर चयापचय जोखिम उच्च होता है</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>कम जन्म वजन का प्रभाव</strong>: भारत में जन्म के समय कम वजन वाले शिशुओं
                    में वयस्क होने पर मोटापा और मधुमेह का जोखिम अधिक होता है (Barker hypothesis)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">भारतीय कटऑफ पर पूरक संकेतक:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर की परिधि (भारतीय कटऑफ)</strong>: पुरुष ≥90 सेमी / महिला ≥80 सेमी
                    — WHO (94/80) से सख्त पुरुष कटऑफ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर-कूल्हे का अनुपात (WHR)</strong>: पुरुष &gt;0.90 / महिला &gt;0.85
                    — पेट की चर्बी का महत्वपूर्ण संकेतक</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>HbA1c टेस्ट</strong>: 5.7% से ऊपर = प्री-डायबिटीज़ — भारतीयों में
                    "सामान्य" BMI पर भी यह जाँच ज़रूरी है</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>लिपिड प्रोफाइल</strong>: भारतीयों में HDL कम और ट्राइग्लिसराइड
                    उच्च होना सामान्य पैटर्न है — "एथेरोजेनिक डिस्लिपिडेमिया"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ICMR बनाम WHO: दो अलग व्याख्याएँ */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">ICMR बनाम WHO: दो अलग व्याख्याएँ</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                एक ही BMI संख्या को WHO और ICMR अलग-अलग तरीके से व्याख्या करते हैं। यह अंतर
                लाखों भारतीयों के स्वास्थ्य जोखिम आकलन को प्रभावित करता है। नीचे देखें कि
                एक ही BMI का मतलब दोनों प्रणालियों में कितना अलग हो सकता है:
              </p>

              {/* Example comparison */}
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-success/5 border border-success/20 rounded-lg p-5">
                  <h4 className="font-bold text-success mb-2">WHO व्याख्या: BMI 24</h4>
                  <p className="text-2xl font-bold mb-1">✅ "सामान्य वजन"</p>
                  <p className="text-sm">WHO के अनुसार 18.5-24.9 सामान्य सीमा है। BMI 24 पूरी तरह स्वस्थ माना जाएगा।
                  कोई विशेष कार्रवाई आवश्यक नहीं।</p>
                </div>
                <div className="bg-warning/5 border border-warning/20 rounded-lg p-5">
                  <h4 className="font-bold text-warning mb-2">ICMR व्याख्या: BMI 24</h4>
                  <p className="text-2xl font-bold mb-1">⚠️ "अधिक वजन"</p>
                  <p className="text-sm">ICMR के अनुसार 23-24.9 अधिक वजन है। BMI 24 पर भारतीयों में
                  पहले से चयापचय जोखिम शुरू हो चुके होते हैं। जीवनशैली में बदलाव ज़रूरी।</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-warning/5 border border-warning/20 rounded-lg p-5">
                  <h4 className="font-bold text-warning mb-2">WHO व्याख्या: BMI 27</h4>
                  <p className="text-2xl font-bold mb-1">⚠️ "अधिक वजन"</p>
                  <p className="text-sm">WHO के अनुसार 25-29.9 अधिक वजन है। BMI 27 पर सावधानी बरतने की
                  सलाह दी जाती है।</p>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-5">
                  <h4 className="font-bold text-destructive mb-2">ICMR व्याख्या: BMI 27</h4>
                  <p className="text-2xl font-bold mb-1">🔴 "मोटापा (श्रेणी I)"</p>
                  <p className="text-sm">ICMR के अनुसार BMI ≥25 मोटापा है। BMI 27 पर भारतीय रोगी में
                  मधुमेह, उच्च रक्तचाप और हृदय रोग का गंभीर जोखिम है।</p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-4">
                <h4 className="font-bold mb-3">वैज्ञानिक प्रमाण — ICMR कटऑफ क्यों अलग हैं?</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>INTERHEART अध्ययन (2004)</strong>: दक्षिण एशियाई लोगों में BMI 23 पर ही
                  हृदय रोग का जोखिम उतना ही होता है जितना यूरोपीय लोगों में BMI 25 पर।</li>
                  <li>• <strong>WHO Expert Consultation (2004)</strong>: एशियाई आबादी के लिए कम BMI
                  कटऑफ की सिफारिश — "public health action trigger" BMI 23 पर।</li>
                  <li>• <strong>ICMR-INDIAB अध्ययन</strong>: भारत के 15 राज्यों के डेटा से पुष्टि कि
                  BMI 23 से मधुमेह का जोखिम तेज़ी से बढ़ता है। BMI 25 पर जोखिम 2-3 गुना हो जाता है।</li>
                  <li>• <strong>Lancet Diabetes & Endocrinology (2021)</strong>: भारतीयों में BMI 21-23 पर
                  ही इंसुलिन प्रतिरोध के संकेत मिलते हैं — इसलिए सामान्य सीमा 22.9 तक ही रखी गई।</li>
                </ul>
              </div>
            </div>
          </div>

          {/* आयुर्वेद और BMI व्याख्या */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Heart className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुर्वेद और BMI व्याख्या</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत की पारंपरिक चिकित्सा पद्धति <strong>आयुर्वेद</strong> में शरीर की संरचना
                (प्रकृति) के आधार पर आदर्श वजन की अवधारणा सदियों से है। आधुनिक BMI
                व्याख्या के साथ इस पारंपरिक ज्ञान को समझना भारतीय संदर्भ में उपयोगी हो
                सकता है। <em>यह चिकित्सा सलाह नहीं है — यह सांस्कृतिक संदर्भ के लिए है।</em>
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="border border-border rounded-lg p-5">
                  <h4 className="font-bold mb-2 text-blue-500">वात प्रकृति</h4>
                  <p className="text-sm mb-2">
                    <strong>शारीरिक विशेषताएँ:</strong> पतला, हल्का शरीर, सूखी त्वचा, अनियमित
                    भूख। स्वाभाविक रूप से कम BMI की प्रवृत्ति।
                  </p>
                  <p className="text-sm">
                    <strong>BMI संदर्भ:</strong> वात प्रकृति के लोगों का BMI स्वाभाविक रूप से
                    18-20 के आसपास रह सकता है। बहुत अधिक वजन बढ़ाने की कोशिश
                    उनकी प्रकृति के विपरीत हो सकती है।
                  </p>
                </div>
                <div className="border border-border rounded-lg p-5">
                  <h4 className="font-bold mb-2 text-red-500">पित्त प्रकृति</h4>
                  <p className="text-sm mb-2">
                    <strong>शारीरिक विशेषताएँ:</strong> मध्यम शरीर, तीव्र भूख, गर्म शरीर,
                    अच्छा चयापचय। मध्यम BMI की प्रवृत्ति।
                  </p>
                  <p className="text-sm">
                    <strong>BMI संदर्भ:</strong> पित्त प्रकृति के लोगों का BMI 20-22 के
                    बीच आदर्श माना जाता है। तेज़ चयापचय के कारण वजन अपेक्षाकृत
                    स्थिर रहता है।
                  </p>
                </div>
                <div className="border border-border rounded-lg p-5">
                  <h4 className="font-bold mb-2 text-green-500">कफ प्रकृति</h4>
                  <p className="text-sm mb-2">
                    <strong>शारीरिक विशेषताएँ:</strong> भारी, मज़बूत शरीर, धीमा चयापचय,
                    चिकनी त्वचा। स्वाभाविक रूप से उच्च BMI की प्रवृत्ति।
                  </p>
                  <p className="text-sm">
                    <strong>BMI संदर्भ:</strong> कफ प्रकृति के लोगों का BMI 21-23 हो सकता
                    है बिना अस्वस्थ हुए, लेकिन ICMR कटऑफ 22.9 से ऊपर जाने पर
                    चयापचय जाँच ज़रूरी है।
                  </p>
                </div>
              </div>

              <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 mt-2">
                <p className="text-sm">
                  <strong>महत्वपूर्ण:</strong> आयुर्वेदिक प्रकृति एक पारंपरिक अवधारणा है और
                  BMI या अन्य चिकित्सा जाँच का विकल्प नहीं है। ICMR कटऑफ वैज्ञानिक
                  प्रमाणों पर आधारित हैं और स्वास्थ्य निर्णयों के लिए प्राथमिक मानदंड होने
                  चाहिए। आयुर्वेदिक दृष्टिकोण सांस्कृतिक समझ बढ़ाने के लिए उपयोगी है,
                  लेकिन चिकित्सा सलाह के लिए हमेशा प्रमाणित चिकित्सक से मिलें।
                </p>
              </div>
            </div>
          </div>

          {/* परिणाम के अनुसार क्या करें */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">ICMR कटऑफ के अनुसार क्या करें?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                आपका BMI ICMR एशियन कटऑफ के आधार पर व्याख्या किया जाना चाहिए। यहाँ
                भारतीय संदर्भ में अनुशंसित अगले कदम दिए गए हैं:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>ICMR कटऑफ से अपना BMI जाँचें</strong> — WHO नहीं, ICMR मानक (सामान्य: 18.5-22.9) का उपयोग करें</li>
                <li><strong>कमर की परिधि मापें</strong> — भारतीय कटऑफ: पुरुष ≥90 सेमी, महिला ≥80 सेमी जोखिम सीमा है</li>
                <li><strong>पारिवारिक इतिहास जाँचें</strong> — यदि परिवार में मधुमेह या हृदय रोग है तो BMI 23 से ऊपर होने पर तुरंत सतर्क हों</li>
                <li><strong>रक्त जाँच करवाएँ</strong> — फ़ास्टिंग ग्लूकोज़, HbA1c, लिपिड प्रोफाइल (30 वर्ष से ऊपर के सभी भारतीयों के लिए)</li>
                <li><strong>भारतीय आहार सुधारें</strong> — रिफाइंड कार्ब्स (मैदा, चावल), तेल और चीनी कम करें; दाल, सब्ज़ियाँ, मोटे अनाज बढ़ाएँ</li>
                <li><strong>नियमित गतिविधि</strong> — सप्ताह में कम से कम 150 मिनट मध्यम व्यायाम (तेज़ पैदल चलना, योग, साइकिलिंग)</li>
              </ol>
            </div>
          </div>

          {/* India-Specific Healthcare & BMI Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुष्मान भारत, PHC/CHC और ICMR आहार दिशानिर्देश</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (PM-JAY)</strong> विश्व की सबसे बड़ी
                सरकारी स्वास्थ्य बीमा योजना है, जो <strong>10.74 करोड़ गरीब परिवारों</strong> को प्रति परिवार
                <strong> ₹5 लाख प्रति वर्ष</strong> तक का निःशुल्क उपचार प्रदान करती है। मोटापा संबंधित
                स्थितियों के उपचार -- जैसे <strong>मधुमेह प्रबंधन, हृदय शल्य चिकित्सा, और बैरियाट्रिक सर्जरी</strong>
                (BMI 37.5 से ऊपर या BMI 32.5 के साथ सहरुग्णता) -- PM-JAY के अंतर्गत कवर होते हैं।
                यह BMI स्क्रीनिंग को भारत की सार्वजनिक स्वास्थ्य प्रणाली का अभिन्न हिस्सा बनाता है।
              </p>
              <p>
                <strong>PHC (प्राथमिक स्वास्थ्य केंद्र)</strong> और <strong>CHC (सामुदायिक स्वास्थ्य केंद्र)</strong>
                भारत की ग्रामीण स्वास्थ्य प्रणाली की रीढ़ हैं। <strong>Health and Wellness Centres (HWC)</strong>
                -- आयुष्मान भारत के दूसरे स्तंभ -- में <strong>BMI स्क्रीनिंग</strong> को
                <strong> व्यापक प्राथमिक स्वास्थ्य देखभाल (CPHC)</strong> का हिस्सा बनाया गया है।
                30 वर्ष से ऊपर के सभी वयस्कों की <strong>NCD (गैर-संचारी रोग) स्क्रीनिंग</strong> में BMI माप,
                कमर की परिधि, रक्तचाप, और रक्त शर्करा शामिल हैं। <strong>आशा कार्यकर्ता</strong> और
                <strong> ANM (सहायक नर्स मिडवाइफ)</strong> इस स्क्रीनिंग में महत्वपूर्ण भूमिका निभाती हैं।
              </p>
              <p>
                <strong>ICMR (भारतीय चिकित्सा अनुसंधान परिषद)</strong> ने 2024 में अपडेटेड
                <strong> "भारतीयों के लिए आहार दिशानिर्देश"</strong> प्रकाशित किए हैं। इनमें
                <strong> 17 दिशानिर्देश</strong> शामिल हैं जो भारतीय खाद्य संस्कृति और पोषण आवश्यकताओं
                के अनुसार तैयार किए गए हैं। प्रमुख सिफारिशों में शामिल हैं: <strong>प्रति दिन कम से कम 400 ग्राम
                फल और सब्ज़ियाँ</strong>, <strong>प्रोटीन के लिए दालें, दूध और अंडे</strong>,
                <strong> चीनी कुल कैलोरी का 5% से कम</strong>, <strong>नमक प्रतिदिन 5 ग्राम से कम</strong>,
                और <strong>तेल प्रतिदिन 25-30 ग्राम से कम</strong>। ये दिशानिर्देश BMI को ICMR की
                सामान्य सीमा (18.5-22.9) में बनाए रखने के लिए भारतीय संदर्भ में सबसे प्रासंगिक हैं।
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">भारत में BMI व्याख्या: ICMR एशियन कटऑफ गाइड</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI व्याख्या भारत</strong> में WHO मानकों से भिन्न होनी चाहिए। <strong>ICMR
                BMI कटऑफ</strong> (सामान्य 18.5-22.9, अधिक वजन 23-24.9, मोटापा ≥25) दक्षिण एशियाई
                शरीर संरचना के लिए विशेष रूप से निर्धारित किए गए हैं। <strong>एशियन BMI कटऑफ</strong>
                का उपयोग करना इसलिए ज़रूरी है क्योंकि भारतीयों में <strong>"Thin-Fat" फेनोटाइप</strong>
                पाया जाता है।
              </p>
              <p>
                <strong>NFHS-5 (राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण)</strong> के अनुसार भारत में
                <strong> दोहरा पोषण बोझ</strong> है — कम वजन और मोटापा दोनों साथ-साथ बढ़ रहे हैं।
                <strong> BMI कैसे समझें</strong> यह जानने के लिए <strong>ICMR दिशानिर्देश</strong>
                सबसे उपयुक्त संदर्भ हैं। <strong>भारतीय BMI चार्ट</strong> में सामान्य सीमा 22.9 तक ही
                है, 24.9 तक नहीं।
              </p>
              <p>
                भारत को <strong>"मधुमेह की राजधानी"</strong> कहा जाता है — <strong>101 मिलियन+
                मधुमेह रोगी</strong> और 136 मिलियन प्री-डायबिटिक हैं। <strong>कमर की परिधि भारतीय
                कटऑफ</strong> (पुरुष ≥90 सेमी, महिला ≥80 सेमी) BMI के साथ मिलकर बेहतर जोखिम
                आकलन देता है। <strong>आयुर्वेद प्रकृति और BMI</strong> का संबंध भारतीय
                सांस्कृतिक संदर्भ में समझना भी उपयोगी है।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">ICMR कटऑफ के अनुसार अपना BMI कैलकुलेट करें</h3>
            <p className="text-muted-foreground mb-6">
              अपना बॉडी मास इंडेक्स जानें और ICMR एशियन कटऑफ से तुलना करें — भारतीयों के लिए सही व्याख्या पाएँ
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              अपना BMI कैलकुलेट करें
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI व्याख्या — ICMR एशियन कटऑफ गाइड</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIVyakhya;
