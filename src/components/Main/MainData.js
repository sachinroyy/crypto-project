import Main1 from "../../assets/main1.png";
import Main2 from "../../assets/main2.png";
import Main3 from "../../assets/main3.png";
import Main4 from "../../assets/main4.png";
import Main5 from "../../assets/main5.png";
import Main6 from "../../assets/main6.png";
import Main7 from "../../assets/main7.png";
import Main8 from "../../assets/main8.png";
import Main9 from "../../assets/main9.png";
import Main10 from "../../assets/main10.png";

import Vid from '../../assets/Video.mp4'
import Vid2 from '../../assets/Video2.mp4'
import Vid3 from '../../assets/Video3.mp4'
import Vid4 from '../../assets/Video44.mp4'

const data = [
  {
    id: 1,
    img: Main1,
    name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
    by: "Alice",
    time: "4 min ago",
  },
  {
    id: 2,
    img: Main2,
    name: "‘Patron NFTs’ could be answer to ‘broken’ crypto fundraising model",
    by: "Bob",
    time: "3 min ago",
  },
  {
    id: 3,
    img: Main3,
    name: "Crypto wallet Exodus donates $1.3M to help ‘mobilize’ US crypto voters",
    by: "Charlie",
    time: "4 min ago",
  },
  {
    id: 4,
    img: Main4,
    name: "MoneyGram admits ‘cybersecurity issue’ behind several-day outage",
    by: "David",
    time: "3 min ago",
  },
  {
    id: 5,
    img: Main5,
    name: "BlackRock's head of crypto doesn’t see Bitcoin as a ‘risk on’ asset",
    by: "Eve",
    time: "4 min ago",
  },
  {
    id: 6,
    img: Main6,
    name: "MoneyGram admits ‘cybersecurity issue’ behind several-day outage",
    by: "Frank",
    time: "3 min ago",
  },
  {
    id: 7,
    img: Main7,
    name: "Crypto wallet Exodus donates $1.3M to help ‘mobilize’ US crypto voters",
    by: "Grace",
    time: "4 min ago",
  },
  {
    id: 8,
    img: Main8,
    name: "MoneyGram admits ‘cybersecurity issue’ behind several-day outage",
    by: "Heidi",
    time: "3 min ago",
  },
  {
    id: 9,
    img: Main9,
    name: "BlackRock's head of crypto doesn’t see Bitcoin as a ‘risk on’ asset",
    by: "Ivy",
    time: "4 min ago",
  },
  {
    id: 10,
    img: Main10,
    name: "Crypto wallet Exodus donates $1.3M to help ‘mobilize’ US crypto voters",
    by: "Jack",
    time: "3 min ago",
  },
];

// Generate duplicates for test purposes
for (let i = 11; i <= 80; i++) {
  const duplicate = { ...data[i % 10], id: i };
  data.push(duplicate);
}



const newData = [
    {
      id: 1,
      img: Vid,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 2,
      img: Vid2,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 3,
      img: Vid3,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 4,
      img: Vid4,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 5,
      img: Vid2,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 6,
      img: Vid,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 7,
      img: Vid4,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 8,
      img: Vid2,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 9,
      img: Vid,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 10,
      img: Vid3,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 11,
      img: Vid4,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
    {
      id: 12,
      img: Vid2,
      name: "Stand With Crypto drops ‘supports crypto’ tag from Harris after backlash",
      by: "Alice",
      time: "4 min ago",
    },
]

export {data , newData};
