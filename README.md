# JACK Base64 Bot — Vercel Setup

## فایلەکان
```
vercel-bot/
├── api/
│   └── webhook.js   ← بۆتەکە
├── vercel.json
└── package.json
```

## مەرحەلەکانی دانان

### ١. بۆتی نوێ دروست بکە
١. بچۆ بۆ [@BotFather](https://t.me/BotFather) لە تێلێگرام
٢. بنووسە `/newbot`
٣. ناوێک بدەی (نموونە: `JACK Base64 Bot`)
٤. یوزەرنەیمێک بدەی (نموونە: `jack_base64_bot`)
٥. **TOKEN**ەکەی بیپارێزە

### ٢. Vercel Deploy
١. فۆڵدەری `vercel-bot` بکەرە GitHub repository
٢. بچۆ [vercel.com](https://vercel.com) → New Project → import ئەو repoیە
٣. لە **Environment Variables** زیاد بکە:
   - Key: `BOT_TOKEN`
   - Value: تۆکێنی بۆتەکەت (لە BotFather)
٤. Deploy بکە

### ٣. Webhook دابنێ
دوای deploy، ئەم URL ەی بنێرە بە مرۆڤی براوزەر (یان curl):

```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<ناوی-پڕۆژەکەت>.vercel.app/api/webhook
```

نموونە:
```
https://api.telegram.org/bot123456:ABC/setWebhook?url=https://jack-base64-bot.vercel.app/api/webhook
```

### ✅ تەواو!
ئێستا بۆتەکەت کارا. هەر دەقێک بنێرێت → Base64ەکەی دەگەڕێتەوە.
