import type { NextPage } from "next";
import { Upload } from "../components/Upload";
import { PageHead } from "../components/shared/PageHead";
import { Videos } from "./../components/Videos";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-700">
      <PageHead />

      <main className="flex-col h-screen justify-center items-center text-white ">
        <div className="text-center bg-blue-500 p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold">Form Checker</h1>
          <Upload />
        </div>
        <Videos />
      </main>
    </div>
  );
};

export default Home;
