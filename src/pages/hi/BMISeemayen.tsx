import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale, HeartPulse, Activity, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";

const BMISeemayen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <main id="main-content" className="container max-w-6xl py-8 px-4 md:py-12">
        <Breadcrumbs />
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            आलोचनात्मक विश्लेषण
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">BMI की सीमाएं</span> : BMI क्या नहीं बताता
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            समझें कि BMI हमेशा विश्वसनीय क्यों नहीं होता और इसके कौन-कौन से विकल्प मौजूद हैं
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">BMI एक स्क्रीनिंग उपकरण है, निदान नहीं</h3>
              <p className="text-muted-foreground">
                BMI को 1832 में Adolphe Quetelet द्वारा विकसित किया गया था और इसे सांख्यिकीय जनसंख्या अध्ययनों के लिए डिज़ाइन किया गया था,
                व्यक्तिगत स्वास्थ्य के मूल्यांकन के लिए नहीं। इसकी कई महत्वपूर्ण सीमाएं हैं।
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI क्या नहीं मापता</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">शरीर की संरचना</h4>
                    <p className="text-sm text-muted-foreground">
                      BMI मांसपेशी और वसा में अंतर नहीं करता। BMI के लिए 1 किलो मांसपेशी = 1 किलो वसा।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">वसा वितरण</h4>
                    <p className="text-sm text-muted-foreground">
                      पेट की चर्बी त्वचा के नीचे की चर्बी से अधिक खतरनाक है। BMI इसे पहचान नहीं पाता।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">हड्डियों का घनत्व</h4>
                    <p className="text-sm text-muted-foreground">
                      भारी हड्डियां स्वास्थ्य को प्रभावित किए बिना BMI बढ़ा देती हैं।
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">चयापचय स्वास्थ्य</h4>
                    <p className="text-sm text-muted-foreground">
                      एक पतले व्यक्ति का चयापचय प्रोफ़ाइल (कोलेस्ट्रॉल, ग्लूकोज) खराब हो सकता है।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">जलयोजन</h4>
                    <p className="text-sm text-muted-foreground">
                      शरीर में पानी का प्रतिधारण अस्थायी रूप से BMI को 1-2 अंक बढ़ा सकता है।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">शारीरिक फिटनेस</h4>
                    <p className="text-sm text-muted-foreground">
                      समान BMI वाले दो व्यक्तियों की शारीरिक स्थिति बहुत अलग हो सकती है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">जनसंख्या समूह जिनके लिए BMI अपर्याप्त है</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">खिलाड़ी और बॉडीबिल्डर</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  अधिक मांसपेशी द्रव्यमान BMI को "अधिक वजन" या "मोटापा" दिखाता है, जबकि शरीर में वसा प्रतिशत न्यूनतम होता है।
                </p>
                <Link to="/hi/bmi-khiladi" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  और जानें →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">बच्चे और किशोर</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  वयस्कों की सीमाएं लागू नहीं होतीं। आयु और लिंग-विशिष्ट पर्सेंटाइल वक्रों का उपयोग करना आवश्यक है।
                </p>
                <Link to="/hi/bmi-bachche" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  और जानें →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">बुज़ुर्ग (&gt;65)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  मांसपेशी हानि (सार्कोपेनिया) अतिरिक्त वसा को छिपा सकती है। "सामान्य" BMI भ्रामक हो सकता है।
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">गर्भवती महिलाएं</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  गर्भावस्था के दौरान वजन बढ़ना सामान्य और वांछनीय है। गर्भावस्था से पहले का BMI संदर्भ के रूप में काम करता है।
                </p>
                <Link to="/hi/bmi-mahila" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  और जानें →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">कुछ जातीय समूह</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  एशियाई आबादी में कम BMI पर भी बढ़ा हुआ जोखिम होता है। WHO ने समायोजित सीमाएं सुझाई हैं (25 के बजाय 23)।
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">अत्यधिक शरीर प्रकार</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  बहुत लंबे या बहुत छोटे लोगों का सतह-आयतन अनुपात के कारण स्वाभाविक रूप से भिन्न BMI होता है।
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI के बेहतर विकल्प</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">संकेतक</th>
                    <th className="text-left py-3 px-4 font-bold">क्या मापता है</th>
                    <th className="text-left py-3 px-4 font-bold">अनुशंसित सीमाएं</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">कमर की परिधि</td>
                    <td className="py-3 px-4">पेट की चर्बी (आंत का वसा)</td>
                    <td className="py-3 px-4">&lt;94 सेमी (पु) / &lt;80 सेमी (म)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">कमर-कूल्हे का अनुपात</td>
                    <td className="py-3 px-4">वसा वितरण</td>
                    <td className="py-3 px-4">&lt;0.90 (पु) / &lt;0.85 (म)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">कमर-ऊंचाई का अनुपात</td>
                    <td className="py-3 px-4">सापेक्ष केंद्रीय वसा</td>
                    <td className="py-3 px-4">&lt;0.5 (कमर &lt; आधी ऊंचाई)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">शरीर वसा प्रतिशत</td>
                    <td className="py-3 px-4">वास्तविक शरीर संरचना</td>
                    <td className="py-3 px-4">10-20% (पु) / 18-28% (म)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">वसा-रहित द्रव्यमान (खिलाड़ियों के लिए)</td>
                    <td className="py-3 px-4">18-25 (प्राकृतिक)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">DEXA स्कैन</td>
                    <td className="py-3 px-4">पानी, मांसपेशी, वसा, हड्डी</td>
                    <td className="py-3 px-4">उपकरण के अनुसार भिन्न</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI कब उपयोगी बना रहता है</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                अपनी सीमाओं के बावजूद, BMI कुछ संदर्भों में एक मूल्यवान उपकरण बना रहता है:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>त्वरित प्रारंभिक स्क्रीनिंग</strong>: उन व्यक्तियों की पहचान जिन्हें अधिक व्यापक जांच की आवश्यकता है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>महामारी विज्ञान अध्ययन</strong>: बड़े पैमाने पर जनसंख्या समूहों की तुलना</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>व्यक्तिगत निगरानी</strong>: समय के साथ वजन के रुझान की निगरानी</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>औसत गतिहीन वयस्क</strong>: इस आबादी के लिए BMI काफी विश्वसनीय है</span>
                </li>
              </ul>
            </div>
          </div>

          {/* India-Specific BMI Limitations Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">ICMR/WHO एशियाई BMI कटऑफ और "Thin-Fat Indian" फेनोटाइप</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                BMI की सबसे बड़ी सीमा भारतीयों के लिए यह है कि <strong>WHO के मानक कटऑफ (25/30)
                दक्षिण एशियाई लोगों के लिए अपर्याप्त हैं</strong>। 2004 में WHO की विशेषज्ञ परामर्श समिति
                ने स्वीकार किया कि <strong>एशियाई आबादी में BMI 23 पर ही</strong> मधुमेह और हृदय रोग का
                जोखिम उतना ही बढ़ जाता है जितना यूरोपीय लोगों में BMI 25 पर। <strong>ICMR</strong> ने
                इसके आधार पर भारतीयों के लिए <strong>अधिक वजन: BMI 23-24.9</strong> और
                <strong> मोटापा: BMI 25 या अधिक</strong> मानक अपनाए। यह अंतर -- WHO के 25/30 की बजाय
                23/25 -- लाखों भारतीयों के जोखिम आकलन को मौलिक रूप से बदल देता है।
              </p>
              <p>
                <strong>"Thin-Fat Indian" फेनोटाइप</strong> की खोज <strong>प्रो. चित्तरंजन यज्ञिक</strong>
                और उनकी टीम ने <strong>पुणे मातृ पोषण अध्ययन (Pune Maternal Nutrition Study)</strong> के
                माध्यम से की। उनके 1998 और 2003 के ऐतिहासिक शोध पत्रों ने दिखाया कि
                <strong> भारतीय नवजात शिशु</strong> यूरोपीय शिशुओं की तुलना में जन्म के समय हल्के होते हैं,
                लेकिन उनके शरीर में <strong>आनुपातिक रूप से अधिक वसा और कम मांसपेशी</strong> होती है।
                यह "thin-fat" फेनोटाइप जीवन भर बना रहता है -- वयस्क भारतीयों में
                <strong> कम BMI पर भी उच्च शरीर वसा प्रतिशत, अधिक विसरल (आंत की) वसा,
                और कम मांसपेशी द्रव्यमान</strong> पाया जाता है।
              </p>
              <p>
                यज्ञिक के शोध का व्यावहारिक अर्थ यह है कि <strong>BMI भारतीयों में स्वास्थ्य जोखिम को
                गंभीर रूप से कम आंकता है</strong>। एक भारतीय जिसका BMI 22 है, उसके शरीर में उतनी ही
                वसा हो सकती है जितनी एक यूरोपीय जिसका BMI 25 है। <strong>ICMR-INDIAB अध्ययन</strong>
                (भारत के 15 राज्यों का बड़े पैमाने का अध्ययन) ने पुष्टि की कि <strong>भारतीयों में
                BMI 21-23 के बीच ही इंसुलिन प्रतिरोध</strong> के संकेत मिलने लगते हैं। इसीलिए
                ICMR ने सामान्य BMI की ऊपरी सीमा <strong>22.9</strong> रखी है, 24.9 नहीं।
                <strong> कमर की परिधि</strong> (भारतीय मानक: पुरुष 90 cm, महिला 80 cm) BMI का
                एक आवश्यक पूरक संकेतक है जो "thin-fat" फेनोटाइप में छिपे जोखिम को
                बेहतर तरीके से पकड़ सकता है।
              </p>
            </div>
          </div>

          {/* Indian Population BMI Problems */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <HeartPulse className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय आबादी में BMI की विशेष समस्याएं</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारतीय आबादी के लिए BMI एक विशेष रूप से भ्रामक संकेतक है। <strong>ICMR (Indian Council of Medical Research)</strong> के
                अनेक अध्ययनों ने बार-बार सिद्ध किया है कि <strong>समान BMI स्तर पर भारतीयों में यूरोपीय लोगों की तुलना में
                5-7% अधिक शरीर वसा</strong> पाई जाती है। इसका अर्थ यह है कि जब एक भारतीय पुरुष का BMI 24 होता है
                (WHO मानकों के अनुसार "सामान्य"), तब भी उसके शरीर में वसा का स्तर एक यूरोपीय व्यक्ति के BMI 27-28
                जितना हो सकता है। यह अंतर इतना महत्वपूर्ण है कि ICMR ने भारतीयों के लिए <strong>अलग BMI कटऑफ</strong>
                की सिफारिश की है: <strong>अधिक वजन BMI 23 से</strong> और <strong>मोटापा BMI 25 से</strong>, जबकि
                WHO का अंतरराष्ट्रीय मानक क्रमशः 25 और 30 है।
              </p>
              <p>
                इस विसंगति का मुख्य कारण <strong>"thin-fat Indian" फेनोटाइप</strong> है। भारतीय शरीर की रचना
                विशेष है — कम मांसपेशी द्रव्यमान (lean mass) के साथ अधिक वसा, विशेषकर पेट के आसपास।
                <strong> पुणे के KEM अस्पताल</strong> में प्रो. यज्ञिक के दीर्घकालिक अनुसंधान ने दिखाया कि
                भारतीय नवजात शिशु पश्चिमी शिशुओं की तुलना में <strong>औसतन 800 ग्राम हल्के</strong> होते हैं,
                लेकिन उनके शरीर में <strong>वसा का प्रतिशत अधिक</strong> होता है। यह प्रवृत्ति जीवन भर बनी रहती है
                और इसे <strong>"thrifty gene hypothesis"</strong> से जोड़ा जाता है — हजारों वर्षों के अकाल और
                पोषण की कमी ने भारतीय जीनोम को ऊर्जा संचय (वसा के रूप में) में अत्यंत कुशल बना दिया है।
              </p>
              <p>
                <strong>मातृ कुपोषण</strong> के एपिजेनेटिक प्रभाव भी महत्वपूर्ण हैं। जिन माताओं को गर्भावस्था में
                पर्याप्त पोषण नहीं मिलता, उनके बच्चों में <strong>इंसुलिन प्रतिरोध</strong> और <strong>केंद्रीय
                मोटापे</strong> की प्रवृत्ति अधिक होती है — भले ही उनका BMI सामान्य दिखे। NFHS-5 (National Family
                Health Survey) आंकड़ों के अनुसार भारत में अभी भी <strong>36% महिलाएं</strong> और <strong>35% बच्चे</strong>
                कुपोषित हैं, जो अगली पीढ़ी में "thin-fat" समस्या को और बढ़ाता है। इसके अतिरिक्त,
                <strong> भारतीयों में पेट का मोटापा (abdominal obesity)</strong> सामान्य BMI वाले लोगों में भी
                अत्यंत सामान्य है — ICMR-INDIAB अध्ययन में पाया गया कि <strong>सामान्य BMI (18.5-22.9) वाले
                भारतीयों में से लगभग 30%</strong> में पेट का मोटापा मौजूद था। यह BMI की सबसे गंभीर कमी है
                भारतीय संदर्भ में।
              </p>
            </div>
          </div>

          {/* Better Alternatives in India */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Activity className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI के बेहतर विकल्प भारत में</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारतीय चिकित्सा जगत में BMI के स्थान पर या उसके साथ अनेक बेहतर संकेतकों का उपयोग किया जाता है।
                सबसे सुलभ और प्रभावी विकल्प <strong>कमर की परिधि (Waist Circumference)</strong> है। ICMR ने
                भारतीयों के लिए विशिष्ट कटऑफ निर्धारित किए हैं: <strong>पुरुषों के लिए 90 सेमी या अधिक</strong>
                और <strong>महिलाओं के लिए 80 सेमी या अधिक</strong> को जोखिमपूर्ण माना जाता है। ध्यान दें कि ये
                WHO के अंतरराष्ट्रीय मानकों (पुरुष 94 सेमी, महिला 80 सेमी) से भिन्न हैं — भारतीय पुरुषों
                के लिए सीमा 4 सेमी कम है, जो "thin-fat" फेनोटाइप को दर्शाता है।
              </p>
              <p>
                <strong>कमर-कूल्हे का अनुपात (Waist-to-Hip Ratio)</strong> एक और सरल लेकिन प्रभावी माप है।
                भारतीय पुरुषों के लिए 0.90 से अधिक और महिलाओं के लिए 0.85 से अधिक अनुपात हृदय रोग के
                बढ़े हुए जोखिम का संकेत देता है। <strong>शरीर वसा प्रतिशत (Body Fat Percentage)</strong> एक
                अधिक सटीक माप है — भारतीय पुरुषों के लिए स्वस्थ सीमा 18-25% और भारतीय महिलाओं के लिए
                25-33% मानी जाती है। ये मानदंड पश्चिमी आबादी से थोड़े भिन्न हैं क्योंकि भारतीयों में
                स्वाभाविक रूप से वसा प्रतिशत अधिक होता है।
              </p>
              <p>
                इन परीक्षणों की <strong>उपलब्धता</strong> भारत में लगातार बढ़ रही है। सरकारी स्तर पर,
                <strong> NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular
                Diseases and Stroke)</strong> के अंतर्गत जिला अस्पतालों में शरीर संरचना आकलन की सुविधा उपलब्ध है।
                <strong> AIIMS दिल्ली, AIIMS ऋषिकेश, PGI चंडीगढ़</strong> जैसे प्रमुख संस्थानों में DEXA स्कैन
                और बॉडी कम्पोजिशन एनालाइजर उपलब्ध हैं। निजी क्षेत्र में <strong>डॉ. लाल पैथलैब्स, SRL
                डायग्नोस्टिक्स, और मेट्रोपोलिस हेल्थकेयर</strong> जैसी प्रयोगशालाएं DEXA स्कैन (लगभग
                ₹2,000-5,000), बायोइम्पीडेंस एनालिसिस (₹500-1,500), और विस्तृत बॉडी कम्पोजिशन
                प्रोफाइल प्रदान करती हैं। कई बड़े शहरों में अब <strong>स्मार्ट स्केल</strong> भी उपलब्ध हैं
                (₹2,000-8,000 में) जो घर पर ही बायोइम्पीडेंस के माध्यम से अनुमानित शरीर वसा प्रतिशत बता सकते हैं,
                हालांकि इनकी सटीकता DEXA से कम होती है।
              </p>
            </div>
          </div>

          {/* Populations for whom BMI is inaccurate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Stethoscope className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">जिन लोगों के लिए BMI सटीक नहीं है</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>भारतीय खिलाड़ी:</strong> भारत में क्रिकेट, कबड्डी, कुश्ती (kushti), और हॉकी जैसे खेलों में
                खिलाड़ियों का शरीर अत्यंत विविध होता है। एक पहलवान का BMI 28-32 हो सकता है जबकि उसकी
                शरीर वसा मात्र 12-15% है। IPL और PKL (Pro Kabaddi League) के कई खिलाड़ी BMI के अनुसार
                "मोटे" श्रेणी में आते हैं लेकिन वास्तव में वे अत्यंत फिट हैं। SAI (Sports Authority of India)
                अब अपने खिलाड़ियों के मूल्यांकन में BMI के बजाय <strong>शरीर वसा प्रतिशत और FFMI</strong>
                का उपयोग करता है।
              </p>
              <p>
                <strong>गर्भवती महिलाएं:</strong> भारत में प्रजनन दर अभी भी अनेक राज्यों में उच्च है और
                <strong> ICDS (Integrated Child Development Services)</strong> कार्यक्रम के अंतर्गत गर्भवती
                महिलाओं के पोषण की निगरानी की जाती है। गर्भावस्था में 10-15 किलो वजन बढ़ना सामान्य है,
                जो BMI को 4-6 अंक तक बढ़ा सकता है। गर्भावस्था के दौरान BMI की गणना अर्थहीन है —
                इसके बजाय <strong>गर्भावस्था-पूर्व BMI</strong> को संदर्भ माना जाता है और ICDS आंगनवाड़ी
                कार्यकर्ताएं MUAC (Mid-Upper Arm Circumference) का उपयोग करती हैं जो 23 सेमी से कम
                होने पर कुपोषण का संकेत देता है।
              </p>
              <p>
                <strong>वृद्ध जनसंख्या:</strong> भारत की 60 वर्ष से अधिक आयु की जनसंख्या तेजी से बढ़ रही है
                (2021 जनगणना अनुमान: 13.8 करोड़)। वृद्धावस्था में <strong>सार्कोपेनिया (मांसपेशी क्षय)</strong>
                एक बड़ी समस्या है — मांसपेशी घटती है लेकिन वसा बढ़ती है, जिससे BMI स्थिर दिख सकता है
                जबकि स्वास्थ्य बिगड़ रहा होता है। भारतीय वृद्धों में <strong>"sarcopenic obesity"</strong>
                की दर 15-20% अनुमानित है।
              </p>
              <p>
                <strong>बच्चे और किशोर:</strong> NFHS-5 (2019-21) के आंकड़े भारत में <strong>कुपोषण और
                मोटापे का दोहरा बोझ (dual burden)</strong> दर्शाते हैं — एक ओर 32% बच्चे कम वजन के हैं,
                दूसरी ओर शहरी बच्चों में मोटापा तेजी से बढ़ रहा है (NFHS-4 से NFHS-5 के बीच 2-3%
                की वृद्धि)। बच्चों में वयस्क BMI कटऑफ लागू नहीं होते — <strong>IAP (Indian Academy of
                Pediatrics)</strong> ने भारतीय बच्चों के लिए विशिष्ट BMI-for-age चार्ट विकसित किए हैं
                जो WHO और CDC चार्ट से भिन्न हैं।
              </p>
              <p>
                <strong>थायरॉइड विकार से पीड़ित लोग:</strong> भारत में <strong>हाइपोथायरॉइडिज्म</strong>
                अत्यंत सामान्य है, विशेषकर महिलाओं में (अनुमानित प्रसार: महिलाओं में 11%, पुरुषों में 6.5%)।
                थायरॉइड की कमी से शरीर का चयापचय धीमा हो जाता है, जिससे वजन बढ़ता है और
                BMI ऊंचा दिखता है — लेकिन यह वजन मुख्यतः <strong>जल प्रतिधारण (water retention)</strong>
                और <strong>म्यूसिन जमाव</strong> के कारण होता है, शुद्ध वसा नहीं। ऐसे में BMI
                स्वास्थ्य स्थिति का विश्वसनीय संकेतक नहीं है।
              </p>
              <p>
                <strong>मधुमेह रोगी:</strong> भारत को <strong>"विश्व की मधुमेह राजधानी"</strong> कहा जाता है —
                ICMR-INDIAB अध्ययन के अनुसार 10.1 करोड़ से अधिक भारतीय मधुमेह से ग्रस्त हैं।
                सबसे चिंताजनक बात यह है कि <strong>भारतीयों में मधुमेह BMI 23 जितने कम स्तर पर भी
                विकसित हो जाता है</strong>, जबकि यूरोपीय लोगों में यह जोखिम BMI 30 के बाद ही
                उल्लेखनीय होता है। इसका अर्थ है कि "सामान्य" BMI वाला भारतीय भी उच्च मधुमेह
                जोखिम में हो सकता है। <strong>HbA1c</strong> और <strong>HOMA-IR</strong> जैसे
                रक्त परीक्षण BMI से कहीं अधिक विश्वसनीय हैं भारतीय मधुमेह जोखिम आकलन के लिए।
                ICMR की सिफारिश है कि <strong>30 वर्ष से अधिक आयु के सभी भारतीयों</strong> की
                नियमित मधुमेह जांच होनी चाहिए, भले ही उनका BMI सामान्य हो।
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI की सीमाओं के बारे में सब कुछ</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI की सीमाएं</strong> अनेक हैं और वैज्ञानिक समुदाय द्वारा अच्छी तरह से प्रलेखित हैं।
                इस <strong>आलोचनात्मक BMI विश्लेषण</strong> की अकेले व्याख्या नहीं की जानी चाहिए। <strong>BMI की कमजोरियों</strong>
                में वसा द्रव्यमान को मांसपेशी द्रव्यमान से अलग करने में असमर्थता शामिल है।
              </p>
              <p>
                <strong>BMI अपूर्ण क्यों है</strong>? क्योंकि यह एक सरल गणितीय अनुपात है।
                <strong>BMI की समस्याएं</strong> विशेष रूप से खिलाड़ियों, बच्चों और बुज़ुर्गों में दिखाई देती हैं।
                <strong>BMI विश्वसनीय है या नहीं</strong>, यह उपयोग के संदर्भ पर निर्भर करता है।
              </p>
              <p>
                कमर की परिधि या शरीर वसा प्रतिशत जैसे <strong>BMI के विकल्प</strong> अधिक संपूर्ण तस्वीर प्रदान करते हैं।
                <strong>क्या BMI सभी के लिए विश्वसनीय है</strong>? नहीं, लेकिन अन्य संकेतकों के साथ मिलाकर यह
                एक उपयोगी स्क्रीनिंग उपकरण बना रहता है।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">फिर भी अपना BMI कैलकुलेट करें</h3>
            <p className="text-muted-foreground mb-6">
              अब जब आप सीमाओं को जानते हैं, तो हमारे कैलकुलेटर का उपयोग पहले संकेतक के रूप में करें
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              मेरा BMI कैलकुलेट करें
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

export default BMISeemayen;
