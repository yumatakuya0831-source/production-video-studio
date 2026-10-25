export default function Home() {
  return (
    <main>
      <section aria-labelledby="welcome-title">
        <p className="eyebrow">Production Video Studio</p>
        <h1 id="welcome-title">ここから、開発をはじめましょう。</h1>
        <p className="description">
          Next.js の開発用スタートページです。作りたいシステムの要件に合わせて、画面や機能を追加していきましょう。
        </p>
        <div className="getting-started">
          <h2>最初の一歩</h2>
          <ol>
            <li><code>app/page.tsx</code> を編集して、画面を変更します。</li>
            <li>起動・確認の手順は <code>README.md</code> を参照してください。</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
