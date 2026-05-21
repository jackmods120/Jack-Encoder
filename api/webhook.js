// ─────────────────────────────────────────
//  JACK MODS — Base64 Bot  (Vercel Serverless)
//  دەقێک یان لینکێک بنێرە → Base64ەکەی دەگەڕێنێتەوە
// ─────────────────────────────────────────

const TOKEN = process.env.BOT_TOKEN; // لە Vercel Environment Variables دابنێ

async function sendMessage(chat_id, text) {
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text,
      parse_mode: "Markdown",
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, info: "JACK Base64 Bot is running" });
  }

  try {
    const body = req.body;
    const message = body?.message;

    if (!message || !message.text) {
      return res.status(200).json({ ok: true });
    }

    const chat_id = message.chat.id;
    const text = message.text.trim();

    // ── /start ──
    if (text === "/start") {
      await sendMessage(
        chat_id,
        `*✦ JACK Base64 Bot*\n\nهەر دەقێک، لینک، یان تۆکێنێک بمنێرە، Base64ەکەی بۆت دەگەڕێنمەوە.\n\n*نموونە:*\n\`hello world\` ← \`aGVsbG8gd29ybGQ=\`\n\nفەرمان:\n/encode \`دەق\` — بکە بە Base64\n/decode \`Base64\` — Base64 بکەرەوە`
      );
      return res.status(200).json({ ok: true });
    }

    // ── /encode ──
    if (text.startsWith("/encode ")) {
      const input = text.slice(8).trim();
      if (!input) {
        await sendMessage(chat_id, "⚠️ دەقێک دوای /encode بنووسە");
        return res.status(200).json({ ok: true });
      }
      const encoded = Buffer.from(input, "utf8").toString("base64");
      await sendMessage(
        chat_id,
        `*✅ Base64 کراوە:*\n\`\`\`\n${encoded}\n\`\`\``
      );
      return res.status(200).json({ ok: true });
    }

    // ── /decode ──
    if (text.startsWith("/decode ")) {
      const input = text.slice(8).trim();
      if (!input) {
        await sendMessage(chat_id, "⚠️ Base64 دوای /decode بنووسە");
        return res.status(200).json({ ok: true });
      }
      try {
        const decoded = Buffer.from(input, "base64").toString("utf8");
        await sendMessage(
          chat_id,
          `*✅ کراوەتەوە:*\n\`\`\`\n${decoded}\n\`\`\``
        );
      } catch {
        await sendMessage(chat_id, "❌ Base64ی دروست نییە");
      }
      return res.status(200).json({ ok: true });
    }

    // ── هەر دەقێکی تر — ئۆتۆماتیک Base64 دەکات ──
    const encoded = Buffer.from(text, "utf8").toString("base64");
    await sendMessage(
      chat_id,
      `*🔐 Base64 کراوە:*\n\`\`\`\n${encoded}\n\`\`\`\n\n_بۆ کردنەوەی Base64 بنووسە:_\n/decode \`${encoded}\``
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: true });
  }
}
