export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};
const quizQuestions: Question[] = [
  {
    questionText: "First digital currency?",
    image: "https://tinyurl.com/ynawj7fr",
    answers: [
      "Bitcoin",
      "BitDAO",
      "BitMoney",
      "BitConnect",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Lee's Lightning",
    image: "https://tinyurl.com/yc5xt5uy",
    answers: ["LitecoinUltra", "Litex", "LitecoinCash", "Litecoin"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Dogs need money?",
    image:
      "https://tinyurl.com/49eyp2pz",
    answers: ["Doge", "Shiba", "BabyDoge", "Dog.finance"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Forever Storage",
    image: "https://tinyurl.com/5et8b8da",
    answers: ["Filecoin", "Sia", "Arweave", "IPFS"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "L2's?",
    image: "https://tinyurl.com/ew826rvs",
    answers: ["Bundlr", "Akord", "Ardrive", "Akash"],
    correctAnswerIndex: 0,
  },
];

export default quizQuestions;
