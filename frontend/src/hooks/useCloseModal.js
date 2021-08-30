import { useState } from "react";

const useCloseModal = (element) => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const handleElementClicked = () => {
    setDropDownClicked(!dropDownClicked);
  };

  const handleWindowClick = () => {
    setDropDownClicked(!dropDownClicked);
  };

  const closeModal = (element, e) => {
    if (
      dropDownClicked &&
      element?.current &&
      !element?.current.contains(e.target)
    ) {
      handleWindowClick();
    }
  };

  return {
    dropDownClicked,
    handleElementClicked,
    handleWindowClick,
    closeModal,
  };
};

export { useCloseModal };
