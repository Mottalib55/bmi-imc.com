import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe, BookOpen, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const BMITalika = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            WHO + ICMR वर्गीकरण
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI तालिका</span> : WHO अंतरराष्ट्रीय और ICMR भारतीय मानक
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            भारत में ICMR एशियाई BMI मानक: अधिक वजन 23 से, मोटापा 25 से। WHO अंतरराष्ट्रीय और ICMR भारतीय दोनों तालिकाएँ।
          </p>
        </header>

        <div className="space-y-8">

          {/* DUAL TABLE: WHO vs ICMR */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">WHO अंतरराष्ट्रीय बनाम ICMR एशियाई BMI वर्गीकरण</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              दक्षिण एशियाई लोगों में कम BMI पर भी शरीर में वसा का प्रतिशत अधिक होता है। इसलिए ICMR (भारतीय आयुर्विज्ञान अनुसंधान परिषद) और WHO एशिया-प्रशांत ने भारतीयों के लिए <strong>कम BMI कटऑफ</strong> निर्धारित किए हैं। नीचे दोनों मानकों की तुलना देखें :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* WHO International Table */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-center bg-blue-500/10 rounded-t-lg py-2">🌍 WHO अंतरराष्ट्रीय मानक</h3>
                <div className="overflow-x-auto border border-border/50 rounded-b-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 px-3 font-bold">वर्गीकरण</th>
                        <th className="text-left py-3 px-3 font-bold">BMI (kg/m²)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 bg-info/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-info" />
                            <span>कम वजन</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">&lt; 18,5</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-success/10">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-success" />
                            <span className="font-bold text-success">सामान्य वजन</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-success">18,5 - 24,9</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-warning/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-warning" />
                            <span>अधिक वजन</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">25,0 - 29,9</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-destructive/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span>मोटापा श्रेणी I</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">30,0 - 34,9</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-destructive/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span>मोटापा श्रेणी II</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">35,0 - 39,9</td>
                      </tr>
                      <tr className="bg-destructive/10">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span>मोटापा श्रेणी III</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">≥ 40,0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ICMR / Asian Table */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-center bg-orange-500/10 rounded-t-lg py-2">🇮🇳 ICMR / एशिया-प्रशांत मानक</h3>
                <div className="overflow-x-auto border border-border/50 rounded-b-lg">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 px-3 font-bold">वर्गीकरण</th>
                        <th className="text-left py-3 px-3 font-bold">BMI (kg/m²)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 bg-info/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-info" />
                            <span>कम वजन</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">&lt; 18,5</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-success/10">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-success" />
                            <span className="font-bold text-success">सामान्य वजन</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-success">18,5 - 22,9</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-warning/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-warning" />
                            <span>जोखिम में (अधिक वजन)</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">23,0 - 24,9</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-destructive/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span>मोटापा श्रेणी I</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">25,0 - 29,9</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-destructive/5">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span>मोटापा श्रेणी II</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">30,0 - 34,9</td>
                      </tr>
                      <tr className="bg-destructive/10">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span>मोटापा श्रेणी III</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono">≥ 35,0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-orange-500/5 rounded-xl border border-orange-500/20">
              <p className="text-sm text-muted-foreground">
                <strong>महत्वपूर्ण अंतर :</strong> WHO मानक के अनुसार 24 BMI वाला भारतीय व्यक्ति "सामान्य" श्रेणी में आएगा, लेकिन ICMR मानक के अनुसार वही व्यक्ति <strong>"अधिक वजन"</strong> श्रेणी में माना जाएगा। यह अंतर इसलिए है क्योंकि दक्षिण एशियाई लोगों में समान BMI पर यूरोपीय लोगों की तुलना में <strong>5-7% अधिक शरीर वसा</strong> होती है।
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              स्रोत : WHO एशिया-प्रशांत दिशानिर्देश (2004), ICMR भारतीय दिशानिर्देश
            </p>
          </div>

          {/* Detailed WHO Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI का विस्तृत अंतर्राष्ट्रीय वर्गीकरण (WHO - वयस्क)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">वर्गीकरण</th>
                    <th className="text-left py-4 px-4 font-bold">BMI (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">सह-रुग्णता का जोखिम</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">गंभीर कम वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">उच्च (कुपोषण)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">मध्यम कम वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">मध्यम</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">हल्का कम वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">कम</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">सामान्य वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">कम (संदर्भ)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">अधिक वजन (पूर्व-मोटापा)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">बढ़ा हुआ</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">मोटापा श्रेणी I (मध्यम)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">उच्च</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">मोटापा श्रेणी II (गंभीर)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">बहुत उच्च</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">मोटापा श्रेणी III (अत्यधिक)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">अत्यंत उच्च</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              स्रोत : विश्व स्वास्थ्य संगठन (WHO)
            </p>
          </div>

          {/* Weight/Height table with Indian heights and DUAL cutoffs */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">वजन / ऊँचाई तालिका — भारतीय औसत ऊँचाई पर केंद्रित</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              भारतीय पुरुषों की औसत ऊँचाई <strong>167 cm</strong> और महिलाओं की <strong>152 cm</strong> है (NFHS-5)।
              नीचे WHO और ICMR दोनों कटऑफ के अनुसार वजन सीमाएँ दी गई हैं :
            </p>

            <h3 className="font-bold mb-3 mt-6">WHO अंतरराष्ट्रीय कटऑफ के अनुसार</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">ऊँचाई</th>
                    <th className="text-left py-3 px-3 font-bold text-info">कम वजन<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">सामान्य<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">अधिक वजन<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">मोटापा<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 150, u: 42, nMin: 42, nMax: 56, sMin: 56, sMax: 67, o: 67 },
                    { h: 152, u: 43, nMin: 43, nMax: 58, sMin: 58, sMax: 69, o: 69, highlight: "F" },
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77 },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 167, u: 52, nMin: 52, nMax: 69, sMin: 69, sMax: 84, o: 84, highlight: "M" },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.highlight ? "bg-primary/5 font-semibold" : ""}`}>
                      <td className="py-3 px-3 font-bold">
                        {row.h} cm
                        {row.highlight === "M" && <span className="text-xs text-primary ml-1">(पुरुष औसत)</span>}
                        {row.highlight === "F" && <span className="text-xs text-primary ml-1">(महिला औसत)</span>}
                      </td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-bold mb-3">ICMR एशियाई कटऑफ के अनुसार (भारत के लिए अनुशंसित)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">ऊँचाई</th>
                    <th className="text-left py-3 px-3 font-bold text-info">कम वजन<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">सामान्य<br />18,5-22,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">अधिक वजन<br />23-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">मोटापा<br />≥25</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 150, u: 42, nMin: 42, nMax: 52, sMin: 52, sMax: 56, o: 56 },
                    { h: 152, u: 43, nMin: 43, nMax: 53, sMin: 53, sMax: 58, o: 58, highlight: "F" },
                    { h: 155, u: 44, nMin: 44, nMax: 55, sMin: 55, sMax: 60, o: 60 },
                    { h: 160, u: 47, nMin: 47, nMax: 59, sMin: 59, sMax: 64, o: 64 },
                    { h: 165, u: 50, nMin: 50, nMax: 62, sMin: 62, sMax: 68, o: 68 },
                    { h: 167, u: 52, nMin: 52, nMax: 64, sMin: 64, sMax: 70, o: 70, highlight: "M" },
                    { h: 170, u: 53, nMin: 53, nMax: 66, sMin: 66, sMax: 72, o: 72 },
                    { h: 175, u: 57, nMin: 57, nMax: 70, sMin: 70, sMax: 76, o: 76 },
                    { h: 180, u: 60, nMin: 60, nMax: 74, sMin: 74, sMax: 81, o: 81 },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.highlight ? "bg-primary/5 font-semibold" : ""}`}>
                      <td className="py-3 px-3 font-bold">
                        {row.h} cm
                        {row.highlight === "M" && <span className="text-xs text-primary ml-1">(पुरुष औसत)</span>}
                        {row.highlight === "F" && <span className="text-xs text-primary ml-1">(महिला औसत)</span>}
                      </td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-warning/5 rounded-xl border border-warning/20">
              <p className="text-sm text-muted-foreground">
                <strong>उदाहरण :</strong> 167 cm का भारतीय पुरुष जिसका वजन 70 kg है — WHO के अनुसार "सामान्य" (BMI 25.1 = अधिक वजन की सीमा पर), लेकिन ICMR के अनुसार <strong>"मोटापा श्रेणी I"</strong> (BMI ≥ 25)। इसलिए भारतीयों के लिए ICMR मानक अधिक सटीक है।
              </p>
            </div>
          </div>

          {/* NFHS-5 Prevalence Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Table className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत में BMI श्रेणी के अनुसार प्रसार (NFHS-5, 2019-21)</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण (NFHS-5) के आँकड़ों के अनुसार भारत <strong>दोहरे पोषण बोझ</strong> से ग्रस्त है — एक ओर कुपोषण, दूसरी ओर बढ़ता मोटापा।
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-info/5 rounded-xl border border-info/20">
                <h4 className="font-bold text-lg mb-3">महिलाएँ (15-49 वर्ष)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>कम वजन (BMI &lt; 18,5)</span><strong className="text-info">18,7%</strong></li>
                  <li className="flex justify-between"><span>सामान्य वजन</span><strong className="text-success">57,3%</strong></li>
                  <li className="flex justify-between"><span>अधिक वजन + मोटापा (BMI ≥ 25)</span><strong className="text-destructive">24,0%</strong></li>
                </ul>
              </div>
              <div className="p-5 bg-info/5 rounded-xl border border-info/20">
                <h4 className="font-bold text-lg mb-3">पुरुष (15-49 वर्ष)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>कम वजन (BMI &lt; 18,5)</span><strong className="text-info">16,2%</strong></li>
                  <li className="flex justify-between"><span>सामान्य वजन</span><strong className="text-success">59,5%</strong></li>
                  <li className="flex justify-between"><span>अधिक वजन + मोटापा (BMI ≥ 25)</span><strong className="text-destructive">22,9%</strong></li>
                </ul>
              </div>
            </div>

            <h4 className="font-bold mb-3">शहरी बनाम ग्रामीण असमानता</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">संकेतक</th>
                    <th className="text-left py-3 px-3 font-bold">शहरी</th>
                    <th className="text-left py-3 px-3 font-bold">ग्रामीण</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-3">कम वजन (महिलाएँ)</td>
                    <td className="py-3 px-3">12,4%</td>
                    <td className="py-3 px-3">21,7%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-3">अधिक वजन/मोटापा (महिलाएँ)</td>
                    <td className="py-3 px-3">33,2%</td>
                    <td className="py-3 px-3">19,7%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-3">कम वजन (पुरुष)</td>
                    <td className="py-3 px-3">11,0%</td>
                    <td className="py-3 px-3">19,0%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-3">अधिक वजन/मोटापा (पुरुष)</td>
                    <td className="py-3 px-3">30,5%</td>
                    <td className="py-3 px-3">18,1%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold mb-3">राज्य-स्तरीय भिन्नताएँ</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                <h5 className="font-bold text-sm mb-2">सबसे अधिक मोटापा दर वाले राज्य</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex justify-between"><span>पंजाब (महिलाएँ)</span><strong>39,4%</strong></li>
                  <li className="flex justify-between"><span>केरल (महिलाएँ)</span><strong>37,5%</strong></li>
                  <li className="flex justify-between"><span>दिल्ली (महिलाएँ)</span><strong>38,1%</strong></li>
                  <li className="flex justify-between"><span>गोवा (पुरुष)</span><strong>39,5%</strong></li>
                </ul>
              </div>
              <div className="p-4 bg-info/5 rounded-xl border border-info/20">
                <h5 className="font-bold text-sm mb-2">सबसे अधिक कम वजन दर वाले राज्य</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex justify-between"><span>बिहार (महिलाएँ)</span><strong>26,1%</strong></li>
                  <li className="flex justify-between"><span>झारखंड (महिलाएँ)</span><strong>26,2%</strong></li>
                  <li className="flex justify-between"><span>मध्य प्रदेश (महिलाएँ)</span><strong>23,0%</strong></li>
                  <li className="flex justify-between"><span>राजस्थान (पुरुष)</span><strong>21,8%</strong></li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              स्रोत : राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण (NFHS-5), 2019-21, भारत सरकार
            </p>
          </div>

          {/* Why Asian cutoffs? Scientific explanation */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">एशियाई BMI कटऑफ क्यों? — वैज्ञानिक कारण</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                WHO ने 2004 में एशिया-प्रशांत क्षेत्र के लिए अलग BMI कटऑफ की सिफारिश की। ICMR ने भी भारतीय जनसंख्या के लिए इन संशोधित मानकों को अपनाया। इसके पीछे ठोस वैज्ञानिक कारण हैं :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-muted/30 rounded-xl">
                  <h4 className="font-bold mb-3">1. अधिक आंत वसा (Visceral Fat)</h4>
                  <p className="text-sm">
                    दक्षिण एशियाई लोगों में समान BMI पर यूरोपीय लोगों की तुलना में <strong>आंत (पेट) की वसा</strong> काफी अधिक होती है। यह वसा अंगों के आसपास जमा होती है और मधुमेह, हृदय रोग का प्रमुख कारण है। ICMR अनुसंधान ने दिखाया कि BMI 23 पर भी भारतीयों में चयापचय संबंधी जोखिम शुरू हो जाता है।
                  </p>
                </div>
                <div className="p-5 bg-muted/30 rounded-xl">
                  <h4 className="font-bold mb-3">2. इंसुलिन प्रतिरोध</h4>
                  <p className="text-sm">
                    भारतीयों में <strong>इंसुलिन प्रतिरोध की आनुवंशिक प्रवृत्ति</strong> अधिक होती है। कम BMI पर भी रक्त शर्करा का स्तर बढ़ सकता है। यही कारण है कि भारत को "मधुमेह की राजधानी" कहा जाता है — 10.1 करोड़ से अधिक मधुमेह रोगी (IDF, 2021)।
                  </p>
                </div>
                <div className="p-5 bg-muted/30 rounded-xl">
                  <h4 className="font-bold mb-3">3. कम BMI पर अधिक शरीर वसा %</h4>
                  <p className="text-sm">
                    शोध से पता चलता है कि <strong>BMI 25 वाले भारतीय</strong> में उतनी ही शरीर वसा होती है जितनी <strong>BMI 30 वाले यूरोपीय</strong> में। यानी WHO मानक से भारतीयों में मोटापे का सही आकलन नहीं होता। ICMR ने इसलिए BMI ≥ 25 को मोटापे की सीमा रखा।
                  </p>
                </div>
                <div className="p-5 bg-muted/30 rounded-xl">
                  <h4 className="font-bold mb-3">4. हृदय रोग जोखिम</h4>
                  <p className="text-sm">
                    भारतीयों में <strong>BMI 23-24,9</strong> की सीमा में भी हृदय रोग, उच्च रक्तचाप और डिस्लिपिडेमिया का जोखिम काफी बढ़ जाता है। ICMR अध्ययनों ने पुष्टि की कि BMI 23 से ही "जोखिम" श्रेणी शुरू होनी चाहिए, न कि 25 से।
                  </p>
                </div>
              </div>
              <div className="p-4 bg-orange-500/5 rounded-xl border border-orange-500/20 mt-4">
                <p className="text-sm">
                  <strong>निष्कर्ष :</strong> यदि आप भारतीय हैं, तो ICMR एशियाई कटऑफ (सामान्य: 18,5-22,9, अधिक वजन: 23-24,9, मोटापा: ≥25) का उपयोग करना अधिक सटीक और स्वास्थ्य की दृष्टि से सुरक्षित है। अपने डॉक्टर से ICMR मानकों के आधार पर अपने BMI की व्याख्या करवाएँ।
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              स्रोत : WHO Expert Consultation (2004), ICMR Guidelines, Lancet Diabetes & Endocrinology
            </p>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">सीमा मामले और अपवाद</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI इनके लिए उपयुक्त नहीं है :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>मांसपेशीय खिलाड़ी</strong> : मांसपेशी द्रव्यमान = BMI अधिक आंका जाता है</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>गर्भवती महिलाएँ</strong> : सामान्य वजन वृद्धि</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>वृद्ध व्यक्ति</strong> : मांसपेशी द्रव्यमान में कमी</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>बच्चे/किशोर</strong> : विशेष वक्र आवश्यक</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">पूरक संकेतक :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर की परिधि</strong> : पुरुष ≥ 90 cm, महिला ≥ 80 cm (भारतीय कटऑफ)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>शरीर में वसा %</strong> : शारीरिक संरचना</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर/कूल्हे का अनुपात</strong> : वसा वितरण</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong> : खिलाड़ियों के लिए</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* India NFHS-5 Deep Dive and Diabetes Capital */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Activity className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत: "मधुमेह की राजधानी" — कम BMI पर अधिक खतरा</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>भारत को विश्व की <strong>"मधुमेह की राजधानी"</strong> कहा जाता है, और इसका एक प्रमुख कारण है भारतीयों की <strong>कम BMI पर भी मधुमेह विकसित करने की आनुवंशिक प्रवृत्ति</strong>। अंतर्राष्ट्रीय मधुमेह संघ (IDF) के अनुसार, भारत में <strong>10.1 करोड़ से अधिक</strong> वयस्क मधुमेह से पीड़ित हैं, और यह संख्या 2045 तक 13.4 करोड़ तक पहुँचने का अनुमान है।</p>
              <p>सबसे चिंताजनक बात यह है कि भारत में मधुमेह के <strong>50% से अधिक रोगियों का BMI 25 से कम</strong> होता है — यानी WHO के अंतरराष्ट्रीय मानक के अनुसार वे "सामान्य वजन" की श्रेणी में आते हैं। यह इस बात को पुष्ट करता है कि <strong>ICMR द्वारा निर्धारित कम BMI कटऑफ</strong> (अधिक वजन: 23, मोटापा: 25) भारतीयों के लिए अधिक उपयुक्त हैं।</p>
              <p>NFHS-5 (2019-21) के आँकड़ों के अनुसार, भारत में <strong>40.3% वयस्क</strong> (पुरुष और महिला मिलाकर) अधिक वजन या मोटापे की श्रेणी में आते हैं — यदि ICMR एशियाई कटऑफ (BMI ≥ 23) का उपयोग किया जाए। यह आँकड़ा WHO मानक (BMI ≥ 25) से कहीं अधिक है, जो लगभग 24% दर्शाता है। इसका अर्थ है कि <strong>लगभग 16% भारतीय वयस्क</strong> ऐसे हैं जो WHO मानक से "सामान्य" दिखते हैं लेकिन वास्तव में स्वास्थ्य जोखिम में हैं।</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                <h4 className="font-bold text-destructive text-lg mb-3">आनुवंशिक प्रवृत्ति के मुख्य कारक</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" /><span><strong>थ्रिफ्टी जीन परिकल्पना:</strong> हजारों वर्षों के अकाल और खाद्य अनिश्चितता ने भारतीय जीनोम को ऊर्जा संग्रहण में अत्यधिक कुशल बनाया है</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" /><span><strong>जन्म के समय कम वजन:</strong> भारत में 18% शिशु कम वजन के साथ जन्म लेते हैं, जो बाद में इंसुलिन प्रतिरोध का जोखिम बढ़ाता है</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" /><span><strong>पतला-मोटा (Thin-Fat) phenotype:</strong> भारतीय शिशुओं में जन्म से ही कम मांसपेशी और अधिक वसा का अनुपात होता है</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" /><span><strong>अग्न्याशय बीटा-सेल अपर्याप्तता:</strong> भारतीयों में इंसुलिन उत्पादन क्षमता पश्चिमी जनसंख्या की तुलना में कम होती है</span></li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold text-warning text-lg mb-3">NFHS-5 प्रमुख निष्कर्ष</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><Activity className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>ICMR कटऑफ से <strong>40.3%</strong> वयस्क अधिक वजन/मोटापे में</span></li>
                  <li className="flex items-start gap-2"><Activity className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>शहरी क्षेत्रों में मोटापा दर ग्रामीण से <strong>दोगुनी</strong></span></li>
                  <li className="flex items-start gap-2"><Activity className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>पिछले 10 वर्षों में मोटापा दर में <strong>40% वृद्धि</strong></span></li>
                  <li className="flex items-start gap-2"><Activity className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>दक्षिण भारत में मधुमेह दर उत्तर भारत से अधिक</span></li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">स्रोत: IDF Diabetes Atlas (2021), NFHS-5 (2019-21), Lancet Diabetes & Endocrinology</p>
          </div>

          {/* ICMR-NIN Dietary Guidelines */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <BookOpen className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">ICMR-NIN आहार दिशानिर्देश: भारतीयों के लिए स्वस्थ BMI कैसे बनाए रखें</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p><strong>भारतीय आयुर्विज्ञान अनुसंधान परिषद (ICMR)</strong> और <strong>राष्ट्रीय पोषण संस्थान (NIN), हैदराबाद</strong> ने भारतीय जनसंख्या के लिए विशेष आहार दिशानिर्देश जारी किए हैं। ये दिशानिर्देश भारतीय खाद्य संस्कृति, उपलब्ध खाद्य पदार्थों और भारतीयों की विशिष्ट पोषण आवश्यकताओं को ध्यान में रखकर बनाए गए हैं।</p>
              <p>ICMR-NIN दिशानिर्देशों के अनुसार, एक स्वस्थ भारतीय वयस्क (मध्यम शारीरिक गतिविधि) के लिए दैनिक आहार में निम्नलिखित शामिल होने चाहिए: <strong>अनाज और मोटा अनाज (बाजरा) 270-340 ग्राम</strong>, <strong>दालें 60-90 ग्राम</strong>, <strong>दूध/दही 300-400 मिली</strong>, <strong>सब्जियाँ 300-400 ग्राम</strong> (जिसमें हरी पत्तेदार सब्जियाँ 100 ग्राम), <strong>फल 100-150 ग्राम</strong>, और <strong>तेल/वसा 25-30 ग्राम</strong> (कुल दैनिक सेवन)।</p>
              <p>विशेष रूप से उल्लेखनीय है कि ICMR-NIN ने भारतीय आहार में <strong>बाजरा (millets) को पुनः शामिल करने</strong> पर बल दिया है। रागी (फिंगर मिलेट), ज्वार (सोरघम), और बाजरा (पर्ल मिलेट) जैसे मोटे अनाज कम ग्लाइसेमिक इंडेक्स वाले होते हैं, जो रक्त शर्करा को नियंत्रित रखने में सहायक हैं। यह विशेष रूप से भारतीयों के लिए महत्वपूर्ण है, जो मधुमेह के प्रति अधिक संवेदनशील हैं। संयुक्त राष्ट्र ने 2023 को "अंतर्राष्ट्रीय बाजरा वर्ष" घोषित किया था, जो भारत की ही पहल पर हुआ था।</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                <h4 className="font-bold text-success mb-2">स्वस्थ BMI के लिए आहार</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>-- दालें और फलियाँ प्रतिदिन</li>
                  <li>-- बाजरा/रागी/ज्वार को गेहूँ के विकल्प के रूप में</li>
                  <li>-- ताज़ी मौसमी सब्जियाँ और फल</li>
                  <li>-- चीनी 20 ग्राम/दिन से कम</li>
                  <li>-- नमक 5 ग्राम/दिन से कम</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold text-warning mb-2">शहरी जीवनशैली जोखिम</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>-- मैदा (रिफाइंड आटा) का अत्यधिक सेवन</li>
                  <li>-- तले हुए नाश्ते (समोसे, पकौड़े)</li>
                  <li>-- मीठी चाय/कॉफी दिन में 5-6 बार</li>
                  <li>-- बैठे रहने वाली नौकरियाँ</li>
                  <li>-- फूड डिलीवरी ऐप्स का बढ़ता उपयोग</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="font-bold text-primary mb-2">शारीरिक गतिविधि सुझाव</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>-- प्रतिदिन 30-45 मिनट तेज चलना</li>
                  <li>-- योग और प्राणायाम सप्ताह में 5 दिन</li>
                  <li>-- सीढ़ियों का उपयोग (लिफ्ट के बजाय)</li>
                  <li>-- कार्यस्थल पर हर घंटे 5 मिनट का ब्रेक</li>
                  <li>-- साइकिलिंग या तैराकी सप्ताह में 2-3 बार</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">स्रोत: ICMR-NIN Dietary Guidelines for Indians (2024), National Institute of Nutrition, Hyderabad</p>
          </div>

          {/* Urban vs Rural Divide */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-info/10">
                <Heart className="w-6 h-6 text-info" />
              </div>
              <h2 className="text-2xl font-display font-bold">शहरी बनाम ग्रामीण: भारत का दोहरा पोषण संकट</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>भारत एक अद्वितीय <strong>"दोहरे पोषण बोझ"</strong> (Double Burden of Malnutrition) से जूझ रहा है, जहाँ एक ही देश में कुपोषण और मोटापा साथ-साथ मौजूद हैं। NFHS-5 के आँकड़े इस विभाजन को स्पष्ट रूप से दर्शाते हैं: शहरी भारत में महिलाओं में अधिक वजन/मोटापा दर <strong>33.2%</strong> है, जबकि ग्रामीण भारत में यह <strong>19.7%</strong> है। इसके विपरीत, ग्रामीण महिलाओं में कम वजन दर <strong>21.7%</strong> है, जो शहरी <strong>12.4%</strong> से बहुत अधिक है।</p>
              <p>यह विभाजन केवल आर्थिक नहीं है — इसके पीछे गहरे सामाजिक और सांस्कृतिक कारण हैं। शहरी क्षेत्रों में <strong>पोषण संक्रमण</strong> (Nutrition Transition) तेज़ी से हो रहा है: पारंपरिक भारतीय भोजन (दाल-चावल, रोटी-सब्जी) की जगह प्रसंस्कृत खाद्य पदार्थ, पिज़्ज़ा, बर्गर, और मीठे पेय पदार्थ ले रहे हैं। साथ ही, शहरी नौकरियों में बैठकर काम करने की प्रवृत्ति ने शारीरिक गतिविधि को काफी कम कर दिया है। दिल्ली, मुंबई, बेंगलुरु और हैदराबाद जैसे महानगरों में लंबे आवागमन समय (daily commute) और तनावपूर्ण कार्य संस्कृति भी BMI बढ़ाने में योगदान देती है।</p>
              <p>ग्रामीण क्षेत्रों में समस्या अलग प्रकार की है। यहाँ <strong>खाद्य असुरक्षा</strong>, सीमित आहार विविधता, और पोषण शिक्षा की कमी के कारण कुपोषण व्याप्त है। बिहार, झारखंड, मध्य प्रदेश और छत्तीसगढ़ जैसे राज्यों में ग्रामीण महिलाओं में कम वजन दर 25% से अधिक है। हालाँकि, एक चिंताजनक प्रवृत्ति यह है कि ग्रामीण क्षेत्रों में भी मोटापा तेज़ी से बढ़ रहा है — पिछले दशक में ग्रामीण मोटापा दर में <strong>55% की वृद्धि</strong> हुई है, जो शहरी वृद्धि दर (33%) से अधिक है। इसका कारण ग्रामीण क्षेत्रों में भी प्रसंस्कृत खाद्य पदार्थों और मीठे पेय पदार्थों की बढ़ती उपलब्धता और खपत है।</p>
            </div>
            <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
              <h4 className="font-bold text-warning mb-2">भारत सरकार की पहल</h4>
              <p className="text-sm text-muted-foreground">भारत सरकार ने इस दोहरे बोझ से निपटने के लिए कई कार्यक्रम शुरू किए हैं: <strong>Eat Right India</strong> अभियान (FSSAI), <strong>Fit India Movement</strong>, <strong>POSHAN Abhiyaan</strong> (राष्ट्रीय पोषण मिशन), और <strong>Ayushman Bharat</strong> (स्वास्थ्य बीमा)। FSSAI ने खाद्य पदार्थों पर अनिवार्य पोषण लेबलिंग और "रेड-एम्बर-ग्रीन" कलर कोडिंग प्रणाली भी लागू की है। इन पहलों का लक्ष्य 2030 तक भारत में मोटापा दर की वृद्धि को रोकना और कुपोषण को 10% से नीचे लाना है।</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">स्रोत: NFHS-5 (2019-21), FSSAI Eat Right India, WHO India Country Profile</p>
          </div>

          {/* SEO / Understanding section */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI तालिका को समझें — भारतीय संदर्भ</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI तालिका</strong> शारीरिक संरचना को वर्गीकृत करने के लिए अंतर्राष्ट्रीय संदर्भ है।
                भारत में <strong>ICMR एशियाई BMI कटऑफ</strong> का उपयोग करना अधिक उपयुक्त है क्योंकि दक्षिण एशियाई जनसंख्या में
                <strong>कम BMI पर भी चयापचय संबंधी रोगों का जोखिम</strong> अधिक होता है।
              </p>
              <p>
                <strong>NFHS-5 सर्वेक्षण</strong> के अनुसार भारत <strong>दोहरे पोषण बोझ</strong> से जूझ रहा है —
                एक ओर 35,5% से अधिक आबादी कम वजन की श्रेणी में है, दूसरी ओर शहरी क्षेत्रों में मोटापा तेज़ी से बढ़ रहा है।
                <strong>BMI वर्गीकरण तालिका</strong> इस दोहरे बोझ को समझने का पहला कदम है।
              </p>
              <p>
                <strong>ICMR दिशानिर्देशों</strong> के अनुसार भारतीयों के लिए <strong>सामान्य BMI 18,5-22,9</strong>,
                <strong>अधिक वजन 23-24,9</strong> और <strong>मोटापा ≥ 25</strong> है। यह WHO अंतरराष्ट्रीय मानक से काफी अलग है।
                अपने BMI की सही व्याख्या के लिए ऊपर दी गई <strong>दोहरी BMI तालिका</strong> देखें और
                <strong>वजन ऊँचाई BMI तालिका</strong> से अपनी भारतीय ऊँचाई के अनुसार सही वजन सीमा जानें।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">अपना BMI कैलकुलेट करें</h2>
            <p className="text-muted-foreground mb-6">
              हमारे मुफ़्त कैलकुलेटर का उपयोग करें और ICMR तथा WHO दोनों मानकों के अनुसार तुरंत जानें कि आप किस श्रेणी में हैं।
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              BMI कैलकुलेटर
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI तालिका</p>
        </footer>
      </div>
    </div>
  );
};

export default BMITalika;
