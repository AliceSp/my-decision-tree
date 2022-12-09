export const decisionSteps = [
  {
    question: "Question n°1 ?",
    answers: [
      {
        label: "Réponse 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        next: 2,
        solutions: [],
        last: false,
      },
      {
        label: "Réponse 2",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        next: 1,
        solutions: [],
        last: false,
      },
    ],
  },
  {
    question: "Question n°2 ?",
    answers: [
      {
        label: "Réponse 3",
        text: "",
        solutions: ["solution1"],
        last: true,
      },
      {
        label: "Réponse 4",
        text: "",
        next: 2,
        solutions: [],
        last: false,
      },
      {
        label: "Réponse 5",
        text: "",
        next: 2,
        solutions: [],
        last: false,
      },
    ],
  },
  {
    question: "Question n°3 ?",
    answers: [
      {
        label: "Réponse 6",
        text: "Lorem ipsum dolor sit amet. ",
        next: 3,
        solutions: [],
        last: false,
      },
      {
        label: "Réponse 7",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris. ",
        next: 4,
        solutions: [],
        last: false,
      },
      {
        label: "Réponse 8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor urna. ",
        solutions: ["solution1", "solution2", "solution3"],
        last: true,
      },
    ],
  },
];
