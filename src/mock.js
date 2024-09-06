export const database = {
  destination: [
    {
      id: 1,
      name: "Ubud",
      description:
        "Ubud is the arts and culture hub of Bali, with many art galleries, museums and traditional dance performances. Its tranquil setting with greenery and terraced rice fields makes it a popular place for meditation, yoga and seeking artistic inspiration.",
      images: require("./assets/images/ubud/radoslav-bali-ca3d4FYDf84-unsplash.jpg"),
    },
    {
      id: 2,
      name: "Kuta",
      description:
        "Kuta is known for its busy beaches and lively nightlife. It is the modern tourism hub of Bali, with many nightclubs, bars and shopping malls. Kuta is also a prime surfing destination.",
      images: require("./assets/images/kuta/minh-tr-n-1HKJWhHQRCs-unsplash.jpg"),
    },
    {
      id: 3,
      name: "Seminyak",
      description:
        "Seminyak is known as a more exclusive area with many boutiques, fine dining restaurants, and elite beach clubs. It is popular among tourists looking for a more luxurious experience and modern lifestyle.",
      images: require("./assets/images/seminyak/seminyak-2407835_1280.jpg"),
    },
    {
      id: 4,
      name: "Nusa Dua",
      description:
        "Nusa Dua is an area specifically designed for luxury resorts and international conference centers. Its serene beaches and complete facilities make it a prime choice for travelers seeking a relaxing and exclusive holiday experience.",
      images: require("./assets/images/nusa_dua/gunung-agung.jpg"),
    },
    {
      id: 5,
      name: "Jimbaran",
      description:
        "Jimbaran is famous for its rows of seafood restaurants serving fresh dishes on the beach. It also has quieter beaches, perfect for enjoying the sunset while dining.",
      images: require("./assets/images/jimbaran/jimbaran-bay-4544321_1280.jpg"),
    },
    {
      id: 6,
      name: "Uluwatu",
      description:
        "Uluwatu is famous for its dramatic ocean views from high cliffs and temples overlooking the Indian Ocean. The area is also popular with surfers for its big, challenging waves.",
      images: require("./assets/images/uluwatu/GWK2.jpg"),
    },
    {
      id: 7,
      name: "Canggu",
      description:
        "Canggu is a popular area for surfers and tourists looking for a more laid-back, hipster vibe. Its many trendy cafes, coworking spaces, and bars attract a growing community of digital nomads and creatives.",
      images: require("./assets/images/canggu/Pura-Tanah-Lot.jpg"),
    },
    {
      id: 8,
      name: "Sanur",
      description:
        "Sanur is a quieter beach area, suitable for families and tourists looking for a more relaxed atmosphere. The beach here has a long promenade and beautiful sunrise views.",
      images: require("./assets/images/sanur/viar-suganda-PCQ_aJ-zznk-unsplash.jpg"),
    },
    {
      id: 9,
      name: "Lovina",
      description:
        "Lovina is located in the northern part of Bali and is famous for its morning dolphin watching tours. This area is quieter and offers a more natural rural atmosphere, away from the tourist crowds of southern Bali.",
      images: require("./assets/images/lovina/ilia-usmanov-ZVmKivW07EA-unsplash.jpg"),
    },
  ],
  places: [
    {
      place_id: 1,
      place_name: "Monkey Forest",
      place_description: "A natural forest inhabited by hundreds of monkeys.",
      place_image: require("./assets/images/ubud/Monkey Forest 3.jpg"),
      place_type: ["Nature"],
      destination: "Ubud",
    },
    {
      place_id: 2,
      place_name: "Tegallalang Rice Terrace",
      place_description: "Beautiful terraced rice fields.",
      place_image: require("./assets/images/ubud/Tegallalang.jpg"),
      place_type: ["Nature", "Adventure"],
      destination: "Ubud",
    },
    {
      place_id: 3,
      place_name: "Campuhan Ridge Walk",
      place_description: "A walking trail that offers stunning natural views.",
      place_image: require("./assets/images/ubud/Campuhan Ridge Walk 1.jpg"),
      place_type: ["Nature", "Adventure"],
      destination: "Ubud",
    },
    {
      place_id: 4,
      place_name: "Goa Gajah",
      place_description: 'An ancient site also known as "Elephant Cave".',
      place_image: require("./assets/images/ubud/Goa Gajah.jpg"),
      place_type: ["Nature"],
      destination: "Ubud",
    },
    {
      place_id: 5,
      place_name: "Ubud Palace",
      place_description:
        "Traditional Balinese palace with distinctive architecture.",
      place_image: require("./assets/images/ubud/ubud_palace.jpg"),
      place_type: ["Culture"],
      destination: "Ubud",
    },
    {
      place_id: 6,
      place_name: "Kuta Beach",
      place_description:
        "The beach is famous for its waves that are suitable for surfing.",
      place_image: require("./assets/images/kuta/pantai_kuta.jpg"),
      place_type: ["Beach", "Water Activities"],
      destination: "Kuta",
    },
    {
      place_id: 7,
      place_name: "Beachwalk Shopping Center",
      place_description:
        "Modern shopping center with various international outlets.",
      place_image: require("./assets/images/kuta/jacek-dylag-jo8C9bt3uo8-unsplash.jpg"),
      place_type: ["Shopping", "Entertainment", "Lifestyle"],
      destination: "Kuta",
    },
    {
      place_id: 8,
      place_name: "Waterboom Bali",
      place_description:
        "Modern shopping center with various international outlets.",
      place_image: require("./assets/images/kuta/water-3367785_1280.jpg"),
      place_type: ["Water Activities", "Entertainment"],
      destination: "Kuta",
    },
    {
      place_id: 9,
      place_name: "Ground Zero Monument",
      place_description: "Bali Bombing tragedy memorial monument.",
      place_image: require("./assets/images/kuta/ground_zero.jpg"),
      place_type: ["Museum"],
      destination: "Kuta",
    },
    {
      place_id: 10,
      place_name: "Seminyak Beach",
      place_description:
        "A beach with a calmer atmosphere than Kuta, and is famous for its sunsets.",
      place_image: require("./assets/images/seminyak/seminyak-2407835_1280.jpg"),
      place_type: ["Entertainment"],
      destination: "Seminyak",
    },
    {
      place_id: 11,
      place_name: "Ku De Ta",
      place_description:
        "The beach club is famous for its beautiful sea and sunset views.",
      place_image: require("./assets/images/seminyak/pantai_seminyak.jpg"),
      place_type: ["Entertainment", "Beach Club"],
      destination: "Seminyak",
    },
    {
      place_id: 12,
      place_name: "Potato Head Beach Club",
      place_description:
        "The beach club is famous for its beautiful sea and sunset views.",
      place_image: require("./assets/images/seminyak/seminyak beach.jpg"),
      place_type: ["Entertainment", "Beach Club"],
      destination: "Seminyak",
    },
    {
      place_id: 13,
      place_name: "Eat Street (Jalan Kayu Aya)",
      place_description: "Street lined with trendy restaurants and cafes.",
      place_image: require("./assets/images/seminyak/sophie-peng-ZJUGsd7z1kA-unsplash.jpg"),
      place_type: ["Restaurant"],
      destination: "Seminyak",
    },
    {
      place_id: 14,
      place_name: "Geger Beach",
      place_description:
        "A beach with white sand and calm water, suitable for swimming.",
      place_image: require("./assets/images/nusa_dua/beach-6292382_1280.jpg"),
      place_type: ["Beach", "Water Activities"],
      destination: "Nusa Dua",
    },
    {
      place_id: 15,
      place_name: "Water Blow",
      place_description: "The rock formations create spectacular sea sprays.",
      place_image: require("./assets/images/nusa_dua/andre-bestman-tIy14ymEPK4-unsplash.jpg"),
      place_type: ["Beach"],
      destination: "Nusa Dua",
    },
    {
      place_id: 16,
      place_name: "Museum Pasifika",
      place_description:
        "An art museum featuring collections from various Asia-Pacific artists.",
      place_image: require("./assets/images/nusa_dua/museum.jpg"),
      place_type: ["Museum"],
      destination: "Nusa Dua",
    },
    {
      place_id: 17,
      place_name: "Bali Collection",
      place_description: "A large shopping and entertainment center.",
      place_image: require("./assets/images/nusa_dua/erik-mclean-nfoRa6NHTbU-unsplash.jpg"),
      place_type: ["Shopping", "Lifestyle"],
      destination: "Nusa Dua",
    },
    {
      place_id: 18,
      place_name: "Uluwatu Temple",
      place_description:
        "Temple on the edge of a cliff with spectacular sunset views.",
      place_image: require("./assets/images/uluwatu/Pura Luhur Uluwatu.jpg"),
      place_type: ["Culture"],
      destination: "Uluwatu",
    },
    {
      place_id: 19,
      place_name: "Padang Padang Beach",
      place_description: "A small beach with iconic coral cliffs.",
      place_image: require("./assets/images/uluwatu/pexels-ahmed-abd-allah-4393137-10880333.jpg"),
      place_type: ["Beach", "Nature"],
      destination: "Uluwatu",
    },
    {
      place_id: 20,
      place_name: "Suluban Beach",
      place_description: "Hidden beach with interesting coral caves.",
      place_image: require("./assets/images/uluwatu/bali-5111131_1280.jpg"),
      place_type: ["Beach", "Nature"],
      destination: "Uluwatu",
    },
    {
      place_id: 21,
      place_name: "Garuda Wisnu Kencana",
      place_description: "Cultural park with a giant statue of Lord Vishnu.",
      place_image: require("./assets/images/uluwatu/GWK.jpg"),
      place_type: ["Culture"],
      destination: "Uluwatu",
    },
    {
      place_id: 22,
      place_name: "Jimbaran Beach",
      place_description: "Famous for its seafood dinner on the beach.",
      place_image: require("./assets/images/jimbaran/pantai-200295_1280.jpg"),
      place_type: ["Culinary", "Beach"],
      destination: "Jimbaran",
    },
    {
      place_id: 23,
      place_name: "Balangan Beach",
      place_description:
        "A beach with a natural atmosphere and beautiful cliffs.",
      place_image: require("./assets/images/jimbaran/jimbaran-bay-4544321_1280.jpg"),
      place_type: ["Beach"],
      destination: "Jimbaran",
    },
    {
      place_id: 24,
      place_name: "Tegal Wangi Beach",
      place_description:
        "A hidden beach that is often used as a pre-wedding location.",
      place_image: require("./assets/images/jimbaran/tegal_wangi.jpg"),
      place_type: ["Beach"],
      destination: "Jimbaran",
    },
    {
      place_id: 25,
      place_name: "Batu Bolong Beach",
      place_description: "A popular beach for surfing and enjoying the sunset.",
      place_image: require("./assets/images/canggu/marvin-meyer-DeGHXT1Q6qk-unsplash.jpg"),
      place_type: ["Beach", "Water Activities"],
      destination: "Canggu",
    },
    {
      place_id: 26,
      place_name: "Tanah Lot",
      place_description: "Temple on a rock that is an icon of Bali.",
      place_image: require("./assets/images/canggu/Pura-Tanah-Lot.jpg"),
      place_type: ["Culture"],
      destination: "Canggu",
    },
    {
      place_id: 27,
      place_name: "Finns Beach Club",
      place_description:
        "Popular beach club with swimming pool and ocean views.",
      place_image: require("./assets/images/canggu/mentari-fbc-JQ5YMIOipuI-unsplash.jpg"),
      place_type: ["Beach Club", "Entertainment"],
      destination: "Canggu",
    },
    {
      place_id: 28,
      place_name: "Sanur Beach",
      place_description:
        "A quiet beach with a walking path along the shoreline.",
      place_image: require("./assets/images/sanur/Pantai Sanur.jpg"),
      place_type: ["Beach"],
      destination: "Sanur",
    },
    {
      place_id: 29,
      place_name: "Le Mayeur Museum",
      place_description:
        "Art museum featuring the works of the Belgian painter, Adrien-Jean Le Mayeur de Merprès.",
      place_image: require("./assets/images/sanur/museum.jpg"),
      place_type: ["Museum"],
      destination: "Sanur",
    },
    {
      place_id: 30,
      place_name: "Bali Seawalker",
      place_description:
        "The activity of walking on the seabed with special equipment.",
      place_image: require("./assets/images/sanur/seawalker.jpg"),
      place_type: ["Adventure", "Water Activities"],
      destination: "Sanur",
    },
    {
      place_id: 31,
      place_name: "Lovina Beach",
      place_description:
        "Famous for its dolphins that often appear in the morning.",
      place_image: require("./assets/images/lovina/bali-286830_1280.jpg"),
      place_type: ["Beach", "Nature"],
      destination: "Lovina",
    },
    {
      place_id: 32,
      place_name: "Banjar Hot Springs",
      place_description: "Natural hot springs.",
      place_image: require("./assets/images/lovina/hot_spring.jpg"),
      place_type: ["Water Activities"],
      destination: "Lovina",
    },
    {
      place_id: 33,
      place_name: "Brahmavihara-Arama",
      place_description:
        "The largest Buddhist temple in Bali with a peaceful atmosphere.",
      place_image: require("./assets/images/lovina/dominic-krainer-jnpHhzhmxrw-unsplash.jpg"),
      place_type: ["Culture"],
      destination: "Lovina",
    },
  ],
  category: [
    {
      id: 1,
      name: "Nature",
    },
    {
      id: 2,
      name: "Adventure",
    },
    {
      id: 3,
      name: "Culture",
    },
    {
      id: 4,
      name: "Art",
    },
    {
      id: 5,
      name: "Beach",
    },
    {
      id: 6,
      name: "Beach Club",
    },
    {
      id: 7,
      name: "Water Activities",
    },
    {
      id: 8,
      name: "Shopping",
    },
    {
      id: 9,
      name: "Entertainment",
    },
    {
      id: 10,
      name: "Culinary",
    },
    {
      id: 11,
      name: "Lifestyle",
    },
    {
      id: 12,
      name: "Sports",
    },
  ],
  people: [
    {
      id: 1,
      name: "Wade Cooper",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Arlene Mccoy",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Devon Webb",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Tom Cook",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 5,
      name: "Tanya Fox",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 6,
      name: "Hellen Schmidt",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 7,
      name: "Caroline Schultz",
      avatar:
        "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 8,
      name: "Mason Heaney",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 9,
      name: "Claudie Smitham",
      avatar:
        "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 10,
      name: "Emil Schaefer",
      avatar:
        "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};
