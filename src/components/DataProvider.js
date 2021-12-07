import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Wacth Product 01",
      images: [
        "https://wallpapercave.com/wp/wp2168267.jpg",
        "https://wallpapercave.com/wp/wp1853720.jpg",
        "https://www.teahub.io/photos/full/192-1925709_wrist-watch-images-hd.jpg",
        "https://wallpaperaccess.com/full/795912.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
      count: 1,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [
        "https://www.teahub.io/photos/full/192-1925709_wrist-watch-images-hd.jpg",
        "https://wallpapercave.com/wp/wp2168267.jpg",
        "https://wallpapercave.com/wp/wp1853720.jpg",
        "https://wallpaperaccess.com/full/795912.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [
        "https://wallpaperaccess.com/full/795912.jpg",
        "https://wallpapercave.com/wp/wp2168267.jpg",
        "https://www.teahub.io/photos/full/192-1925709_wrist-watch-images-hd.jpg",
        "https://wallpapercave.com/wp/wp1853720.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      count: 1,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [
        "https://wallpapercave.com/wp/wp1853720.jpg",
        "https://www.teahub.io/photos/full/192-1925709_wrist-watch-images-hd.jpg",
        "https://wallpaperaccess.com/full/795912.jpg",
        "https://wallpapercave.com/wp/wp2168267.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [
        "https://www.gizbot.com/images/2019-02/samsung-galaxy-watch-active_155108987680.jpg",
        "https://wallpapercave.com/wp/wp1853720.jpg",
        "https://www.teahub.io/photos/full/192-1925709_wrist-watch-images-hd.jpg",
        "https://wallpaperaccess.com/full/795912.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 1,
    },
    {
      _id: "6",
      title: "Wacth Product 06",
      images: [
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://wallpapercave.com/wp/wp1853720.jpg",
        "https://www.teahub.io/photos/full/192-1925709_wrist-watch-images-hd.jpg",
        "https://wallpaperaccess.com/full/795912.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
      count: 1,
    },
  ]);

  return (
    <DataContext.Provider value={[products, setProducts]}>
      {props.children}
    </DataContext.Provider>
  );
};
