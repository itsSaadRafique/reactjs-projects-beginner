import { createContext } from "react";
export const cardContext = createContext();

const Context = (props) => {
  const userInfo = [
    {
      name: "TANJIRO",
      skill: "SWORD MASTER",
      image:
        "https://i.pinimg.com/1200x/46/20/30/46203002c7e89ad40268ca9ec46bd61d.jpg",
    },
    {
      name: "MAKIMA",
      skill: "SMART",
      image:
        "https://i.pinimg.com/736x/55/07/0f/55070f66e6d600b40e34b4d9b9e61245.jpg",
    },

    {
      name: "LEVI",
      skill: "CALM",
      image:
        "https://i.pinimg.com/736x/10/58/d2/1058d21e0252b2daee7f95b42cb6d140.jpg",
    },

    {
      name: "KAKASHI",
      skill: "SHADOW",
      image:
        "https://i.pinimg.com/1200x/5b/73/85/5b7385b096a9c6de2ee4c14b806414bd.jpg",
    },

    {
      name: "KILLUA",
      skill: "ALERT",
      image:
        "https://i.pinimg.com/736x/49/70/8f/49708f36db92cbd7a156e963a8370eaf.jpg",
    },

    {
      name: "GOKU",
      skill: "IRON FIST",
      image:
        "https://i.pinimg.com/1200x/b9/21/e9/b921e9c2d75185ce181b3b1141566d1b.jpg",
    },
    {
      name: "SASUKE",
      skill: "MANIPULATOR",
      image:
        "https://i.pinimg.com/736x/11/e6/71/11e671fc4cde5afc6c2404cd04809121.jpg",
    },
    {
      name: "AYANOKOJI",
      skill: "IRON FIST",
      image:
        "https://i.pinimg.com/736x/ff/ea/75/ffea75edaa3dce9ff9f7fa5791e51b28.jpg",
    },
    {
      name: "GOJO",
      skill: "DOMAIN EXPANSION",
      image:
        "https://i.pinimg.com/736x/b8/b2/4b/b8b24ba2f12c2ac441071a6001143b65.jpg",
    },
    {
      name: "LIGHT",
      skill: "NERD",
      image:
        "https://i.pinimg.com/736x/7d/46/40/7d4640495f98528ea3c08870cbec8f84.jpg",
    },
    {
      name: "NARUTO",
      skill: "FURY",
      image:
        "https://i.pinimg.com/736x/81/1d/e2/811de29bf2127ed90cb88523f0233d43.jpg",
    },
    {
      name: "KAKASHI",
      skill: "SHADOW",
      image:
        "https://i.pinimg.com/1200x/e1/7e/44/e17e44b479059c244bc16d64908d3933.jpg",
    },
    {
      name: "ICHIGO",
      skill: "FEARLESS",
      image:
        "https://i.pinimg.com/736x/44/20/00/442000409ef7bd2b922bb3cb1873b88b.jpg",
    },
    {
      name: "ITACHI",
      skill: "ATTITUDE",
      image:
        "https://i.pinimg.com/736x/6a/f6/b5/6af6b5cddc5edb5c45f14058a948d97f.jpg",
    },

    {
      name: "GOJO",
      skill: "DOMAIN EXPANSION",
      image:"https://i.pinimg.com/736x/5c/4e/3e/5c4e3ec38398849e2dc30c4e13913752.jpg"
    },

    {
      name: "YUTA",
      skill: "DETECTIVE",
      image:
        "https://i.pinimg.com/736x/e2/ad/b2/e2adb2cf58440c4987c08f92eafe984e.jpg",
    },
  ];

  return (
    <div>
      <cardContext.Provider value={userInfo}>
        {props.children}
      </cardContext.Provider>
    </div>
  );
};

export default Context;
