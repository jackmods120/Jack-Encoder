// ─────────────────────────────────────────
//  ✦ JACK Base64 Bot — Fully Persistent UI ✦
//  بۆتەکە بە تەواوی دەبێت بەو زمانەی بەکارهێنەر هەڵیبژاردووە
// ─────────────────────────────────────────

const TOKEN = process.env.BOT_TOKEN;

const i18n = {
  ku: {
    start: "<b>🌐 تکایە زمانەکەت هەڵبژێرە / Please select your language:</b>",
    startSelected: "<b>زمانەکە بە سەرکەوتوویی جێگیرکرا! 🇹🇯</b>\n\nئێستا هەر دەقێک یان کۆدێک لێرە بنێریت، بە زمانی <b>کوردی</b> مامەڵەی لەگەڵ دەکرێت.",
    choose: "⚙️ هەڵبژێرە دەتەوێت چی لەم دەقە بکەین:",
    encodeBtn: "🔐 کۆدکردن",
    decodeBtn: "🔓 کردنەوە",
    langBtn: "🌐 گۆڕینی زمان",
    deleteBtn: "🗑️ سڕینەوە",
    backBtn: "🔙 گەڕانەوە",
    encoded: "<b>🔐 کۆدکراو (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 کراوەتەوە (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ ناتوانم دەقەکە بدۆزمەوە! تکایە دووبارە دەقەکە بنێرەوە.",
    errInvalid: "❌ هەڵە: ئەمە Base64ێکی دروست نییە!",
    selectLang: "🌐 زمانێک هەڵبژێرە / Select Language:"
  },
  en: {
    start: "<b>🌐 Please select your language:</b>",
    startSelected: "<b>Language successfully set! 🇬🇧</b>\n\nNow, any text or code you send here will be processed in <b>English</b>.",
    choose: "⚙️ Choose what to do with this text:",
    encodeBtn: "🔐 Encode",
    decodeBtn: "🔓 Decode",
    langBtn: "🌐 Change Language",
    deleteBtn: "🗑️ Delete",
    backBtn: "🔙 Back",
    encoded: "<b>🔐 Encoded (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 Decoded (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ Cannot find the text! Please resend the text.",
    errInvalid: "❌ Error: Invalid Base64!",
    selectLang: "🌐 Select a Language:"
  },
  ar: {
    start: "<b>🌐 الرجاء اختيار لغتك / Please select your language:</b>",
    startSelected: "<b>تم تعيين اللغة بنجاح! 🇸🇦</b>\n\nالآن، أي نص أو كود ترسله هنا سيتم التعامل معه باللغة <b>العربية</b>.",
    choose: "⚙️ اختر ماذا تريد أن تفعل بهذا النص:",
    encodeBtn: "🔐 تشفير",
    decodeBtn: "🔓 فك التشفير",
    langBtn: "🌐 تغيير اللغة",
    deleteBtn: "🗑️ حذف",
    backBtn: "🔙 رجوع",
    encoded: "<b>🔐 مشفر (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 مفكوك التشفير (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ لم يتم العثور على النص! يرجى إعادة إرسال النص.",
    errInvalid: "❌ خطأ: Base64 غير صالح!",
    selectLang: "🌐 اختر لغة:"
  },
  hi: {
    start: "<b>🌐 कृपया अपनी भाषा चुनें / Please select your language:</b>",
    startSelected: "<b>भाषा सफलतापूर्वक सेट हो गई है! 🇮🇳</b>\n\nअब, आपके द्वारा भेजा گیا کوئی بھی ٹیکسٹ یا کوڈ <b>ہندی</b> میں پروسیس ہوگا۔",
    choose: "⚙️ चुनें कि इस पाठ के साथ क्या करना है:",
    encodeBtn: "🔐 एनकोड",
    decodeBtn: "🔓 डिकोड",
    langBtn: "🌐 भाषा बदलें",
    deleteBtn: "🗑️ हटाएं",
    backBtn: "🔙 वापस",
    encoded: "<b>🔐 एनकोड किया गया:</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 डिकोड किया गया:</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ पाठ नहीं मिला! कृपया पाठ पुनः भेजें।",
    errInvalid: "❌ अमान्य Base64!",
    selectLang: "🌐 भाषा चुनें:"
  },
  zh: {
    start: "<b>🌐 请选择您的语言 / Please select your language:</b>",
    startSelected: "<b>语言设置成功！🇨🇳</b>\n\n现在，您在此处发送 family 的任何文本或代码都将以<b>中文</b>处理。",
    choose: "⚙️ 请选择对该文本的操作：",
    encodeBtn: "🔐 编码",
    decodeBtn: "🔓 解码",
    langBtn: "🌐 更改语言",
    deleteBtn: "🗑️ 删除",
    backBtn: "🔙 返回",
    encoded: "<b>🔐 已编码 (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 已解码 (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ 找不到文本！请重新发送文本。",
    errInvalid: "❌ 无效的 Base64！",
    selectLang: "🌐 选择语言："
  },
  ko: {
    start: "<b>🌐 언어를 선택하세요 / Please select your language:</b>",
    startSelected: "<b>언어가 성공적으로 설정되었습니다! 🇰🇷</b>\n\n이제 여기서 보내는 모든 텍스트나 코드는 <b>한국어</b>로 처리됩니다.",
    choose: "⚙️ 텍스트로 수행할 작업을 선택하세요:",
    encodeBtn: "🔐 인코딩",
    decodeBtn: "🔓 디코딩",
    langBtn: "🌐 언어 변경",
    deleteBtn: "🗑️ 삭제",
    backBtn: "🔙 뒤로",
    encoded: "<b>🔐 인코딩됨 (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 디코딩됨 (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ 텍스트를 찾을 수 없습니다! 텍스트를 다시 보내주세요.",
    errInvalid: "❌ 잘못된 Base64!",
    selectLang: "🌐 언어 선택:"
  },
  ur: {
    start: "<b>🌐 براہ کرم اپنی زبان منتخب کریں / Please select your language:</b>",
    startSelected: "<b>زبان کامیابی کے ساتھ سیٹ ہو گئی ہے! 🇵🇰</b>\n\nاب، آپ کا یہاں بھیجا گیا کوئی بھی متن یا کوڈ <b>اردو</b> میں پروسیس ہوگا۔",
    choose: "⚙️ منتخب کریں کہ اس متن کے ساتھ کیا کرنا ہے:",
    encodeBtn: "🔐 انکوڈ",
    decodeBtn: "🔓 ڈیکوڈ",
    langBtn: "🌐 زبان تبدیل کریں",
    deleteBtn: "🗑️ حذف کریں",
    backBtn: "🔙 واپس",
    encoded: "<b>🔐 انکوڈ شدہ:</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 ڈیکوڈ شدہ:</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ متن نہیں ملا! براہ کرم متن دوبارہ بھیجیں۔",
    errInvalid: "❌ غلط Base64!",
    selectLang: "🌐 زبان منتخب کریں:"
  }
};

