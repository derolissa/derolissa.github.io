// UI翻訳データ
const translations = {
  ja: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    support: 'Support',
    settings: 'Settings',
    language: '言語設定',
    selectLanguage: '言語を選択してください',
    formName: 'お名前',
    formEmail: 'メールアドレス',
    formSubject: 'お問い合わせ種別',
    formMessage: 'メッセージ',
    formSubmit: '送信する',
    formSuccess: 'お問い合わせありがとうございます。\n担当者より3営業日以内にご連絡いたします。',
    formError: '送信に失敗しました。\nもう一度お試しください。',
    captchaError: 'hCaptchaの認証を完了してください。',
    namePlaceholder: '山田 太郎',
    emailPlaceholder: 'example@email.com',
    subjectPlaceholder: '製品について / オーダーメイド / その他',
    messagePlaceholder: 'お問い合わせ内容をご記入ください'
  },
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    support: 'Support',
    settings: 'Settings',
    language: 'Language Settings',
    selectLanguage: 'Select your language',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSubmit: 'Send',
    formSuccess: 'Thank you for your inquiry.\nOur team will contact you within 3 business days.',
    formError: 'Submission failed.\nPlease try again.',
    captchaError: 'Please complete the hCaptcha verification.',
    namePlaceholder: 'John Doe',
    emailPlaceholder: 'example@email.com',
    subjectPlaceholder: 'Product Inquiry / Custom Order / Other',
    messagePlaceholder: 'Please describe your inquiry'
  },
  fi: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    support: 'Support',
    settings: 'Settings',
    language: 'Kieliasetukset',
    selectLanguage: 'Valitse kieli',
    formName: 'Nimi',
    formEmail: 'Sähköposti',
    formSubject: 'Aihe',
    formMessage: 'Viesti',
    formSubmit: 'Lähetä',
    formSuccess: 'Kiitos yhteydenotostasi.\nTiimimme ottaa sinuun yhteyttä 3 arkipäivän kuluessa.',
    formError: 'Lähetys epäonnistui.\nYritä uudelleen.',
    captchaError: 'Suorita hCaptcha-vahvistus.',
    namePlaceholder: 'Matti Meikäläinen',
    emailPlaceholder: 'esimerkki@email.com',
    subjectPlaceholder: 'Tuotekysely / Tilaustyö / Muu',
    messagePlaceholder: 'Kuvaile kyselyäsi'
  }
};

