# BOTAMOCHI ホームページ

Readdy で作成したサイトを、Vite + React + Tailwind CSS のプロジェクトとして書き出したものです。

## ローカルで動かす

```bash
npm install
npm run dev
```

## GitHub Pages で公開する

1. このフォルダを GitHub リポジトリに push する（`main` ブランチ）
2. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする
3. push するたびに `.github/workflows/deploy.yml` が自動でビルド・公開する

公開URLは `https://<ユーザー名>.github.io/<リポジトリ名>/` です。

### 独自ドメインを使う場合

Settings → Pages の Custom domain にドメインを設定し、DNS を GitHub Pages に向けてください。
設定を変更したら、Actions の公開ワークフローを実行してください。ビルド時のベースパスは Pages 設定から取得します。

## 構成メモ

- ページ: `src/pages/`、ルーティング: `src/router/config.tsx`
- 画像: `public/images/`（Readdy のサーバーから取得してリポジトリ内に保存）
- ページを追加したら `scripts/postbuild.mjs` の `routes` にもパスを追加してください
  （GitHub Pages で `/xxx` に直接アクセスしたときに表示するため）
- お問い合わせフォームは Readdy に送信します。会員登録ページには問い合わせ先のメールアドレスを掲載しています。
