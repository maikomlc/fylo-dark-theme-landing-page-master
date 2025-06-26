const foodData = {
  RiceDishes: {
    ClassicRice: {
      name: "Classic Rice",
      emoji: "🍚",
      origin: "Global",
      ingredients: "Boiled rice with salt and water.",
      video: "https://www.youtube.com/embed/1v2CKmAGDj8", // video générique de riz
      wiki: "https://fr.wikipedia.org/wiki/Riz",
      img: "203951-Sarahs-rice-pilaf-Beauty-3x4_38497-f2f18ff1bcc04abcac58ccbd8c6a17c9.jpg",
    },
    Paella: {
      name: "Paella",
      emoji: "🥘",
      origin: "Spain",
      ingredients: "Rice with saffron, seafood, and vegetables.",
      video: "https://www.youtube.com/embed/J3jGelg6ptM",
      wiki: "https://fr.wikipedia.org/wiki/Paella",
      img: "Seafood-Paella-Valenciana-Featured.jpg",
    },
    Biryani: {
      name: "Biryani",
      emoji: "🍛",
      origin: "Indian Subcontinent",
      ingredients: "Spiced rice with meat or vegetables.",
      video: "https://www.youtube.com/embed/OBkg4__ySTR",
      wiki: "https://fr.wikipedia.org/wiki/Biryani",
      img: "biryani-rice-indian-meal-chicken_953932-9614.avif",
    },
    JollofRice: {
      name: "Jollof Rice",
      emoji: "🍚",
      origin: "West Africa",
      ingredients: "Rice cooked in tomato sauce with spices.",
      video: "https://www.youtube.com/embed/BJpQZtyASA8",
      wiki: "https://fr.wikipedia.org/wiki/Jollof_rice",
      img: "AiEgolJU4zflIQ03P49S9Czgbtjp0DptdYOa2nM5.jpg",
    },
    SushiRice: {
      name: "Sushi Rice",
      emoji: "🍚",
      origin: "Japan",
      ingredients: "Short-grain rice seasoned with vinegar.",
      video: "https://www.youtube.com/embed/X2VQcyI4AYE",
      wiki: "https://fr.wikipedia.org/wiki/Sushi",
      img: "99211-perfect-sushi-rice-DDMFS-4x3-3734ec6bd773431eac9953573a20bda1.jpg",
    },
    FriedRice: {
      name: "Fried Rice",
      emoji: "🥡",
      origin: "China",
      ingredients: "Rice stir-fried with eggs, vegetables, and meat.",
      video: "https://www.youtube.com/embed/Pv-65WwMNAE",
      wiki: "https://fr.wikipedia.org/wiki/Riz_frité",
      img: "Beef-Fried-Rice-blog-2.jpg",
    },
    Risotto: {
      name: "Risotto",
      emoji: "🍲",
      origin: "Italy",
      ingredients: "Creamy rice cooked with broth and cheese.",
      video: "https://www.youtube.com/embed/7VjrVQp-zNs",
      wiki: "https://fr.wikipedia.org/wiki/Risotto",
      img: "risotto.jpg",
    },
  },

  Salads: {
    CaesarSalad: {
      name: "Caesar Salad",
      emoji: "🥗",
      origin: "Mexico/USA",
      ingredients: "Romaine lettuce, croutons, parmesan, Caesar dressing.",
      video: "https://www.youtube.com/embed/QFp9wSqxN5w",
      wiki: "https://en.wikipedia.org/wiki/Caesar_salad",
      img: "220905_DD_Chx-Caesar-Salad_051.jpg",
    },
    GreekSalad: {
      name: "Greek Salad",
      emoji: "🥗",
      origin: "Greece",
      ingredients: "Tomatoes, cucumber, olives, feta cheese, onion.",
      video: "https://www.youtube.com/embed/1xQXH-gdT6s",
      wiki: "https://en.wikipedia.org/wiki/Greek_salad",
      img: "Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg",
    },
    CobbSalad: {
      name: "Cobb Salad",
      emoji: "🥗",
      origin: "USA",
      ingredients: "Lettuce, bacon, chicken, hard-boiled eggs, avocado.",
      video: "https://www.youtube.com/embed/2lCx6yNtxLc",
      wiki: "https://en.wikipedia.org/wiki/Cobb_salad",
      img: "4HSB4C2MXJ5OCCP4HGYPGP47EU.jpg",
    },
    CapreseSalad: {
      name: "Caprese Salad",
      emoji: "🥗",
      origin: "Italy",
      ingredients: "Tomato, mozzarella, basil, olive oil.",
      video: "https://www.youtube.com/embed/ZxqXLLRhf_U",
      wiki: "https://en.wikipedia.org/wiki/Insalata_caprese",
      img: "AR-228126-caprese-salad-with-balsamic-reduction-ddmfs-2644-4x3-f32ac2b2fb9d4234884a752490fb015b.jpg",
    },
    WaldorfSalad: {
      name: "Waldorf Salad",
      emoji: "🥗",
      origin: "USA",
      ingredients: "Apple, celery, walnuts, mayonnaise.",
      video: "https://www.youtube.com/embed/vHQq7kqTOxw",
      wiki: "https://en.wikipedia.org/wiki/Waldorf_salad",
      img: "waldorf-salad-11.jpg",
    },
    NicoiseSalad: {
      name: "Nicoise Salad",
      emoji: "🥗",
      origin: "France",
      ingredients: "Tuna, olives, green beans, eggs, potatoes.",
      video: "https://www.youtube.com/embed/92DDz9q4P_0",
      wiki: "https://en.wikipedia.org/wiki/Salade_nicoise",
      img: "Salade-Nicoise-FT-RECIPE0823-c7e3617cc7d4455f90a26fffa7ac128b.jpg",
    },
    FruitSalad: {
      name: "Fruit Salad",
      emoji: "🍓",
      origin: "Global",
      ingredients: "Mixed fresh fruits with dressing or yogurt.",
      video: "https://www.youtube.com/embed/L1V2D6Ol0kQ",
      wiki: "https://en.wikipedia.org/wiki/Fruit_salad",
      img: "k_Photo_Recipes_2024-06-fruit-salad_fruit-salad-0410-cropped.jpg",
    },
  },

  Fries: {
    ClassicFries: {
      name: "Classic Fries",
      emoji: "🍟",
      origin: "Belgium/France",
      ingredients: "Deep fried potato sticks with salt.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/French_fries",
      img: "crispy-classic-french-friesjpg.jpg",
    },
    CurlyFries: {
      name: "Curly Fries",
      emoji: "🍟",
      origin: "USA",
      ingredients: "Spiral-cut fried potatoes, seasoned.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/Curly_fry",
      img: "istockphoto-483530333-612x612.jpg",
    },
    WaffleFries: {
      name: "Waffle Fries",
      emoji: "🍟",
      origin: "USA",
      ingredients: "Potatoes cut into waffle shape and fried.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/Waffle_fries",
      img: "wafflefries.webp",
    },
    SweetPotatoFries: {
      name: "Sweet Potato Fries",
      emoji: "🍠",
      origin: "USA",
      ingredients: "Fried sweet potato sticks.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/Sweet_potato_fry",
      img: "crispy-sweet-potato-fries-4.webp",
    },
    SteakFries: {
      name: "Steak Fries",
      emoji: "🍟",
      origin: "USA",
      ingredients: "Thick-cut potato fries, fried or baked.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/Steak_fries",
      img: "Air-fryer-frozen-steak-fries-L1-Paint-the-Kitchen-Red-scaled.webp",
    },
    ChiliCheeseFries: {
      name: "Chili Cheese Fries",
      emoji: "🧀",
      origin: "USA",
      ingredients: "Fries topped with chili and melted cheese.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/Chili_cheese_fries",
      img: "chili-cheese-fries-4.webp",
    },
    GarlicFries: {
      name: "Garlic Fries",
      emoji: "🧄",
      origin: "USA",
      ingredients: "Fries tossed with garlic and parsley.",
      video: "https://www.youtube.com/embed/3XyQvHdTzZg",
      wiki: "https://en.wikipedia.org/wiki/Garlic_fry",
      img: "Featured-Garlic-Butter-Parmesan-Fries-1.jpg",
    },
  },

  Steaks: {
    Ribeye: {
      name: "Ribeye Steak",
      emoji: "🥩",
      origin: "USA",
      ingredients: "Grilled ribeye steak with seasoning.",
      video: "https://www.youtube.com/embed/MXQjyqO59fA",
      wiki: "https://en.wikipedia.org/wiki/Rib_eye_steak",
      img: "Grilled-Ribeye-7.jpg",
    },
    FiletMignon: {
      name: "Filet Mignon",
      emoji: "🥩",
      origin: "France/USA",
      ingredientsecipe: "Tender filet steak grilled or pan-seared.",
      video: "https://www.youtube.com/embed/Ijz8k6NQJbQ",
      wiki: "https://en.wikipedia.org/wiki/Filet_mignon",
      img: "Filet-Mignon-main.webp",
    },
    "T-Bone": {
      name: "T-Bone Steak",
      emoji: "🥩",
      origin: "USA",
      ingredients: "T-bone steak grilled with herbs.",
      video: "https://www.youtube.com/embed/felIRCNMmdc",
      wiki: "https://en.wikipedia.org/wiki/T-bone_steak",
      img: "Grilled_Tbone_V2.jpg",
    },
    Porterhouse: {
      name: "Porterhouse Steak",
      emoji: "🥩",
      origin: "USA",
      ingredients: "Large T-bone steak with tenderloin.",
      video: "https://www.youtube.com/embed/O_hMG66TzHs",
      wiki: "https://en.wikipedia.org/wiki/Porterhouse_steak",
      img: "Reverse-seared-porterhouse-poblano-crema.jpg",
    },
    Sirloin: {
      name: "Sirloin Steak",
      emoji: "🥩",
      origin: "USA",
      ingredients: "Grilled sirloin steak with peppercorn sauce.",
      video: "https://www.youtube.com/embed/Q9RxRxgTP0k",
      wiki: "https://en.wikipedia.org/wiki/Sirloin_steak",
      img: "AR-14554-sirloin-steak-with-garlic-butter-hero-4x3-d12fa79836754fcf850388e4677bbf55.jpg",
    },
    FlankSteak: {
      name: "Flank Steak",
      emoji: "🥩",
      origin: "USA",
      ingredients: "Marinated flank steak grilled to perfection.",
      video: "https://www.youtube.com/embed/kku7KU_W6bw",
      wiki: "https://en.wikipedia.org/wiki/Flank_steak",
      img: "Flank__Steak_Gremolata_Web_v4_copy.webp",
    },
    HangerSteak: {
      name: "Hanger Steak",
      emoji: "🍖",
      origin: "France/USA",
      ingredients: "Rich flavor hanger steak grilled or pan-fried.",
      video: "https://www.youtube.com/embed/FbQ1B9EGDZg",
      wiki: "https://en.wikipedia.org/wiki/Hanger_steak",
      img: "wholesomeyum-Hanger-Steak-29.jpg ",
    },
  },

  Sandwiches: {
    BLT: {
      name: "BLT",
      emoji: "🥪",
      origin: "USA",
      ingredients: "Bacon, lettuce, tomato sandwich.",
      video: "https://www.youtube.com/embed/DEFG-0WjJh8",
      wiki: "https://en.wikipedia.org/wiki/BLT_sandwich",
      img: "the-sl-blt-01-4X3-b322a15a36fc436abf2796092283a40c.jpg",
    },
    ClubSandwich: {
      name: "Club Sandwich",
      emoji: "🥪",
      origin: "USA",
      ingredients: "Turkey, bacon, lettuce, tomato sandwich.",
      video: "https://www.youtube.com/embed/pknNnhkVphA",
      wiki: "https://en.wikipedia.org/wiki/Club_sandwich",
      img: "club-sandwich-index-67c06a0f16e38.avif",
    },
    GrilledCheese: {
      name: "Grilled Cheese",
      emoji: "🧀",
      origin: "USA",
      ingredients: "Melted cheese grilled between bread slices.",
      video: "https://www.youtube.com/embed/Lf6DWLOXNfg",
      wiki: "https://en.wikipedia.org/wiki/Grilled_cheese_sandwich",
      img: "grilled-cheese.jpg",
    },
    Reuben: {
      name: "Reuben Sandwich",
      emoji: "🥪",
      origin: "USA",
      ingredients: "Corned beef, sauerkraut, Swiss cheese sandwich.",
      video: "https://www.youtube.com/embed/49RZpCl9Rmk",
      wiki: "https://en.wikipedia.org/wiki/Reuben_sandwich",
      img: "reuben-1.jpg",
    },
    MeatballSub: {
      name: "Meatball Sub",
      emoji: "🥖",
      origin: "Italy/USA",
      ingredients: "Meatballs in tomato sauce on a sub roll.",
      video: "https://www.youtube.com/embed/8zwHEmhy8vY",
      wiki: "https://en.wikipedia.org/wiki/Meatball_sub",
      img: "as-meatball-subs-videoSixteenByNineJumbo1600-v2.jpg",
    },
    ChickenShawarma: {
      name: "Chicken Shawarma",
      emoji: "🌯",
      origin: "Middle East",
      ingredients:
        "Marinated chicken roasted and wrapped with vegetables and garlic sauce.",
      video: "https://www.youtube.com/embed/FgZtJWZQm2M", // chicken shawarma recipe
      wiki: "https://en.wikipedia.org/wiki/Shawarma",
      img: "chicken-shawarma-6.jpg",
    },
    VeggieSandwich: {
      name: "Veggie Sandwich",
      emoji: "🥗",
      origin: "Global",
      ingredients: "Mixed grilled vegetables in sandwich bread.",
      video: "https://www.youtube.com/embed/GRgXz7TPPyY",
      wiki: "https://en.wikipedia.org/wiki/Sandwich",
      img: "TMD-Vegetable-Sandwich-Leads-02-Horizontal.jpg",
    },
  },

  Pizza: {
    Margherita: {
      name: "Margherita Pizza",
      emoji: "🍕",
      origin: "Italy",
      ingredients: "Tomato sauce, mozzarella, basil.",
      video: "https://www.youtube.com/embed/3AAdKl1UYZs",
      wiki: "https://en.wikipedia.org/wiki/Pizza_Margherita",
      img: "Margherita-Pizza.webp",
    },
    Pepperoni: {
      name: "Pepperoni Pizza",
      emoji: "🍕",
      origin: "USA",
      ingredients: "Tomato sauce, mozzarella, pepperoni.",
      video: "https://www.youtube.com/embed/Uh__ErpvnEo",
      wiki: "https://en.wikipedia.org/wiki/Pepperoni",
      img: "IMG-5299.jpg",
    },
    Hawaiian: {
      name: "Hawaiian Pizza",
      emoji: "🍍",
      origin: "Canada",
      ingredients: "Tomato sauce, mozzarella, ham, pineapple.",
      video: "https://www.youtube.com/embed/gkXqciYQdMo",
      wiki: "https://en.wikipedia.org/wiki/Hawaiian_pizza",
      img: "hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg",
    },
    BBQChicken: {
      name: "BBQ Chicken Pizza",
      emoji: "🍗",
      origin: "USA",
      ingredients: "BBQ sauce, mozzarella, grilled chicken.",
      video: "https://www.youtube.com/embed/O5UrFMyAq5s",
      wiki: "https://en.wikipedia.org/wiki/Barbecue_chicken_pizza",
      img: "AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d (1).jpg",
    },
    FourCheese: {
      name: "Four Cheese Pizza",
      emoji: "🧀",
      origin: "Italy",
      ingredients: "Mozzarella, gorgonzola, parmesan, ricotta.",
      video: "https://www.youtube.com/embed/tkA6xpt_lMk",
      wiki: "https://en.wikipedia.org/wiki/Four_cheese_pizza",
      img: "Cheese-pizza-1.webp",
    },
    Veggie: {
      name: "Veggie Pizza",
      emoji: "🥦",
      origin: "USA",
      ingredients: "Tomato sauce, mozzarella, bell peppers, olives.",
      video: "https://www.youtube.com/embed/5lfM2OVSlps",
      wiki: "https://en.wikipedia.org/wiki/Vegetarian_pizza",
      img: "california-veggie-pizza-feature.jpg",
    },
    MeatLovers: {
      name: "Meat Lovers Pizza",
      emoji: "🍖",
      origin: "USA",
      ingredients: "Tomato sauce, mozzarella, pepperoni, sausage, bacon.",
      video: "https://www.youtube.com/embed/q3PP6k_wZOY",
      wiki: "https://en.wikipedia.org/wiki/Meat_lovers_pizza",
      img: "meat-lovers-pizza-recipe-3.jpg",
    },
  },

  Burgers: {
    ClassicBurger: {
      name: "Classic Burger",
      emoji: "🍔",
      origin: "USA",
      ingredients: "Beef patty, lettuce, tomato, cheese, bun.",
      video: "https://www.youtube.com/embed/Ez6ZmC2ROsc",
      wiki: "https://en.wikipedia.org/wiki/Hamburger",
      img: "Signature_Savory_Classic_Burger.webp",
    },
    Cheeseburger: {
      name: "Cheeseburger",
      emoji: "🍔",
      origin: "USA",
      ingredients: "Beef patty, cheese, lettuce, tomato, bun.",
      video: "https://www.youtube.com/embed/mIxTm9hFijA",
      wiki: "https://en.wikipedia.org/wiki/Cheeseburger",
      img: "Stack-of-cheeseburgers.webp",
    },
    BaconBurger: {
      name: "Bacon Burger",
      emoji: "🥓",
      origin: "USA",
      ingredients: "Beef patty, bacon, cheese, lettuce, tomato, bun.",
      video: "https://www.youtube.com/embed/TJhhT7H0HfY",
      wiki: "https://en.wikipedia.org/wiki/Bacon_cheeseburger",
      img: "BBQ-Bacon-Smash-Burgers-12-500x500.jpg",
    },
    VeggieBurger: {
      name: "Veggie Burger",
      emoji: "🌱",
      origin: "Global",
      ingredients: "Vegetable patty with lettuce, tomato, bun.",
      video: "https://www.youtube.com/embed/XSeJfgLnWmQ",
      wiki: "https://en.wikipedia.org/wiki/Veggie_burger",
      img: "SpicedLentilBurgers_Styled1-1.webp",
    },
    MushroomSwiss: {
      name: "Mushroom Swiss Burger",
      emoji: "🍄",
      origin: "USA",
      ingredients: "Beef patty with mushrooms and Swiss cheese.",
      video: "https://www.youtube.com/embed/7plfVzi6raY",
      wiki: "https://en.wikipedia.org/wiki/Mushroom_Swiss_burger",
      img: "Mushroom-Swiss-Burger-Featured-500x375.jpg",
    },
    BBQBurger: {
      name: "BBQ Burger",
      emoji: "🔥",
      origin: "USA",
      ingredients: "Beef patty with BBQ sauce, cheese, onions.",
      video: "https://www.youtube.com/embed/Fb3tcluDrx8",
      wiki: "https://en.wikipedia.org/wiki/Barbecue_burger",
      img: "exps28800_UG143377D12_18_1b_RMS.jpg",
    },
    ChickenBurger: {
      name: "Chicken Burger",
      emoji: "🍗",
      origin: "USA",
      ingredients: "Grilled chicken breast with lettuce, tomato, bun.",
      video: "https://www.youtube.com/embed/EexA2E5VQqk",
      wiki: "https://en.wikipedia.org/wiki/Chicken_sandwich",
      img: "Crispy-fried-chicken-burgers_5.webp",
    },
  },

  Sushi: {
    Nigiri: {
      name: "Nigiri",
      emoji: "🍣",
      origin: "Japan",
      ingredients: "Rice topped with raw fish slices.",
      video: "https://www.youtube.com/embed/JF72nEcRT0c",
      wiki: "https://en.wikipedia.org/wiki/Nigiri",
      img: "00f76cac-64f6-4573-be4f-e604a7d99143.avif",
    },
    MakiRoll: {
      name: "Maki Roll",
      emoji: "🍣",
      origin: "Japan",
      ingredients: "Rice and fillings rolled in seaweed.",
      video: "https://www.youtube.com/embed/K2c7_yZQYqk",
      wiki: "https://en.wikipedia.org/wiki/Maki_(sushi)",
      img: "1.-what-is-maki-sushi-guide-thin-rolls-hand-roll-shrimp-tempura-tuna-salmon-rice.jpeg",
    },
    Sashimi: {
      name: "Sashimi",
      emoji: "🐟",
      origin: "Japan",
      ingredients: "Thinly sliced raw fish without rice.",
      video: "https://www.youtube.com/embed/Y9DNtXvL9lI",
      wiki: "https://en.wikipedia.org/wiki/Sashimi",
      img: "1679606818730.webp",
    },
    Temaki: {
      name: "Temaki",
      emoji: "🍙",
      origin: "Japan",
      ingredients: "Hand-rolled cone-shaped sushi.",
      video: "https://www.youtube.com/embed/Q-9oG5MC2mI",
      wiki: "https://en.wikipedia.org/wiki/Temaki",
      img: "Fused-by-Fiona-Uyema-temaki-sushi-hand-roll-500x500.webp",
    },
    Uramaki: {
      name: "Uramaki",
      emoji: "🍥",
      origin: "Japan",
      ingredients: "Inside-out sushi roll with rice outside.",
      video: "https://www.youtube.com/embed/Rr3eTWZLmb4",
      wiki: "https://en.wikipedia.org/wiki/Uramaki",
      img: "csm_943-recipe-page-fish-finger-roll_desktop_2d992ae4cc.jpg",
    },
    DragonRoll: {
      name: "Dragon Roll",
      emoji: "🐉",
      origin: "USA/Japan",
      ingredients: "Roll topped with eel and avocado.",
      video: "https://www.youtube.com/embed/cpYo2dIHy2I",
      wiki: "https://en.wikipedia.org/wiki/Dragon_roll",
      img: "Dragon-Roll-0286-I.jpg",
    },
    RainbowRoll: {
      name: "Rainbow Roll",
      emoji: "🌈",
      origin: "USA/Japan",
      ingredients: "Roll with assorted fish and avocado.",
      video: "https://www.youtube.com/embed/6Ocn7q2-XOk",
      wiki: "https://en.wikipedia.org/wiki/Rainbow_roll",
      img: "rainbow-sushi-roll.jpg",
    },
  },

  HotDogs: {
    ClassicHotDog: {
      name: "Classic Hot Dog",
      emoji: "🌭",
      origin: "Germany/USA",
      ingredients: "Grilled sausage in a bun with condiments.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Hot_dog",
      img: "classic-hotdog-beef-hot.jpg",
    },
    ChiliDog: {
      name: "Chili Dog",
      emoji: "🌭",
      origin: "USA",
      ingredients: "Hot dog topped with chili and cheese.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Chili_dog",
      img: "chili-dog-recipe-2-68237b9b3e6e9.avif",
    },
    CornDog: {
      name: "Corn Dog",
      emoji: "🍢",
      origin: "USA",
      ingredients: "Hot dog coated in cornmeal batter and fried.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Corn_dog",
      img: "csm_rezept-corndogs-fol-epi-3_ae5a7c63be.jpg",
    },
    ChicagoDog: {
      name: "Chicago Dog",
      emoji: "🌭",
      origin: "USA",
      ingredients: "Hot dog with mustard, onion, relish, pickle.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Chicago-style_hot_dog",
      img: "Simply-Recipes-Chicago-Dogs-LEAD-14-41fad39d9c5a4964a94bd440e1ad5b4a.jpg",
    },
    NewYorkDog: {
      name: "New York Dog",
      emoji: "🌭",
      origin: "USA",
      ingredients: "Hot dog with sauerkraut and spicy brown mustard.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/New_York-style_hot_dog",
      img: "new-york-hot-dogs-recipe-333560-hero-01-6be391df91774698aa490a45cd4f29c1.jpg",
    },
    PretzelDog: {
      name: "Pretzel Dog",
      emoji: "🥨",
      origin: "Germany/USA",
      ingredients: "Hot dog wrapped in pretzel dough and baked.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Pretzel_dog",
      img: "IMG_3895-pretzel-dogs.jpg",
    },
    VeggieDog: {
      name: "Veggie Dog",
      emoji: "🥬",
      origin: "Global",
      ingredients: "Vegetarian sausage in a bun with toppings.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Vegetarian_sausage",
      img: "vegan-hot-dogs.jpg",
    },
  },

  Tacos: {
    CarneAsada: {
      name: "Carne Asada Taco",
      emoji: "🌮",
      origin: "Mexico",
      ingredients: "Grilled beef taco with onions and cilantro.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Carne_asada",
      img: "CarneAsadaTacos_400x400.webp",
    },
    FishTaco: {
      name: "Fish Taco",
      emoji: "🐟",
      origin: "Mexico/USA",
      ingredients: "Battered fish with cabbage and sauce in a taco.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Fish_taco",
      img: "142614-grilled-fish-tacos-with-chipotle-lime-dressing-beauty-4x3-3264-caff3f3f97054729b1861ecbf767fac6.jpg",
    },
    AlPastor: {
      name: "Al Pastor Taco",
      emoji: "🍍",
      origin: "Mexico",
      ingredients: "Marinated pork taco with pineapple.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Al_pastor",
      img: "tacos-al-pastor-1200.jpg",
    },
    Barbacoa: {
      name: "Barbacoa Taco",
      emoji: "🥩",
      origin: "Mexico",
      ingredients: "Slow-cooked beef taco.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Barbacoa",
      img: "Beef-Barbacoa-Tacos.jpg",
    },
    VeggieTaco: {
      name: "Veggie Taco",
      emoji: "🥦",
      origin: "Global",
      ingredients: "Grilled vegetables taco with salsa.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Taco",
      img: "veggie-tacos-sq-2.jpg",
    },
    ShrimpTaco: {
      name: "Shrimp Taco",
      emoji: "🦐",
      origin: "Mexico/USA",
      ingredients: "Spicy shrimp taco with cabbage slaw.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Shrimp_taco",
      img: "Spicy-Shrimp-Tacos-Mango-Salsa-12.jpg",
    },
    BreakfastTaco: {
      name: "Breakfast Taco",
      emoji: "🍳",
      origin: "USA (Texas)",
      ingredients: "Taco with eggs, cheese, and sausage.",
      video: "https://www.youtube.com/embed/LP5T9Y1rW4w",
      wiki: "https://en.wikipedia.org/wiki/Breakfast_taco",
      img: "breakfast-tacos-index-665df53c2af28.avif",
    },
  },

  Pasta: {
    SpaghettiBolognese: {
      name: "Spaghetti Bolognese",
      emoji: "🍝",
      origin: "Italy",
      ingredients: "Spaghetti with meat sauce.",
      video: "https://www.youtube.com/embed/kMfI8fO7k_A",
      wiki: "https://en.wikipedia.org/wiki/Spaghetti_Bolognese",
      img: "images.jpg",
    },
    FettuccineAlfredo: {
      name: "Fettuccine Alfredo",
      emoji: "🍝",
      origin: "Italy/USA",
      ingredients: "Fettuccine with creamy Alfredo sauce.",
      video: "https://www.youtube.com/embed/YX_1QlKcXoE",
      wiki: "https://en.wikipedia.org/wiki/Fettuccine_Alfredo",
      img: "Chicken-fettuccine-Alfredo-I-Heart-Naptime.jpg",
    },
    PenneArrabiata: {
      name: "Penne Arrabiata",
      emoji: "🍝",
      origin: "Italy",
      ingredients: "Penne pasta with spicy tomato sauce.",
      video: "https://www.youtube.com/embed/1Fm9O3pV1G8",
      wiki: "https://en.wikipedia.org/wiki/Arrabbiata_sauce",
      img: "Penne-with-arrabbiata-sauce-4.jpg",
    },
    Lasagna: {
      name: "Lasagna",
      emoji: "🧀",
      origin: "Italy",
      ingredients: "Layered pasta with meat, cheese, and sauce.",
      video: "https://www.youtube.com/embed/1rXbfERdYko",
      wiki: "https://en.wikipedia.org/wiki/Lasagna",
      img: "Homemade-lasagna-1200x675.png",
    },
    MacAndCheese: {
      name: "Mac and Cheese",
      emoji: "🧀",
      origin: "USA",
      ingredients: "Macaroni pasta baked with cheese sauce.",
      video: "https://www.youtube.com/embed/5FTUDr7B_4g",
      wiki: "https://en.wikipedia.org/wiki/Macaroni_and_cheese",
      img: "images (1).jpg",
    },
    Ravioli: {
      name: "Ravioli",
      emoji: "🥟",
      origin: "Italy",
      ingredients: "Stuffed pasta with cheese or meat filling.",
      video: "https://www.youtube.com/embed/YDWuBrpXbFY",
      wiki: "https://en.wikipedia.org/wiki/Ravioli",
      img: "Cheese-Ravioli-Recipe-Card.jpg",
    },
    Carbonara: {
      name: "Carbonara",
      emoji: "🥓",
      origin: "Italy",
      ingredients: "Spaghetti with eggs, pancetta, and cheese.",
      video: "https://www.youtube.com/embed/eCrG7P3Qt-w",
      wiki: "https://en.wikipedia.org/wiki/Spaghetti_alla_Carbonara",
      img: "spaghetti-carbonara-01.jpg",
    },
  },

  Chicken: {
    FriedChicken: {
      name: "Fried Chicken",
      emoji: "🍗",
      origin: "USA",
      ingredients: "Chicken pieces coated and deep fried.",
      video: "https://www.youtube.com/embed/NhMf3vaz0Dw",
      wiki: "https://en.wikipedia.org/wiki/Fried_chicken",
      img: "sharon-108893-2.jpeg",
    },
    ChickenTikka: {
      name: "Chicken Tikka",
      emoji: "🔥",
      origin: "India",
      ingredients: "Marinated chicken grilled on skewers.",
      video: "https://www.youtube.com/embed/oQpHDD94wmE",
      wiki: "https://en.wikipedia.org/wiki/Chicken_tikka",
      img: "chicken-tikka-kebab.jpg",
    },
    ButterChicken: {
      name: "Butter Chicken",
      emoji: "🍛",
      origin: "India",
      ingredients: "Chicken cooked in spiced tomato butter sauce.",
      video: "https://www.youtube.com/embed/N2tiQFiyjFs",
      wiki: "https://en.wikipedia.org/wiki/Butter_chicken",
      img: "butter-chicken-323.webp",
    },
    ChickenParmesan: {
      name: "Chicken Parmesan",
      emoji: "🧀",
      origin: "Italy/USA",
      ingredients: "Breaded chicken with tomato sauce and cheese.",
      video: "https://www.youtube.com/embed/JPrR1VVKdQ0",
      wiki: "https://en.wikipedia.org/wiki/Chicken_Parmesan",
      img: "chicken-parm-9.jpg",
    },
    RoastChicken: {
      name: "Roast Chicken",
      emoji: "🍗",
      origin: "Global",
      ingredients: "Whole chicken roasted with herbs.",
      video: "https://www.youtube.com/embed/MK2Itb_4LyY",
      wiki: "https://en.wikipedia.org/wiki/Roast_chicken",
      img: "roast-chicken-recipe-2-66b231ac9a8fb.avif",
    },
    ChickenWings: {
      name: "Chicken Wings",
      emoji: "🍖",
      origin: "USA",
      ingredients: "Fried or baked wings with sauce.",
      video: "https://www.youtube.com/embed/BVo_Uo3f3F0",
      wiki: "https://en.wikipedia.org/wiki/Chicken_wings",
      img: "KoreanStyleBakedChickenWings_10.webp",
    },
    ChickenCurry: {
      name: "Chicken Curry",
      emoji: "🍛",
      origin: "India",
      ingredients: "Chicken cooked in spiced curry sauce.",
      video: "https://www.youtube.com/embed/4_d6ZLiQoHo",
      wiki: "https://en.wikipedia.org/wiki/Chicken_curry",
      img: "23376480_384424262000536_7710239359766064979_n-2-720x720.jpg",
    },
  },

  Drinks: {
    Coffee: {
      name: "Coffee",
      emoji: "☕",
      origin: "Ethiopia",
      ingredients: "Roasted coffee beans brewed.",
      video: "https://www.youtube.com/embed/Vhyb6S1oUGo",
      wiki: "https://en.wikipedia.org/wiki/Coffee",
      img: "tips-to-recognize-good-quality-coffee-424970.webp",
    },
    Tea: {
      name: "Tea",
      emoji: "🍵",
      origin: "China",
      ingredients: "Leaves steeped in hot water.",
      video: "https://www.youtube.com/embed/1T4c4kVQ_Ws",
      wiki: "https://en.wikipedia.org/wiki/Tea",
      img: "Tea.jpg",
    },
    Lemonade: {
      name: "Lemonade",
      emoji: "🍋",
      origin: "Egypt/France",
      ingredients: "Lemon juice, water, sugar.",
      video: "https://www.youtube.com/embed/fmIPy-HoL0w",
      wiki: "https://en.wikipedia.org/wiki/Lemonade",
      img: "Lemonade-2-2-e1618520315551.webp",
    },
    Smoothie: {
      name: "Smoothie",
      emoji: "🥤",
      origin: "Global",
      ingredients: "Blended fruits with yogurt or milk.",
      video: "https://www.youtube.com/embed/9K8FZIm-D1c",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "frozen-fruit-smoothie-3.jpg",
    },
    Soda: {
      name: "Soda",
      emoji: "🧃",
      origin: "USA",
      ingredients: "Carbonated sweetened drink.",
      video: "https://www.youtube.com/embed/Fzw2HK8HPak",
      wiki: "https://en.wikipedia.org/wiki/Soft_drink",
      img: "l-intro-1676051914.jpg",
    },
    HotChocolate: {
      name: "Hot Chocolate",
      emoji: "🍫",
      origin: "Mexico",
      ingredients: "Cocoa powder, milk, sugar.",
      video: "https://www.youtube.com/embed/KmS3Q7MQDXI",
      wiki: "https://en.wikipedia.org/wiki/Hot_chocolate",
      img: "Slow-Cooker-Hot-Chocolate-3.jpg",
    },
    Milkshake: {
      name: "Milkshake",
      emoji: "🍦",
      origin: "USA",
      ingredients: "Blended milk, ice cream, flavoring.",
      video: "https://www.youtube.com/embed/_XZd7QxjWKI",
      wiki: "https://en.wikipedia.org/wiki/Milkshake",
      img: "oreo-milkshake-recipe.jpg",
    },
  },

  Desserts: {
    ChocolateCake: {
      name: "Chocolate Cake",
      emoji: "🍰",
      origin: "Global",
      ingredients: "Cake with chocolate layers and frosting.",
      video: "https://www.youtube.com/embed/KnBTbk4zY1Y",
      wiki: "https://en.wikipedia.org/wiki/Chocolate_cake",
      img: "chocolate-truffle-cake-8844.jpg",
    },
    Cheesecake: {
      name: "Cheesecake",
      emoji: "🧀",
      origin: "Greece/USA",
      ingredients: "Cream cheese filling on a crust.",
      video: "https://www.youtube.com/embed/HPpLH2TcM0Q",
      wiki: "https://en.wikipedia.org/wiki/Cheesecake",
      img: "no-bake-peanut-butter-cheesecake-square.jpeg",
    },
    Tiramisu: {
      name: "Tiramisu",
      emoji: "☕",
      origin: "Italy",
      ingredients: "Coffee-soaked ladyfingers layered with mascarpone.",
      video: "https://www.youtube.com/embed/KFrDy2ypk-0",
      wiki: "https://en.wikipedia.org/wiki/Tiramisu",
      img: "file.jpg",
    },
    IceCream: {
      name: "Ice Cream",
      emoji: "🍨",
      origin: "Global",
      ingredients: "Frozen sweetened cream dessert.",
      video: "https://www.youtube.com/embed/k-AU1GdTYE4",
      wiki: "https://en.wikipedia.org/wiki/Ice_cream",
      img: "Ice-cream-sundae-hero-11.jpg",
    },
    Macarons: {
      name: "Macarons",
      emoji: "🍬",
      origin: "France",
      ingredients: "Meringue-based almond cookies with filling.",
      video: "https://www.youtube.com/embed/08M9hxG1AZc",
      wiki: "https://en.wikipedia.org/wiki/Macarons",
      img: "Chocolate-Macarons-Recipe-1-of-1.jpg",
    },
    ApplePie: {
      name: "Apple Pie",
      emoji: "🥧",
      origin: "USA",
      ingredients: "Baked pastry with apple filling.",
      video: "https://www.youtube.com/embed/6z9Tt8q6Gqg",
      wiki: "https://en.wikipedia.org/wiki/Apple_pie",
      img: "2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg",
    },
    Brownies: {
      name: "Brownies",
      emoji: "🍫",
      origin: "USA",
      ingredients: "Fudgy chocolate baked squares.",
      video: "https://www.youtube.com/embed/uqyPtvNpE3o",
      wiki: "https://en.wikipedia.org/wiki/Brownie",
      img: "Brownie-Recipe-with-Cocoa-Powder.jpg",
    },
  },

  Seafood: {
    GrilledSalmon: {
      name: "Grilled Salmon",
      emoji: "🐟",
      origin: "Global",
      ingredients: "Salmon fillet grilled with lemon and herbs.",
      video: "https://www.youtube.com/embed/sY1W8Xf2wWc",
      wiki: "https://en.wikipedia.org/wiki/Salmon_fish",
      img: "Grilled-Salmon-Overhead.jpg",
    },
    ShrimpScampi: {
      name: "Shrimp Scampi",
      emoji: "🦐",
      origin: "Italy",
      ingredients: "Shrimp cooked in garlic butter sauce.",
      video: "https://www.youtube.com/embed/NWcghnNQgDY",
      wiki: "https://en.wikipedia.org/wiki/Shrimp_scampi",
      img: "mCITeuJc-720.jpg",
    },
    LobsterRoll: {
      name: "Lobster Roll",
      emoji: "🦞",
      origin: "USA",
      ingredients: "Lobster meat in a buttered roll.",
      video: "https://www.youtube.com/embed/1m8SkRrrtss",
      wiki: "https://en.wikipedia.org/wiki/Lobster_roll",
      img: "lobster-roll-7.jpg",
    },
    FishAndChips: {
      name: "Fish and Chips",
      emoji: "🍟",
      origin: "UK",
      ingredients: "Battered fried fish with fries.",
      video: "https://www.youtube.com/embed/cxvG6Io9jco",
      wiki: "https://en.wikipedia.org/wiki/Fish_and_chips",
      img: "fish_and_chips.webp",
    },
    Oysters: {
      name: "Oysters",
      emoji: "🦪",
      origin: "Global",
      ingredients: "Raw or cooked oysters served with sauce.",
      video: "https://www.youtube.com/embed/8P9q1pTcih0",
      wiki: "https://en.wikipedia.org/wiki/Oyster",
      img: "Oysters-Rockefeller_EXPS_TOHFM25_38047_P2_MD_01_04_5b.jpg",
    },
    CrabLegs: {
      name: "Crab Legs",
      emoji: "🦀",
      origin: "Global",
      ingredients: "Steamed or boiled crab legs served with butter.",
      video: "https://www.youtube.com/embed/f0z8XY2qvQI",
      wiki: "https://en.wikipedia.org/wiki/Crab",
      img: "How-to-Cook-Crab-Legs_Square-2.jpg",
    },
    Ceviche: {
      name: "Ceviche",
      emoji: "🍋",
      origin: "Peru",
      ingredients: "Raw fish marinated in citrus juice.",
      video: "https://www.youtube.com/embed/fqKDN7qNvTA",
      wiki: "https://en.wikipedia.org/wiki/Ceviche",
      img: "Step_3_-_Ceviche_4f1bb291-8039-4559-b58c-e5f7fd9e8e25.webp",
    },
  },

  Breads: {
    Baguette: {
      name: "Baguette",
      emoji: "🥖",
      origin: "France",
      ingredients: "Long, thin crusty white bread.",
      video: "https://www.youtube.com/embed/RPGZ8Yc9HxI",
      wiki: "https://en.wikipedia.org/wiki/Baguette",
      img: "8-3-large.webp",
    },
    Sourdough: {
      name: "Sourdough Bread",
      emoji: "🍞",
      origin: "Global",
      ingredients: "Bread made with natural yeast starter.",
      video: "https://www.youtube.com/embed/kIkl-gqY0v8",
      wiki: "https://en.wikipedia.org/wiki/Sourdough",
      img: "Classic_Sourdough_bread.jpg",
    },
    Focaccia: {
      name: "Focaccia",
      emoji: "🫓",
      origin: "Italy",
      ingredients: "Flat oven-baked Italian bread.",
      video: "https://www.youtube.com/embed/NjFHzsDJ1ic",
      wiki: "https://en.wikipedia.org/wiki/Focaccia",
      img: "FocacciaPizza-5-1-scaled.jpg",
    },
    Pita: {
      name: "Pita Bread",
      emoji: "🥙",
      origin: "Middle East",
      ingredients: "Flatbread with pocket.",
      video: "https://www.youtube.com/embed/ZI3Z0GrRZ5E",
      wiki: "https://en.wikipedia.org/wiki/Pita",
      img: "wooden bowl with homemade pita bread.jpg",
    },
    Brioche: {
      name: "Brioche",
      emoji: "🍞",
      origin: "France",
      ingredients: "Soft, slightly sweet bread.",
      video: "https://www.youtube.com/embed/cqxlxwA4Mks",
      wiki: "https://en.wikipedia.org/wiki/Brioche",
      img: "159512_w1024h576c1cx1893cy1900cxt0cyt0cxb4608cyb3456.webp",
    },
    Naan: {
      name: "Naan",
      emoji: "🫓",
      origin: "India",
      ingredients: "Leavened flatbread baked in tandoor.",
      video: "https://www.youtube.com/embed/lkjQww7kBMs",
      wiki: "https://en.wikipedia.org/wiki/Naan",
      img: "kmc_20230425_222650.jpg",
    },
    RyeBread: {
      name: "Rye Bread",
      emoji: "🍞",
      origin: "Europe",
      ingredients: "Dense bread made from rye flour.",
      video: "https://www.youtube.com/embed/Y4Twv7Pr60g",
      wiki: "https://en.wikipedia.org/wiki/Rye_bread",
      img: "dark-rye-bread-1-17-500x500.jpg",
    },
  },

  Smoothies: {
    BerryBlast: {
      name: "Berry Blast Smoothie",
      emoji: "🫐",
      origin: "Global",
      ingredients: "Mixed berries blended with yogurt and honey.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "OrgainPostWorkoutBerryBlastProteinSmoothie-Sierra-1.webp",
    },
    TropicalTwist: {
      name: "Tropical Twist Smoothie",
      emoji: "🥭",
      origin: "Global",
      ingredients: "Mango, pineapple, banana blended.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "tropical-smoothie.webp",
    },
    GreenDetox: {
      name: "Green Detox Smoothie",
      emoji: "🥬",
      origin: "Global",
      ingredients: "Spinach, kale, apple, lemon blended.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "photo_1.jpg",
    },
    PeanutButterBanana: {
      name: "Peanut Butter Banana Smoothie",
      emoji: "🥜",
      origin: "USA",
      ingredients: "Banana, peanut butter, milk blended.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "peanut-butter-smoothie-recipe.jpg",
    },
    ChocolateSmoothie: {
      name: "Chocolate Smoothie",
      emoji: "🍫",
      origin: "Global",
      ingredients: "Cocoa, banana, milk blended.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "GreekChoc_Smoothie-1200x1200px_1200x.webp",
    },
    AvocadoSmoothie: {
      name: "Avocado Smoothie",
      emoji: "🥑",
      origin: "Global",
      ingredients: "Avocado, milk, honey blended.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Smoothie",
      img: "vietnamese-avocado-smoothie-image-traditional-3-650x975.jpeg",
    },
    MangoLassi: {
      name: "Mango Lassi",
      emoji: "🥭",
      origin: "India",
      ringredients: "Mango pulp blended with yogurt and sugar.",
      video: "https://www.youtube.com/embed/FiPzj69W_iQ",
      wiki: "https://en.wikipedia.org/wiki/Mango_lassi",
      img: "Mango-Lassi-Recipe-15.jpg",
    },
  },

  Soups: {
    ChickenNoodleSoup: {
      name: "Chicken Noodle Soup",
      emoji: "🍜",
      origin: "USA",
      ringredients: "Chicken broth with noodles and vegetables.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/Chicken_soup",
      img: "Homemade-Chicken-Noodle-Soup-Recipe.jpg",
    },
    TomatoSoup: {
      name: "Tomato Soup",
      emoji: "🍅",
      origin: "Global",
      ingredients: "Creamy tomato soup.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/Tomato_soup",
      img: "O2ODNLW4ZBFVDBJKIU56FURJYE.jpg",
    },
    MisoSoup: {
      name: "Miso Soup",
      emoji: "🍲",
      origin: "Japan",
      ingredients: "Soup with miso paste, tofu, seaweed.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/Miso_soup",
      img: "Miso-Soup-8297-I-500x500.jpg",
    },
    FrenchOnionSoup: {
      name: "French Onion Soup",
      emoji: "🧅",
      origin: "France",
      ingredients: "Onion soup topped with cheese and bread.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/French_onion_soup",
      img: "Creamy-French-Onion-and-Mushroom-Soup-1.jpg",
    },
    ClamChowder: {
      name: "Clam Chowder",
      emoji: "🦪",
      origin: "USA",
      ingredients: "Creamy soup with clams and potatoes.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/Clam_chowder",
      img: "ClamChowder_RECIPE_060523_54702.webp",
    },
    LentilSoup: {
      name: "Lentil Soup",
      emoji: "🥣",
      origin: "Middle East",
      ingredients: "Soup with lentils and spices.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/Lentil_soup",
      img: "13978-lentil-soup-DDMFS-4x3-edfa47fc6b234e6b8add24d44c036d43.jpg",
    },
    ButternutSquashSoup: {
      name: "Butternut Squash Soup",
      emoji: "🎃",
      origin: "Global",
      ingredients: "Creamy soup made with butternut squash.",
      video: "https://www.youtube.com/embed/7iqe8MwLJE4",
      wiki: "https://en.wikipedia.org/wiki/Butternut_squash_soup",
      img: "roasted-butternut-squash-soup-recipe-1-2.jpg",
    },
  },

  Wraps: {
    ChickenWrap: {
      name: "Chicken Wrap",
      emoji: "🌯",
      origin: "Global",
      ingredients:
        "Grilled chicken, lettuce, tomato, sauce, wrapped in tortilla.",
      video: "https://www.youtube.com/embed/YZOdHu0Vwu4",
      wiki: "https://en.wikipedia.org/wiki/Wrap_(food)",
      img: "Crispy-Chicken-WrapsKey.jpg",
    },
    FalafelWrap: {
      name: "Falafel Wrap",
      emoji: "🧆",
      origin: "Middle East",
      ingredients: "Falafel balls, veggies, tahini sauce wrapped in pita.",
      video: "https://www.youtube.com/embed/J-dvEEI_Wyk",
      wiki: "https://en.wikipedia.org/wiki/Falafel",
      img: "falafel-wrap,id=9ebe6a7c,b=lecker,w=1200,rm=sk.jpeg",
    },
    BeefWrap: {
      name: "Beef Wrap",
      emoji: "🥩",
      origin: "Global",
      ingredients: "Grilled beef strips, salad, sauce in flatbread.",
      video: "https://www.youtube.com/embed/1flI0vAj7kc",
      wiki: "https://en.wikipedia.org/wiki/Wrap_(food)",
      img: "Saucy Beef Wraps - 04.jpg",
    },
    VeggieWrap: {
      name: "Veggie Wrap",
      emoji: "🥕",
      origin: "Global",
      ingredients: "Mixed vegetables, hummus, lettuce, wrapped in tortilla.",
      video: "https://www.youtube.com/embed/qVXjpJxlkMw",
      wiki: "https://en.wikipedia.org/wiki/Wrap_(food)",
      img: "Veggie-Wrap-002.webp",
    },
    CaesarWrap: {
      name: "Caesar Wrap",
      emoji: "🥗",
      origin: "USA",
      ingredients: "Chicken Caesar salad wrapped in a tortilla.",
      video: "https://www.youtube.com/embed/NEI5NArvS5M",
      wiki: "https://en.wikipedia.org/wiki/Caesar_salad",
      img: "Simply-Recipes-Chicken-Caesar-Wrap-LEAD-4-3462748031b34985b4b4cc27b4165bf0.jpg",
    },
    TunaWrap: {
      name: "Tuna Wrap",
      emoji: "🐟",
      origin: "Global",
      ingredients: "Tuna salad with lettuce and mayo in a wrap.",
      video: "https://www.youtube.com/embed/fR8OZUdG9fI",
      wiki: "https://en.wikipedia.org/wiki/Tuna_salad",
      img: "spicy-tuna-wrap-recipe-1.jpg",
    },
    BreakfastWrap: {
      name: "Breakfast Wrap",
      emoji: "🍳",
      origin: "USA",
      ingredients: "Egg, bacon, cheese wrapped in tortilla.",
      video: "https://www.youtube.com/embed/b4kYix1efYE",
      wiki: "https://en.wikipedia.org/wiki/Breakfast_wrap",
      img: "breakfast-burrito-index-66a7e2c5a4e36.avif",
    },
  },

  BBQ: {
    PulledLamb: {
      name: "Pulled Lamb",
      emoji: "🍖",
      origin: "Middle East / UK",
      ingredients:
        "Slow-cooked lamb shoulder shredded and tossed with BBQ-style spices.",
      video: "https://www.youtube.com/embed/4DJ5wB9M8X8", // Pulled lamb shoulder recipe
      wiki: "https://en.wikipedia.org/wiki/Lamb_and_mutton",
      img: "pulled-lamb-12.jpg",
    },
    BBQBeefRibs: {
      name: "BBQ Beef Ribs",
      emoji: "🍖",
      origin: "USA",
      ingredients: "Beef ribs smoked and glazed with BBQ sauce.",
      video: "https://www.youtube.com/embed/Y_KAJ1T7JzM", // Beef ribs smoker recipe
      wiki: "https://en.wikipedia.org/wiki/Beef_ribs",
      img: "beef-chuck-ribs-29.jpg",
    },
    Brisket: {
      name: "Brisket",
      emoji: "🥩",
      origin: "USA (Texas)",
      ingredients: "Beef brisket smoked low and slow with spices.",
      video: "https://www.youtube.com/embed/7w6JU7eqZAw",
      wiki: "https://en.wikipedia.org/wiki/Brisket",
      img: "AdobeStock_236407792-scaled_jpeg_b06d5a6d-533d-4627-ae3e-3ae9f1042d78.webp",
    },
    BBQChicken: {
      name: "BBQ Chicken",
      emoji: "🍗",
      origin: "USA",
      ingredients: "Chicken grilled with BBQ sauce.",
      video: "https://www.youtube.com/embed/JpWtqXvcw4E",
      wiki: "https://en.wikipedia.org/wiki/Barbecue_chicken",
      img: "SFS_Oven-Roasted-BBQ-Chicken_517_qwhqeq.jpg",
    },
    SausageGrill: {
      name: "Grilled Sausage",
      emoji: "🌭",
      origin: "Global",
      ingredients: "Grilled sausages served with mustard or sauces.",
      video: "https://www.youtube.com/embed/iqMl8ouwhOU",
      wiki: "https://en.wikipedia.org/wiki/Grilling",
      img: "360_F_104218773_vgcWhnGm22fuU6gTlz1YeV39eS8DhIpT.jpg",
    },
    BBQBurger: {
      name: "BBQ Burger",
      emoji: "🍔",
      origin: "USA",
      ingredients: "Burger topped with BBQ sauce, bacon, cheese.",
      video: "https://www.youtube.com/embed/5aFXplHPWTA",
      wiki: "https://en.wikipedia.org/wiki/Barbecue_burger",
      img: "barbeque-burgers-feature.jpg",
    },
    GrilledCorn: {
      name: "Grilled Corn",
      emoji: "🌽",
      origin: "Global",
      ingredients: "Corn on the cob grilled and brushed with butter.",
      video: "https://www.youtube.com/embed/ljTgXSn6ro0",
      wiki: "https://en.wikipedia.org/wiki/Grilled_corn",
      img: "shot-2-0129-1522854796.avif",
    },
  },

  MiddleEasternDishes: {
    Hummus: {
      name: "Hummus",
      emoji: "🧆",
      origin: "Middle East",
      ingredients: "Mashed chickpeas, tahini, lemon juice, garlic.",
      video: "https://www.youtube.com/embed/Gp5lYj4DzqY",
      wiki: "https://en.wikipedia.org/wiki/Hummus",
      img: "Hummus-8.jpg",
    },
    Shawarma: {
      name: "Shawarma",
      emoji: "🥙",
      origin: "Middle East",
      ingredients: "Marinated meat slow-roasted on a spit.",
      video: "https://www.youtube.com/embed/2FQH5okGf9g",
      wiki: "https://en.wikipedia.org/wiki/Shawarma",
      img: "2022_03_18_beef_shawarma_2.jpg",
    },
    Falafel: {
      name: "Falafel",
      emoji: "🧆",
      origin: "Middle East",
      ingredients: "Deep-fried chickpea balls with herbs and spices.",
      video: "https://www.youtube.com/embed/VtXzHg5ZfxQ",
      wiki: "https://en.wikipedia.org/wiki/Falafel",
      img: "Falafel-recipe.webp",
    },
    Tabouleh: {
      name: "Tabouleh",
      emoji: "🥗",
      origin: "Lebanon",
      ingredients: "Parsley salad with bulgur, tomatoes, lemon, olive oil.",
      video: "https://www.youtube.com/embed/b5vT2_mKZLQ",
      wiki: "https://en.wikipedia.org/wiki/Tabbouleh",
      img: "tabbouleh-recipe.jpg",
    },
    BabaGhanoush: {
      name: "Baba Ghanoush",
      emoji: "🍆",
      origin: "Middle East",
      ingredients: "Smoked eggplant dip with tahini and garlic.",
      video: "https://www.youtube.com/embed/7R6QH01j6f4",
      wiki: "https://en.wikipedia.org/wiki/Baba_ganoush",
      img: "Lindsey_Eats_How_To_Make_Baba_Ganoush-4.jpg",
    },
    Kibbeh: {
      name: "Kibbeh",
      emoji: "🧆",
      origin: "Middle East",
      ingredients: "Ground meat and bulgur wheat mixture fried or baked.",
      video: "https://www.youtube.com/embed/KOAHkW5V7zQ",
      wiki: "https://en.wikipedia.org/wiki/Kibbeh",
      img: "Kibbeh-square.webp",
    },
    Manakish: {
      name: "Manakish",
      emoji: "🫓",
      origin: "Lebanon",
      ingredients: "Flatbread topped with za'atar, cheese, or meat.",
      video: "https://www.youtube.com/embed/tzn_UoL8uCo",
      wiki: "https://en.wikipedia.org/wiki/Manakish",
      img: "images (2).jpg",
    },
  },

  IndianCuisine: {
    ButterChicken: {
      name: "Butter Chicken",
      emoji: "🍛",
      origin: "India",
      ingredients: "Chicken cooked in creamy tomato butter sauce.",
      video: "https://www.youtube.com/embed/dtKcz-ik6WU",
      wiki: "https://en.wikipedia.org/wiki/Butter_chicken",
      img: "chicken-butter-masala-recipe.jpg",
    },
    Biryani: {
      name: "Biryani",
      emoji: "🍛",
      origin: "India",
      ingredients: "Spiced layered rice with meat or vegetables.",
      video: "https://www.youtube.com/embed/tLDFJwF2HKc",
      wiki: "https://en.wikipedia.org/wiki/Biryani",
      img: "Chicken-Biryani-Recipe.jpg",
    },
    Samosa: {
      name: "Samosa",
      emoji: "🥟",
      origin: "India",
      ingredients: "Fried pastry filled with spiced potatoes and peas.",
      video: "https://www.youtube.com/embed/VgmLPAmM3rg",
      wiki: "https://en.wikipedia.org/wiki/Samosa",
      img: "samosa-recipe.jpg",
    },
    CholeBhature: {
      name: "Chole Bhature",
      emoji: "🥘",
      origin: "India",
      ingredients: "Spicy chickpeas with fried bread.",
      video: "https://www.youtube.com/embed/aJmFOil13n0",
      wiki: "https://en.wikipedia.org/wiki/Chole_bhature",
      img: "maxresdefault.jpg",
    },
    MasalaDosa: {
      name: "Masala Dosa",
      emoji: "🥘",
      origin: "India",
      ingredients: "Fermented crepe filled with spiced potatoes.",
      video: "https://www.youtube.com/embed/Q4mvt7J5G0k",
      wiki: "https://en.wikipedia.org/wiki/Masala_dosa",
      img: "Masala-Dosa.jpg",
    },
    RoganJosh: {
      name: "Rogan Josh",
      emoji: "🍛",
      origin: "India",
      ingredients: "Spicy curried lamb dish.",
      video: "https://www.youtube.com/embed/GrnRZ6WfT3Y",
      wiki: "https://en.wikipedia.org/wiki/Rogan_josh",
      img: "ROGANJOSH-H2.webp",
    },
    PaneerTikka: {
      name: "Paneer Tikka",
      emoji: "🧀",
      origin: "India",
      ingredients: "Grilled marinated paneer cheese cubes.",
      video: "https://www.youtube.com/embed/2Tl0u9pJZjQ",
      wiki: "https://en.wikipedia.org/wiki/Paneer_tikka",
      img: "Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg",
    },
  },

  AsianNoodles: {
    Ramen: {
      name: "Ramen",
      emoji: "🍜",
      origin: "Japan",
      ingredients: "Noodles in broth with meat and veggies.",
      video: "https://www.youtube.com/embed/5l6z8vTXyhk",
      wiki: "https://en.wikipedia.org/wiki/Ramen",
      img: "20250403204619-45.webp",
    },
    PadThai: {
      name: "Pad Thai",
      emoji: "🍜",
      origin: "Thailand",
      ingredients: "Stir-fried rice noodles with shrimp, tofu, peanuts.",
      video: "https://www.youtube.com/embed/6vUyYsWKWk4",
      wiki: "https://en.wikipedia.org/wiki/Pad_Thai",
      img: "EWL-shrimp-pad-thai-step-05-1190-87e6eec4f9ec48f288489d7f06ea01fc.jpg",
    },
    Pho: {
      name: "Pho",
      emoji: "🍜",
      origin: "Vietnam",
      ingredients: "Rice noodles in beef broth with herbs.",
      video: "https://www.youtube.com/embed/xhF4MZgOaJo",
      wiki: "https://en.wikipedia.org/wiki/Pho",
      img: "20220118 Vegetarian Pho LEDE.webp",
    },
    ChowMein: {
      name: "Chow Mein",
      emoji: "🍜",
      origin: "China",
      ingredients: "Stir-fried noodles with vegetables and meat.",
      video: "https://www.youtube.com/embed/mf_wq3ZZClI",
      wiki: "https://en.wikipedia.org/wiki/Chow_mein",
      img: "Veg-Chowmein.webp",
    },
    Udon: {
      name: "Udon",
      emoji: "🍜",
      origin: "Japan",
      ingredients: "Thick wheat noodles in broth with toppings.",
      video: "https://www.youtube.com/embed/qH9Gzq7cl9s",
      wiki: "https://en.wikipedia.org/wiki/Udon",
      img: "Niku-Udon-Japanese-Beef-Udon-3-of-5.jpg",
    },
    Soba: {
      name: "Soba",
      emoji: "🍜",
      origin: "Japan",
      ingredients: "Buckwheat noodles served cold or hot.",
      video: "https://www.youtube.com/embed/05v-KQ-LQSc",
      wiki: "https://en.wikipedia.org/wiki/Soba",
      img: "Vegan-Sesame-Soba-Noodles-Plant-Based-on-a-Budget-1-3.jpg",
    },
    LoMein: {
      name: "Lo Mein",
      emoji: "🍜",
      origin: "China",
      ingredients: "Soft wheat noodles stir-fried with vegetables.",
      video: "https://www.youtube.com/embed/-TfYt1pTVG8",
      wiki: "https://en.wikipedia.org/wiki/Lo_mein",
      img: "Chicken-Lo-Mein-Square-FS-1.jpg",
    },
  },

  BakeryPastries: {
    Croissant: {
      name: "Croissant",
      emoji: "🥐",
      origin: "France",
      ingredients: "Flaky buttery crescent-shaped pastry.",
      video: "https://www.youtube.com/embed/KZwqK3Xk4mg",
      wiki: "https://en.wikipedia.org/wiki/Croissant",
      img: "06croissantsrex1-mediumSquareAt3X.jpg",
    },
    DanishPastry: {
      name: "Danish Pastry",
      emoji: "🥮",
      origin: "Denmark",
      ingredients: "Sweet layered pastry with fruit or custard.",
      video: "https://www.youtube.com/embed/rdtkJ74aJ4E",
      wiki: "https://en.wikipedia.org/wiki/Danish_pastry",
      img: "BEB-danish-pastries-36-square.jpg",
    },
    Eclair: {
      name: "Eclair",
      emoji: "🍫",
      origin: "France",
      ingredients: "Choux pastry filled with cream and topped with chocolate.",
      video: "https://www.youtube.com/embed/DbT-SGz3CYE",
      wiki: "https://en.wikipedia.org/wiki/%C3%89clair",
      img: "eclairs-header.avif",
    },
    Macaron: {
      name: "Macaron",
      emoji: "🍬",
      origin: "France",
      ingredients: "Meringue-based sandwich cookie with ganache.",
      video: "https://www.youtube.com/embed/UgXnrsq5EYY",
      wiki: "https://en.wikipedia.org/wiki/Macarons",
      img: "French-Macaron-Cookie-Recipe-WebHero-6435.jpg",
    },
    CinnamonRoll: {
      name: "Cinnamon Roll",
      emoji: "🍥",
      origin: "Sweden",
      ingredients: "Sweet rolled pastry with cinnamon and sugar.",
      video: "https://www.youtube.com/embed/jFm2r8d3dJ0",
      wiki: "https://en.wikipedia.org/wiki/Cinnamon_roll",
      img: "puff-pastry-cinnamon-rolls-d57fcf8.jpg",
    },
    Muffin: {
      name: "Muffin",
      emoji: "🧁",
      origin: "USA",
      ingredients: "Small quick bread, sweet or savory.",
      video: "https://www.youtube.com/embed/0vw6KsqEgJs",
      wiki: "https://en.wikipedia.org/wiki/Muffin",
      img: "SS-Chocolate-Banana-Muffins-jfvl-jumbo.jpg",
    },
    Bagel: {
      name: "Bagel",
      emoji: "🥯",
      origin: "Poland",
      ingredients: "Dense round bread with a hole, boiled then baked.",
      video: "https://www.youtube.com/embed/ZBvQ5U9OeMc",
      wiki: "https://en.wikipedia.org/wiki/Bagel",
      img: "k_Photo_Recipes_2020-08-how-to-make-bagels_2020_howto_bagels_shot14_197.jpg",
    },
  },
};

