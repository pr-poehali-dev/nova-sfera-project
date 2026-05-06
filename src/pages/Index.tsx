export default function Index() {
  const reviews = [
    {
      name: "Зам. главы города Можайска",
      role: "Администрация города",
      quote: "Это опасно, но дико завораживающе, приезжайте ещё раз к нам",
      context: "Изначально отказывалась от шоу, считала его ненужным",
    },
    {
      name: "Евгений Пелевин",
      role: "Организатор спортивных мероприятий, Екатеринбург",
      quote: "Спасибо, что не заставили спрессовать и всё прошло гладко!",
      context: "",
    },
    {
      name: "Федор Дмитриев",
      role: "Организатор мероприятий Мос. Ком. Спорта",
      quote: "Большие профессионалы, всегда комфортно работать",
      context: "",
    },
    {
      name: "Кристина Ильина",
      role: "Министерство Культуры Московской Области",
      quote: "Вы подтверждаете свой статус профессионалов в спортивной составляющей, в организаторской и технической составляющей",
      context: "",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            MOTO<span className="text-red-600">FMX</span>
          </a>
          <div className="flex space-x-6">
            <a href="#slide1" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Итоги 2025
            </a>
            <a href="#slide2" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Обратная связь
            </a>
            <a href="#team" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Команда
            </a>
            <a href="#roles" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Роли
            </a>
            <a href="#2026" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              План 2026
            </a>
          </div>
        </div>
      </nav>

      {/* Slide 1: Итоги 2025 */}
      <section id="slide1" className="pt-28 pb-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-6">Командная встреча · Май 2026</p>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5">
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                ИТОГИ
                <br />
                <span className="text-red-600">2025</span>
              </h1>
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/10d3cb11-9e90-4d48-8d62-7ed26075a384/files/3dba6cba-a097-4fab-8206-34c619ab59e3.jpg"
                  alt="Мотофристайл"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-600"></div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 md:pt-4 space-y-10">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5 pb-3 border-b border-black">
                  Количество мероприятий
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-black text-white p-5">
                    <div className="text-5xl font-bold text-red-600 leading-none mb-2">38</div>
                    <div className="text-xs uppercase tracking-wide text-neutral-400">Всего мероприятий</div>
                  </div>
                  <div className="bg-black text-white p-5">
                    <div className="text-5xl font-bold text-red-600 leading-none mb-2">28</div>
                    <div className="text-xs uppercase tracking-wide text-neutral-400">В среднем на райдера</div>
                  </div>
                  <div className="border-2 border-black p-5">
                    <div className="text-5xl font-bold leading-none mb-2">27</div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500">Мероприятий — Лев</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-5 pb-3 border-b border-black">
                  Зрители на мероприятиях
                </h2>
                <div className="space-y-3">
                  {[
                    { event: "День Московского спорта (сентябрь)", audience: "200 000", note: "зрителей" },
                    { event: "Фестиваль Энергия РМК", audience: "83 000+", note: "зрителей в первый день" },
                    { event: "Уличный драйв в Лужниках", audience: "70 000", note: "зрителей" },
                    { event: "День Московского спорта (июль)", audience: "50 000", note: "зрителей" },
                    { event: "РДЖ Арена", audience: "50 000", note: "зрителей" },
                    { event: "Мос. Обл. тур", audience: "2 000–2 500", note: "зрителей в среднем" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-neutral-200 hover:border-red-600 transition-colors">
                      <span className="text-sm font-medium">{item.event}</span>
                      <div className="text-right">
                        <span className="text-xl font-bold text-red-600">{item.audience}</span>
                        <span className="text-xs text-neutral-500 block">{item.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Обратная связь */}
      <section id="slide2" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Слайд 2</p>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-16">
            ОБРАТНАЯ<br />
            <span className="text-red-600">СВЯЗЬ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
            {reviews.map((r, i) => (
              <div key={i} className="bg-black p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
                <div>
                  {r.context && (
                    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 italic">{r.context}</p>
                  )}
                  <p className="text-xl md:text-2xl font-medium leading-snug mb-6">
                    <span className="text-red-600 text-4xl font-bold leading-none mr-1">"</span>
                    {r.quote}
                    <span className="text-red-600 text-4xl font-bold leading-none ml-1">"</span>
                  </p>
                </div>
                <div className="border-t border-neutral-800 pt-4">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3: Команда */}
      <section id="team" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОМАНДА</h2>
              <div className="aspect-[4/5] bg-black relative mb-8 md:mb-0 flex items-center justify-center">
                <span className="text-white text-[120px] font-bold leading-none opacity-20">FMX</span>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-red-600"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Мы — команда, которая живёт мотофристайлом. Каждый прыжок — это результат месяцев работы, доверия и командного духа.
              </p>
              <p className="mb-6">
                2025 год стал годом роста: новые высоты, новые трюки, новые партнёры. Мы доказали, что можем бороться на высшем уровне — и это только начало.
              </p>
              <p className="mb-6">
                Каждый райдер команды внёс вклад в общий результат. Это не индивидуальный спорт — это командная работа от тренировок до шоу.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Ценности</h3>
                  <ul className="space-y-2">
                    <li>Прогресс каждый день</li>
                    <li>Командный дух</li>
                    <li>Безопасность</li>
                    <li>Зрелищность</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Направления</h3>
                  <ul className="space-y-2">
                    <li>Соревнования FMX</li>
                    <li>Шоу-программы</li>
                    <li>Медиа-контент</li>
                    <li>Работа с партнёрами</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slides 5-7: Роли */}
      {[
        {
          id: "roles",
          number: "05",
          title: "РУКОВОДИТЕЛЬ\nКОМАНДЫ",
          subtitle: "Event директор — отвечает за всё",
          goal: "Бесперебойная работа команды и связующих, прибыль",
          subordinates: "Капитан команды, техническая группа, водители",
          sections: [
            {
              name: "Мероприятия",
              items: [
                "Взаимодействие с заказчиками (формат, площадка, условия)",
                "Взаимодействие с подрядчиками (аренда оборудования, хелперы, сроки)",
                "Контроль подготовки площадки",
                "Координация работы технической группы",
                "Организация системы пропусков",
                "Контроль эстетики на территории мероприятия",
                "Формирование и фиксация общих таймингов",
                "Бронирование гостиниц и авиабилетов",
                "Контроль расходов",
              ],
            },
            {
              name: "Команда",
              items: [
                "Определение состава райдеров на мероприятия",
                "Определение гонораров райдеров",
                "Менеджмент команды",
                "Выплата гонораров",
              ],
            },
            {
              name: "SMM",
              items: [
                "Ведение соцсетей: VK, Instagram, Telegram",
                "Работа с видео/фото специалистами",
              ],
            },
          ],
        },
        {
          id: "role-captain",
          number: "06",
          title: "КАПИТАН\nКОМАНДЫ",
          subtitle: "Фокус на райдерах и формате мероприятия",
          goal: "Дружеская составляющая, развитие райдеров, безопасность",
          subordinates: "Райдеры",
          sections: [
            {
              name: "Команда",
              items: [
                "Развитие дружеской составляющей",
                "Контроль годовых планов развития райдеров",
                "Доведение информации до райдеров команды",
                "План по тренировочным мероприятиям (подушки, сборы и т.д.)",
              ],
            },
            {
              name: "Мероприятия",
              items: [
                "Контроль присутствия райдеров на площадке",
                "Проведение брифингов",
                "Организационная помощь Event директору",
                "Соблюдение таймингов мероприятия",
                "Контроль безопасности",
              ],
            },
            {
              name: "Партнёры",
              items: [
                "Работа с партнёрами — нужды",
                "Контроль внешнего вида",
              ],
            },
            {
              name: "Административная",
              items: [
                "Планирование, подготовка и фасилитация командных встреч",
              ],
            },
          ],
        },
        {
          id: "role-tech",
          number: "07",
          title: "ТЕХНИЧЕСКИЙ\nСПЕЦИАЛИСТ",
          subtitle: "Материальная база и порядок",
          goal: "Исправная техническая база, порядок в клубе",
          subordinates: "—",
          sections: [
            {
              name: "Обязанности",
              items: [
                "Наведение и соблюдение порядка в клубе",
                "Ревизия и закупка материальной базы",
              ],
            },
          ],
        },
      ].map((role, roleIdx) => (
        <section key={role.id} id={role.id} className="py-20 px-4 md:px-8 bg-white border-t-4 border-black">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Left */}
              <div className="col-span-12 md:col-span-4">
                <p className="text-sm uppercase tracking-widest text-red-600 mb-3">Роль {role.number}</p>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-6 whitespace-pre-line">
                  {role.title}
                </h2>
                <p className="text-neutral-500 text-sm mb-10">{role.subtitle}</p>
                <div className="bg-black text-white p-6 mb-4">
                  <p className="text-xs uppercase tracking-widest text-red-600 mb-2">Главная цель</p>
                  <p className="text-sm leading-relaxed">{role.goal}</p>
                </div>
                <div className="border border-black p-6">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">В подчинении</p>
                  <p className="text-sm font-medium">{role.subordinates}</p>
                </div>
              </div>

              {/* Right: Responsibility sections */}
              <div className="col-span-12 md:col-span-8 md:pl-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {role.sections.map((section, sIdx) => (
                    <div key={sIdx} className="border-t-2 border-black pt-5">
                      <h3 className="text-xs uppercase tracking-widest font-bold mb-4">{section.name}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <span className="text-red-600 font-bold mt-0.5 shrink-0">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Slide 4: План 2026 */}
      <section id="2026" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ПЛАН<br />2026</h2>
              <p className="text-xl mb-8">Новый сезон — новые амбиции. Вот что нас ждёт впереди.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold min-w-[2rem]">—</span>
                  <div>
                    <p className="font-bold uppercase tracking-wide mb-1">Расширение географии</p>
                    <p className="text-white/80">Выезды на международные этапы и крупные российские фестивали</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold min-w-[2rem]">—</span>
                  <div>
                    <p className="font-bold uppercase tracking-wide mb-1">Новые трюки в программе</p>
                    <p className="text-white/80">Каждый райдер добавляет минимум один сложный элемент в сезоне</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold min-w-[2rem]">—</span>
                  <div>
                    <p className="font-bold uppercase tracking-wide mb-1">Партнёрства и спонсоры</p>
                    <p className="text-white/80">Активный поиск новых партнёров для роста бюджета команды</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold min-w-[2rem]">—</span>
                  <div>
                    <p className="font-bold uppercase tracking-wide mb-1">Медиа-стратегия</p>
                    <p className="text-white/80">Регулярный контент, съёмки и продвижение команды в сети</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border-2 border-white p-8">
                <p className="text-sm uppercase tracking-widest mb-4 text-white/70">Ключевая цель 2026</p>
                <p className="text-4xl font-bold tracking-tighter leading-tight">
                  ВОЙТИ В ТОП-3<br />РОССИЙСКОГО<br />FMX
                </p>
                <div className="mt-8 pt-8 border-t border-white/30">
                  <p className="text-white/80">Это амбициозно. Это достижимо. Мы работаем как команда — и побеждаем как команда.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold tracking-tighter text-lg">MOTO<span className="text-red-600">FMX</span></p>
          <p className="text-neutral-500 text-sm mt-2 md:mt-0">Командная встреча · Май 2026 · Вперёд к новым высотам</p>
        </div>
      </footer>
    </main>
  );
}