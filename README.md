# Production Video Studio

Next.js / TypeScript / App Router / ESLint の最小ひな形です。業務機能はまだ実装していません。

## 前提

- Node.js 20.9.0 以上（Node.js 24 系推奨）と npm
- Next.js 16.4.3 / React 19.3.1。依存の確定バージョンは `package-lock.json` を参照。
- 環境変数・外部サービス・データベースの設定は不要です。

## 起動

PowerShell でこのプロジェクト直下へ移動して実行します。

```powershell
cd C:\Users\kanta\projects\production-video-studio
npm ci
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開きます。終了は `Ctrl+C`。
依存がインストール済みなら `npm run dev` だけで起動できます。
開発・本番確認サーバーはローカルPCにのみ公開します。

## 確認コマンド

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

`start` はビルド後に使用します。`typecheck` は Next.js のルート型を生成してから TypeScript を検証するため、初回ビルド前にも実行できます。
ブラウザで日本語の開始画面を確認してください。業務機能のテストは機能実装時に追加します。

## ファイル構成

- `app/page.tsx`: 開始画面
- `app/layout.tsx`: 日本語設定・メタデータ・共通レイアウト
- `app/globals.css`: 共通スタイル
- `next.config.ts`: Next.js 設定
- `tsconfig.json`: TypeScript 設定（`@/*` はプロジェクト直下）
- `eslint.config.mjs`: Next.js / TypeScript の lint 設定
- `AGENTS.md` / `.agents/skills/`: 既存の組織ルール

`next-env.d.ts` と `.next/` は Next.js が自動生成します。
秘密情報はコミットしない `.env.local` に置いてください。

## 依存関係の注意点

ESLint は `eslint-config-next` 配下のプラグインとの互換性から9系を使用しています。npm はサポート終了の警告を表示します。10系ではプラグインの peer dependency 不整合が発生するため、関連プラグインの対応後にまとめて更新してください。

## 公式資料

- [Next.js インストール手順・Node.js 要件](https://nextjs.org/docs/app/getting-started/installation)
- [Next.js ESLint 設定](https://nextjs.org/docs/app/api-reference/config/eslint)

社内ネットワークで npm が証明書エラーとなる場合、信頼済みCAがWindowsに登録されていることを確認し、対応するNode.jsでは `$env:NODE_USE_SYSTEM_CA='1'` を設定して再実行できます。TLS証明書の検証は無効にしないでください。
