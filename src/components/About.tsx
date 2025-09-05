import { Download } from "lucide-react";

type Props = {
  data: {
    title: string;
    description: string;
  };
};

export default function About({ data }: Props) {
  return (
    <div className="min-w-screen flex flex-col">
      <div className="flex justify-start p-10 mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <div className="min-h-50 flex">
          <span className="block w-2.5 bg-amber-400 rounded-xs"></span>
          <span className="ml-4 text-3xl flex flex-col">
            <span className="font-bold underline">{data?.title}</span>
            <span className="text-xl mt-1">{data?.description}</span>
          </span>
        </div>
      </div>

      <div className="px-6 mt-2 flex justify-center">
        <a
          href="/global/Oguzhan_Aydin_Cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="
            flex gap-2
            bg-amber-400
            text-white
            font-semibold
            py-2 px-8
            rounded-lg
            shadow-md
            hover:bg-amber-500
            transition
            duration-300
            ease-in-out
            transform
            hover:-translate-y-1
            hover:scale-105
          "
        >
          <span className="inline-block transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Download size={20} />
          </span>
          <span>Özgeçmişimi indir</span>
        </a>
      </div>
    </div>
  );
}
