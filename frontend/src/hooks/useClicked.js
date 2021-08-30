import { useState } from "react";

const useClicked = (initialClicked) => {
  const [clicked, setClicked] = useState(initialClicked);
  const disableClick = false;
  const clickedModal = (clicked) => {
    // it is for making the body unmovable when the modal is active
    if (!disableClick && clicked) {
      document.body.classList.add("modalopen");
    } else {
      document.body.classList.remove("modalopen");
    }
    setClicked(clicked);
  };

  return { disableClick, clicked, clickedModal };
};

export { useClicked };