// コンテンツデータ
const contentData = {
  ja: {
    home: `
      <h2>Luxury Redefined</h2>
      <p>De Rolissa は1954年、パリのマレ地区にある小さなアトリエから始まりました。創業者エリザベート・ド・ロリッサが掲げた「時代を超える美」という理念は、70年の時を経た今も、私たちのクリエイションの核心であり続けています。</p>
      
      <div class="section-divider"></div>
      
      <h3>2025 Spring Collection</h3>
      <p>今シーズンのコレクションは、南仏プロヴァンスの光と影をテーマに、シルクとリネンの絶妙な組み合わせで表現しました。伝統的な手織り技術と最先端のテキスタイル加工を融合させ、肌に触れた瞬間から違いを感じていただける逸品です。</p>
      
      <p>各ピースには専属アトリエの職人が300時間以上を費やし、ハンドステッチで仕上げています。限定生産により、世界でわずか50着のみの展開となります。</p>
      
      <div class="section-divider"></div>
      
      <h3>Craftsmanship Heritage</h3>
      <p>De Rolissa のアトリエでは、フランス・イタリア・日本の伝統技術を継承した職人たちが、一針一針に魂を込めて作品を生み出しています。素材選びから最終仕上げまで、すべての工程に妥協を許さない姿勢が、唯一無二の品質を保証します。</p>
    `,
    about: `
      <h2>About De Rolissa</h2>
      <p>De Rolissa は、ラグジュアリーファッションの新たな地平を切り開くメゾンとして、1954年にエリザベート・ド・ロリッサによって設立されました。彼女のビジョンは明確でした——真の贅沢とは、単なる装飾ではなく、時間と技術、そして情熱が織りなす芸術作品である、と。</p>
      
      <h3>Our Philosophy</h3>
      <p>私たちは「Timeless Elegance(時代を超える優雅さ)」を哲学の中心に据えています。流行に左右されることなく、10年後、20年後も愛され続けるデザインを追求し、サステナビリティとラグジュアリーを両立させることに情熱を注いでいます。</p>
      
      <p>すべての製品は、環境に配慮した素材選定と倫理的な生産プロセスを経て誕生します。De Rolissa を纏うことは、美しさだけでなく、責任あるライフスタイルを選択することを意味します。</p>
      
      <div class="section-divider"></div>
      
      <h3>Heritage & Innovation</h3>
      <p>1954年 - パリ・マレ地区に最初のアトリエを開設<br>
      1978年 - ミラノ・ファッションウィークに初出展、国際的評価を確立<br>
      1995年 - 日本の伝統織物技術との提携開始<br>
      2010年 - サステナブル・ラグジュアリー宣言を発表<br>
      2025年 - 世界30ヶ国、50店舗のグローバルネットワークを構築</p>
      
      <div class="section-divider"></div>
      
      <h3>Atelier & Team</h3>
      <p>パリ本社アトリエには、平均経験年数25年を超える熟練職人が20名在籍しています。クリエイティブディレクターのソフィア・ヴェルネールを筆頭に、テキスタイルデザイナー、パタンナー、刺繍職人が一丸となり、年間わずか500ピースの限定コレクションを生み出しています。</p>
    `,
    products: `
      <h2>Collections</h2>
      <p>De Rolissa のコレクションは、伝統的なオートクチュールの技法と現代的な感性が融合した、唯一無二のピースで構成されています。各アイテムは限定生産され、シリアルナンバーとオーセンティシティカードが付属します。</p>
      
      <h3>Women's Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Evening Wear</div>
          <div class="product-name">Silk Evening Gown "Provence"</div>
          <p style="font-size:0.85rem;margin:12px 0;">南仏の夕暮れからインスピレーションを得たシルクガウン。手織りシルク100%、限定30着。</p>
          <div class="product-price">¥580,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Day Dress</div>
          <div class="product-name">Linen Day Dress "Côte d'Azur"</div>
          <p style="font-size:0.85rem;margin:12px 0;">イタリア産リネンを使用したエレガントなデイドレス。手刺繍ディテール付き。</p>
          <div class="product-price">¥380,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Outerwear</div>
          <div class="product-name">Cashmere Coat "Mont Blanc"</div>
          <p style="font-size:0.85rem;margin:12px 0;">モンゴル産最高級カシミア使用。伝統的なハンドステッチ仕上げ。</p>
          <div class="product-price">¥720,000</div>
        </li>
      </ul>
      
      <h3>Men's Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Tailoring</div>
          <div class="product-name">Bespoke Suit "Savile"</div>
          <p style="font-size:0.85rem;margin:12px 0;">イタリア・ビエラ産Super 150'sウール。フルハンドメイド、オーダーメイド対応。</p>
          <div class="product-price">¥680,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Shirt</div>
          <div class="product-name">Egyptian Cotton Shirt</div>
          <p style="font-size:0.85rem;margin:12px 0;">エジプト超長綿100%。マザーオブパールボタン、手縫いボタンホール。</p>
          <div class="product-price">¥95,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Accessories</div>
          <div class="product-name">Leather Briefcase "Executive"</div>
          <p style="font-size:0.85rem;margin:12px 0;">イタリア・トスカーナ産フルグレインレザー。職人による手縫い仕上げ。</p>
          <div class="product-price">¥420,000</div>
        </li>
      </ul>
      
      <h3>Limited Editions</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jewelry</div>
          <div class="product-name">Diamond Cufflinks "Étoile"</div>
          <p style="font-size:0.85rem;margin:12px 0;">18金ホワイトゴールド、VVS1ダイヤモンド使用。世界限定10セット。</p>
          <div class="product-price">¥1,850,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Collaboration</div>
          <div class="product-name">Silk Scarf "Kyoto Edition"</div>
          <p style="font-size:0.85rem;margin:12px 0;">京都西陣織とのコラボレーション。伝統技法×現代デザイン、限定50枚。</p>
          <div class="product-price">¥280,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Handbag</div>
          <div class="product-name">Crocodile Handbag "Élégance"</div>
          <p style="font-size:0.85rem;margin:12px 0;">希少なポロサスクロコダイル使用。完全受注生産、納期6ヶ月。</p>
          <div class="product-price">¥3,200,000</div>
        </li>
      </ul>
    `,
    support: `
      <h2>Customer Support</h2>
      <p>De Rolissa では、お客様一人ひとりに最高のサービスを提供するため、専門のコンシェルジュチームが対応いたします。製品に関するお問い合わせ、オーダーメイドのご相談、アフターケアまで、すべてのニーズにお応えします。</p>
      
      <h3>Contact Us</h3>
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
        <input type="hidden" name="subject" value="De Rolissa お問い合わせ">
        <input type="checkbox" name="botcheck" class="hidden" style="display:none;">
        
        <label>
          <span data-i18n="formName">お名前</span> *
          <input type="text" name="name" required data-placeholder="namePlaceholder">
        </label>
        <label>
          <span data-i18n="formEmail">メールアドレス</span> *
          <input type="email" name="email" required data-placeholder="emailPlaceholder">
        </label>
        <label>
          <span data-i18n="formSubject">お問い合わせ種別</span> *
          <input type="text" name="inquiry_type" required data-placeholder="subjectPlaceholder">
        </label>
        <label>
          <span data-i18n="formMessage">メッセージ</span> *
          <textarea name="message" required data-placeholder="messagePlaceholder"></textarea>
        </label>
        
        <div class="h-captcha" data-sitekey="YOUR_HCAPTCHA_SITE_KEY"></div>
        
        <button type="submit" data-i18n="formSubmit">送信する</button>
      </form>
      
      <div class="section-divider"></div>
      
      <h3>Store Information</h3>
      <p><strong>De Rolissa 銀座本店</strong><br>
      〒104-0061 東京都中央区銀座6-10-1<br>
      TEL: 03-XXXX-XXXX<br>
      営業時間: 11:00 - 20:00 (年中無休)</p>
      
      <p><strong>De Rolissa パリ本店</strong><br>
      15 Rue des Francs-Bourgeois, 75004 Paris, France<br>
      TEL: +33 1 XXXX XXXX<br>
      営業時間: 10:00 - 19:00 (日曜定休)</p>
      
      <div class="section-divider"></div>
      
      <h3>After Sales Service</h3>
      <p>De Rolissa の製品は、ご購入後も末永くご愛用いただけるよう、専門職人による修理・メンテナンスサービスを提供しています。シルク製品のクリーニング、レザー製品の補色、ジュエリーのサイズ調整まで、あらゆるご要望に対応いたします。</p>
      
      <p>サービスのご予約・お問い合わせは、お近くの店舗または上記フォームよりご連絡ください。</p>
    `,
    settings: `
      <h2 data-i18n="language">言語設定</h2>
      <p data-i18n="selectLanguage">言語を選択してください</p>
      
      <div style="display:grid;gap:20px;margin-top:40px;max-width:400px;">
        <button class="lang-btn" data-lang="ja" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇯🇵 日本語 (Japanese)
        </button>
        <button class="lang-btn" data-lang="en" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇬🇧 English
        </button>
        <button class="lang-btn" data-lang="fi" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇫🇮 Suomi (Finnish)
        </button>
      </div>
      
      <style>
        .lang-btn:hover{
          background:rgba(255,255,255,0.08)!important;
          border-color:var(--accent1)!important;
          box-shadow:0 0 20px rgba(0,217,255,0.2)!important;
          transform:translateY(-2px);
        }
        .lang-btn.active{
          background:linear-gradient(135deg,rgba(0,217,255,0.15),rgba(255,0,128,0.15))!important;
          border-color:var(--accent1)!important;
          box-shadow:0 0 24px rgba(0,217,255,0.3)!important;
        }
      </style>
    `
  },
  en: {
    home: `英語版コンテンツ`,
    about: `英語版コンテンツ`,
    products: `英語版コンテンツ`,
    support: `
      <h2>Customer Support</h2>
      <p>English support content here</p>
      
      <h3>Contact Us</h3>
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
        <input type="hidden" name="subject" value="De Rolissa Inquiry">
        <input type="checkbox" name="botcheck" class="hidden" style="display:none;">
        
        <label>
          <span data-i18n="formName">Name</span> *
          <input type="text" name="name" required data-placeholder="namePlaceholder">
        </label>
        <label>
          <span data-i18n="formEmail">Email</span> *
          <input type="email" name="email" required data-placeholder="emailPlaceholder">
        </label>
        <label>
          <span data-i18n="formSubject">Subject</span> *
          <input type="text" name="inquiry_type" required data-placeholder="subjectPlaceholder">
        </label>
        <label>
          <span data-i18n="formMessage">Message</span> *
          <textarea name="message" required data-placeholder="messagePlaceholder"></textarea>
        </label>
        
        <div class="h-captcha" data-sitekey="YOUR_HCAPTCHA_SITE_KEY"></div>
        
        <button type="submit" data-i18n="formSubmit">Send</button>
      </form>
    `,
    settings: `
      <h2 data-i18n="language">Language Settings</h2>
      <p data-i18n="selectLanguage">Select your language</p>
      
      <div style="display:grid;gap:20px;margin-top:40px;max-width:400px;">
        <button class="lang-btn" data-lang="ja" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇯🇵 日本語 (Japanese)
        </button>
        <button class="lang-btn" data-lang="en" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇬🇧 English
        </button>
        <button class="lang-btn" data-lang="fi" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇫🇮 Suomi (Finnish)
        </button>
      </div>
      
      <style>
        .lang-btn:hover{
          background:rgba(255,255,255,0.08)!important;
          border-color:var(--accent1)!important;
          box-shadow:0 0 20px rgba(0,217,255,0.2)!important;
          transform:translateY(-2px);
        }
        .lang-btn.active{
          background:linear-gradient(135deg,rgba(0,217,255,0.15),rgba(255,0,128,0.15))!important;
          border-color:var(--accent1)!important;
          box-shadow:0 0 24px rgba(0,217,255,0.3)!important;
        }
      </style>
    `
  },
  fi: {
    home: `フィンランド語版コンテンツ`,
    about: `フィンランド語版コンテンツ`,
    products: `フィンランド語版コンテンツ`,
    support: `
      <h2>Asiakastuki</h2>
      <p>Finnish support content here</p>
      
      <h3>Ota yhteyttä</h3>
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="4231666c-5273-41d4-b19d-7dd0d1599f1c">
        <input type="hidden" name="subject" value="De Rolissa Kysely">
        <input type="checkbox" name="botcheck" class="hidden" style="display:none;">
        
        <label>
          <span data-i18n="formName">Nimi</span> *
          <input type="text" name="name" required data-placeholder="namePlaceholder">
        </label>
        <label>
          <span data-i18n="formEmail">Sähköposti</span> *
          <input type="email" name="email" required data-placeholder="emailPlaceholder">
        </label>
        <label>
          <span data-i18n="formSubject">Aihe</span> *
          <input type="text" name="inquiry_type" required data-placeholder="subjectPlaceholder">
        </label>
        <label>
          <span data-i18n="formMessage">Viesti</span> *
          <textarea name="message" required data-placeholder="messagePlaceholder"></textarea>
        </label>
        
        <div class="h-captcha" data-sitekey="f64a3a5e-c794-40d2-9050-646e0f76f15a"></div>
        
        <button type="submit" data-i18n="formSubmit">Lähetä</button>
      </form>
    `,
    settings: `
      <h2 data-i18n="language">Kieliasetukset</h2>
      <p data-i18n="selectLanguage">Valitse kieli</p>
      
      <div style="display:grid;gap:20px;margin-top:40px;max-width:400px;">
        <button class="lang-btn" data-lang="ja" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇯🇵 日本語 (Japanese)
        </button>
        <button class="lang-btn" data-lang="en" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇬🇧 English
        </button>
        <button class="lang-btn" data-lang="fi" style="all:unset;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:12px;padding:20px 32px;cursor:pointer;transition:0.3s;text-align:center;font-size:1.05rem;">
          🇫🇮 Suomi (Finnish)
        </button>
      </div>
      
      <style>
        .lang-btn:hover{
          background:rgba(255,255,255,0.08)!important;
          border-color:var(--accent1)!important;
          box-shadow:0 0 20px rgba(0,217,255,0.2)!important;
          transform:translateY(-2px);
        }
        .lang-btn.active{
          background:linear-gradient(135deg,rgba(0,217,255,0.15),rgba(255,0,128,0.15))!important;
          border-color:var(--accent1)!important;
          box-shadow:0 0 24px rgba(0,217,255,0.3)!important;
        }
      </style>
    `
  }
};

