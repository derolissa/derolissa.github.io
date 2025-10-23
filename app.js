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
    captchaError: 'Captchaを完了してください。',
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
    captchaError: 'Please complete the Captcha.',
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
    captchaError: 'Suorita Captcha.',
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
      <h2>ThLee</h2>
      <p>De Rolissa は他のブランドに比べて最近誕生したブランドです。<br>当社はシンプルで使いやすく、おしゃれな製品を提供することに注力しています。<br>このホームページではその中でも"Useful"と"Fashionable"を表現しています。</p>
      
      <div class="section-divider"></div>
      
      <h3>Brand Start Products</h3>
      <p>ブランド誕生とともに生まれた製品を"Products"に掲載しています。<br>これらの製品はブランドとしての第一歩として大切なものになるでしょう。<br>購入可能な場所は下に記載があります。</p>
      
      <p>未定(決定次第公開予定)</p>
      
      <div class="section-divider"></div>
      
      <h3>もうすぐ登場</h3>
      <p>掲載開始をお待ちください。</p>
    `,
    about: `
      <h2>About De Rolissa</h2>
      <p>De Rolissa は、ラグジュアリーファッションの新たな地平を切り開くメゾンとして、2025年にライスによって設立されました。</p>
      
      <h3>Our Philosophy</h3>
      <p>私たちは「Simple, Useful, Fashionable」のThree L(ThLee)を哲学の中心に据えています。<br>流行に左右されることなく、10年後、20年後も愛され続けるデザインを追求し、サステナビリティとラグジュアリーを両立させることに情熱を注いでいます。</p>
      
      <p>すべての製品は、上のThLeeに則って設計されています。</p>
      
      <div class="section-divider"></div>
      
      <h3>Heritage & Innovation</h3>
      <p>2025年 - 日本を中心としてECでの展開を開始<br>
      </p>
      
      <div class="section-divider"></div>
      
      <h3>Atelier & Team</h3>
      <p>チームに加わってくれる人を待っています。</p>
    `,
    products: `
      <h2>Collections</h2>
      <p>De Rolissa のコレクションは、伝統的なオートクチュールの技法と現代的な感性が融合した、唯一無二のピースで構成されています。各アイテムは限定生産され、シリアルナンバーとオーセンティシティカードが付属します。</p>
      
      <h3>Brand Start Products Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">Lee</div>
          <p style="font-size:0.85rem;margin:12px 0;">ThLeeを本コレクションで最も表した製品です。</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">Lee Some</div>
          <p style="font-size:0.85rem;margin:12px 0;">ThLeeと動きやすさを両立しました。</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">Lämmin</div>
          <p style="font-size:0.85rem;margin:12px 0;">おしゃれ×暖かい、そして機能性を極限まで追求しました。</p>
          <div class="product-price">¥null</div>
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
      <p>De Rolissa では、お客様一人ひとりに最高のサービスを提供するため、専門のコンシェルジュチームが対応いたします。<br>製品に関するお問い合わせ、オーダーメイドのご相談、アフターケアまで、すべてのニーズにお応えします。</p>
      
      <h3>Contact Us</h3>
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="4231666c-5273-41d4-b19d-7dd0d1599f1c">
        <input type="hidden" name="subject" value="De Rolissa お問い合わせ">
        <input type="checkbox" name="botcheck" style="display: none;">
        
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
        
        <div class="h-captcha" data-captcha="true"></div>
        
        <button type="submit" data-i18n="formSubmit">送信する</button>
      </form>
      
      <div class="section-divider"></div>
      
      <h3>Store Information</h3>
      <p><strong>De Rolissa Internet</strong><br>
      De Rolissa Amazon<br>
      TEL: Null<br>
      営業時間: 00:00 - 00:00</p>
      
      <p><strong>De Rolissa パリ本店</strong><br>
      15 Rue des Francs-Bourgeois, 75004 Paris, France<br>
      TEL: +33 1 XXXX XXXX<br>
      営業時間: 10:00 - 19:00 (日曜定休)</p>
      
      <div class="section-divider"></div>
      
      <h3>After Sales Service</h3>
      <p>De Rolissa の製品は、ご購入後も末永くご愛用いただけるよう、専門職人による修理・メンテナンスサービス(有料)を提供しています。</p>
      
      <p>サービスのご予約・お問い合わせは、お近くの店舗または上記フォームよりご連絡ください。</p>
    `,
    settings: `
      <h2 data-i18n="language">言語設定</h2>
      <p data-i18n="selectLanguage">言語を選択してください</p>
      
      <div class="lang-buttons">
        <button class="lang-btn" data-lang="ja">
          🇯🇵 日本語 (Japanese)
        </button>
        <button class="lang-btn" data-lang="en">
          🇬🇧 English
        </button>
        <button class="lang-btn" data-lang="fi">
          🇫🇮 Suomi (Finnish)
        </button>
      </div>
    `
  },
  en: {
    home: `
      <h2>ThLee</h2>
      <p>De Rolissa is a recently launched brand compared to others.<br>We are committed to providing simple, functional, and fashionable products.<br>This website expresses "Useful" and "Fashionable" among our core values.</p>
      
      <div class="section-divider"></div>
      
      <h3>Brand Start Products</h3>
      <p>Products born with the brand's inception are featured in "Products".<br>These items will become important milestones as the brand's first steps.<br>Purchase locations are listed below.</p>
      
      <p>To be announced (will be published once determined)</p>
      
      <div class="section-divider"></div>
      
      <h3>Coming Soon</h3>
      <p>Please wait for the listing to begin.</p>
    `,
    about: `
      <h2>About De Rolissa</h2>
      <p>De Rolissa was founded in 2025 by Raisu as a maison opening new horizons in luxury fashion.</p>
      
      <h3>Our Philosophy</h3>
      <p>We place "Simple, Useful, Fashionable" - our Three L (ThLee) - at the center of our philosophy.<br>We are passionate about pursuing designs that will be loved 10 and 20 years from now, unaffected by trends, and achieving both sustainability and luxury.</p>
      
      <p>All products are designed according to the ThLee principles above.</p>
      
      <div class="section-divider"></div>
      
      <h3>Heritage & Innovation</h3>
      <p>2025 - Launch of e-commerce operations centered in Japan<br>
      </p>
      
      <div class="section-divider"></div>
      
      <h3>Atelier & Team</h3>
      <p>We are waiting for people to join our team.</p>
    `,
    products: `
      <h2>Collections</h2>
      <p>De Rolissa's collections consist of unique pieces that fuse traditional haute couture techniques with contemporary sensibility. Each item is produced in limited quantities and comes with a serial number and authenticity card.</p>
      
      <h3>Brand Start Products Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">Lee</div>
          <p style="font-size:0.85rem;margin:12px 0;">The product that best represents ThLee in this collection.</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">Lee Some</div>
          <p style="font-size:0.85rem;margin:12px 0;">Achieves both ThLee and ease of movement.</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">Lämmin</div>
          <p style="font-size:0.85rem;margin:12px 0;">Fashion × warmth, with functionality pursued to the limit.</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>
      
      <h3>Men's Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Tailoring</div>
          <div class="product-name">Bespoke Suit "Savile"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Super 150's wool from Biella, Italy. Fully handmade, bespoke available.</p>
          <div class="product-price">¥680,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Shirt</div>
          <div class="product-name">Egyptian Cotton Shirt</div>
          <p style="font-size:0.85rem;margin:12px 0;">100% Egyptian extra-long staple cotton. Mother-of-pearl buttons, hand-sewn buttonholes.</p>
          <div class="product-price">¥95,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Accessories</div>
          <div class="product-name">Leather Briefcase "Executive"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Full-grain leather from Tuscany, Italy. Hand-stitched by artisans.</p>
          <div class="product-price">¥420,000</div>
        </li>
      </ul>
      
      <h3>Limited Editions</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jewelry</div>
          <div class="product-name">Diamond Cufflinks "Étoile"</div>
          <p style="font-size:0.85rem;margin:12px 0;">18K white gold with VVS1 diamonds. Limited to 10 sets worldwide.</p>
          <div class="product-price">¥1,850,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Collaboration</div>
          <div class="product-name">Silk Scarf "Kyoto Edition"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Collaboration with Kyoto Nishijin-ori. Traditional techniques × modern design, limited to 50 pieces.</p>
          <div class="product-price">¥280,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Handbag</div>
          <div class="product-name">Crocodile Handbag "Élégance"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Made with rare Porosus crocodile. Fully made-to-order, 6-month delivery.</p>
          <div class="product-price">¥3,200,000</div>
        </li>
      </ul>
    `,
    support: `
      <h2>Customer Support</h2>
      <p>At De Rolissa, our dedicated concierge team responds to provide the highest level of service to each customer.<br>We address all needs from product inquiries, bespoke consultations, to aftercare.</p>
      
      <h3>Contact Us</h3>
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="4231666c-5273-41d4-b19d-7dd0d1599f1c">
        <input type="hidden" name="subject" value="De Rolissa Inquiry">
        <input type="checkbox" name="botcheck" style="display: none;">
        
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
        
        <div class="h-captcha" data-captcha="true"></div>
        
        <button type="submit" data-i18n="formSubmit">Send</button>
      </form>
      
      <div class="section-divider"></div>
      
      <h3>Store Information</h3>
      <p><strong>De Rolissa Internet</strong><br>
      De Rolissa Amazon<br>
      TEL: Null<br>
      Hours: 00:00 - 00:00</p>
      
      <p><strong>De Rolissa Paris Flagship</strong><br>
      15 Rue des Francs-Bourgeois, 75004 Paris, France<br>
      TEL: +33 1 XXXX XXXX<br>
      Hours: 10:00 - 19:00 (Closed Sundays)</p>
      
      <div class="section-divider"></div>
      
      <h3>After Sales Service</h3>
      <p>De Rolissa products are supported by repair and maintenance services (paid) by specialized artisans to ensure your long-lasting enjoyment.</p>
      
      <p>For service reservations and inquiries, please contact your nearest store or use the form above.</p>
    `,
    settings: `
      <h2 data-i18n="language">Language Settings</h2>
      <p data-i18n="selectLanguage">Select your language</p>
      
      <div class="lang-buttons">
        <button class="lang-btn" data-lang="ja">
          🇯🇵 日本語 (Japanese)
        </button>
        <button class="lang-btn" data-lang="en">
          🇬🇧 English
        </button>
        <button class="lang-btn" data-lang="fi">
          🇫🇮 Suomi (Finnish)
        </button>
      </div>
    `
  },
  fi: {
    home: `
      <h2>ThLee</h2>
      <p>De Rolissa on äskettäin syntynyt brändi verrattuna muihin.<br>Olemme sitoutuneet tarjoamaan yksinkertaisia, käytännöllisiä ja muodikkaita tuotteita.<br>Tämä kotisivu ilmaisee "Useful" ja "Fashionable" arvojemme keskiössä.</p>
      
      <div class="section-divider"></div>
      
      <h3>Brand Start Products</h3>
      <p>Brändin syntymän myötä syntyneet tuotteet esitellään "Products"-osiossa.<br>Nämä tuotteet tulevat olemaan tärkeitä virstanpylväitä brändin ensiaskelina.<br>Ostopaikat on lueteltu alla.</p>
      
      <p>Ilmoitetaan myöhemmin (julkaistaan kun päätetty)</p>
      
      <div class="section-divider"></div>
      
      <h3>Tulossa Pian</h3>
      <p>Odota listauksen alkamista.</p>
    `,
    about: `
      <h2>Tietoja De Rolissasta</h2>
      <p>De Rolissan perusti Raisu vuonna 2025 luksusmuodin uusia horisontteja avaavana talonaan.</p>
      
      <h3>Filosofiamme</h3>
      <p>Asetamme "Simple, Useful, Fashionable" - Three L (ThLee) - filosofiamme keskiöön.<br>Olemme intohimoisia tavoittelemaan malleja, joita rakastetaan 10 ja 20 vuoden päästä, trendien vaikuttamatta, ja saavuttamaan sekä kestävyys että luksus.</p>
      
      <p>Kaikki tuotteet on suunniteltu yllä olevien ThLee-periaatteiden mukaisesti.</p>
      
      <div class="section-divider"></div>
      
      <h3>Perintö & Innovaatio</h3>
      <p>2025 - Sähköisen kaupankäynnin käynnistäminen Japaniin keskittyen<br>
      </p>
      
      <div class="section-divider"></div>
      
      <h3>Ateljee & Tiimi</h3>
      <p>Odotamme ihmisiä liittymään tiimiimme.</p>
    `,
    products: `
      <h2>Kokoelmat</h2>
      <p>De Rolissan kokoelmat koostuvat ainutlaatuisista kappaleista, jotka yhdistävät perinteisiä haute couture -tekniikoita nykyaikaiseen herkkyy​teen. Jokainen tuote valmistetaan rajoitetuissa erissä ja toimitetaan sarjanumerolla ja aitoustodistuksella.</p>
      
      <h3>Brand Start Products -kokoelma</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">Lee</div>
          <p style="font-size:0.85rem;margin:12px 0;">Tuote, joka parhaiten edustaa ThLee-filosofiaa tässä kokoelmassa.</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">Lee Some</div>
          <p style="font-size:0.85rem;margin:12px 0;">Saavuttaa sekä ThLeen että liikkumisen helppouden.</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">Lämmin</div>
          <p style="font-size:0.85rem;margin:12px 0;">Muoti × lämpö, toiminnallisuus viety äärimmilleen.</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>
      
      <h3>Miesten kokoelma</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Tailoring</div>
          <div class="product-name">Bespoke Suit "Savile"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Super 150's villaa Biellasta, Italia. Täysin käsintehty, räätälöinti saatavilla.</p>
          <div class="product-price">¥680,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Shirt</div>
          <div class="product-name">Egyptian Cotton Shirt</div>
          <p style="font-size:0.85rem;margin:12px 0;">100% egyptiläistä pitkäkuituista puuvillaa. Helmiäisnapit, käsin ommelut napinlävet.</p>
          <div class="product-price">¥95,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Accessories</div>
          <div class="product-name">Leather Briefcase "Executive"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Täysjyvänahkaa Toskanasta, Italia. Käsinommeltu käsityöläisten toimesta.</p>
          <div class="product-price">¥420,000</div>
        </li>
      </ul>
      
      <h3>Rajoitetut painokset</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jewelry</div>
          <div class="product-name">Diamond Cufflinks "Étoile"</div>
          <p style="font-size:0.85rem;margin:12px 0;">18K valkokultaa VVS1-timantteilla. Rajoitettu 10 settiin maailmanlaajuisesti.</p>
          <div class="product-price">¥1,850,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Collaboration</div>
          <div class="product-name">Silk Scarf "Kyoto Edition"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Yhteistyö Kioton Nishijin-orin kanssa. Perinteiset tekniikat × moderni muotoilu, rajoitettu 50 kappaleeseen.</p>
          <div class="product-price">¥280,000</div>
        </li>
        <li class="product-card">
          <div class="product-category">Handbag</div>
          <div class="product-name">Crocodile Handbag "Élégance"</div>
          <p style="font-size:0.85rem;margin:12px 0;">Valmistettu harvinaisesta Porosus-krokotiilista. Täysin tilauksesta, 6 kuukauden toimitusaika.</p>
          <div class="product-price">¥3,200,000</div>
        </li>
      </ul>
    `,
    support: `
      <h2>Asiakastuki</h2>
      <p>De Rolissassa omistautunut concierge-tiimimme vastaa tarjotakseen korkeimman tason palvelua jokaiselle asiakkaalle.<br>Käsittelemme kaikki tarpeet tuotekyselyistä, räätälöintikonsultaatioista jälkihoitoon.</p>
      
      <h3>Ota yhteyttä</h3>
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="4231666c-5273-41d4-b19d-7dd0d1599f1c">
        <input type="hidden" name="subject" value="De Rolissa Kysely">
        <input type="checkbox" name="botcheck" style="display: none;">
        
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
        
        <div class="h-captcha" data-captcha="true"></div>
        
        <button type="submit" data-i18n="formSubmit">Lähetä</button>
      </form>
      
      <div class="section-divider"></div>
      
      <h3>Myymälätiedot</h3>
      <p><strong>De Rolissa Internet</strong><br>
      De Rolissa Amazon<br>
      Puh: Null<br>
      Aukioloajat: 00:00 - 00:00</p>
      
      <p><strong>De Rolissa Pariisin lippulaivamyymälä</strong><br>
      15 Rue des Francs-Bourgeois, 75004 Pariisi, Ranska<br>
      Puh: +33 1 XXXX XXXX<br>
      Aukioloajat: 10:00 - 19:00 (Suljettu sunnuntaisin)</p>
      
      <div class="section-divider"></div>
      
      <h3>Myynnin jälkeinen palvelu</h3>
      <p>De Rolissan tuotteita tukevat erikoistuneiden käsityöläisten korjaus- ja huoltopalvelut (maksullinen) varmistaaksemme pitkäaikaisen nautinnon.</p>
      
      <p>Palveluvarauksiin ja kyselyihin, ota yhteyttä lähimpään myymälään tai käytä yllä olevaa lomaketta.</p>
    `,
    settings: `
      <h2 data-i18n="language">Kieliasetukset</h2>
      <p data-i18n="selectLanguage">Valitse kieli</p>
      
      <div class="lang-buttons">
        <button class="lang-btn" data-lang="ja">
          🇯🇵 日本語 (Japanese)
        </button>
        <button class="lang-btn" data-lang="en">
          🇬🇧 English
        </button>
        <button class="lang-btn" data-lang="fi">
          🇫🇮 Suomi (Finnish)
        </button>
      </div>
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

  // フォーム送信バリデーション（Web3Forms公式方式）
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      const hCaptcha = form.querySelector('textarea[name=h-captcha-response]');
      if (hCaptcha && !hCaptcha.value) {
        e.preventDefault();
        alert(translations[currentLang].captchaError);
        return;
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
.lang-buttons{display:grid;gap:20px;margin-top:40px;max-width:400px;}
.lang-btn{
  all:unset;
  background:rgba(255,255,255,0.04);
  border:1px solid var(--border);
  border-radius:12px;
  padding:20px 32px;
  cursor:pointer;
  transition:0.3s;
  text-align:center;
  font-size:1.05rem;
}
.lang-btn:hover{
  background:rgba(255,255,255,0.08);
  border-color:var(--accent1);
  box-shadow:0 0 20px rgba(0,217,255,0.2);
  transform:translateY(-2px);
}
.lang-btn.active{
  background:linear-gradient(135deg,rgba(0,217,255,0.15),rgba(255,0,128,0.15));
  border-color:var(--accent1);
  box-shadow:0 0 24px rgba(0,217,255,0.3);
}
`;
document.head.appendChild(style);
