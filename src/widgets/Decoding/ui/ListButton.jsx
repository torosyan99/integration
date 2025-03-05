import React from "react";
import Button from "../../../shared/ui/Button/Button";
import InactiveButton from "../../../shared/ui/InactiveButton/IntactiveButton";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const ListButton = ({ children, active, block }) => {
  const content = (
    <>
      {children}
      {block && <Sprite icon="block-icon" width={25} height={24} />}
    </>
  );
  return (
    <>
      {active ? (
        <Button className={"decoding__button decoding__button--active"}>{content}</Button>
      ) : (
        <InactiveButton className={"decoding__button"}>
          {content}
        </InactiveButton>
      )}
    </>
  );
};

export default ListButton;
