import React, { useState, useContext } from "react";
import CardsContainer from "../../components/layouts/CardsContainer.js";
import CardLayout from "../../components/layouts/CardLayout.js";
import Modal from "../../components/Modal.js";
import MotionPage from "../../hoc/MotionPage.js";
import cards from "./cardsConfig.js";
import {
	ModalToggle,
	DispatchModalToggler,
} from "../../contexts/modal.context.js";
function mainCards(props) {
	const [selectedID, setSelectedID] = useState(null);
	const openModal = useContext(ModalToggle);
	const modalDispatch = useContext(DispatchModalToggler);
	// const isDark = useContext(ThemeToggle);
	// const themeDispatch = useContext(DispatchThemeToggler);
	const toggleHandler = (e, i) => {
		e.preventDefault();
		modalDispatch({ type: "TOGGLE", openModal: !openModal });
		setSelectedID(i);
	};
	return (
		<React.Fragment>
			<CardsContainer openModal={openModal}>
				{cards.map((item, i) => {
					return (
						<CardLayout key={i} i={i}>
							{/* <h2 style={{ color: "white" }}>{props.title}</h2> */}
							<a
								className="CardStyle"
								onClick={
									item.enableModal
										? (e) => toggleHandler(e, i)
										: null
								}>
								<item.cardComponent />
							</a>

							{openModal && selectedID === i ? (
								<Modal
									enableThemeToggle={true}
									toggleHandler={toggleHandler}
									selectedID={selectedID}>
									<item.modalComponent />
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
									touch-action: ${openModal
										? `none`
										: `auto`};
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

const transitionStartDirections = "left";
export default MotionPage(transitionStartDirections)(mainCards);
