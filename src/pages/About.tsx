import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">About ページ</h1>
      <p className="text-xl mb-8 text-center">このプロジェクトについての情報です。</p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-3">プロジェクト概要</h2>
        <p className="mb-4">このプロジェクトは以下の技術を使用して構築されています：</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>React - UIコンポーネントの構築</li>
          <li>TypeScript - 型安全なコード開発</li>
          <li>React Router - アプリケーションのルーティング</li>
          <li>Tailwind CSS - スタイリングとUIデザイン</li>
        </ul>
      </div>

      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300">
        ホームに戻る
      </Link>
    </div>
  );
};

export default About;