// ==== DOM References ====
const categoryContainer = document.getElementById("categoryContainer");
const itemsDiv = document.getElementById("items");
const backBtn = document.getElementById("backBtn");
const searchInput = document.getElementById("searchInput");
const darkModeToggle = document.getElementById("darkModeToggle");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// ==== Populate Categories ====
function loadCategories() {
  categoryContainer.innerHTML = "";
  Object.keys(foodData).forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.addEventListener("click", () => showItems(category));
    categoryContainer.appendChild(btn);
  });
}

// ==== Show Food Items ====
function showItems(category) {
  itemsDiv.innerHTML = "";
  backBtn.style.display = "inline-block";
  document.querySelector(".category-buttons").style.display = "none";
  console.log(Object.values(foodData[category]), category);
  Object.values(foodData[category]).forEach((item) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
    <img src="${item.img}" alt="${item.name}" />
    <h1>${item.name}</h1>
      <p><strong>Origin:</strong> ${item.origin}</p>
      <p><strong>Recipe:</strong> ${item.recipe}</p>
      <a href="${item.video}" target="_blank">▶️ YouTube</a> |
      <a href="${item.wiki}" target="_blank">📖 Wikipedia</a>
    `;
    itemsDiv.appendChild(card);
  });
}

// ==== Go Back Button ====
backBtn.addEventListener("click", () => {
  itemsDiv.innerHTML = "";
  backBtn.style.display = "none";
  document.querySelector(".category-buttons").style.display = "block";
});
const searchBar = document.querySelector("#search-bar");

// ==== Search Functionality ====

// ==== Enhanced Search Functionality ====
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase(); // Added trim()

  // Clear previous results
  itemsDiv.innerHTML = "";
  backBtn.style.display = "none";
  document.querySelector(".category-buttons").style.display = "none";

  // If search is empty, show categories again
  if (!searchValue) {
    loadCategories();
    return;
  }

  let foundResults = false;

  // Search through all categories
  Object.keys(foodData).forEach((category) => {
    // Handle both array and object formats
    const categoryItems = Array.isArray(foodData[category])
      ? foodData[category]
      : Object.values(foodData[category]);

    categoryItems.forEach((item) => {
      if (item.name.toLowerCase().includes(searchValue)) {
        foundResults = true;
        createItemCard(item);
      }
    });
  });

  // Show message if no results found
  if (!foundResults) {
    itemsDiv.innerHTML = `<p class="no-results">No items found for "${searchValue}"</p>`;
  }
});

// Helper function to create item cards
function createItemCard(item) {
  const card = document.createElement("div");
  card.className = "item-card";
  card.innerHTML = `
  <img src="${item.img}" alt="${item.name}" />
   <h3>${item.name}</h3>
    <p><strong>Origin:</strong> ${item.origin}</p>
    <p><strong>Recipe:</strong> ${item.recipe}</p>
    <a href="${item.video}" target="_blank" rel="noopener noreferrer">▶️ YouTube</a> |
    <a href="${item.wiki}" target="_blank" rel="noopener noreferrer">📖 Wikipedia</a>
  `;
  itemsDiv.appendChild(card);
}

// ==== Dark Mode Toggle ====
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==== Contact Form Submission ====
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const food = document.getElementById("food").value;

  formMessage.innerHTML = `
    <p>Thank you <strong>${name}</strong>! We'll consider your suggestion of "${food}" and get back to you at ${email}.</p>
  `;

  form.reset();
});

// ==== Init on Load ====
loadCategories();

searchBar.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(searchInput.value);
});
