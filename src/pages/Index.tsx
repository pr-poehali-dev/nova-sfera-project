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
          <div className="flex space-x-8">
            <a href="#slide1" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Итоги 2025
            </a>
            <a href="#slide2" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Обратная связь
            </a>
          </div>
        </div>
      </nav>

      {/* Slide 1 */}
      <section id="slide1" className="pt-28 pb-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-6">Командная встреча · Май 2026</p>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left: Title + image */}
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

            {/* Right: Stats */}
            <div className="col-span-12 md:col-span-7 md:pt-4 space-y-10">

              {/* Block 1: Events count */}
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

              {/* Block 2: Audience */}
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

      {/* Slide 2: Feedback */}
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
