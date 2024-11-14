type Link = {
  id: number;
  name: string;
  title: string;
  text: string;
  url: string;
  img: any;
};

import website from "@/assets/website.webp";
import press from "@/assets/press.webp";
import whitepaper from "@/assets/whitepaper.webp";
import ecosystem from "@/assets/ecosystem.webp";
import smartwallet from "@/assets/smartwallet.webp";

export const LINKS: Link[] = [
  {
    id: 1,
    name: "Website",
    title: "Check out the CryptoPerformance websit",
    text: "Open Website in Browser",
    url: "https://cpcoin.io",
    img: website,
  },
  {
    id: 2,
    name: "Press",
    title: "Read the latest articles and releases on our Press section",
    text: "Open Event in Browser",
    url: "https://news.cryptoperformance.io",
    img: press,
  },
  {
    id: 3,
    name: "Whitepaper",
    title: "Want more in-depth information? Here you will find our Whitepaper",
    text: "Open Vision in Browser",
    url: "https://cpcoin.io/wp-content/uploads/2023/05/CPCoin_WhitePaper_v.05.23.pdf",
    img: whitepaper,
  },
  {
    id: 4,
    name: "Ecosystem",
    title: "Here you will find a complete overview on our Ecosystem",
    text: "Open Roadmap in Browser",
    url: "https://ecosystem.cpcoin.io",
    img: ecosystem,
  },
  {
    id: 5,
    name: "SmartWallet",
    title: "Set up your Smart Wallet now",
    text: "Open Game streaming in Browser",
    url: "https://smartwallet.cpcoin.io/#/wallet/welcome",
    img: smartwallet,
  },
];
