"use client";

import { useState } from "react";
import Link from "next/link";

const genres = [
  "رعب",
  "رومانسي",
  "خيال",
  "غموض",
  "أطفال",
  "تجاري",
  "خيال علمي",
  "تاريخي",
  "مغامرة",
];

const lengths = [
  { value: "short", label: "قصيرة (500-800 كلمة)" },
  { value: "medium", label: "متوسطة (800-1200 كلمة)" },
  { value: "long", label: "طويلة (1200-2000 كلمة)" },
];

export default function WriterPage() {
  const [idea, setIdea] = useState("");
  const [genre, setGenre] = useState("خيال");
  const [length, setLength] = useState("medium");
  const [style, setStyle] = useState("سردي مشوق");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStory, setGeneratedStory] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = async () => {
    if (!idea.trim()) {
      alert("الرجاء كتابة فكرة القصة أولاً");
      return;
    }

    setIsGenerating(true);
    setShowResult(false);

    // محاكاة توليد القصة (لاحقاً سيتم ربطها بـ API حقيقي)
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const mockStory = `عنوان القصة: ${idea.slice(0, 40)}${idea.length > 40 ? "..." : ""}

في ليلة هادئة من ليالي المدينة، بدأت الأحداث تتشكل بطريقة لم يتوقعها أحد...

${idea}

كانت الأجواء مشحونة بالترقب، وكل تفصيلة صغيرة تحمل معنى أعمق. تحرك البطل بخطوات حذرة، وهو يشعر أن شيئاً كبيراً على وشك الحدوث.

مع تطور الأحداث، اكتشف حقائق جديدة غيرت نظرته تماماً. الشخصيات من حوله لم تكن كما تبدو، والأسرار التي كانت مدفونة بدأت تظهر واحدة تلو الأخرى.

في النهاية، وبعد سلسلة من المفاجآت والتحولات، وصل إلى لحظة الحقيقة التي غيرت كل شيء.

---
[هذه قصة تجريبية مولدة للعرض فقط]
النوع: ${genre}
الطول المطلوب: ${lengths.find((l) => l.value === length)?.label}
الأسلوب: ${style}

قريباً سيتم ربط هذه الصفحة بـ API حقيقي للذكاء الاصطناعي لتوليد قصص عالية الجودة.`;

    setGeneratedStory(mockStory);
    setIsGenerating(false);
    setShowResult(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedStory);
    alert("تم نسخ القصة إلى الحافظة");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          ✍️ كاتبة القصة
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          اكتب فكرتك، اختر النوع والأسلوب، واضغط توليد. سيقوم الذكاء الاصطناعي بتحويل فكرتك إلى قصة كاملة.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-2 space-y-5">
          <div className="card p-5">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              فكرة القصة *
            </label>
            <textarea
              className="textarea-field"
              placeholder="مثال: شاب يكتشف باباً سرياً في جدار غرفته يؤدي إلى عالم موازي..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              rows={5}
            />
            <p className="text-xs text-gray-500 mt-2">
              كلما كانت الفكرة أوضح، كانت النتيجة أفضل. يمكنك أيضاً نسخ برومبت من صفحة{" "}
              <Link href="/ideas" className="text-amber-400 hover:underline">
                أفكار
              </Link>
            </p>
          </div>

          <div className="card p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                نوع القصة
              </label>
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                      genre === g
                        ? "bg-purple-600 text-white"
                        : "bg-[#1a1a24] text-gray-400 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                طول القصة
              </label>
              <select
                className="input-field"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              >
                {lengths.map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                أسلوب الكتابة
              </label>
              <input
                type="text"
                className="input-field"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                placeholder="مثال: سردي مشوق، أدبي، بسيط..."
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <span className="animate-spin">⏳</span>
                جاري توليد القصة...
              </>
            ) : (
              <>✨ توليد القصة</>
            )}
          </button>
        </div>

        {/* Result Area */}
        <div className="lg:col-span-3">
          <div className="card p-6 min-h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-white">النتيجة</h2>
              {showResult && (
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#1a1a24] text-gray-300 hover:text-white transition-colors"
                  >
                    📋 نسخ
                  </button>
                </div>
              )}
            </div>

            {!showResult && !isGenerating && (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-5xl mb-3 opacity-40">📝</div>
                  <p className="text-sm">اكتب فكرتك واضغط &quot;توليد القصة&quot; لتظهر هنا</p>
                </div>
              </div>
            )}

            {isGenerating && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-pulse">✨</div>
                  <p className="text-gray-400">الذكاء الاصطناعي يكتب قصتك الآن...</p>
                  <p className="text-xs text-gray-500 mt-2">قد يستغرق بضع ثوانٍ</p>
                </div>
              </div>
            )}

            {showResult && (
              <div className="flex-1 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-sans">
                  {generatedStory}
                </pre>
              </div>
            )}
          </div>

          {showResult && (
            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-200/80">
              💡 <strong>ملاحظة:</strong> هذه نسخة تجريبية. قريباً سيتم ربط الصفحة بـ API حقيقي لتوليد قصص عالية الجودة باللغة العربية.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}