type Link = {
  id: number;
  name: string;
  title: string;
  text: string;
  url: string;
  img: any;
};

import website from "@/assets/website.png";
import event from "@/assets/event.jpg";
import vision from "@/assets/vision.jpg";
import roadmap from "@/assets/roadmap.jpg";
import game from "@/assets/game.jpg";

export const LINKS: Link[] = [
  {
    id: 1,
    name: "Website",
    title: "Check out our amazing website, powered by CP ventures",
    text: "Open Website in Browser",
    url: "https://cpcoin.io",
    img: website,
  },
  {
    id: 2,
    name: "Press",
    title: " An incredible event is coming up soon, join the event now",
    text: "Open Event in Browser",
    url: "https://news.cryptoperformance.io",
    img: event,
  },
  {
    id: 3,
    name: "Whitepaper",
    title: "The vision of a company is crucial, check our vision here",
    text: "Open Vision in Browser",
    url: "https://cpcoin.io/wp-content/uploads/2023/05/CPCoin_WhitePaper_v.05.23.pdf",
    img: vision,
  },
  {
    id: 4,
    name: "Ecosystem",
    title: "What is the future of Polyverse? Find out here what’s cooking",
    text: "Open Roadmap in Browser",
    url: "https://ecosystem.cpcoin.io",
    img: roadmap,
  },
  {
    id: 5,
    name: "SmartWallet",
    title: "Want to see some game play? Please click here to visit",
    text: "Open Game streaming in Browser",
    url: "https://smartwallet.cpcoin.io/#/wallet/welcome",
    img: game,
  },
];
