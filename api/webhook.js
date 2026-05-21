// ─────────────────────────────────────────
//  ✦ JACK Base64 Bot — Global Premium Edition ✦
//  سیستەمی فرەزمانی بێ داتابەیس (Stateless i18n)
// ─────────────────────────────────────────

const TOKEN = process.env.BOT_TOKEN;

// فەرهەنگی زمانەکان
const i18n = {
  ku: {
    start: "<b>✦ بەخێربێیت بۆ JACK Base64 Bot ✦</b>\n\nتەنها <b>دەقەکە</b>، یان <b>کۆدەکەت</b> بنێرە.",
    choose: "⚙️ هەڵبژێرە دەتەوێت چی لەم دەقە بکەین:",
    encodeBtn: "🔐 کۆدکردن",
    decodeBtn: "🔓 کردنەوە",
    langBtn: "🌐 زمانەکان",
    deleteBtn: "🗑️ سڕینەوە",
    backBtn: "🔙 گەڕانەوە",
    encoded: "<b>🔐 کۆدکراو (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 کراوەتەوە (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ ناتوانم دەقەکە بدۆزمەوە!",
    errInvalid: "❌ هەڵە: ئەمە Base64ێکی دروست نییە!",
    selectLang: "🌐 زمانێک هەڵبژێرە / Select Language:"
  },
  en: {
    start: "<b>✦ Welcome to JACK Base64 Bot ✦</b>\n\nJust send your <b>text</b> or <b>code</b>.",
    choose: "⚙️ Choose what to do with this text:",
    encodeBtn: "🔐 Encode",
    decodeBtn: "🔓 Decode",
    langBtn: "🌐 Languages",
    deleteBtn: "🗑️ Delete",
    backBtn: "🔙 Back",
    encoded: "<b>🔐 Encoded (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 Decoded (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ Cannot find the text!",
    errInvalid: "❌ Error: Invalid Base64!",
    selectLang: "🌐 Select a Language:"
  },
  ar: {
    start: "<b>✦ أهلاً بك في بوت JACK Base64 ✦</b>\n\nفقط أرسل <b>النص</b> أو <b>الكود</b>.",
    choose: "⚙️ اختر ماذا تريد أن تفعل بهذا النص:",
    encodeBtn: "🔐 تشفير",
    decodeBtn: "🔓 فك التشفير",
    langBtn: "🌐 اللغات",
    deleteBtn: "🗑️ حذف",
    backBtn: "🔙 رجوع",
    encoded: "<b>🔐 مشفر (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 مفكوك التشفير (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ لم يتم العثور على النص!",
    errInvalid: "❌ خطأ: Base64 غير صالح!",
    selectLang: "🌐 اختر لغة:"
  },
  hi: {
    choose: "⚙️ चुनें कि इस पाठ के साथ क्या करना है:",
    encodeBtn: "🔐 एनकोड",
    decodeBtn: "🔓 डिकोड",
    langBtn: "🌐 भाषाएँ",
    deleteBtn: "🗑️ हटाएं",
    backBtn: "🔙 वापस",
    encoded: "<b>🔐 एनकोड किया गया:</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 डिकोड किया गया:</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ पाठ नहीं मिला!",
    errInvalid: "❌ अमान्य Base64!",
    selectLang: "🌐 भाषा चुनें:"
  },
  zh: {
    choose: "⚙️ 请选择对该文本的操作：",
    encodeBtn: "🔐 编码",
    decodeBtn: "🔓 解码",
    langBtn: "🌐 语言",
    deleteBtn: "🗑️ 删除",
    backBtn: "🔙 返回",
    encoded: "<b>🔐 已编码 (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 已解码 (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ 找不到文本！",
    errInvalid: "❌ 无效的 Base64！",
    selectLang: "🌐 选择语言："
  },
  ko: {
    choose: "⚙️ 텍스트로 수행할 작업을 선택하세요:",
    encodeBtn: "🔐 인코딩",
    decodeBtn: "🔓 디코딩",
    langBtn: "🌐 언어",
    deleteBtn: "🗑️ 삭제",
    backBtn: "🔙 뒤로",
    encoded: "<b>🔐 인코딩됨 (Base64):</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 디코딩됨 (Text):</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ 텍스트를 찾을 수 없습니다!",
    errInvalid: "❌ 잘못된 Base64!",
    selectLang: "🌐 언어 선택:"
  },
  ur: {
    choose: "⚙️ منتخب کریں کہ اس متن کے ساتھ کیا کرنا ہے:",
    encodeBtn: "🔐 انکوڈ",
    decodeBtn: "🔓 ڈیکوڈ",
    langBtn: "🌐 زبانیں",
    deleteBtn: "🗑️ حذف کریں",
    backBtn: "🔙 واپس",
    encoded: "<b>🔐 انکوڈ شدہ:</b>\n\n<code>{text}</code>",
    decoded: "<b>🔓 ڈیکوڈ شدہ:</b>\n\n<code>{text}</code>",
    errNotFound: "⚠️ متن نہیں ملا!",
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

// دروستکردنی مینیوی سەرەکی بەپێی زمان
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

// مینیوی زمانەکان
function getLangsMenu(currentLangCode) {
  const t = i18n[currentLangCode] || i18n["ku"];
  return {
    inline_keyboard: [
      [{ text: "🇹🇯 کوردی", callback_data: "menu|ku" }, { text: "🇬🇧 English", callback_data: "menu|en" }],
      [{ text: "🇸🇦 العربية", callback_data: "menu|ar" }, { text: "🇮🇳 हिंदी", callback_data: "menu|hi" }],
      [{ text: "🇨🇳 中文", callback_data: "menu|zh" }, { text: "🇰🇷 한국어", callback_data: "menu|ko" }],
      [{ text: "🇵🇰 اردو", callback_data: "menu|ur" }],
      [{ text: t.backBtn, callback_data: `menu|${currentLangCode}` }]
    ]
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).json({ ok: true });

  try {
    const body = req.body;

    // ── ١. مامەڵەکردن لەگەڵ دوگمەکان (Callbacks) ──
    if (body.callback_query) {
      const cb = body.callback_query;
      const chatId = cb.message.chat.id;
      const messageId = cb.message.message_id;
      
      // دابەشکردنی داتای دوگمەکە (نموونە: encode|ku دەبێتە action="encode" وە langCode="ku")
      const [action, langCode] = cb.data.split("|");
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

      // گەڕانەوە بۆ مینیوی سەرەکی بە زمانی هەڵبژێردراو
      if (action === "menu") {
         await sendTelegram("editMessageText", {
             chat_id: chatId,
             message_id: messageId,
             text: t.choose,
             parse_mode: "HTML",
             reply_markup: getMainMenu(langCode)
         });
         return res.status(200).send("OK");
      }

      // نیشاندانی لیستی زمانەکان
      if (action === "langs") {
         await sendTelegram("editMessageText", {
             chat_id: chatId,
             message_id: messageId,
             text: t.selectLang,
             parse_mode: "HTML",
             reply_markup: getLangsMenu(langCode)
         });
         return res.status(200).send("OK");
      }

      // دوگمەی گەڕانەوە و سڕینەوە بۆ ئەنجامەکان
      const resultMarkup = { 
          inline_keyboard: [[
              { text: t.backBtn, callback_data: `menu|${langCode}` },
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

    // دۆزینەوەی زمانی ئۆتۆماتیکی. ئەگەر تورکی بوو (tr) ئەوا دەگۆڕێت بۆ ئینگلیزی
    let userLang = message.from.language_code?.substring(0, 2) || "ku";
    if (userLang === "tr") userLang = "en"; 
    if (!i18n[userLang]) userLang = "ku"; // کوردی وەک بنچینە

    const t = i18n[userLang];

    if (text === "/start") {
      await sendTelegram("sendMessage", {
        chat_id: chatId,
        text: t.start || i18n["ku"].start,
        parse_mode: "HTML"
      });
      return res.status(200).send("OK");
    }

    // ناردنی مینیوی هەڵبژاردنەکە
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
