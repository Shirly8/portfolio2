import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Globe, Heart } from "lucide-react";
import "./FF.css";

interface Fact {
  id: number;
  icon: JSX.Element;
  text: string;
  isLie: boolean;
  flipText?: string;
  
}

const facts: Fact[] = [
  {
    id: 1,
    icon: <Music size={40} />,
    text: "I create my own music, including songwriting, singing, and mixing/mastering, with over 100 songs produced.",
    isLie: false,
  },
  {
    id: 2,
    icon: <Globe size={40} />,
    text: "I've gone to Europe 2 times. First to Paris. Then to Spain and Italy",
    isLie: true,
    flipText: "I’ve never been to Europe but I’m planning to go on exchange at University of Lancaster in UK",
  },
  {
    id: 3,
    icon: <Heart size={40} />,
    text: "I currently volunteer for 2 organizations, both in healthcare-related initiatives",
    isLie: false,
  },
];

export default function TwoTruthsALie() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [shaking, setShaking] = useState<Record<number, boolean>>({});

  const handleSelect = (id: number, isLie: boolean) => {
    if (flipped[id]) return; // Prevent re-flipping

    if (isLie) {
      setFlipped((prev) => ({ ...prev, [id]: true }));
    } else {
      setShaking((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => setShaking((prev) => ({ ...prev, [id]: false })), 500);
    }
  };

  return (
    <div className="container">
      <h2>Fun Facts - Two Truths and A Lie</h2>
      <div className="facts-boxes">
        {facts.map(({ id, icon, text, isLie, flipText }) => (
          <motion.div
            key={id}
            className={`fact-box ${shaking[id] ? "shake" : ""} ${flipped[id] ? "flip" : ""}`}
            onClick={() => handleSelect(id, isLie)}
          >
            {!flipped[id] ? (
              <>
                {icon}
                <p className="box-text">{text}</p>
              </>
            ) : (
              <p className="lie-reveal">{flipText}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