// 現在の言語
let currentLang = localStorage.getItem('derolissa_lang') || 'ja';

// 時計更新
const clock = document.getElementById('clock');
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// 翻訳適用関数
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.dataset.placeholder;
    if (translations[currentLang] && translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
}

// アイコンクリックでウィンドウ生成
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const app = icon.dataset.app;
    const title = icon.querySelector('span').textContent;
    openWindow(app, title);
  });
});

// ウィンドウ生成関数
function openWindow(appId, title) {
  const existing = document.querySelector('.window');
  if (existing) existing.remove();

  const template = document.getElementById('window-template').content.cloneNode(true);
  const win = template.querySelector('.window');

  win.querySelector('h1').textContent = title;
  win.querySelector('.content').innerHTML = contentData[currentLang][appId] || contentData.ja[appId];

  document.body.appendChild(template);

  applyTranslations();

  // 設定ウィンドウ
  if (appId === 'settings') {
    setTimeout(() => {
      document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
          btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
          currentLang = btn.dataset.lang;
          localStorage.setItem('derolissa_lang', currentLang);
          document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          applyTranslations();
          
          document.querySelectorAll('.icon span').forEach(span => {
            const key = span.dataset.i18n;
            if (key && translations[currentLang][key]) {
              span.textContent = translations[currentLang][key];
            }
          });
        });
      });
    }, 100);
  }

  // hCaptcha付きフォーム送信
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      console.log('Form submit triggered');
      
      // hCaptcha検証（存在する場合のみ）
      let captchaResponse = '';
      if (typeof hcaptcha !== 'undefined') {
        captchaResponse = hcaptcha.getResponse();
        if (!captchaResponse) {
          alert(translations[currentLang].captchaError);
          return;
        }
      }
      
      const formData = new FormData(form);
      if (captchaResponse) {
        formData.append('h-captcha-response', captchaResponse);
      }
      
      console.log('Sending form data...');
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        console.log('Response received:', response);
        
        if (response.ok) {
          alert(translations[currentLang].formSuccess);
          form.reset();
          if (typeof hcaptcha !== 'undefined') {
            hcaptcha.reset();
          }
        } else {
          const errorData = await response.json();
          console.error('Error data:', errorData);
          alert(translations[currentLang].formError);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        alert(translations[currentLang].formError);
      }
    });
  }

  // 閉じるボタン
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const w = document.querySelector('.window');
      if (w) {
        w.style.animation = 'windowClose 0.3s cubic-bezier(0.34,1.56,0.64,1)';
        setTimeout(() => w.remove(), 300);
      }
    });
  }
}

// 初期化
applyTranslations();

// アニメーションCSS
const style = document.createElement('style');
style.textContent = `
@keyframes windowClose{
  0%{opacity:1;transform:scale(1) translateY(0);}
  100%{opacity:0;transform:scale(0.88) translateY(40px);}
}
.hidden{display:none!important;}
.h-captcha{margin:24px 0;}
`;
document.head.appendChild(style);
