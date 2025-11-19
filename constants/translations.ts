
import { ContentText, Language } from '../types';

export const translations: Record<Language, ContentText> = {
  [Language.NL]: {
    nav: { home: "Home", services: "Diensten", projects: "Projecten", about: "Over ons", contact: "Contact" },
    hero: {
      title: "Meesters in Installatietechniek",
      subtitle: "Montana ST – Van dak tot riool, van warmtepomp tot badkamer. Uw allround specialist in Zuid-Holland.",
      ctaCall: "Bel direct 24/7",
      ctaQuote: "Vraag een offerte aan"
    },
    features: { title: "Waarom Montana ST?", f1: "24/7 Spoedservice", f2: "Erkende Installateurs", f3: "Transparante Prijzen", f4: "Totaaloplossingen" },
    servicesPage: {
      title: "Ons Complete Aanbod",
      subtitle: "Wij bieden een totaalconcept voor particulieren, VvE's en bedrijven.",
      items: [
        { title: "24/7 Spoed & Lekkages", desc: "Directe actie bij waterschade, gaslucht of uitval.", points: ["Lekkage opsporing", "Gaslekkages dichten", "Noodreparaties leidingwerk", "Waterschade beperking", "Verstoppingen verhelpen"] },
        { title: "Riool & Ontstopping", desc: "Professionele reiniging en inspectie van afvoeren.", points: ["WC/Douche ontstoppen", "Camera-inspectie", "Hogedrukreiniging", "Wortelgroei verwijderen", "Stankdetectie"] },
        { title: "CV & Verwarming", desc: "Onderhoud en installatie van centrale verwarming.", points: ["CV-ketel onderhoud", "Radiatoren & Convectoren", "Thermostaat installatie", "Expansievat vervangen", "Storingen verhelpen"] },
        { title: "Warmtepompen & Duurzaam", desc: "Klaar voor de toekomst met groene energie.", points: ["Hybride warmtepompen", "Zonneboilers", "Energiebesparing advies", "All-electric systemen", "Subsidie ondersteuning"] },
        { title: "Dakwerk & Zink", desc: "Specialistisch werk voor platte daken en goten.", points: ["Bitumen dakbedekking", "Zinken dakgoten", "Hemelwaterafvoer", "Dakisolatie aanbrengen", "Lekkage reparatie dak"] },
        { title: "Badkamer Renovatie", desc: "Van sloop tot luxe afwerking.", points: ["Complete badkamers", "Toilet renovatie", "Tegelwerk & Sanitair", "Inloopdouches maken", "Luxe kranen montage"] },
        { title: "Mechanische Ventilatie", desc: "Voor een gezond binnenklimaat.", points: ["MV-box vervangen", "Kanalen reinigen", "WTW-units", "CO2-gestuurde systemen", "Ventilatieventielen plaatsen"] },
        { title: "Gas & Waterleidingen", desc: "Aanleg en verleggen van leidingwerk.", points: ["Keukenvoorbereiding", "Waterontharders", "Persleidingen", "Buitenkraan aanleggen", "Gasleiding afpersen"] },
        { title: "Bouw & Installatietechniek", desc: "Grote projecten voor nieuwbouw en renovatie.", points: ["Complete installaties", "Utiliteitsbouw", "Technische ruimtes", "Ketelhuizen inrichten", "Legionella beheer"] }
      ]
    },
    projectsPage: { title: "Onze Realisaties", filterAll: "Alles", filterLeak: "Lekkages", filterBath: "Badkamers", filterHeat: "Verwarming" },
    aboutPage: {
      title: "Over Montana ST",
      storyTitle: "Wie zijn wij?",
      storyText: "Montana ST is meer dan alleen een loodgieter. Wij zijn een allround installatiebedrijf dat traditioneel vakmanschap combineert met de nieuwste technieken zoals warmtepompen en camera-inspecties. Actief in de hele Randstad.",
      valuesTitle: "Onze Waarden",
      v1: "Betrouwbaarheid",
      v2: "Discretie",
      v3: "Vaktechniek",
      v4: "Snelle Service"
    },
    contactPage: {
      title: "Neem Contact Op",
      formName: "Naam",
      formEmail: "E-mail",
      formPhone: "Telefoon",
      formType: "Type Probleem",
      formMessage: "Bericht",
      formSubmit: "Versturen",
      privacy: "Ik ga akkoord met de privacyverklaring",
      types: { leak: "Lekkage/Spoed", clog: "Verstopping/Riool", heat: "CV/Warmtepomp", bath: "Dakwerk/Zink", other: "Overige installatie" }
    },
    forms: {
      labels: { name: "Uw Naam", address: "Adres + Huisnummer", city: "Woonplaats", phone: "Telefoonnummer", desc: "Omschrijving", sendWa: "Verstuur via WhatsApp", close: "Sluiten" },
      questions: { location: "Waar zit het probleem?", urgency: "Hoe dringend?", propertyType: "Type woning", roofType: "Soort dakbedekking", boilerBrand: "Merk CV-ketel / Toestel", boilerAge: "Leeftijd installatie", heatingSystem: "Huidig Systeem (Vloer/Radiatoren)", dimensions: "Afmetingen (LxBxH)", surface: "Oppervlakte m2", desiredStyle: "Gewenste Stijl", budget: "Budget Indicatie", currentState: "Huidige Staat / Conditie", energyLabel: "Huidig Energielabel" }
    },
    common: { moreInfo: "Meer Info", requestQuote: "Contact / Offerte", footerText: "© 2024 Montana ST. Alle rechten voorbehouden." }
  },
  [Language.EN]: {
    nav: { home: "Home", services: "Services", projects: "Projects", about: "About Us", contact: "Contact" },
    hero: {
      title: "Masters in Installation",
      subtitle: "Montana ST – From roofing to sewage, heat pumps to bathrooms. Your all-round specialist in South Holland.",
      ctaCall: "Call 24/7",
      ctaQuote: "Request Quote"
    },
    features: { title: "Why Montana ST?", f1: "24/7 Emergency Service", f2: "Certified Installers", f3: "Transparent Pricing", f4: "Total Solutions" },
    servicesPage: {
      title: "Our Complete Offer",
      subtitle: "We provide a total concept for private homes, HOAs, and businesses.",
      items: [
        { title: "24/7 Emergency & Leaks", desc: "Immediate action for water damage, gas smell, or failures.", points: ["Leak detection", "Gas leak sealing", "Emergency pipe repairs", "Water damage mitigation", "Blockage removal"] },
        { title: "Sewage & Unclogging", desc: "Professional cleaning and inspection of drains.", points: ["Toilet/Shower unclogging", "Camera inspection", "High-pressure cleaning", "Root removal", "Odor detection"] },
        { title: "Central Heating", desc: "Maintenance and installation of heating systems.", points: ["Boiler maintenance", "Radiators", "Thermostat installation", "Expansion vessel replacement", "Fault diagnosis"] },
        { title: "Heat Pumps & Sustainable", desc: "Ready for the future with green energy.", points: ["Hybrid heat pumps", "Solar water heaters", "Energy saving advice", "All-electric systems", "Subsidy support"] },
        { title: "Roofing & Zinc Work", desc: "Specialist work for flat roofs and gutters.", points: ["Bitumen roofing", "Zinc gutters", "Rainwater drainage", "Roof insulation", "Roof leak repair"] },
        { title: "Bathroom Renovation", desc: "From demolition to luxury finishing.", points: ["Complete bathrooms", "Toilet renovation", "Tiling & Sanitary", "Walk-in showers", "Luxury tap installation"] },
        { title: "Mechanical Ventilation", desc: "For a healthy indoor climate.", points: ["MV box replacement", "Duct cleaning", "Heat recovery units", "CO2 controlled systems", "Vent valve installation"] },
        { title: "Gas & Water Pipes", desc: "Laying and relocating pipework.", points: ["Kitchen preparation", "Water softeners", "Press fittings", "Outdoor tap installation", "Gas pipe pressure testing"] },
        { title: "Construction Installation", desc: "Large projects for new builds and renovation.", points: ["Complete installations", "Commercial buildings", "Technical rooms", "Boiler room setup", "Legionella management"] }
      ]
    },
    projectsPage: { title: "Our Projects", filterAll: "All", filterLeak: "Leaks", filterBath: "Bathrooms", filterHeat: "Heating" },
    aboutPage: {
      title: "About Montana ST",
      storyTitle: "Who are we?",
      storyText: "Montana ST is more than just a plumber. We are an all-round installation company combining traditional craftsmanship with the latest techniques like heat pumps and camera inspections.",
      valuesTitle: "Our Values",
      v1: "Reliability",
      v2: "Discretion",
      v3: "Technical Skill",
      v4: "Fast Service"
    },
    contactPage: {
      title: "Contact Us",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formType: "Problem Type",
      formMessage: "Message",
      formSubmit: "Send",
      privacy: "I agree to the privacy statement",
      types: { leak: "Leak/Emergency", clog: "Clog/Sewer", heat: "Heating/Heat Pump", bath: "Roofing/Zinc", other: "Other Installation" }
    },
    forms: {
      labels: { name: "Your Name", address: "Address + House Nr", city: "City", phone: "Phone Number", desc: "Description", sendWa: "Send via WhatsApp", close: "Close" },
      questions: { location: "Where is the problem?", urgency: "Urgency level?", propertyType: "Property type", roofType: "Roof type/Material", boilerBrand: "Boiler Brand / Device", boilerAge: "Age of installation", heatingSystem: "Current System", dimensions: "Dimensions (approx)", surface: "Area m2", desiredStyle: "Desired Style", budget: "Budget Range", currentState: "Current State / Condition", energyLabel: "Current Energy Label" }
    },
    common: { moreInfo: "More Info", requestQuote: "Contact / Quote", footerText: "© 2024 Montana ST. All rights reserved." }
  },
  [Language.PL]: {
    nav: { home: "Start", services: "Usługi", projects: "Projekty", about: "O nas", contact: "Kontakt" },
    hero: {
      title: "Mistrzowie Instalacji",
      subtitle: "Montana ST – Od dachu po kanalizację, od pomp ciepła po łazienki. Twój specjalista w Holandii Południowej.",
      ctaCall: "Zadzwoń 24/7",
      ctaQuote: "Wycena"
    },
    features: { title: "Dlaczego Montana ST?", f1: "Serwis 24/7", f2: "Certyfikowani Instalatorzy", f3: "Przejrzyste Ceny", f4: "Kompleksowe Rozwiązania" },
    servicesPage: {
      title: "Pełna Oferta",
      subtitle: "Oferujemy kompleksowe usługi dla domów, spółdzielni i firm.",
      items: [
        { title: "Awaria 24/7 i Wycieki", desc: "Natychmiastowa reakcja na szkody wodne i gaz.", points: ["Wykrywanie wycieków", "Uszczelnianie gazu", "Naprawy rur", "Ograniczanie szkód wodnych", "Usuwanie zatorów"] },
        { title: "Kanalizacja i Udrażnianie", desc: "Profesjonalne czyszczenie i inspekcja odpływów.", points: ["Udrażnianie WC/Prysznica", "Inspekcja kamerą", "Czyszczenie ciśnieniowe", "Usuwanie korzeni", "Wykrywanie zapachów"] },
        { title: "Ogrzewanie CO", desc: "Konserwacja i instalacja systemów grzewczych.", points: ["Serwis kotłów", "Grzejniki", "Termostaty", "Wymiana naczynia wzbiorczego", "Usuwanie usterek"] },
        { title: "Pompy Ciepła i Eko", desc: "Gotowi na przyszłość z zieloną energią.", points: ["Hybrydowe pompy ciepła", "Solary", "Doradztwo energetyczne", "Systemy w pełni elektryczne", "Wsparcie w dotacjach"] },
        { title: "Dekarstwo i Cynk", desc: "Specjalistyczne prace na dachach płaskich i rynny.", points: ["Dachy bitumiczne", "Rynny cynkowe", "Odprowadzanie deszczówki", "Izolacja dachu", "Naprawa przecieków"] },
        { title: "Renowacja Łazienek", desc: "Od rozbiórki po luksusowe wykończenie.", points: ["Kompletne łazienki", "Renowacja toalet", "Glazura i sanitariaty", "Kabiny walk-in", "Montaż armatury"] },
        { title: "Wentylacja Mechaniczna", desc: "Dla zdrowego klimatu w domu.", points: ["Wymiana jednostek MV", "Czyszczenie kanałów", "Rekuperacja", "Systemy sterowane CO2", "Montaż nawiewników"] },
        { title: "Rury Gazowe i Wodne", desc: "Układanie i przekładanie instalacji.", points: ["Przygotowanie kuchni", "Zmiękczacze wody", "Systemy zaciskowe", "Kran zewnętrzny", "Próby ciśnieniowe gazu"] },
        { title: "Instalacje Budowlane", desc: "Duże projekty dla nowobudowanych obiektów.", points: ["Kompletne instalacje", "Obiekty użytkowe", "Pomieszczenia techniczne", "Kotłownie", "Zarządzanie legionellą"] }
      ]
    },
    projectsPage: { title: "Nasze Realizacje", filterAll: "Wszystkie", filterLeak: "Wycieki", filterBath: "Łazienki", filterHeat: "Ogrzewanie" },
    aboutPage: {
      title: "O Montana ST",
      storyTitle: "Kim jesteśmy?",
      storyText: "Montana ST to więcej niż hydraulik. Jesteśmy wszechstronną firmą instalacyjną łączącą tradycyjne rzemiosło z nowymi technologiami, takimi jak pompy ciepła i inspekcje kamerą.",
      valuesTitle: "Nasze Wartości",
      v1: "Niezawodność",
      v2: "Dyskrecja",
      v3: "Technika",
      v4: "Szybki Serwis"
    },
    contactPage: {
      title: "Skontaktuj się",
      formName: "Imię",
      formEmail: "E-mail",
      formPhone: "Telefon",
      formType: "Rodzaj Problemu",
      formMessage: "Wiadomość",
      formSubmit: "Wyślij",
      privacy: "Akceptuję politykę prywatności",
      types: { leak: "Wyciek/Awaria", clog: "Zator/Kanalizacja", heat: "Ogrzewanie/Pompa Ciepła", bath: "Dach/Cynk", other: "Inne instalacje" }
    },
    forms: {
      labels: { name: "Imię i Nazwisko", address: "Adres + Nr domu", city: "Miasto", phone: "Telefon", desc: "Opis problemu", sendWa: "Wyślij przez WhatsApp", close: "Zamknij" },
      questions: { location: "Gdzie występuje problem?", urgency: "Pilność?", propertyType: "Typ budynku", roofType: "Rodzaj dachu/Materiał", boilerBrand: "Marka kotła / Urządzenia", boilerAge: "Wiek instalacji", heatingSystem: "Obecny system", dimensions: "Wymiary (szacunkowo)", surface: "Powierzchnia m2", desiredStyle: "Preferowany Styl", budget: "Budżet", currentState: "Stan obecny / Kondycja", energyLabel: "Klasa Energetyczna" }
    },
    common: { moreInfo: "Więcej Info", requestQuote: "Kontakt / Wycena", footerText: "© 2024 Montana ST. Wszelkie prawa zastrzeżone." }
  },
  [Language.TR]: {
    nav: { home: "Anasayfa", services: "Hizmetler", projects: "Projeler", about: "Hakkımızda", contact: "İletişim" },
    hero: {
      title: "Tesisat Ustaları",
      subtitle: "Montana ST – Çatıdan kanalizasyona, ısı pompalarından banyolara kadar. Güney Hollanda'daki uzmanınız.",
      ctaCall: "7/24 Ara",
      ctaQuote: "Teklif İste"
    },
    features: { title: "Neden Montana ST?", f1: "7/24 Acil Servis", f2: "Sertifikalı Tesisatçılar", f3: "Şeffaf Fiyatlar", f4: "Tam Çözümler" },
    servicesPage: {
      title: "Tam Hizmet Yelpazesi",
      subtitle: "Evler, siteler ve iş yerleri için eksiksiz bir konsept sunuyoruz.",
      items: [
        { title: "7/24 Acil & Sızıntı", desc: "Su hasarı, gaz kokusu veya arızalarda anında müdahale.", points: ["Kaçak tespiti", "Gaz kaçağı tamiri", "Acil boru onarımı", "Su hasarı önleme", "Tıkanıklık giderme"] },
        { title: "Kanalizasyon & Tıkanıklık", desc: "Giderlerin profesyonel temizliği ve denetimi.", points: ["Tuvalet/Duş açma", "Kamera ile inceleme", "Yüksek basınçlı temizlik", "Kök temizleme", "Koku tespiti"] },
        { title: "Merkezi Isıtma", desc: "Isıtma sistemlerinin bakımı ve kurulumu.", points: ["Kombi bakımı", "Radyatörler", "Termostat kurulumu", "Genleşme tankı değişimi", "Arıza giderme"] },
        { title: "Isı Pompaları & Yeşil Enerji", desc: "Yeşil enerji ile geleceğe hazır olun.", points: ["Hibrit ısı pompaları", "Güneş enerjili su ısıtıcıları", "Enerji tasarrufu", "Tam elektrikli sistemler", "Teşvik desteği"] },
        { title: "Çatı & Çinko İşleri", desc: "Düz çatılar ve oluklar için uzman işçilik.", points: ["Bitüm çatı kaplama", "Çinko oluklar", "Yağmur suyu tahliyesi", "Çatı izolasyonu", "Çatı sızıntı tamiri"] },
        { title: "Banyo Yenileme", desc: "Yıkımdan lüks bitişe kadar.", points: ["Komple banyolar", "Tuvalet yenileme", "Fayans & Vitrifiye", "Duşakabin montajı", "Lüks armatür montajı"] },
        { title: "Mekanik Havalandırma", desc: "Sağlıklı bir iç mekan iklimi için.", points: ["MV kutusu değişimi", "Kanal temizliği", "Isı geri kazanım", "CO2 kontrollü sistemler", "Menfez montajı"] },
        { title: "Gaz & Su Boruları", desc: "Boru döşeme ve yer değiştirme.", points: ["Mutfak hazırlığı", "Su yumuşatıcılar", "Pres bağlantı", "Dış musluk montajı", "Gaz basınç testi"] },
        { title: "İnşaat Tesisatı", desc: "Yeni binalar ve tadilatlar için büyük projeler.", points: ["Komple tesisatlar", "Ticari binalar", "Teknik odalar", "Kazan dairesi kurulumu", "Lejyonella yönetimi"] }
      ]
    },
    projectsPage: { title: "Projelerimiz", filterAll: "Tümü", filterLeak: "Sızıntılar", filterBath: "Banyolar", filterHeat: "Isıtma" },
    aboutPage: {
      title: "Montana ST Hakkında",
      storyTitle: "Biz kimiz?",
      storyText: "Montana ST sadece bir tesisatçı değildir. Geleneksel işçiliği ısı pompaları ve kamera denetimleri gibi en yeni tekniklerle birleştiren çok yönlü bir tesisat şirketiyiz.",
      valuesTitle: "Değerlerimiz",
      v1: "Güvenilirlik",
      v2: "Gizlilik",
      v3: "Teknik Beceri",
      v4: "Hızlı Servis"
    },
    contactPage: {
      title: "Bize Ulaşın",
      formName: "İsim",
      formEmail: "E-posta",
      formPhone: "Telefon",
      formType: "Sorun Türü",
      formMessage: "Mesaj",
      formSubmit: "Gönder",
      privacy: "Gizlilik bildirimini kabul ediyorum",
      types: { leak: "Sızıntı/Acil", clog: "Tıkanıklık/Kanalizasyon", heat: "Isıtma/Isı Pompası", bath: "Çatı/Çinko", other: "Diğer Tesisat" }
    },
    forms: {
      labels: { name: "Adınız", address: "Adres + Kapı No", city: "Şehir", phone: "Telefon", desc: "Açıklama", sendWa: "WhatsApp ile Gönder", close: "Kapat" },
      questions: { location: "Sorun nerede?", urgency: "Aciliyet?", propertyType: "Mülk tipi", roofType: "Çatı tipi/Malzeme", boilerBrand: "Kombi Markası", boilerAge: "Tesisat yaşı", heatingSystem: "Mevcut Sistem", dimensions: "Boyutlar (yaklaşık)", surface: "Alan m2", desiredStyle: "İstenen Stil", budget: "Bütçe", currentState: "Mevcut Durum", energyLabel: "Enerji Sınıfı" }
    },
    common: { moreInfo: "Daha Fazla", requestQuote: "Teklif Al / İletişim", footerText: "© 2024 Montana ST. Tüm hakları saklıdır." }
  },
  [Language.BG]: {
    nav: { home: "Начало", services: "Услуги", projects: "Проекти", about: "За нас", contact: "Контакт" },
    hero: {
      title: "Майстори на инсталациите",
      subtitle: "Montana ST – От покрива до канала, от термопомпи до бани. Вашият специалист в Южна Холандия.",
      ctaCall: "Обадете се 24/7",
      ctaQuote: "Поискайте оферта"
    },
    features: { title: "Защо Montana ST?", f1: "24/7 Спешна помощ", f2: "Сертифицирани монтажници", f3: "Прозрачни цени", f4: "Цялостни решения" },
    servicesPage: {
      title: "Пълна гама услуги",
      subtitle: "Предлагаме цялостна концепция за частни домове и фирми.",
      items: [
        { title: "24/7 Спешно & Течове", desc: "Незабавни действия при щети от вода или газ.", points: ["Откриване на течове", "Уплътняване на газ", "Спешни ремонти", "Ограничаване на щети", "Отпушване на канали"] },
        { title: "Канализация & Отпушване", desc: "Професионално почистване и инспекция.", points: ["Отпушване на WC/Душ", "Видео инспекция", "Почистване под налягане", "Премахване на корени", "Откриване на миризми"] },
        { title: "Отопление", desc: "Поддръжка и монтаж на отоплителни системи.", points: ["Поддръжка на котли", "Радиатори", "Термостати", "Смяна на разширителен съд", "Отстраняване на повреди"] },
        { title: "Термопомпи & Еко", desc: "Готови за бъдещето със зелена енергия.", points: ["Хибридни термопомпи", "Слънчеви колектори", "Енергоспестяване", "Изцяло електрически системи", "Съдействие за субсидии"] },
        { title: "Покриви & Цинк", desc: "Специализирана работа за плоски покриви и улуци.", points: ["Битумни покриви", "Цинкови улуци", "Отводняване", "Покривна изолация", "Ремонт на течове"] },
        { title: "Ремонт на баня", desc: "От къртене до луксозно завършване.", points: ["Цялостни бани", "Ремонт на тоалетни", "Плочки и санитария", "Душ кабини", "Монтаж на смесители"] },
        { title: "Вентилация", desc: "За здравословен климат в дома.", points: ["Смяна на вентилатори", "Почистване на въздуховоди", "Рекуперация", "CO2 системи", "Монтаж на клапани"] },
        { title: "Газ & Водопровод", desc: "Полагане и преместване на тръби.", points: ["Подготовка за кухня", "Омекотители за вода", "Пресовани връзки", "Външна чешма", "Тест на газ под налягане"] },
        { title: "Строителни инсталации", desc: "Големи проекти за ново строителство.", points: ["Цялостни инсталации", "Търговски сгради", "Технически помещения", "Оборудване на котелни", "Контрол на легионела"] }
      ]
    },
    projectsPage: { title: "Нашите проекти", filterAll: "Всички", filterLeak: "Течове", filterBath: "Бани", filterHeat: "Отопление" },
    aboutPage: {
      title: "За Montana ST",
      storyTitle: "Кои сме ние?",
      storyText: "Montana ST е повече от водопроводчик. Ние сме комплексна монтажна фирма, съчетаваща традиционното майсторство с най-новите технологии като термопомпи и видео инспекции.",
      valuesTitle: "Нашите ценности",
      v1: "Надеждност",
      v2: "Дискретност",
      v3: "Технически умения",
      v4: "Бързо обслужване"
    },
    contactPage: {
      title: "Свържете се с нас",
      formName: "Име",
      formEmail: "Имейл",
      formPhone: "Телефон",
      formType: "Вид проблем",
      formMessage: "Съобщение",
      formSubmit: "Изпрати",
      privacy: "Съгласен съм с декларацията за поверителност",
      types: { leak: "Теч/Спешно", clog: "Запушване/Канал", heat: "Отопление/Термопомпа", bath: "Покрив/Цинк", other: "Друга инсталация" }
    },
    forms: {
      labels: { name: "Име", address: "Адрес", city: "Град", phone: "Телефон", desc: "Описание", sendWa: "Изпрати чрез WhatsApp", close: "Затвори" },
      questions: { location: "Къде е проблемът?", urgency: "Спешност?", propertyType: "Тип имот", roofType: "Тип покрив/Материал", boilerBrand: "Марка котел", boilerAge: "Възраст на инсталацията", heatingSystem: "Текуща система", dimensions: "Размери", surface: "Площ m2", desiredStyle: "Желан стил", budget: "Бюджет", currentState: "Текущо състояние", energyLabel: "Енергиен клас" }
    },
    common: { moreInfo: "Повече инфо", requestQuote: "Оферта / Контакт", footerText: "© 2024 Montana ST. Всички права запазени." }
  },
  [Language.DE]: {
    nav: { home: "Start", services: "Dienstleistungen", projects: "Projekte", about: "Über uns", contact: "Kontakt" },
    hero: {
      title: "Meister der Installation",
      subtitle: "Montana ST – Vom Dach bis zum Kanal, von der Wärmepumpe bis zum Bad. Ihr Allround-Spezialist.",
      ctaCall: "24/7 Anrufen",
      ctaQuote: "Angebot anfordern"
    },
    features: { title: "Warum Montana ST?", f1: "24/7 Notdienst", f2: "Zertifizierte Installateure", f3: "Transparente Preise", f4: "Gesamtlösungen" },
    servicesPage: {
      title: "Unser Komplettangebot",
      subtitle: "Wir bieten ein Gesamtkonzept für Privathaushalte und Unternehmen.",
      items: [
        { title: "24/7 Notfall & Lecks", desc: "Sofortmaßnahmen bei Wasserschäden oder Gasgeruch.", points: ["Leckortung", "Gaslecks abdichten", "Notfallreparaturen", "Wasserschadenbegrenzung", "Verstopfungsbeseitigung"] },
        { title: "Kanal & Verstopfung", desc: "Professionelle Reinigung und Inspektion.", points: ["WC/Dusche entstopfen", "Kamerainspektion", "Hochdruckreinigung", "Wurzelentfernung", "Geruchsdetektion"] },
        { title: "Heizung & Wartung", desc: "Wartung und Installation von Heizungsanlagen.", points: ["Kesselwartung", "Heizkörper", "Thermostate", "Ausdehnungsgefäß austauschen", "Störungsbehebung"] },
        { title: "Wärmepumpen & Energie", desc: "Bereit für die Zukunft mit grüner Energie.", points: ["Hybrid-Wärmepumpen", "Solarthermie", "Energieberatung", "Vollelektrische Systeme", "Fördermittelberatung"] },
        { title: "Dach & Zink", desc: "Spezialarbeiten für Flachdächer und Rinnen.", points: ["Bitumendach", "Zinkrinnen", "Regenwasserableitung", "Dachisolierung", "Dachreparatur"] },
        { title: "Badrenovierung", desc: "Vom Abriss bis zum Luxus-Finish.", points: ["Komplettbäder", "WC-Renovierung", "Fliesen & Sanitär", "Begehbare Duschen", "Armatureninstallation"] },
        { title: "Mechanische Lüftung", desc: "Für ein gesundes Raumklima.", points: ["Lüftungsbox-Austausch", "Kanalreinigung", "Wärmerückgewinnung", "CO2-gesteuerte Systeme", "Ventilinstallation"] },
        { title: "Gas- & Wasserleitungen", desc: "Verlegung und Erneuerung von Leitungen.", points: ["Küchenvorbereitung", "Wasserenthärter", "Presssysteme", "Außenwasserhahn", "Gasdruckprüfung"] },
        { title: "Bauinstallation", desc: "Großprojekte für Neubau und Renovierung.", points: ["Komplettinstallationen", "Gewerbebau", "Technikräume", "Heizraumausstattung", "Legionellenmanagement"] }
      ]
    },
    projectsPage: { title: "Unsere Projekte", filterAll: "Alle", filterLeak: "Lecks", filterBath: "Bäder", filterHeat: "Heizung" },
    aboutPage: {
      title: "Über Montana ST",
      storyTitle: "Wer sind wir?",
      storyText: "Montana ST ist mehr als nur ein Klempner. Wir sind ein Allround-Installationsunternehmen, das traditionelles Handwerk mit neuesten Techniken wie Wärmepumpen und Kamerainspektionen verbindet.",
      valuesTitle: "Unsere Werte",
      v1: "Zuverlässigkeit",
      v2: "Diskretion",
      v3: "Fachkompetenz",
      v4: "Schneller Service"
    },
    contactPage: {
      title: "Kontaktieren Sie uns",
      formName: "Name",
      formEmail: "E-Mail",
      formPhone: "Telefon",
      formType: "Art des Problems",
      formMessage: "Nachricht",
      formSubmit: "Senden",
      privacy: "Ich stimme der Datenschutzerklärung zu",
      types: { leak: "Leck/Notfall", clog: "Verstopfung/Kanal", heat: "Heizung/Wärmepumpe", bath: "Dach/Zink", other: "Andere Installation" }
    },
    forms: {
      labels: { name: "Name", address: "Adresse", city: "Stadt", phone: "Telefon", desc: "Beschreibung", sendWa: "Per WhatsApp senden", close: "Schließen" },
      questions: { location: "Wo ist das Problem?", urgency: "Dringlichkeit?", propertyType: "Immobilientyp", roofType: "Dachart/Material", boilerBrand: "Kesselmarke", boilerAge: "Alter der Anlage", heatingSystem: "Aktuelles System", dimensions: "Abmessungen", surface: "Fläche m2", desiredStyle: "Gewünschter Stil", budget: "Budget", currentState: "Aktueller Zustand", energyLabel: "Energielabel" }
    },
    common: { moreInfo: "Mehr Info", requestQuote: "Kontakt / Angebot", footerText: "© 2024 Montana ST. Alle Rechte vorbehalten." }
  },
  [Language.HU]: {
    nav: { home: "Főoldal", services: "Szolgáltatások", projects: "Projektek", about: "Rólunk", contact: "Kapcsolat" },
    hero: {
      title: "Szerelési Mesterek",
      subtitle: "Montana ST – A tetőtől a csatornáig, a hőszivattyútól a fürdőszobáig. Az Ön szakértője.",
      ctaCall: "Hívás 24/7",
      ctaQuote: "Ajánlatkérés"
    },
    features: { title: "Miért a Montana ST?", f1: "24/7 Sürgősségi Szolgálat", f2: "Minősített Szerelők", f3: "Átlátható Árak", f4: "Teljes Megoldások" },
    servicesPage: {
      title: "Teljes Kínálatunk",
      subtitle: "Teljes körű koncepciót kínálunk magánszemélyek és cégek számára.",
      items: [
        { title: "24/7 Vészhelyzet", desc: "Azonnali intézkedés vízkár vagy gáz esetén.", points: ["Szivárgáskeresés", "Gázszivárgás", "Sürgősségi javítás", "Vízkár elhárítás", "Duguláselhárítás"] },
        { title: "Csatorna & Dugulás", desc: "Lefolyók professzionális tisztítása és ellenőrzése.", points: ["WC/Zuhany dugulás", "Kamerás vizsgálat", "Magasnyomású tisztítás", "Gyökérbenövés eltávolítása", "Szagfelderítés"] },
        { title: "Központi Fűtés", desc: "Fűtési rendszerek karbantartása és telepítése.", points: ["Kazán karbantartás", "Radiátorok", "Termosztátok", "Tágulási tartály csere", "Hibaelhárítás"] },
        { title: "Hőszivattyúk & Öko", desc: "Készen a jövőre zöld energiával.", points: ["Hibrid hőszivattyúk", "Napkollektorok", "Energiatakarékosság", "Teljesen elektromos rendszerek", "Támogatási ügyintézés"] },
        { title: "Tetőfedés & Cink", desc: "Speciális munka lapostetőkön és ereszcsatornákon.", points: ["Bitumenes tető", "Cink ereszcsatornák", "Esővíz elvezetés", "Tetőszigetelés", "Tetőbeázás javítás"] },
        { title: "Fürdőszoba Felújítás", desc: "A bontástól a luxus kivitelezésig.", points: ["Komplett fürdőszobák", "WC felújítás", "Burkolás", "Zuhanykabinok", "Csaptelep szerelés"] },
        { title: "Mechanikus Szellőzés", desc: "Az egészséges beltéri klímáért.", points: ["Ventilátor csere", "Csatornatisztítás", "Hővisszanyerés", "CO2 vezérelt rendszerek", "Szelepek beépítése"] },
        { title: "Gáz & Vízvezetékek", desc: "Vezetékek fektetése és áthelyezése.", points: ["Konyhai előkészítés", "Vízlágyítók", "Présrendszerek", "Kerti csap kiépítés", "Gáznyomáspróba"] },
        { title: "Épületgépészet", desc: "Nagy projektek új építéshez és felújításhoz.", points: ["Teljes rendszerek", "Kereskedelmi épületek", "Gépházak", "Kazánházak kivitelezése", "Legionella kezelés"] }
      ]
    },
    projectsPage: { title: "Munkáink", filterAll: "Összes", filterLeak: "Szivárgás", filterBath: "Fürdőszoba", filterHeat: "Fűtés" },
    aboutPage: {
      title: "A Montana ST-ről",
      storyTitle: "Kik vagyunk?",
      storyText: "A Montana ST több, mint egy vízvezetékszerelő. Egy sokoldalú szerelőipari vállalat vagyunk, amely ötvözi a hagyományos kézművességet a legújabb technológiákkal, mint a hőszivattyúk.",
      valuesTitle: "Értékeink",
      v1: "Megbízhatóság",
      v2: "Diszkréció",
      v3: "Szakértelem",
      v4: "Gyors Szolgáltatás"
    },
    contactPage: {
      title: "Lépjen kapcsolatba velünk",
      formName: "Név",
      formEmail: "E-mail",
      formPhone: "Telefon",
      formType: "Probléma típusa",
      formMessage: "Üzenet",
      formSubmit: "Küldés",
      privacy: "Elfogadom az adatvédelmi nyilatkozatot",
      types: { leak: "Szivárgás/Vész", clog: "Dugulás/Csatorna", heat: "Fűtés/Hőszivattyú", bath: "Tető/Cink", other: "Egyéb szerelés" }
    },
    forms: {
      labels: { name: "Név", address: "Cím", city: "Város", phone: "Telefon", desc: "Leírás", sendWa: "Küldés WhatsApp-on", close: "Bezárás" },
      questions: { location: "Hol a probléma?", urgency: "Sürgősség?", propertyType: "Ingatlan típusa", roofType: "Tető típusa/Anyaga", boilerBrand: "Kazán márka", boilerAge: "Telepítés kora", heatingSystem: "Jelenlegi rendszer", dimensions: "Méretek", surface: "Terület m2", desiredStyle: "Kívánt stílus", budget: "Költségkeret", currentState: "Jelenlegi állapot", energyLabel: "Energiaosztály" }
    },
    common: { moreInfo: "Több Infó", requestQuote: "Ajánlat / Kapcsolat", footerText: "© 2024 Montana ST. Minden jog fenntartva." }
  },
  [Language.FR]: {
    nav: { home: "Accueil", services: "Services", projects: "Projets", about: "À propos", contact: "Contact" },
    hero: {
      title: "Maîtres de l'Installation",
      subtitle: "Montana ST – Du toit à l'égout, de la pompe à chaleur à la salle de bain. Votre spécialiste.",
      ctaCall: "Appeler 24/7",
      ctaQuote: "Demander un devis"
    },
    features: { title: "Pourquoi Montana ST?", f1: "Service d'urgence 24/7", f2: "Installateurs certifiés", f3: "Prix transparents", f4: "Solutions globales" },
    servicesPage: {
      title: "Notre Offre Complète",
      subtitle: "Nous proposons un concept total pour les particuliers et les entreprises.",
      items: [
        { title: "Urgence 24/7 & Fuites", desc: "Action immédiate en cas de dégâts des eaux ou de gaz.", points: ["Détection de fuites", "Étanchéité gaz", "Réparations d'urgence", "Limitation dégâts des eaux", "Débouchage canalisations"] },
        { title: "Égouts & Débouchage", desc: "Nettoyage professionnel et inspection.", points: ["Débouchage WC/Douche", "Inspection caméra", "Nettoyage haute pression", "Élimination racines", "Détection odeurs"] },
        { title: "Chauffage Central", desc: "Entretien et installation de systèmes de chauffage.", points: ["Entretien chaudière", "Radiateurs", "Thermostats", "Remplacement vase d'expansion", "Dépannage"] },
        { title: "Pompes à Chaleur", desc: "Prêt pour l'avenir avec l'énergie verte.", points: ["Pompes hybrides", "Chauffe-eau solaire", "Conseil énergie", "Systèmes tout électrique", "Aide aux subventions"] },
        { title: "Toiture & Zinc", desc: "Travaux spécialisés pour toits plats et gouttières.", points: ["Toiture bitume", "Gouttières zinc", "Évacuation eau", "Isolation toiture", "Réparation fuite toiture"] },
        { title: "Rénovation SDB", desc: "De la démolition à la finition de luxe.", points: ["Salles de bain complètes", "Rénovation WC", "Carrelage", "Douches à l'italienne", "Installation robinetterie"] },
        { title: "Ventilation Mécanique", desc: "Pour un climat intérieur sain.", points: ["Remplacement VMC", "Nettoyage conduits", "Récupération chaleur", "Systèmes CO2", "Pose bouches aération"] },
        { title: "Gaz & Eau", desc: "Pose et déplacement de tuyauterie.", points: ["Préparation cuisine", "Adoucisseurs d'eau", "Systèmes à sertir", "Robinet extérieur", "Test pression gaz"] },
        { title: "Installations Bâtiment", desc: "Grands projets pour la construction neuve.", points: ["Installations complètes", "Bâtiments commerciaux", "Locaux techniques", "Chaufferies", "Gestion légionellose"] }
      ]
    },
    projectsPage: { title: "Nos Réalisations", filterAll: "Tout", filterLeak: "Fuites", filterBath: "Salles de bain", filterHeat: "Chauffage" },
    aboutPage: {
      title: "À propos de Montana ST",
      storyTitle: "Qui sommes-nous?",
      storyText: "Montana ST est plus qu'un plombier. Nous sommes une entreprise d'installation polyvalente alliant artisanat traditionnel et technologies modernes comme les pompes à chaleur.",
      valuesTitle: "Nos Valeurs",
      v1: "Fiabilité",
      v2: "Discrétion",
      v3: "Compétence technique",
      v4: "Service rapide"
    },
    contactPage: {
      title: "Contactez-nous",
      formName: "Nom",
      formEmail: "E-mail",
      formPhone: "Téléphone",
      formType: "Type de problème",
      formMessage: "Message",
      formSubmit: "Envoyer",
      privacy: "J'accepte la déclaration de confidentialité",
      types: { leak: "Fuite/Urgence", clog: "Bouchon/Égout", heat: "Chauffage/PAC", bath: "Toiture/Zinc", other: "Autre installation" }
    },
    forms: {
      labels: { name: "Nom", address: "Adresse", city: "Ville", phone: "Téléphone", desc: "Description", sendWa: "Envoyer par WhatsApp", close: "Fermer" },
      questions: { location: "Où est le problème ?", urgency: "Urgence ?", propertyType: "Type de propriété", roofType: "Type de toit/Matériau", boilerBrand: "Marque chaudière", boilerAge: "Âge installation", heatingSystem: "Système actuel", dimensions: "Dimensions", surface: "Surface m2", desiredStyle: "Style souhaité", budget: "Budget", currentState: "État actuel", energyLabel: "Classe Énergétique" }
    },
    common: { moreInfo: "Plus d'infos", requestQuote: "Devis / Contact", footerText: "© 2024 Montana ST. Tous droits réservés." }
  },
  [Language.AR]: {
    nav: { home: "الرئيسية", services: "الخدمات", projects: "المشاريع", about: "من نحن", contact: "اتصل بنا" },
    hero: {
      title: "خبراء التركيبات",
      subtitle: "مونتانا إس تي – من السقف إلى الصرف الصحي، ومن المضخات الحرارية إلى الحمامات. متخصصك الشامل.",
      ctaCall: "اتصل 24/7",
      ctaQuote: "طلب عرض سعر"
    },
    features: { title: "لماذا مونتانا إس تي؟", f1: "خدمة طوارئ 24/7", f2: "فنيون معتمدون", f3: "أسعار شفافة", f4: "حلول شاملة" },
    servicesPage: {
      title: "عرضنا الكامل",
      subtitle: "نقدم مفهوماً شاملاً للمنازل الخاصة والشركات.",
      items: [
        { title: "طوارئ 24/7 وتسريبات", desc: "إجراء فوري لأضرار المياه أو الغاز.", points: ["كشف التسربات", "عزل الغاز", "إصلاحات طارئة", "الحد من أضرار المياه", "إزالة الانسدادات"] },
        { title: "صرف صحي وتسليك", desc: "تنظيف وتفتيش احترافي للمصارف.", points: ["تسليك مراحيض/دش", "فحص بالكاميرا", "تنظيف ضغط عالي", "إزالة الجذور", "كشف الروائح"] },
        { title: "تدفئة مركزية", desc: "صيانة وتركيب أنظمة التدفئة.", points: ["صيانة الغلايات", "مشعات", "تركيب ترموستات", "استبدال خزان التمدد", "تشخيص الأعطال"] },
        { title: "مضخات حرارية", desc: "جاهزون للمستقبل بالطاقة الخضراء.", points: ["مضخات هجينة", "سخانات شمسية", "توفير الطاقة", "أنظمة كهربائية بالكامل", "دعم الإعانات"] },
        { title: "أسطح وزينك", desc: "عمل متخصص للأسطح المسطحة والمزاريب.", points: ["أسطح بيتومين", "مزاريب زينك", "تصريف مياه الأمطار", "عزل الأسطح", "إصلاح تسرب السقف"] },
        { title: "تجديد حمامات", desc: "من الهدم إلى التشطيب الفاخر.", points: ["حمامات كاملة", "تجديد تواليت", "تبليط وصحي", "كبائن دش", "تركيب صنابير فاخرة"] },
        { title: "تهوية ميكانيكية", desc: "لمناخ داخلي صحي.", points: ["استبدال مراوح", "تنظيف قنوات", "استرداد الحرارة", "أنظمة التحكم بـ CO2", "تركيب فتحات التهوية"] },
        { title: "أنابيب غاز وماء", desc: "تمديد وتغيير مسار الأنابيب.", points: ["تجهيز مطابخ", "منقيات مياه", "أنظمة كبس", "تركيب صنبور خارجي", "اختبار ضغط الغاز"] },
        { title: "تركيبات إنشائية", desc: "مشاريع كبيرة للبناء الجديد.", points: ["تركيبات كاملة", "مباني تجارية", "غرف فنية", "تجهيز غرف الغلايات", "إدارة الليجيونيلا"] }
      ]
    },
    projectsPage: { title: "مشاريعنا", filterAll: "الكل", filterLeak: "تسريبات", filterBath: "حمامات", filterHeat: "تدفئة" },
    aboutPage: {
      title: "عن مونتانا إس تي",
      storyTitle: "من نحن؟",
      storyText: "مونتانا إس تي أكثر من مجرد سباك. نحن شركة تركيبات شاملة تجمع بين الحرفية التقليدية والتقنيات الحديثة مثل المضخات الحرارية وفحص الكاميرا.",
      valuesTitle: "قيمنا",
      v1: "الموثوقية",
      v2: "السرية",
      v3: "المهارة التقنية",
      v4: "خدمة سريعة"
    },
    contactPage: {
      title: "اتصل بنا",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formPhone: "الهاتف",
      formType: "نوع المشكلة",
      formMessage: "الرسالة",
      formSubmit: "إرسال",
      privacy: "أوافق على بيان الخصوصية",
      types: { leak: "تسرب/طوارئ", clog: "انسداد/صرف", heat: "تدفئة/مضخة", bath: "سقف/زينك", other: "تركيبات أخرى" }
    },
    forms: {
      labels: { name: "الاسم", address: "العنوان", city: "المدينة", phone: "الهاتف", desc: "الوصف", sendWa: "إرسال عبر واتساب", close: "إغلاق" },
      questions: { location: "أين المشكلة؟", urgency: "مدى الاستعجال؟", propertyType: "نوع العقار", roofType: "نوع السقف/المادة", boilerBrand: "ماركة الغلاية", boilerAge: "عمر التركيب", heatingSystem: "النظام الحالي", dimensions: "الأبعاد", surface: "المساحة م2", desiredStyle: "النمط المطلوب", budget: "الميزانية", currentState: "الوضع الحالي", energyLabel: "تصنيف الطاقة" }
    },
    common: { moreInfo: "المزيد من المعلومات", requestQuote: "طلب عرض / اتصال", footerText: "© 2024 مونتانا إس تي. جميع الحقوق محفوظة." }
  }
};
