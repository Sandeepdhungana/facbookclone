import { useEffect, useState } from "react";

const useCloseModal = (element) => {
  const [dropDownClicked, setDropDownClicked] = useState(false);

  const handleElementClicked = () => {
    setDropDownClicked(!dropDownClicked);
  };

  const handleWindowClick = () => {
    setDropDownClicked(!dropDownClicked);
  };

//   const fn = useEffect(() => {
//     window.onclick = function (e) {
//       if (
//         dropDownClicked &&
//         element.current &&
//         !element.current.contains(e.target)
//       ) {
//         handleWindowClick();
//       }
//     };
//   }, [element, dropDownClicked]);

  return [dropDownClicked, handleElementClicked, handleWindowClick];
};

export { useCloseModal };
