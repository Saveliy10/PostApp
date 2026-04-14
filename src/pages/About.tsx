const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-8">
                <section className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-[0_28px_60px_-30px_rgba(15,23,42,0.4)] backdrop-blur-xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase text-indigo-500 tracking-[0.24em]">
                                About this app
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
                                React + TypeScript project
                            </h1>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                            Learning project
                        </div>
                    </div>

                    <p className="mt-6 text-slate-600 leading-8">
                        Это приложение демонстрирует практическую работу с современным фронтендом:
                        формы, состояние, роутинг, контекст и асинхронные запросы. В проекте
                        используется TypeScript, Tailwind CSS и архитектура компонентов.
                    </p>
                </section>

                <div className="grid gap-6 lg:grid-cols-3">
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">Что реализовано</h2>
                        <ul className="mt-4 space-y-3 text-slate-600">
                            <li>• Поиск и фильтрация постов</li>
                            <li>• Страницы с деталями поста</li>
                            <li>• Контекст авторизации</li>
                        </ul>
                    </article>
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">Технологии</h2>
                        <ul className="mt-4 space-y-3 text-slate-600">
                            <li>• React + TypeScript</li>
                            <li>• Vite + Tailwind CSS</li>
                            <li>• Axios, React Router</li>
                        </ul>
                    </article>
                    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">Цель</h2>
                        <p className="mt-4 text-slate-600 leading-7">
                            Сделать удобный учебный интерфейс с чистой логикой и понятной структурой.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;