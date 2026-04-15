const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-8">
                <section className="rounded-[32px] border border-slate-700 bg-slate-900/80 p-8 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase text-purple-400 tracking-[0.24em]">
                                About this app
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold text-white">
                                React + TypeScript project
                            </h1>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 border border-purple-500/20">
                            Learning project
                        </div>
                    </div>

                    <p className="mt-6 text-slate-300 leading-8">
                        This application demonstrates practical work with modern frontend development:
                        forms, state management, routing, context, and asynchronous requests. The project
                        uses TypeScript, Tailwind CSS, and a component-based architecture.
                    </p>
                </section>

                <div className="grid gap-6 lg:grid-cols-3">
                    <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-md hover:shadow-purple-500/10 transition">
                        <h2 className="text-xl font-semibold text-white">What is implemented</h2>
                        <ul className="mt-4 space-y-3 text-slate-400">
                            <li>• Search and filtering of posts</li>
                            <li>• Pages with post details</li>
                            <li>• Authorization context</li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-md hover:shadow-purple-500/10 transition">
                        <h2 className="text-xl font-semibold text-white">Technologies</h2>
                        <ul className="mt-4 space-y-3 text-slate-400">
                            <li>• React + TypeScript</li>
                            <li>• Vite + Tailwind CSS</li>
                            <li>• Axios, React Router</li>
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-md hover:shadow-purple-500/10 transition">
                        <h2 className="text-xl font-semibold text-white">Goal</h2>
                        <p className="mt-4 text-slate-400 leading-7">
                            To create a user-friendly interface with clean logic and an understandable structure.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;