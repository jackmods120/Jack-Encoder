// ─────────────────────────────────────────
//  ✦ JACK Base64 Bot — Premium Edition ✦
//  پڕۆفیشناڵترین شێوازی بۆت بەکارهێنانی دوگمە 
// ─────────────────────────────────────────

const TOKEN = process.env.BOT_TOKEN; // لە Vercel Environment Variables دابنێ

async function sendTelegram(method, data) {
  const url = `https://api.telegram.org/bot${TOKEN}/${method}`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export default async function handler(req, res) {
  // تەنها ڕێگە بە داواکاری POST دەدەین
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, info: "JACK Premium Base64 Bot is running" });
  }

  try {
    const body = req.body;

    // ── ١. مامەڵەکردن لەگەڵ کلیکی دوگمەکان (Callback Queries) ──
    if (body.callback_query) {
      const cb = body.callback_query;
      const chatId = cb.message.chat.id;
      const messageId = cb.message.message_id;
      const action = cb.data;

      // فێڵێکی پڕۆفیشناڵ لە ئارکیتێکچەر: 
      // بۆ ئەوەی پێویستمان بە داتابەیس نەبێت لە Vercel، دەقەکە لەو نامەیە وەردەگرین کە بۆتەکە ڕیپلەی کردووە.
      const targetText = cb.message.reply_to_message?.text || "";

      if (!targetText) {
         await sendTelegram("answerCallbackQuery", {
             callback_query_id: cb.id,
             text: "⚠️ ناتوانم دەقەکە بدۆزمەوە! ڕەنگە نامەکە سڕابێتەوە.",
             show_alert: true
         });
         return res.status(200).send("OK");
      }

      // ئەگەر دوگمەی سڕینەوەی داگرت
      if (action === "delete") {
         await sendTelegram("deleteMessage", { chat_id: chatId, message_id: messageId });
         return res.status(200).send("OK");
      }

      let responseText = "";
      // دوگمەی سڕینەوەی نامەکە دوای ئەوەی کارەکەی تەواو کرد بۆ هێشتنەوەی پاکوخاوێنی چاتەکە
      const replyMarkup = { inline_keyboard: [[{ text: "🗑️ سڕینەوەی نامە", callback_data: "delete" }]] };

      if (action === "encode") {
        const encoded = Buffer.from(targetText, "utf8").toString("base64");
        responseText = `<b>🔐 کۆدکراو (Base64):</b>\n\n<code>${encoded}</code>`;

        await sendTelegram("editMessageText", {
            chat_id: chatId,
            message_id: messageId,
            text: responseText,
            parse_mode: "HTML",
            reply_markup: replyMarkup
        });
      }
      else if (action === "decode") {
         const decoded = Buffer.from(targetText, "base64").toString("utf8");
         
         // دڵنیابوونەوە کە دەقەکە کێشەی تێدا نییە و Base64ـێکی دروستە
         if (decoded.includes('') || decoded.trim() === '') {
             await sendTelegram("answerCallbackQuery", {
                 callback_query_id: cb.id,
                 text: "❌ هەڵە: ئەمە Base64ێکی دروست نییە!",
                 show_alert: true
             });
             return res.status(200).send("OK");
         }

         responseText = `<b>🔓 کراوەتەوە (Text):</b>\n\n<code>${decoded}</code>`;
         await sendTelegram("editMessageText", {
             chat_id: chatId,
             message_id: messageId,
             text: responseText,
             parse_mode: "HTML",
             reply_markup: replyMarkup
         });
      }
      return res.status(200).send("OK");
    }

    // ── ٢. مامەڵەکردن لەگەڵ نامە ئاساییەکان ──
    const message = body?.message;
    if (!message || !message.text) return res.status(200).send("OK");

    const chatId = message.chat.id;
    const text = message.text.trim();

    if (text === "/start") {
      await sendTelegram("sendMessage", {
        chat_id: chatId,
        text: `<b>✦ بەخێربێیت بۆ JACK Base64 Bot ✦</b>\n\nئەمە نایابترین و خێراترین بۆتە. تەنها <b>دەقەکە</b>، یان <b>کۆدەکەت</b> بنێرە، ئینجا لە ڕێگەی دوگمە مۆدێرنەکانەوە هەڵبژێرە کە دەتەوێت چی لێ بکەیت.\n\n<i>✨ خێرا • پارێزراو • شیک</i>`,
        parse_mode: "HTML"
      });
      return res.status(200).send("OK");
    }

    // کاتێک هەر دەقێک دەنێرێت، مینیوی بۆ دروست دەکەین بە شێوازی ڕیپڵەی
    await sendTelegram("sendMessage", {
      chat_id: chatId,
      text: `<b>⚙️ هەڵبژێرە دەتەوێت چی لەم دەقە بکەین:</b>`,
      parse_mode: "HTML",
      reply_to_message_id: message.message_id, 
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🔐 کۆدکردن (Encode)", callback_data: "encode" },
            { text: "🔓 کردنەوە (Decode)", callback_data: "decode" }
          ],
          [
            { text: "🗑️ سڕینەوە", callback_data: "delete" }
          ]
        ]
      }
    });

    return res.status(200).send("OK");
  } catch (err) {
    console.error("Webhook Error:", err);
    return res.status(200).send("OK");
  }
}
