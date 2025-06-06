export const projects = [
    {
        id: 1,
        title: {
            en: 'DiDiDo – Mobile App for Diesel Fuel Delivery',
            uk: 'DiDiDo – мобільний додаток для доставки дизельного пального'
        },
        description: {
            en: 'DiDiDo is a revolution in diesel delivery in Ukraine. We created the first mobile app that provides convenient, transparent, and safe fuel delivery directly to the customer.',
            uk: 'DiDiDo — це революція у сфері доставки дизеля в Україні. Ми створили перший мобільний додаток, який забезпечує зручну, прозору та безпечну доставку пального прямо до клієнта.'
        },
        fullDescription: {
            en: `
           <p>DiDiDo is a revolution in diesel delivery in Ukraine. We created the first mobile app that provides convenient, transparent, and safe fuel delivery directly to the customer.</p>
   <br>
<h3>🟡 Key Features:</h3>
<ul>
  <li>Express diesel delivery within 2 hours</li>
  <li>Scheduled delivery on chosen day and time</li>
  <li>Self-pickup from the nearest tanker</li>
  <li>Bonus: AdBlue sales (bulk or in containers)</li>
</ul>
   <br>
<h3>🟡 Key Benefits:</h3>
<ul>
  <li>From 200 to 32,000 liters per order</li>
  <li>Multiple delivery addresses in one order</li>
  <li>Cashless payment (card, FOP or legal entity account)</li>
  <li>24/7 operation</li>
  <li>Transparent pricing and fast refueling</li>
  <li>Fuel meets Euro-5 standard with quality certificate</li>
</ul>

<p>📍 Service available in Kyiv and Kyiv region.</p>
            `,
            uk: `
      <p><strong>DiDiDo</strong> — це не просто ще один сервіс доставки пального. Це справжня <strong>революція</strong> в паливній логістиці України. Ми створили перший мобільний додаток, який дозволяє замовити дизель так само легко, як піцу. Без зайвих дзвінків, без черг, без клопотів — просто відкрий додаток, обери зручний час, і паливо вже в дорозі!</p>

        <br>
        
        <h3>🟡 Що отримає користувач:</h3>
        <ul>
          <li><strong>Швидкість:</strong> термінова доставка дизеля всього за 2 години</li>
          <li><strong>Гнучкість:</strong> плануйте доставку у зручний день і час</li>
          <li><strong>Свобода вибору:</strong> можна забрати пальне самостійно з автоцистерни</li>
          <li><strong>Додаткові можливості:</strong> придбати AdBlue наливом або у каністрах</li>
        </ul>
        
        <br>
        
        <h3>🟡 Чому DiDiDo — це must-have для бізнесу та особистого користування:</h3>
        <ul>
          <li>Обсяги — від <strong>200 до 32 000 літрів</strong> за одне замовлення</li>
          <li><strong>Мультидоставка:</strong> на кілька адрес одночасно</li>
          <li><strong>Зручна оплата:</strong> карткою або через рахунок ФОП/юрособи</li>
          <li><strong>Доступність 24/7:</strong> працюємо без вихідних</li>
          <li><strong>Європейська якість:</strong> паливо відповідає стандарту Євро-5 з сертифікатом</li>
          <li><strong>Прозора ціна та швидке обслуговування</strong> — без прихованих комісій і затримок</li>
        </ul>
        
        <p>📍 Сервіс доступний у Києві та Київській області — і це лише початок.</p>

            `
        },
        tags: ['Kotlin', 'Compose', 'XML', 'Retrofit 2', 'Coroutines', 'MVVM', 'Room', 'Google Maps', 'Firebase', 'BankID'],
        image: 'didido.webp',
        link: 'https://play.google.com/store/apps/details?id=com.ua.didido'
    },
    {
        id: 2,
        title: {
            en: 'Mobile Reference App for Ukrainian Police Officers',
            uk: 'Мобільний застосунок-довідник для працівників поліції України'
        },
        description: {
            en: 'This app is a digital version of the printed edition "Kiyashko" (by Denis Kiyashko), containing templates, samples, and recommendations for administrative materials in traffic safety and public order.',
            uk: 'Цей застосунок — цифровий аналог друкованого видання «Кияшко» (автор Денис Кияшко), що містить фабули, зразки та рекомендації щодо оформлення адміністративних матеріалів у сферах безпеки дорожнього руху та охорони громадського порядку.'
        },
        fullDescription: {
            en: `
                <p>This app is a digital version of the printed edition "Kiyashko" (by Denis Kiyashko), containing templates, samples, and recommendations for administrative materials in traffic safety and public order.</p>

<h3>🟡 Key Features:</h3>
<ul>
  <li>Complete database of templates for administrative protocols</li>
  <li>Convenient navigation with quick access</li>
  <li>Advanced search with filters and keywords</li>
  <li>Save materials to favorites</li>
  <li>Offline mode</li>
  <li>Links to additional resources</li>
  <li>Multiple theme options</li>
  <li>Quick Google authorization</li>
</ul>

<p>📌 The app is designed for patrol officers, district officers, community police officers, and response sector employees. The data is based on analysis of Ukrainian legislation and its practical application, serving as recommendations.</p>
            `,
            uk: `
                <p>Цей застосунок — цифровий аналог друкованого видання «Кияшко» (автор Денис Кияшко), що містить фабули, зразки та рекомендації щодо оформлення адміністративних матеріалів у сферах безпеки дорожнього руху та охорони громадського порядку.</p>

<h3>🟡 Основні функції:</h3>
<ul>
  <li>Повна база фабул до постанов і протоколів про адміністративні правопорушення</li>
  <li>Зручна навігація та зміст з швидким переходом</li>
  <li>Розширений пошук за фільтрами та ключовими словами</li>
  <li>Додавання матеріалів у вибране</li>
  <li>Оффлайн-режим роботи</li>
  <li>Посилання на додаткові корисні ресурси</li>
  <li>Кілька варіантів тем оформлення</li>
  <li>Швидка авторизація через Google</li>
</ul>

<p>📌 Додаток орієнтований на патрульних поліцейських, дільничних офіцерів, поліцейських громад, а також співробітників секторів реагування. Дані є результатом аналітики законодавства України та практики його застосування, мають рекомендаційний характер.</p>
            `
        },
        tags: ['Kotlin', 'Compose', 'Retrofit 2', 'Coroutines', 'MVVM', 'Room', 'Firebase'],
        image: 'kiiashko.webp',
        link: 'https://play.google.com/store/apps/details?id=ua.dev.webnauts.kiyashko'
    },
    {
        id: 3,
        title: {
            en: 'Roomskey™ — First Efficient Project Management Platform',
            uk: 'Roomskey™ — Перша ефективна платформа для управління проектами'
        },
        description: {
            en: 'Roomskey™ is a unique digital platform (web + mobile) for complete control, management, and communication between all project participants.',
            uk: 'Roomskey™ (Румскі) — це унікальна цифрова платформа (web + мобільна версія) для повного контролю, управління та комунікації між усіма учасниками проєкту.'
        },
        fullDescription: {
            en: `
            <p>Roomskey™ is a unique digital platform (web + mobile version) for complete control, management, and communication between all project participants. The system allows tracking work progress in real-time, exchanging photo, video, and text reports, approving documents, and discussing in the built-in chat.</p>
            <br>
            <h3>🔹 Key Features:</h3>
            <ul>
              <li>Personal account with roles: client, designer, project manager, and others</li>
              <li>4 main sections: photos, videos, documents, drawings</li>
              <li>Flexible access system</li>
              <li>Interactive menu and simple interface</li>
              <li>Complete transparency and control at all stages</li>
            </ul>
               <br>
            <h3>🔹 Benefits:</h3>
            <ul>
              <li>Web and mobile versions</li>
              <li>Complete elimination of paperwork</li>
              <li>Absolute transparency and quick communication</li>
              <li>Unique tool in the project management market</li>
            </ul>
            `,
            uk: `
                <p>Roomskey™ (Румскі) — це унікальна цифрова платформа (web + мобільна версія) для повного контролю, 
                управління та комунікації між усіма учасниками проєкту. Система дозволяє відстежувати хід виконання 
                робіт у реальному часі, обмінюватися фото-, відео-, та текстовими звітами, погоджувати документи, 
                а також вести обговорення у вбудованому чаті.</p>
                </br>
                <h3> Ключові можливості:</h3>
                
                <ul>
                    <li>Особистий кабінет із ролями: клієнт, дизайнер, керівник проєкту та інші</li>
                    <li>4 основні розділи: фото, відео, документи, креслення</li>
                    <li>Гнучка система доступів до функцій</li>
                    <li>Інтерактивне меню та простий інтерфейс</li>
                    <li>Повна прозорість і контроль на всіх етапах</li>
                </ul>
                <br>
                <h3> Переваги:</h3>
                
                <ul>
                  <li>Web та мобільна версія</li>
                  <li>Повна відмова від паперової роботи</li>
                  <li>Абсолютна прозорість та швидка комунікація</li>
                  <li>Унікальний інструмент на ринку управління проєктами</li>
                </ul>
            `
        },
        tags: ['Kotlin', 'Compose', 'Ktor', 'Coroutines', 'MVVM', 'Room', 'Firebase'],
        image: 'room.webp',
        link: 'https://play.google.com/store/apps/details?id=ua.rk'
    },
    {
        id: 4,
        title: {
            en: 'Ez CaRent',
            uk: 'Ez CaRent'
        },
        description: {
            en: 'Ez CaRent The Easiest Way to Rent a Car in Florida',
            uk: 'Ez CaRent Розробка Найзручніший спосіб орендувати авто у Флориді'
        },
        fullDescription: {
            en: `
            <p>Discover the simplest way to rent a car in Florida, including Miami and surrounding areas. Whether you're planning a city trip, a beach vacation, or a business meeting — our app has the perfect vehicle for any occasion.</p>
            </br>
            
            <h3>🔑 Key Features:</h3>
            
            <ul>
              <li>Wide range of cars: from budget-friendly models to premium and sports vehicles.</li>
              <li>Flexible rental options: daily or weekly — your choice.</li>
              <li>Convenient search: filter by price, car type, location, and more.</li>
              <li>Support for local owners: rent directly from Miami and suburban residents.</li>
              <li>Safety first: verified drivers and car owners.</li>
              <li>24/7 support: we're always here for you.</li>
            </ul>
            </br>
            
            <h3>🚗 For Car Owners:</h3>
            Register your vehicle, set your own prices, manage bookings, and start earning.
            </br>
            
            <h3>Functionality:</h3>
            <ul>
              <li>Cross-platform mobile application (Flutter)</li>
              <li>Maps and geolocation support</li>
              <li>Car search and filtering</li>
              <li>Built-in chat system</li>
              <li>User rating and verification system</li>
              <li>Payment system integration (Stripe / Apple Pay / Google Pay)</li>
            </ul>            
            `,

            uk: `
            <p>Відкрийте для себе найпростіший спосіб орендувати автомобіль у Флориді, 
            включаючи Маямі та навколишні райони. Чи плануєте ви поїздку містом, відпочинок на пляжі 
            або ділову зустріч — у нашому додатку знайдеться ідеальний автомобіль для будь-якого випадку.</p>
            </br>

            <h3>🔑 Ключові можливості:</h3>
            
            <ul>
              <li>Широкий вибір авто: від бюджетних моделей до преміум та спортивних автомобілів.</li>
              <li>Гнучкі варіанти оренди: подобова або тижнева оренда — вибір за вами.</li>
              <li>Зручний пошук: фільтрація за ціною, типом авто, місцем розташування тощо.</li>
              <li>Підтримка локальних власників: орендуйте напряму у мешканців Маямі та передмість.</li>
              <li>Безпека понад усе: перевірені водії та автовласники.</li>
              <li>Підтримка 24/7: ми завжди на зв'язку.</li>
            </ul>
             </br>
            <h3>🚗 Для власників авто:</h3>
            Реєструйте автомобіль, встановлюйте власні ціни, керуйте бронюваннями та заробляйте.
           </br>  
            <h3>Функціональність:</h3>
           <ul>
              <li>Кросплатформенний мобільний застосунок (Flutter)</li>
              <li>Підтримка карт та геолокації</li>
              <li>Пошук і фільтрація авто</li>
              <li>Вбудована система чату</li>
              <li>Система рейтингів і перевірки користувачів</li>
              <li>Інтеграція з платіжною системою (Stripe / Apple Pay / Google Pay)</li>
            </ul>           
            `
        },
        tags: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Clean Architecture', 'GetIt', 'Dio'],
        image: 'car.webp',
        link: 'https://play.google.com/store/apps/details?id=com.ezcarent'
    },
    {
        id: 5,
        title: {
            en: 'Castle Guide',
            uk: 'Castle Guide'
        },
        description: {
            en: 'Castle Guide ist Ihr treuer Begleiter auf Reisen durch Deutschland. Die App ermöglicht es, historische Sehenswürdigkeiten zu entdecken, Lieblingsorte zu speichern und Routen mit interaktiven Karten zu planen.',
            uk: 'Castle Guide is your perfect travel companion for exploring Germany. The app lets you discover historical landmarks, save your favorite places, and plan routes with interactive maps.'
        },
        fullDescription: {
            en: `
           <p>
                Castle Guide is a user-friendly mobile application for travelers and history enthusiasts, allowing you to explore castles, ruins, monasteries, and parks across Germany. 
                With integration to maps and detailed information about the landmarks, you can easily plan your route, learn about the history of the sights, and save your favorite places.
            </p>
            <h3>Main Features:</h3>
            <ul>
                <li>Directory of castles, fortresses, ruins, parks, and monasteries</li>
                <li>Interactive map with category filters</li>
                <li>Detailed descriptions, photos, historical facts</li>
                <li>User reviews and articles on history</li>
                <li>Favorites and map markers</li>
                <li>Navigation via Google Maps</li>
            </ul>
            `,
            uk: `
            <p>
            Castle Guide — це зручний мобільний додаток для мандрівників та любителів історії, що дозволяє досліджувати замки, руїни, монастирі та парки по всій Німеччині. 
            Завдяки інтеграції з картами та розширеною інформацією про об'єкти, ви зможете легко спланувати маршрут, дізнатися історію пам'яток і зберегти улюблені місця.
            </p>
              </br>
            <h3>Основні функції:</h3>
            <ul>
                <li>Каталог замків, фортець, руїн, парків та монастирів</li>
                <li>Інтерактивна карта з фільтрами за категоріями</li>
                <li>Детальні описи, фото, історичні факти</li>
                <li>Відгуки користувачів і статті з історії</li>
                <li>Обране та позначки на карті</li>
                <li>Навігація через Google Maps</li>
            </ul>
            `

        },
        tags: ['Kotlin', 'Compose', 'Ktor', 'Coroutines', 'MVVM', 'Room', 'Firebase', 'Google Maps'],
        image: 'castle.webp'
    },
    {
        id: 6,
        title: {
            en: 'Quick hub',
            uk: 'Quick hub'
        },
        description: {
            en: 'Quick Hub is an Android tablet app for easy meeting room booking.',
            uk: 'Quick Hub — Android-додаток для планшетів, який дозволяє зручно бронювати переговорні кімнати.'
        },
        fullDescription: {
            en: `
            <p>Quick Hub is a modern Android tablet application designed for quick and convenient booking of meeting rooms, coworking spaces, or specialized work zones.</p>
            <p>With a clean interface and real-time scheduling integration, users can easily browse available time slots, book rooms, and request additional services or equipment.</p>
            </br>
            <h3>🔑 Quick Hub Advantages:</h3>
            <ul>
              <li>Intuitive and responsive UI</li>
              <li>One-touch booking support</li>
              <li>Real-time schedule updates</li>
              <li>Optional add-ons (food, podcast gear, etc.)</li>
              <li>Works offline and over local network</li>
              <li>QR code scanning for quick access</li>
            </ul>
            
            `,
            uk: `
            <p>Quick Hub — це сучасний Android-додаток для планшетів, створений для швидкого та зручного бронювання 
            переговорних кімнат, коворкінгів або спеціалізованих робочих зон.</p>
            <p>Завдяки продуманому інтерфейсу та інтеграції з розкладом у реальному часі, користувачі можуть 
            легко переглядати доступні слоти, бронювати простір, та замовляти додаткове обладнання або послуги.</p>
            </br>
            <h3>🔑 Переваги Quick Hub:</h3>
            <ul>
              <li>Інтуїтивно зрозумілий та адаптивний інтерфейс</li>
              <li>Підтримка бронювання в один дотик</li>
              <li>Актуальний розклад у реальному часі</li>
              <li>Можливість додати послуги (їжа, подкаст-обладнання тощо)</li>
              <li>Працює автономно та в локальній мережі</li>
              <li>Сканування QR-коду для швидкого доступу</li>
            </ul>
           
            `
        },
        tags: ['Kotlin', 'Compose', 'Ktor', 'Coroutines', 'Clean Architecture'],
        image: 'quick.webp'
    }
]
