import * as axios from "axios";
import image1 from "../Designs/img/design1.jpg";
import image2 from "../Designs/img/design2.jpg";
import image3 from "../Designs/img/design3.jpg";
import slider1 from "../Features/img/slider1.jpg";
import slider2 from "../Features/img/slider2.jpg";
import slider3 from "../Features/img/slider3.jpg";
import slider4 from "../Features/img/slider4.jpg";

let initialState = {
    wow: "Пока ничего",
    landingEditMode: false,
    language: "uk",
    navMenu: [
        {
            title: {
                en: "DESIGNS",
                ru: "Дизайны",
                uk: "Дизайни"
            },
            href: "#designs"
        },
        {
            title: {
                en: "Price List",
                ru: "Прайс",
                uk: "Прайс"
            },
            href: "#"
        },
        {
            title: {
                en: "Reviews",
                ru: "Отзывы",
                uk: "Відгуки"
            },
            href: "#"
        },
        {
            title: {
                en: "Contacts",
                ru: "Контакты",
                uk: "Контакти"
            },
            href: "#"
        }
    ],
    loginBlockText: {
        en: "Sign in",
        ru: "Войти",
        uk: "Вхід"
    },
    loginForm: {
        titleText: {
            en: "Login",
            ru: "Вход",
            uk: "Вхід"
        },
        emailText: {
            en: "Email",
            ru: "Email",
            uk: "Email"
        },
        passwordText: {
            en: "Password",
            ru: "Пароль",
            uk: "Пароль"
        },
        rememberMeText: {
            en: "Remember me",
            ru: "Запомнить меня",
            uk: "Запам'ятати мене"
        },
        forgetPasswordText: {
            en: "Forgot password?",
            ru: "Забыли пароль?",
            uk: "Забули пароль?"
        },
        dontHaveText: {
            en: "Don't have account yet?",
            ru: "У вас еще нет аккаунта?",
            uk: "У вас ще немає аккаунта?"
        },
        signInText: {
            en: "Create account",
            ru: "Создать аккаунт",
            uk: "Створити акаунт"
        },
        facebookLoginButtonText: {
            en: "Login with Facebook",
            ru: "Войти с Facebook",
            uk: "Увійти з Facebook"
        },
        googleLoginButtonText: {
            en: "Login with Google",
            ru: "Войти с Google",
            uk: "Увійти з Google"
        },
    },
    PasswordResetForm: {
        title: {
            en: "Password reset",
            ru: "Восстановление пароля",
            uk: "Відновлення паролю"
        },
        text: {
            en: "Enter your e-mail and we will send you link for password reset",
            ru: "Укажите свой e-mail и мы вышлем данные для восстановления пароля",
            uk: "Вкажіть свій e-mail і ми надішлемо дані для відновлення пароля"
        },
        buttonText: {
            en: "Next",
            ru: "Далее",
            uk: "Далі"
        },
        backButtonText: {
            en: "Back",
            ru: "Назад",
            uk: "Назад"
        },
        textAfterReset: {
            en: "Password reset link has been sent on indicated e-mail !",
            ru: "Ссылка для восстановления пароля выслано на указанный email !",
            uk: "Посилання для відновлення пароля вислано на вказаний email !"
        },
    },
    registrationForm: {
        nextButtonText: {
            en: "Next",
            ru: "Далее",
            uk: "Далі"
        },
        backButtonText: {
            en: "Back",
            ru: "Назад",
            uk: "Назад"
        },
    },

    mainBlock: {
        mainBackgroundUrl: "../../img/header_background.jpg",
        mainTitle: {
            en: "Your wedding site",
            ru: "Твой свадебный сайт",
            uk: "Твій сайт весілля"
        },
        mainMainText: {
            en: "ALL YOUR WEDDING MOMENTS IN ONE PLACE",
            ru: "Все о вашей свадьбе в едином месте",
            uk: "Все про ваше весілля в єдиному місці"
        },
        mainText: {
            en: "Create your personal beautiful site in minutes. " +
                "Choose a design, add text, photos and videos. Share the link with your guests and relatives, acquaint them with each other. " +
                "Prepare for the celebration in advance. Your site will look equally nice on any gadget.",
            ru: "Создавайте собственный красивый сайт в считаные минуты. Выберите дизайн, добавьте текст, фото и видео. Делитесь ссылкой на сайт " +
                "с гостями и родственниками, знакомьте их друг с другом. Готовтесь к торжеству заранее. Ваш сайт будет одинаково красиво смотреться " +
                "на любом гаджете.",
            uk: "Створюйте власний гарний сайт за лічені хвилини. Виберіть дизайн, додайте текст, фото і відео. Діліться посиланням на сайт з " +
                "гостями і родичами, знайомте їх один з одним. Підготуйтесь до церемонії заздалегідь. Ваш сайт буде гарно виглядати на будь-якому " +
                "гаджеті."
        },
        mainMainButtonText: {
            en: "CREATE SITE",
            ru: "Создать сайт",
            uk: "Створити сайт"
        },
        mainSecondaryButtonText: {
            en: "CHOOSE DESIGN",
            ru: "Выбрать дизайн",
            uk: "Вибрати дизайн"
        },
    },

    features: {
        title: {
            en: "What will you get",
            ru: "Что ты получишь",
            uk: "Що ти отримаєш"
        },
        block1: {
            title: {
                en: "Modern digital wedding site",
                ru: "Современный свадебный сайт",
                uk: "Сучасний весільний сайт"
            },
            photo1uri: ".././img/photo_features_1.jpg",
            photo2uri: "",
            textBlock1: {
                title: {
                    en: "EASY TO CREATE AND USE",
                    ru: "ЛЕГКО СОЗДАТЬ И ПОЛЬЗОВАТЬСЯ",
                    uk: "ЛЕГКО СТВОРИТИ І КОРИСТУВАТИСЯ"
                },
                text: {
                    en: "You do not have to be technician guru to create you site or pay some developers and wait for the results a few month. Just choose design, add descriptions, a few photos and go!",
                    ru: "Вам не нужно быть техническим гуру для того чтобы создать свой сайт или платить кучу денег програмистам и ждать результатов несколько месяцев. Просто выбери дизайн, добавь описания, несколько фото и вперед!",
                    uk: "Вам не потрібно бути технічним гуру, щоб створити собі сайт. Відтепер не обов'язково платити купу грошей програмістам і чекати місяцями результатів. Просто оберіть дизайн, додайте описання та декілька фото і вперед!"
                },
            },
            textBlock2: {
                title: {
                    en: "ADAPTIVE SITE",
                    ru: "АДАПТИВНАЯ СТРАНИЦА",
                    uk: "АДАПТИВНА СТОРІНКА"
                },
                text: {
                    en: "Your wedding page will have the same structure and stay pretty in every type of gadget.",
                    ru: "Ваш сайт будет иметь ту же структуру и одинаково красиво смотреться на любом гаджете: телефон, планшет, компьютер.",
                    uk: "Ваш сайт матиме ту саму структуру та однаково гарний вигляд на будь-якому гаджеті: телефоні, планшеті, комп'ютері."
                },
            },
            textBlock3: {
                title: {
                    en: "TRENDY DESIGNS",
                    ru: "СТИЛЬНЫЙ ДИЗАЙН",
                    uk: "СТИЛЬНИЙ ДИЗАЙН"
                },
                text: {
                    en: "There are several modern designs for any taste. You can use all possible designs and change them any time you wish.",
                    ru: "Мы предлагаем несколько современных дитзайнов на любой вкус. Вы можете использовать все дизайны и менять их в любой момент.",
                    uk: "Ми пропонуємо декілька сучасних дизайнів сайту на будь-який смак. Ви зможете користуватися всіма видами (одночасно) і змінювати їх, коли завгодно."
                },
            },
            textBlock4: {
                title: {
                    en: "MOBILE APPLICATION",
                    ru: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
                    uk: "МОБІЛЬНИЙ ДОДАТОК"
                },
                text: {
                    en: "Free mobile application for you and your guests synergy before, during and after this special day. Application provides all the event participants possibility to communicate each other using the wall and personal messages. Also everyone can upload their photos and videos using the application.",
                    ru: "Бесплатное мобильное приложение для вас и ваших гостей для коммуникации перед, во время и после свадьбы. Приложение позволяет всем участникам события общаться друг с другом используя общую стену и личные сообщения. Также все могут загружать свои фото и видео используя приложение.",
                    uk: "Безкоштовний мобільний додаток для вас і ваших гостей забезпечить комунікацію до, під час та після весілля. Додаток дозволяє всім учасникам події спілкуватись одне з одним, використовуючи загальну стіну та особисті повідомлення, а також завантажувати свої фото і відео."
                },
            },

        },
        block2: {
            title: {
                en: "Assistance in your wedding organisation",
                ru: "Онлайн помощник в организации свадьбы",
                uk: "Онлайн помічник в організації весілля"
            },

            textBlocks: [
                {
                    _id: 1,
                    photo: slider1,
                    title: {
                        en: "ORGANISATIONAL ASPECTS",
                        ru: "ОРГАНИЗАЦИОННЫЕ МОМЕНТЫ",
                        uk: "ОРГАНІЗАЦІЙНІ МОМЕНТИ"
                    },
                    text: {
                        en: "Using the site you can provide all necessary organisational aspects for your guests. They won't call you every time they need some information about your wedding, they will have all aggregated in one place online point of access to any necessary information regarding the wedding: wedding schedule, maps, how to get tips, their table on the ceremony, and any useful info you want to share! Any changes - update the information and your guests will see the changes instantly!",
                        ru: "Напишите на вашем сайте все организационные моменты свадьбы и гости не будут вам звонить каждый раз когда им нужна будет какая-то информация. Они смогут узнать все что им нужно уточнить о свадьбе в едином месте - на вашем сайте: программа свадьбы, карта проезда, список гостей, схема рассадки гостей по столам, список подарков, размещение и многое-многое другое. Вносите изменения на сайте и ваши гости мгновенно увидят все изменения.",
                        uk: "Напишіть на вашому сайті всі організаційні моменти весілля, і гості не телефонуватимуть вам щоразу, коли їм буде потрібна якась інформація. Усе про подію вони зможуть дізнатися в єдиному місці - на вашому сайті: програма весілля, карта проїзду, список гостей, схема розсадки, список подарунків, розміщення і багато-багато іншого. Вносьте зміни на сайт, і ваші гості миттєво побачать їх на своїх ґаджетах."
                    },
                },
                {
                    _id: 2,
                    photo: slider2,
                    title: {
                        en: "GUESTS ONLINE FEEDBACKS",
                        ru: "ОБРАТНАЯ СВЯЗЬ ОТ ГОСТЕЙ",
                        uk: "ЗВОРОТНІЙ ЗВ'ЯЗОК ВІД ГОСТЕЙ"
                    },
                    text: {
                        en: "Using the site online RSVP form your guests will be able to confirm/reject their presence and answer any questions you want to know (drink/dishes preferences, single/married, etc.)",
                        ru: "Используя на сайте форму обратной связи, ваши гости смогут подтвердить свое присутствие/отсутствие на свадьбе, а также ответить на вопросы которые вы укажите (предпочтение по напиткам и т.п.)",
                        uk: "Користуючись на сайті формою зворотнього зв'язку, гості зможуть підтвердити свою присутність на весіллі, а також відповісти на питання, що ви вкажете (що цікавитимуть вас в процесі організації свята) (вподобання по напоям і т.п.)"
                    },
                },
                {
                    _id: 3,
                    photo: slider3,
                    title: {
                        en: "ONLINE GUEST MANAGEMENT",
                        ru: "ОНЛАЙН УПРАВЛЕНИЕ СПИСКОМ ГОСТЕЙ",
                        uk: "ОНЛАЙН КЕРУВАННЯ СПИСКОМ ГОСТЕЙ"
                    },
                    text: {
                        en: "You can manage your guests list using admin panel of the wedding page! You don't need any notes, excel sheets or any other tools. Just use guest management feature of the page: add, remove, filter, create views, add/remove attributes. Do you want to know how many single men will be present on your ceremony? Just create the fields 'sex' and 'marital status', assign the values correspondently, and apply filter! It is really easy and useful.",
                        ru: "Ведите список гостей онлайн, используя админ панель вашего сайта! Не нужно писать на листочках, вести в екселе или еще где-то… Добавляйте, удаляйте, редактируйте гостей онлайн. Ведите список так как вам удобно. Хотите посчитать сколько не женатых мужчин будет на свадьбе? Создайте поле 'Статус'. Присвойте каждому гостю значение Женат/Холост. Все! Отфильтруйте по значению 'Холост' и получите результат.",
                        uk: "Ви зможете коригувати список гостей, використовуючи адмін панель вашого сайту! Не потрібно писати на листочках, робити ексель таблиці чи ще щось... Додавайте, видаляйте, редагуйте список онлайн. Робіть його таким, як вам потрібно. Хочете порахувати, скільки неодружених чоловіків буде на весіллі? Додайте поле 'Одружений' з варіантами 'Так/Ні', проставте кожному гостю його статус, відфільтруйте по колонці. Все! Це справді просто"
                    },
                },
                {
                    _id: 4,
                    photo: slider4,
                    title: {
                        en: "GUEST SEEDLING. GET EVERYONE ACQUAINTED",
                        ru: "РОЗСАДКА ГОСТЕЙ. ПОЗНАКОМЬ ВСЕХ",
                        uk: "РОЗСАДКА ГОСТЕЙ. ПОЗНАЙОМТЕ УСІХ"
                    },
                    text: {
                        en: "Inform your guests about their table seat on the ceremony and with whom they will share it. Introduce your guests to each other in advance to make the ceremony more friendly. Who knows, maybe next wedding you visit will be the couple from your ceremony.",
                        ru: "Информируйте своих гостей о том где и с кем они будут сидеть за столом. Представьте своих гостей друг другу чтобы ваша свадьба прошла в более дружественной обстановке. Кто знает, возможно следующая свадьба которую ты посетишь будет состоять из сегодняшних гостей",
                        uk: "Інформуйте своїх гостей про те, де і з ким вони сидітимуть за столом. Познайомте запрошених заздалегідь онлайн, щоб весілля відбулося у ще більш дружній атмосфері. Хто знає, можливо, наступне весілля, яке ви відвідаєте, святкуватимуть гості, що познайомилися на вашому святі."
                    },
                }
            ]
        },
        block3: {
            title: {
                en: "Memory about your wedding. Delightful online photo and video album",
                ru: "Память о вашей свадьбе. Прекрасные онлайн фото и видео альбомы",
                uk: "Пам'ять про ваше весілля. Чудові онлайн фото і відео альбоми"
            },
            textBlock1: {
                title: {
                    en: "MEMORY FOR AGES",
                    ru: "ПАМЯТЬ НА ВЕКА",
                    uk: "ПАМ'ЯТЬ НА РОКИ"
                },
                text: {
                    en: "All your pre-wedding, wedding, and after wedding photos, videos, wishes and funny moments will always be with you and your guests online.",
                    ru: "Все ваши свадебные фото, видео, пожелания и веселые моменты всегда будут с вами и вашими гостями онлайн.",
                    uk: "Усі ваші весільні фото, відео, побажання і веселі моменти завжди будуть з вами і вашими гостями онлайн."
                },
            },
            textBlock2: {
                title: {
                    en: "DO NOT MISS ANY PHOTO OR VIDEO",
                    ru: "НЕ УПУСТИ НИ ОДНОГО ФОТО И ВИДЕО",
                    uk: "НЕ ПРОПУСТИ ЖОДНОГО ФОТО І ВІДЕО"
                },
                text: {
                    en: "Guests can share they emotions using free mobile app to upload photo and videos from their smartphones. Your operator went to eat something. No problem! You will not miss anything thanks to the app and of cause friends.",
                    ru: "Гости смогут делиться фото и видео со свадьбы, используя бесплатное мобильное приложение. Ваш фото или видео-оператор куда-то отлучился? Нет проблем! Вы ничего не потеряете благодаря мобильному приложению и друзьям.",
                    uk: "Гості зможуть завантажувати фото і відео з весілля, використовуючи безкоштовний мобільний додаток. Ваш фото чи відео-оператор десь відійшов? Немає проблем! Ви нічого не пропустите завдяки мобільному додатку і вашим друзям."
                },
            },
            textBlock3: {
                title: {
                    en: "GUESTS WISHES",
                    ru: "ПОЖЕЛАНИЯ ГОСТЕЙ",
                    uk: "ПОБАЖАННЯ ГОСТЕЙ"
                },
                text: {
                    en: "Guests can leave the wishes any time using the web site or free mobile app. It can be as text message as video recordings.",
                    ru: "Гости смогут оставить свои пожелания на сайте или в бесплатном мобильном приложении. Это может быть текст, фото или видео.",
                    uk: "Гості зможуть залишити свої побажання на сайті або в безкоштовному мобільному додатку. Це може бути текст, фото або відео."
                },
            },

        },
        block4: {
            title: {
                en: "All the information for your guests in one place online",
                ru: "Вся информация для гостей в одном месте",
                uk: "Вся інформація для гостей в одному місці"
            },
            textBlock1: {
                title: {
                    en: "EVERYTHING ABOUT THE COUPLE",
                    ru: "ВСЕ О ПАРЕ",
                    uk: "ВСЕ ПРО ПАРУ"
                },
                text: {
                    en: "Your guests and relatives definitely want to know as many details as possible about your couple and your love story. All information about couple and history of their relationships with pre-wedding photos and love story video can be shared on site as well.",
                    ru: "Многие гости и родственники хотели бы узнать побольше о вашей паре, а также о вашей истории любви. Посетив ваш свадебный сайт у них будет возможность прочитать всю ту информацию, которой вы поделитесь с ними. Вы можете добавить все важные события для вашей пары с описанием и фотографиями, создать досвадебные фото альбомы, а также загрузить ваше 'love story' видео.",
                    uk: "У запрошених гостей та родичів буде змога ближче познайомитися з вашою парою і дізнатися історію вашого кохання. На своєму весільному сайті ви зможете розмістити будь-яку інформацію, якою захочете поділитися з гостями: додати всі важливі для вас події з описом і фотографіями від моменту знайомства і до одруження, створити довесільні фотоальбоми, а також завантажити ваше 'love story' відео."
                },
            },
            textBlock2: {
                title: {
                    en: "WEDDING DETAILS. SCHEDULE. HOW TO GET?",
                    ru: "ДЕТАЛИ СВАДЬБЫ. ПРОГРАММА. КАК ДОБРАТЬСЯ?",
                    uk: "ДЕТАЛІ ВЕСІЛЛЯ. ПРОГРАМА. ЯК ДІСТАТИСЬ?"
                },
                text: {
                    en: "All the wedding details in one place online are available for your guests. Schedule, how to get, bride's nephew name? Everything is there! Your guests will be prepared even for toasts.",
                    ru: "Все детали свадьбы будут доступны всем гостям в любое время и в любом месте. Расписание, как добраться, имя племянницы невесты? Все здесь! Ваши гости будут подготовлены даже к тостам.",
                    uk: "Всі деталі весілля будуть доступні гостям будь-де і будь-коли. Розклад, як доїхати, ім'я сестри нареченої? Все тут! Ваші гості будуть підготовлені навіть до тостів."
                },
            },
            textBlock3: {
                title: {
                    en: "PRESENCE ON THE CEREMONY",
                    ru: "ПРИСУТСТВИЕ НА СВАДЬБЕ",
                    uk: "ПРИСУТНІСТЬ НА ВЕСІЛЛІ"
                },
                text: {
                    en: "In case if some guests can't attend your wedding ceremony they can watch the photos and videos. Moreover using the free app they can leave some text message, video recording or join you online to say some warm words.",
                    ru: "Гости, которые по каким-то причинам пропустили свадьбу, смогут посмотреть фото и видео со свадьбы у вас на сайте. А используя бесплатное мобильное приложения они смогут писать , снимать видео и даже присоединиться к вам и сказать свои поздравительные слова онлайн.",
                    uk: "Гості, які з якихось причин не змогли відвідати ваше весілля, побачать фото і відео на вашому сайті. А скориставшись безкоштовним мобільним додатком, вони зможуть написати вам побажання, записати відеопривітання або навіть поздоровити вас під час прямої відеотрансляції."
                },
            },
            textBlock4: {
                title: {
                    en: "ACQUAINTANCE WITH GUESTS",
                    ru: "ПРОГРАММА СВАДЬБЫ ОНЛАЙН",
                    uk: "ПРОГРАМА ВЕСІЛЛЯ ОНЛАЙН"
                },
                text: {
                    en: "You can add info about your guests: photo, description, marital status, social media profiles. Guest will know where they sit and with whom they share the table. Every wedding ceremony is first of all fun. If your guests will know each other before the ceremony - fun is guaranteed.",
                    ru: "Вы сможете указать информацию о всех ваших гостях: фото, описание, семейный статус, профили соц. сетей. Свадьба - это веселье. И если ваши гости познакомятся еще до самого события - веселье гарантировано!",
                    uk: "Ви зможете написати всю інформацію про ваших гостей: фото, опис, сімейний статус, акаунти в соцмережах. Весілля - це веселе свято. І якщо ваші гості познайомляться заздалегідь, веселощі гарантовані!"
                },
            },
            textBlock5: {
                title: {
                    en: "GIFTS WISH LIST",
                    ru: "СПИСОК ПОДАРКОВ",
                    uk: "СПИСОК ПОДАРУНКІВ"
                },
                text: {
                    en: "You can create the gifts wish list and guests can choose really necessary gifts.",
                    ru: "Вы сможете создать список подарков и гости будут дарить только нужные вам подарки.",
                    uk: "Ви зможете створити список подарунків, і гості даруватимуть тільки те, що вам потрібно."
                },
            }
        },
    },
    howItWorks: {
        title: {
            en: "How it works?",
            ru: "Как это работает?",
            uk: "Як це працює?"
        },
        items: [
            {
                _id: 1,
                title: {
                    en: "REGISTRATION",
                    ru: "Регистрация",
                    uk: "Реєстрація"
                },
                text: {
                    en: "Register with your e-mail or via your social networks accounts. NOTE: to be able to recieve notifications please fill in your actual e-mail in your profile.",
                    ru: "Выберите дизайн который подходит вам больше всего. Но не стоит переживать - вы всегда сможете изменить дизайн на любой из доступных вариантов!",
                    uk: "Ви можете зареєструватися з допомогою емейл або через акаунти соціальних мереж. ВАЖЛИВО: для того щоб від гостей отримувати підтвердження їхньої участі у весіллі, треба ввести свій емейл"
                },
            },
            {
                _id: 2,
                title: {
                    en: "CHOICE OF DESIGN",
                    ru: "ВЫБОР ДИЗАЙНА",
                    uk: "ВИБІР ДИЗАЙНУ"
                },
                text: {
                    en: "Choose the design you like. Don`t worry you can use all possible designs and change it any time.",
                    ru: "Выберите дизайн который подходит вам больше всего. Но не стоит переживать - вы всегда сможете изменить дизайн на любой из доступных вариантов!",
                    uk: "Вибирайте дизайн який вам найбільше сподобався, проте не переживайте - ви завжди зможете змінити дизайн вашого сайту"
                },
            },
            {
                _id: 3,
                title: {
                    en: "CHOISE OF THE TARIF",
                    ru: "ВЫБОР ТАРИФА",
                    uk: "ВИБІР ТАРИФУ"
                },
                text: {
                    en: "Choose the tariff plan. There are three possible options now.",
                    ru: "Выбирайте тарифный план. Сейчас существует три различных тарифы.",
                    uk: "Обирайте тарифний план. Зараз існує три різних тарифи."
                },
            },
            {
                _id: 4,
                title: {
                    en: "SITE FILLING",
                    ru: "РЕДАКТИРОВАНИЕ САЙТА",
                    uk: "НАПОВНЕННЯ САЙТУ"
                },
                text: {
                    en: "Fill the site with all information you want to share: couple information, guests profiles, wedding schedule, etc.",
                    ru: "Выберите дизайн который подходит вам больше всего. Но не стоит переживать - вы всегда сможете изменить дизайн на любой из доступных вариантов!",
                    uk: "В деталях напишіть все про ваше весілля. Що, де, коли. Розкажіть усім гостям вашу історію знайомства, покажіть запрошених гостей, складіть список подарунків і т.д."
                },
            },
            {
                _id: 5,
                title: {
                    en: "CELEBRATE!",
                    ru: "ГОТОВО",
                    uk: "ГІРКО!"
                },
                text: {
                    en: "Share the link for your site with your guests and start celebration! Congrats!",
                    ru: "Дайте гостям ссылку на сайт и наслаждайтесь лучшим днем вашей жизни. Горько!",
                    uk: "Дайте гостям посилання на сайт і насолоджуйтесь найкращим днем вашого життя! Гірко!"
                },
            }
        ]


    },
    designs: {
        title: {
            en: "Choice of Design",
            ru: "Выбор дизайна",
            uk: "Вибір дизайну"
        },
        buyButtonText: {
            en: "CREATE SITE",
            ru: "Создать сайт",
            uk: "Створити сайт"
        },
        demoButtonText: {
            en: "Demo",
            ru: "Демо",
            uk: "Демо"
        },

        designsArr: [
            {
                _id: 0,
                title: "Love",
                img: image1,
                href: "#"
            },
            {
                _id: 1,
                title: "Romantic",
                img: image2,
                href: "#"
            },
            {
                _id: 2,
                title: "Orange",
                img: image3,
                href: "#"
            },
            {
                _id: 3,
                title: "Green",
                img: image1,
                href: "#"
            },
            {
                _id: 4,
                title: "Black",
                img: image2,
                href: "#"
            }
        ]
    },
    prices: {
        title: "Prices",
        rates: [
            {
                _id: 1,
                name: "rate1",
                title: "Gold",
                price: "69",
                currency: "$",
                period: "/ Y R",
                description: "Good site",
                features: [
                    "About us",
                    "Wedding ceremony schedule, how to get there?",
                    "Pre-wedding gallery: 50 photos and videos",
                    "Wedding gallery: 50 photos and videos",
                    "Our story, Love Story video",
                    "Guest and relatives list",
                    "Online guests and relatives management",
                    "Confirmation form (RSVP)",
                    "Online greetings form",
                    "Guests’ seating plan",
                    "Gifts list",
                    "Mobile application",
                    "Photos and videos synchronization from mobile app"
                ]
            },
            {
                _id: 2,
                name: "rate2",
                title: "Diamond",
                price: "150",
                currency: "$",
                period: "/ Y R",
                description: "Good site",
                features:
                    [
                        "About us",
                        "Wedding ceremony schedule, how to get there?",
                        "Pre-wedding gallery: 50 photos and videos",
                        "Wedding gallery: 50 photos and videos",
                        "Our story, Love Story video",
                        "Guest and relatives list",
                        "Online guests and relatives management",
                        "Confirmation form (RSVP)",
                        "Online greetings form",
                        "Guests’ seating plan",
                        "Gifts list",
                        "Mobile application",
                        "Photos and videos synchronization from mobile app"

                    ]
            },
            {
                _id: 3,
                name: "rate3",
                title: "Free",
                price: "0",
                currency: "$",
                period: "/ Y R",
                description: "Good site",
                features:
                    [
                        "About us",
                        "Wedding ceremony schedule, how to get there?",
                        "Pre-wedding gallery: 50 photos and videos",
                        "Wedding gallery: 50 photos and videos",
                        "Our story, Love Story video",
                        "Guest and relatives list",
                        "Online guests and relatives management",
                        "Confirmation form (RSVP)",
                        "Online greetings form",
                        "Guests’ seating plan",
                        "Gifts list",
                        "Mobile application",
                        "Photos and videos synchronization from mobile app"

                    ]
            }
        ]

    },
    certificate: {
        title: "Gift certificates ",
        text: "Gift certificate for personal wedding page is the original gift on wedding, bachelor/bachelorette party, wedding anniversary or even birthday. Present your friends personal wedding site that can be in future became family site and will save all remarkable moments of their life. Certificate will be sent to your e-mail or we can send it to you in gift wrap.",
        buttonText: "BUY A GIFT CERTIFICATE"
    },
    reviews: {
        title: "What our customers say about us ",
        buttonText: "Leave feedback",
        reviews: [
            {
                id: "review1",
                name: "Sophy",
                text: "Thanks to my sister for such a great gift! I even didn't know that you can create personal wedding page!",
                photo: "./img/photo1.jpg"
            },
            {
                id: "review2",
                name: "John",
                text: "Super! Even those friends who could not visit our wedding were with us in chat and online saw what happened!",
                photo: "./img/photo2.jpg"
            },
            {
                id: "review3",
                name: "Sergiy@Alina",
                text: "Wedding is the top event of all our life! Unfortunately many fun moments are forgotten over time… " +
                    "But thanks to our wedding site we can always view the photos and videos together with whole family and remember this day!",
                photo: "./img/photo3.jpg"
            },
            {
                id: "review4",
                name: "Annie",
                text: "My wedding is the best! No one else had his own wedding site :)",
                photo: "./img/photo4.jpg"
            },
            {
                id: "review5",
                name: "Annie",
                text: "My wedding is the best! No one else had his own wedding site :)",
                photo: "./img/photo5.jpg"
            },
            {
                id: "review6",
                name: "Annie",
                text: "My wedding is the best! No one else had his own wedding site :)",
                photo: "./img/photo6.jpg"
            }
        ]
    }

};

