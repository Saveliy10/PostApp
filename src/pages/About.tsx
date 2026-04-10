import React from "react";

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">

            <div className="max-w-xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center border border-gray-200">

                <h1 className="text-3xl font-bold text-red-950 mb-5">
                    About this application
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Это приложение создано в качестве обучающего проекта на ULBI TV.
                    Здесь реализованы базовые возможности React: работа с формами,
                    фильтрацией, контекстом и состоянием.
                </p>

                <div className="text-sm text-gray-500">
                    Made with ❤️ using React + TypeScript
                </div>
            </div>
        </div>
    );
};

export default About;