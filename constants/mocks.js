const categories = [
  {
    id: "plants",
    name: "Plants",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/images/4.jpeg")
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/images/4.jpeg")
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/images/4.jpeg")
  },
  {
    id: "sprayers",
    name: "Sprayers",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/images/4.jpeg")
  },
  {
    id: "pots",
    name: "Pots",
    tags: ["products", "inspirations"],
    count: 47,
    image: require("../assets/images/4.jpeg")
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/images/4.jpeg")
  }
];
const products = [
  {
    id: 1,
    name: "c'est moi la blg ",
    description: "une photo de moi en me voyant prendre une photo ",
    tags: ["Interior", "27m", "Ideas"],
    gallery: [
      require("../assets/images/3.jpeg"),
      require("../assets/images/3.jpeg"),
      require("../assets/images/3.jpeg"),
      // showing only 3 images , show +3 for the rest
      require("../assets/images/3.jpeg"),
      require("../assets/images/3.jpeg"),
      require("../assets/images/3.jpeg"),
      require("../assets/images/3.jpeg"),
      require("../assets/images/3.jpeg")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg"),
  require("../assets/images/2.jpeg")
];

const profile = {
  username: "react-ui-kit",
  location: " Europe",
  email: "chahi.yousraa@gmail.com",
  avatar: require("../assets/images/avatar.jpg"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
