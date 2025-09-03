let data: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: "+79100000000",
    email: "my@email.ru",
    address: {
      city: "Москва",
    },
  },
};

// ==

let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 42,
  isOpened: false,
  contacts: {
    phone: "89500000000",
    email: "my@email.com",
    address: {
      city: "San Francisco",
    },
  },
};

//==

/* Запрос */
const request = {
  topicId: 5,
  status: "published", // "draft", "deleted"
};
/* Ответ */
const answer = [
  {
    question: "Как осуществляется доставка?",
    answer: "быстро!",
    tags: ["popular", "new"],
    likes: 3,
    status: "published",
  },
];

enum QuestionStatus {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

interface Question {
  topicId: number;
  status?: QuestionStatus;
}

interface Answer {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
}

async function getFaqs(req: Question): Promise<Answer[]> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