const SET_TEXT = "SET-TEXT";
const SET_EDIT_MODE = "SET-EDIT-MODE";

const landingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON-LANDING-EDIT-MODE" :
            return {
                ...state,
                landingEditMode: true
            }
        case "OFF-LANDING-EDIT-MODE":
            return {
                ...state,
                landingEditMode: false
            }
        case "mainBackgroundUrl":
            return {
                ...state, mainBlock: {...state.mainBlock, mainBackgroundUrl: action.newText}
            }
        case "mainTitle":
            return {
                ...state, mainBlock: {
                    ...state.mainBlock, [action.payload.blockName]:
                        {
                            ...state.mainBlock[action.payload.blockName],
                            [action.payload.language]: action.payload.newText
                        }
                }
            }
        case "mainMainText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainMainText: action.newText}
            }
        case "mainText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainText: action.newText}
            }
        case "mainMainButtonText":
            return {
                ...state,
                mainBlock: {
                    ...state.mainBlock,
                    mainMainButtonText: {...state.mainBlock.mainMainButtonText, uk: action.newText}
                }
            }
        case "mainSecondaryButtonText":
            return {
                ...state, mainBlock: {...state.mainBlock, mainSecondaryButtonText: action.newText}
            }

        case "TOGGLE-LANGUAGE":
            return {
                ...state,
                language: action.language
            }
        case "CHANGE-WOW":
            return {
                ...state,
                wow: "Change!"
            }
        default:
            return state;
    }
};


