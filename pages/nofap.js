import React from "react";

const Nofap = () => {
    return (
        <div className="m-5 flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold underline mb-4">NOFAP!</h1>
                <p className="text-lg text-gray-600">Stay focused and avoid addiction!</p>
            </div>
            <ul className="list-disc space-y-2 mt-4">
                <li>Bhai, focus on yourself, this won&apos;t work!</li>
                <li>You&apos;ll face difficulties in the future.</li>
                <li>Try to divert your mind!</li>
            </ul>
            <div className="mt-8">
                <h1 className="text-2xl font-bold mb-4">Links to Divert your mind</h1>
                <ul className="list-disc space-y-2">
                    <li>
                        <a href="https://leetcode.com" className="text-blue-500 hover:text-blue-700">Leetcode.com</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=inpok4MKVLM" className="text-blue-500 hover:text-blue-700">Meditation</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/learning/?trk=nav_neptune_learning&" className="text-blue-500 hover:text-blue-700">Linkedin Learning</a>
                    </li>
                    <li className="text-gray-700">Look around yourself, clean your room</li>
                </ul>
            </div>
            <h1 className="text-xl font-bold text-red-600 mt-8 text-center">
                Please don&apos;t ruin your life like this! You&apos;ll face many problems in the future.
            </h1>
        </div>
    );
};

export default Nofap;
