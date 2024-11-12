import Layout from "@/layout";
// import axios from "axios";
import { LINKS } from "./data";

const App: React.FC = () => {
  const goTo = (val: string) => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.openLink(
        LINKS.find((item) => item.name === val)?.url
      );
    }
  };
  return (
    <Layout>
      <div className="flex flex-col p-[16px] gap-[32px]">
        <div className="flex flex-col gap-[24px]">
          <div className="text-[14px] font-[700]">
          In the CryptoPerformance Business Card on Telegram you have all information about the ecosystem, the Projects, data and facts with timelines and press releases of the entire CP Group.
          </div>
          <div className="flex flex-col gap-[8px] py-[16px] px-[12px] rounded-[16px] bg-dark_color custom-box-shadow-2">
            <div className="text-[14px] font-[700]">              
							CPCoin (CPC)						
            </div>
            <div className="text-[12px] text-[#D3D4D7FF]">
            Introducing CPC, the digital currency of the future brought to you by the innovative CryptoPerformance Group. As part of its ecosystem run by a dedicated global community, this cryptocurrency offers seamless transactions, unparalleled security, and exceptional growth opportunities.
            </div>
          </div>
        </div>

        {LINKS.map((item) => (
          <div
            key={item.id}
            className="flex gap-[12px] flex-col py-[12px] px-[12px] rounded-[16px] bg-dark_color custom-box-shadow-2"
          >
            <div className="flex gap-[8px] items-center">
              <img src={item.img} alt="" className="w-[120px] rounded-[12px]" />
              <div className="flex flex-col ">
                <div className="text-[13px] font-[500]">{item.name}</div>
                <div className="text-[12px] text-[#D3D4D7FF]">{item.title}</div>
              </div>
            </div>
            <button
              className="text-center text-[12px] text-[#000] rounded-[8px] py-[2px] blue-btn"
              onClick={() => goTo(item.name)}
            >
              Visit
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default App;