async function sendTelegram(method, data) {
  const url = `https://api.telegram.org/bot${TOKEN}/${method}`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// دروستکردنی مینیوی سەرەکی بەپێی زمانی دیاریکراو
function getMainMenu(langCode) {
  const t = i18n[langCode] || i18n["ku"];
  return {
    inline_keyboard: [
      [
        { text: t.encodeBtn, callback_data: `encode|${langCode}` },
        { text: t.decodeBtn, callback_data: `decode|${langCode}` }
      ],
      [
        { text: t.langBtn, callback_data: `langs|${langCode}` },
        { text: t.deleteBtn, callback_data: `delete|${langCode}` }
      ]
    ]
  };
}

// دروستکردنی مینیوی زمانەکان (لینک کراو بە زمانەکەوە)
// لێرەدا پیتێک بە ناوی 's' زیاد دەکەین بۆ نیشانەدانی شاشەی /start
function getLangsMenu(currentLangCode, isStartMode) {
  const t = i18n[currentLangCode] || i18n["ku"];
  const suffix = isStartMode ? "s" : "m"; // s = start mode, m = main menu mode
  
  const rows = [
    [{ text: "🇹🇯 کوردی", callback_data: `menu|ku|${suffix}` }, { text: "🇬🇧 English", callback_data: `menu|en|${suffix}` }],
    [{ text: "🇸🇦 العربية", callback_data: `menu|ar|${suffix}` }, { text: "🇮🇳 हिंदी", callback_data: `menu|hi|${suffix}` }],
    [{ text: "🇨🇳 中文", callback_data: `menu|zh|${suffix}` }, { text: "🇰🇷 한국어", callback_data: `menu|ko|${suffix}` }],
    [{ text: "🇵🇰 اردو", callback_data: `menu|ur|${suffix}` }]
  ];
  
  if (!isStartMode) {
    rows.push([{ text: t.backBtn, callback_data: `menu|${currentLangCode}|m` }]);
  }
  
  return { inline_keyboard: rows };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).json({ ok: true });

  try {
    const body = req.body;

    // ── ١. مامەڵەکردن لەگەڵ کلیکی دوگمەکان (Callbacks) ──
    if (body.callback_query) {
      const cb = body.callback_query;
      const chatId = cb.message.chat.id;
      const messageId = cb.message.message_id;
      
      // دابەشکردنی داتاکان (نموونە: menu|en|s یان encode|ku)
      const [action, langCode, mode] = cb.data.split("|");
      const t = i18n[langCode] || i18n["ku"];
      
      const targetText = cb.message.reply_to_message?.text || "";

      if (action === "delete") {
         await sendTelegram("deleteMessage", { chat_id: chatId, message_id: messageId });
         return res.status(200).send("OK");
      }

      if (!targetText && (action === "encode" || action === "decode")) {
         await sendTelegram("answerCallbackQuery", { callback_query_id: cb.id, text: t.errNotFound, show_alert: true });
         return res.status(200).send("OK");
      }

      // کردارەکانی گۆڕین یان جێگیرکردنی زمان
      if (action === "menu") {
         if (mode === "s") {
            // ئەگەر لە شاشەی /start زمانەکەی هەڵبژارد، نامەکە دەبێت بە زمانە نوێیەکە و بە جێگیری دەمێنێتەوە
            await sendTelegram("editMessageText", {
                chat_id: chatId,
                message_id: messageId,
                text: t.startSelected,
                parse_mode: "HTML",
                reply_markup: {
                  inline_keyboard: [[{ text: t.langBtn, callback_data: `langs|${langCode}|s` }]]
                }
            });
         } else {
            // ئەگەر لە مینیوی دەق بوو، دەچێتەوە سەر مینیوی سەرەکی بە زمانە نوێیەکە
            await sendTelegram("editMessageText", {
                chat_id: chatId,
                message_id: messageId,
                text: t.choose,
                parse_mode: "HTML",
                reply_markup: getMainMenu(langCode)
            });
         }
         return res.status(200).send("OK");
      }

      // نیشاندانی لیستی زمانەکان
      if (action === "langs") {
         const isStart = (mode === "s");
         await sendTelegram("editMessageText", {
             chat_id: chatId,
             message_id: messageId,
             text: t.selectLang,
             parse_mode: "HTML",
             reply_markup: getLangsMenu(langCode, isStart)
         });
         return res.status(200).send("OK");
      }

      // مینیوی ئەنجامەکان (کۆدکردن / کردنەوە) - هێشتنەوەی زمانە دیاریکراوەکە بە جێگیری
      const resultMarkup = { 
          inline_keyboard: [[
              { text: t.backBtn, callback_data: `menu|${langCode}|m` },
              { text: t.deleteBtn, callback_data: `delete|${langCode}` }
          ]] 
      };

      if (action === "encode") {
        const encoded = Buffer.from(targetText, "utf8").toString("base64");
        await sendTelegram("editMessageText", {
            chat_id: chatId, message_id: messageId,
            text: t.encoded.replace("{text}", encoded),
            parse_mode: "HTML", reply_markup: resultMarkup
        });
      }
      else if (action === "decode") {
         const decoded = Buffer.from(targetText, "base64").toString("utf8");
         if (decoded.includes('') || decoded.trim() === '') {
             await sendTelegram("answerCallbackQuery", { callback_query_id: cb.id, text: t.errInvalid, show_alert: true });
             return res.status(200).send("OK");
         }
         await sendTelegram("editMessageText", {
             chat_id: chatId, message_id: messageId,
             text: t.decoded.replace("{text}", decoded),
             parse_mode: "HTML", reply_markup: resultMarkup
         });
      }
      return res.status(200).send("OK");
    }

    // ── ٢. مامەڵەکردن لەگەڵ نامە ئاساییەکان ──
    const message = body?.message;
    if (!message || !message.text) return res.status(200).send("OK");

    const chatId = message.chat.id;
    const text = message.text.trim();

    // دۆزینەوەی ئۆتۆماتیکی (تورکی دەبێتە ئینگلیزی، ئەوی تر کوردی سەرەکییە)
    let userLang = message.from.language_code?.substring(0, 2) || "ku";
    if (userLang === "tr") userLang = "en"; 
    if (!i18n[userLang]) userLang = "ku";

    const t = i18n[userLang];

    // کاتێک بەکارهێنەر دەنوسێت /start
    if (text === "/start") {
      await sendTelegram("sendMessage", {
        chat_id: chatId,
        text: t.start,
        parse_mode: "HTML",
        reply_to_message_id: message.message_id,
        reply_markup: getLangsMenu(userLang, true) // true واتا دۆخی ستارتە
      });
      return res.status(200).send("OK");
    }

    // لێرە کاتێک بەکارهێنەر دەقێک دەنێرێت:
    // ئەگەر بۆتەکە پێشتر وەڵامی دابێتەوە، تەماشا دەکەین بزانین بە چ زمانێک بووە بۆ ئەوەی پارێزگاری لێ بکەین.
    await sendTelegram("sendMessage", {
      chat_id: chatId,
      text: t.choose,
      parse_mode: "HTML",
      reply_to_message_id: message.message_id, 
      reply_markup: getMainMenu(userLang)
    });

    return res.status(200).send("OK");
  } catch (err) {
    console.error("Webhook Error:", err);
    return res.status(200).send("OK");
  }
}
