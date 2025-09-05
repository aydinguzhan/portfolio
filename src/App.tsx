import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Connect from "./components/Connect";

const data = {
  intro: {
    title: "Merhaba",
    subTitle:
      "Ben Oğuzhan, Ankarada yaşayan Fullstack Javascript geliştiricisiyim.",
  },
  about: {
    title: "Hakkımda",
    description: `JavaScript ekosistemine tutkuyla bağlı, modern web
              teknolojilerinde uzmanlaşan bir yazılım geliştiricisiyim.
              React.js, TypeScript, Node.js, Electron.js ve Chrome Extension
              geliştirme konularında aktif olarak projeler yürütüyorum. Şu anda
              FONET Bilgi Teknolojileri A.Ş.'de Frontend Developer olarak
              çalışıyor, sağlık sektörüne yönelik mikroservis tabanlı web
              uygulamaları geliştiriyorum. Ekibimizle birlikte RESTful API
              entegrasyonları, performans optimizasyonları ve kullanıcı odaklı
              arayüz tasarımları üzerinde çalışıyoruz. Clean Code prensiplerine
              sadık, sürdürülebilir ve okunabilir kod geliştirmeyi öncelik
              haline getiriyorum. Hedefim; yazılımı sadece teknoloji olarak
              değil, günlük hayatı kolaylaştıran etkili bir çözüm aracı olarak
              kullanmak ve sürekli gelişen dijital dünyada yenilikçi projelerde
              yer almak.`,
  },
};

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden justify-between ">
      <Intro data={data.intro} />
      <About data={data.about} />
      <Connect />
    </div>
  );
}

export default App;
