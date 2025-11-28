import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Noticias from "./components/Noticias";
import VideoPlayer from "./components/VideoPlayer";
import SobreEmpresa from "./components/SobreEmpresa";
import MissaoVisaoValores from "./components/MissaoVisaoValores";
import Comunicados from "./components/Comunicados";
import Documentos from "./components/Documentos";
import BannerInstitucional from "./components/BannerInstitucional";
import Avisos from "./components/Avisos";


export default function Home() {
  return (
    
    <div className="layout">
      
      <Sidebar />

      <div className="content-area">
        <Topbar />

        <div className="feed-container">

          <BannerInstitucional />
          <SobreEmpresa />
          <MissaoVisaoValores />
          <Comunicados />
          <Avisos />

          <Noticias />
          <VideoPlayer />
          <Documentos />

        </div>
      </div>
    </div>
  );
}