export let setText = (newText, blockName, language) => ({type: "mainTitle", payload: {blockName, newText, language}});
export let onLandingEditMode = () => ({type: "ON-LANDING-EDIT-MODE"});
export let offLandingEditMode = () => ({type: "OFF-LANDING-EDIT-MODE"});
export let toggleLanguage = (language) => ({type: "TOGGLE-LANGUAGE", language});
export let EditMode = () => ({type: "SET-EDIT-MODE",});
export let changeWow = () => ({type: "CHANGE-WOW",});

export const updateText = (newText, blockName, language) => {
    return (dispatch) => {
        dispatch(setText(newText, blockName, language));
    }

}

export const activateLandingEditMode = () => {
    return (dispatch) => {
        dispatch(onLandingEditMode());
    }
}
export const deactivateLandingEditMode = () => {
    return (dispatch) => {
        dispatch(offLandingEditMode());
    }
}

export const changeLanguage = (language) => {
    return (dispatch) => {
        dispatch(toggleLanguage(language));
    }
}

export const updateWow = () => async (dispatch) => {
    let response = await authAPI.getUsers();
    console.log(response.data)

}


export let addMessageActiveCreation = (newMessageText) => ({type: "ADD-MESSAGE", newMessageText});
// export let updateNewMessageActiveCreation = (text) => ({type: "UPDATE-NEW-MESSAGE", newMessage: text});


export default landingReducer;

const instanse = axios.create({});

export const authAPI = {
    getUsers() {
        const ddd = {email: "a.omelchuk1987@gmooail.com", password: "Carters2012", rememberMe: false}
        return instanse.post(`https://thefamily.cloud/uk/auth/loginform`, ddd).then((response) => {
            return response.data;
        })
    }
}