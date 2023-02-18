# 目次

<!-- TOC -->

- [目次](#目次)
- [参考記事](#参考記事)
- [コマンド](#コマンド)
  - [開発環境サーバー起動](#開発環境サーバー起動)
- [構成技術](#構成技術)
- [コンポーネント設計](#コンポーネント設計)

<!-- /TOC -->

# 参考記事

- [my-next-todo](https://github.com/jun0222/my-next-todo)
- [nextjs-output-only-front](https://github.com/YukiOnishi1129/nextjs-output-only-front)
- [bulletproof-react](https://github.com/alan2207/bulletproof-react)
- [Next.js + TypeScript の環境構築](https://qiita.com/itachi/items/05fbe67c7168703a34e7)
- [アトミックデザインとは？5 つのコンポーネントから作る UI デザイン手法](https://www.creativevillage.ne.jp/category/topcreators/web-creator/web-designer/94262/)

# コマンド

## 開発環境サーバー起動

```
yarn dev
```

# 構成技術

- ContextAPI
- Storybook
- Jest
- React Testing Library
- Cypress
- ESLint
- Prettier
- GitHub Actions

※やや古め対応可能な要員が多そうな構成

# コンポーネント設計

- ページ
  - components>DomainName>PageName
- 共通パーツ
  - components>organisms>PartsName
  - components>organisms>PartsNameParent>PartsNameChildren

※アトミックデザインは他者が引き続き作業し辛いと判断し、不採用。
