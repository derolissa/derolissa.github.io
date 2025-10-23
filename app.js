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
      <p>De Rolissa は他のブランドに比べて新しく誕生したブランドです。<br>当社はシンプルで使いやすく、おしゃれな製品を提供することに注力しています。<br>このホームページではその中でも"Useful"と"Fashionable"を表現しています。</p>
      
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
      <p>De Rolissa は、ラグジュアリーファッションの新たな地平を切り開く企業として、2025年に設立されました。<br>「何かだけ」それを当社は許しません。<br>良い点でも悪い点でもそれを守り抜きます。<br>良い点が１つだけなら、良い点を増やす。<br>悪い点が１つだけなら、悪い点をなくす。<br>De Rolissaは、常に進化し続けるブランドであり続けます。</p>
      
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
      <h2>Products & Collections</h2>
      <p>De Rolissa の現在販売している製品とそのコレクションを記載しています。<br>製品には以下のものも同梱した状態でお客様へお送りします。<br>  製品証明書(シリアルナンバーなどが記載)<br>  サポートカード</p>
      
      <h3>Brand Start Products Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">Lee</div>
          <p style="font-size:0.85rem;margin:12px 0;">ThLeeをこのコレクションで最も表した製品です。</p>
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


      <h3>Next Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>


      <h3>Next Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>
    `,
    support: `
      <h2>Customer Support</h2>
      <p>De Rolissa では、お客様一人ひとりに最高のサービスを提供するため、詳細なサポートを行っています。<br>製品に関するお問い合わせ、オーダーメイドのご相談、アフターケアまで、すべてのニーズにお応えします。<br>サポート内容送信先: derolissa@consultant.com<br>*上記メールへの直接送信でも対応致します。<br> 上記メールへの直接送信の場合は確実に送信されます。<br> 下記フォームは先着人数が決まっています。<br>*企業としてのご連絡は上記メールアドレスを経由してご案内いたします。</p>
      
      <h3>Contact Us</h3>
      <form id="contactForm">
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
      E-Mail: derolissa@consultant.com<br>
      営業時間: 00:00 - 00:00<br>
      サポート対応時間: 9:00 - 18:00</p>
      
      <div class="section-divider"></div>
      
      <h3>After Sales Service</h3>
      <p>De Rolissa の製品は、ご購入後も末永くご愛用いただけるよう、専門職人による修理・メンテナンスサービス(有料)を提供しています。</p>
      
      <p>サービスのご予約・お問い合わせは、公式X、上記メールアドレスまたは上記フォームよりご連絡ください。<br>*フォームは先着のため送信されない場合があります。</p>
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
      <p>De Rolissa is a newly launched brand compared to others.<br>We focus on providing simple, functional, and fashionable products.<br>This homepage expresses "Useful" and "Fashionable" among these values.</p>
      
      <div class="section-divider"></div>
      
      <h3>Brand Start Products</h3>
      <p>Products born alongside the brand's launch are featured in "Products".<br>These products will become important first steps for the brand.<br>Purchase locations are listed below.</p>
      
      <p>To be announced (will be published once determined)</p>
      
      <div class="section-divider"></div>
      
      <h3>Coming Soon</h3>
      <p>Please wait for the listing to begin.</p>
    `,
    about: `
      <h2>About De Rolissa</h2>
      <p>De Rolissa was founded in 2025 by Raisu as a maison opening new horizons in luxury fashion.</p>
      
      <h3>Our Philosophy</h3>
      <p>We place "Simple, Useful, Fashionable" - our Three L (ThLee) - at the center of our philosophy.<br>Unaffected by trends, we are passionate about pursuing designs that will be loved 10 and 20 years from now, and achieving both sustainability and luxury.</p>
      
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
      <h2>Products & Collections</h2>
      <p>De Rolissa's currently available products and collections are listed here.<br>Products are delivered to customers including the following items:<br>  Product Certificate (with serial number, etc.)<br>  Support Card</p>
      
      <h3>Brand Start Products Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">Lee</div>
          <p style="font-size:0.85rem;margin:12px 0;">The product that best expresses ThLee in this collection.</p>
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
          <p style="font-size:0.85rem;margin:12px 0;">Fashion × warmth, with functionality pursued to the extreme.</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>


      <h3>Next Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>


      <h3>Next Collection</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>
    `,
    support: `
      <h2>Customer Support</h2>
      <p>At De Rolissa, we provide detailed support to offer the best service to each customer.<br>We respond to all needs from product inquiries, custom order consultations, to aftercare.<br>Support contact: derolissa@consultant.com<br>*Direct emails to the above address are also accepted.<br>Corporate inquiries will be guided through the above email address.</p>
      
      <h3>Contact Us</h3>
      <form id="contactForm">
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
      E-Mail: derolissa@consultant.com<br>
      Business Hours: 00:00 - 00:00<br>
      Support Hours: 9:00 - 18:00</p>
      
      <div class="section-divider"></div>
      
      <h3>After Sales Service</h3>
      <p>De Rolissa products are supported by repair and maintenance services (paid) by specialized artisans to ensure your long-lasting enjoyment after purchase.</p>
      
      <p>For service reservations and inquiries, please contact us via official X, the above email address, or the form above.<br>*The form is first-come, first-served and may not send in some cases.</p>
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
      <p>De Rolissa on uusi brändi verrattuna muihin.<br>Keskitymme tarjoamaan yksinkertaisia, käytännöllisiä ja muodikkaita tuotteita.<br>Tämä kotisivu ilmaisee "Useful" ja "Fashionable" näiden arvojen joukossa.</p>
      
      <div class="section-divider"></div>
      
      <h3>Brand Start Products</h3>
      <p>Brändin lanseerauksen yhteydessä syntyneet tuotteet esitellään "Products"-osiossa.<br>Nämä tuotteet tulevat olemaan tärkeitä ensimmäisiä askeleita brändille.<br>Ostopaikat on lueteltu alla.</p>
      
      <p>Ilmoitetaan myöhemmin (julkaistaan kun päätetty)</p>
      
      <div class="section-divider"></div>
      
      <h3>Tulossa Pian</h3>
      <p>Odota listauksen alkamista.</p>
    `,
    about: `
      <h2>Tietoja De Rolissasta</h2>
      <p>De Rolissan perusti Raisu vuonna 2025 luksusmuodin uusia horisontteja avaavana talonaan.</p>
      
      <h3>Filosofiamme</h3>
      <p>Asetamme "Simple, Useful, Fashionable" - Three L (ThLee) - filosofiamme keskiöön.<br>Trendien vaikuttamatta olemme intohimoisia tavoittelemaan malleja, joita rakastetaan 10 ja 20 vuoden päästä, ja saavuttamaan sekä kestävyys että luksus.</p>
      
      <p>Kaikki tuotteet on suunniteltu yllä olevien ThLee-periaatteiden mukaisesti.</p>
      
      <div class="section-divider"></div>
      
      <h3>Perintö & Innovaatio</h3>
      <p>2025 - Verkkokaupan käynnistäminen Japaniin keskittyen<br>
      </p>
      
      <div class="section-divider"></div>
      
      <h3>Ateljee & Tiimi</h3>
      <p>Odotamme ihmisiä liittymään tiimiimme.</p>
    `,
    products: `
      <h2>Tuotteet & Kokoelmat</h2>
      <p>De Rolissan tällä hetkellä saatavilla olevat tuotteet ja kokoelmat on lueteltu täällä.<br>Tuotteet toimitetaan asiakkaille seuraavien kohteiden kanssa:<br>  Tuotetodistus (sarjanumerolla jne.)<br>  Tukikortti</p>
      
      <h3>Brand Start Products -kokoelma</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">Lee</div>
          <p style="font-size:0.85rem;margin:12px 0;">Tuote, joka parhaiten ilmaisee ThLee-filosofiaa tässä kokoelmassa.</p>
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


      <h3>Seuraava Kokoelma</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>


      <h3>Seuraava Kokoelma</h3>
      <ul>
        <li class="product-card">
          <div class="product-category">Jatkuvasti</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Joskus</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
        <li class="product-card">
          <div class="product-category">Ulkopuolella</div>
          <div class="product-name">nonedata</div>
          <p style="font-size:0.85rem;margin:12px 0;">none data</p>
          <div class="product-price">¥null</div>
        </li>
      </ul>
    `,
    support: `
      <h2>Asiakastuki</h2>
      <p>De Rolissassa tarjoamme yksityiskohtaista tukea tarjotaksemme parhaan palvelun jokaiselle asiakkaalle.<br>Vastaamme kaikkiin tarpeisiin tuotekyselyistä, tilaustyökonsultaatioista jälkihoitoon.<br>Tukiyhteydenotto: derolissa@consultant.com<br>*Suorat sähköpostit yllä olevaan osoitteeseen hyväksytään myös.<br>Yrityskyselyt ohjataan yllä olevan sähköpostiosoitteen kautta.</p>
      
      <h3>Ota yhteyttä</h3>
      <form id="contactForm">
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
      Sähköposti: derolissa@consultant.com<br>
      Aukioloajat: 00:00 - 00:00<br>
      Tukiajat: 9:00 - 18:00</p>
      
      <div class="section-divider"></div>
      
      <h3>Myynnin jälkeinen palvelu</h3>
      <p>De Rolissan tuotteita tukevat erikoistuneiden käsityöläisten korjaus- ja huoltopalvelut (maksullinen) varmistaaksemme pitkäaikaisen nautinnon oston jälkeen.</p>
      
      <p>Palveluvarauksiin ja kyselyihin, ota yhteyttä virallisen X:n, yllä olevan sähköpostiosoitteen tai yllä olevan lomakkeen kautta.<br>*Lomake on ensin tullut, ensin palveltu ja ei välttämättä lähetä joissakin tapauksissa.</p>
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


  // ★★★ ここだけ変更: Vercel API経由のフォーム送信 ★★★
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const hCaptcha = form.querySelector('textarea[name=h-captcha-response]');
      if (hCaptcha && !hCaptcha.value) {
        alert(translations[currentLang].captchaError);
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          alert(translations[currentLang].formSuccess);
          form.reset();
        } else {
          alert(translations[currentLang].formError);
        }
      } catch (error) {
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
