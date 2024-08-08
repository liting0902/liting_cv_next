"use client";
import React, { useState, useContext, useEffect } from "react";
import CardsContainer from "@/components/layouts/CardsContainer.js";
import CardLayout from "@/components/layouts/CardLayout.js";
import Modal from "@/components/layouts/Modal.js";
import cards from "./cardsConfig.js";
import { ModalToggle, DispatchModalToggler } from "@/contexts/modal.context.js";
import { useWindowSize } from "@/hooks/useWindowSize";
function mainCards(props) {
  const [selectedID, setSelectedID] = useState(null);
  const openModal = useContext(ModalToggle);
  const modalDispatch = useContext(DispatchModalToggler);
  const [isPad, setPad] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 900) setPad(true);
  });
  const toggleHandler = (e, i) => {
    e.preventDefault();
    modalDispatch({ type: "TOGGLE", openModal });
    setSelectedID(i);
  };

  return (
    <React.Fragment>
      <CardsContainer openModal={openModal}>
        {cards.map((item, i) => {
          return (
            <CardLayout key={i} i={i}>
              <a
                className="CardStyle"
                onClick={item.enableModal ? (e) => toggleHandler(e, i) : null}
                cy-data="main-cards"
              >
                <item.cardComponent />
              </a>

              {openModal && selectedID === i ? (
                <Modal
                  enableThemeToggle={true}
                  toggleHandler={toggleHandler}
                  selectedID={selectedID}
                  overrideStyle={!isPad && item.overrideStyle}
                >
                  <item.modalComponent {...props} />
                </Modal>
              ) : null}
              <style jsx>{`
                .CardStyle {
                  display: flex;
                  width: 100%;
                  height: 100%;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  touch-action: ${openModal ? `none` : `auto`};
                }
                .aCardStyle:active &:focus {
                  background: pink;
                }
              `}</style>
            </CardLayout>
          );
        })}
      </CardsContainer>
    </React.Fragment>
  );
}

export default mainCards;
