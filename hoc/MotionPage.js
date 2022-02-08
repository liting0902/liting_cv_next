import React, { Component } from "react";
import { motion } from "framer-motion";

function MotionPage(transitionStart) {
	return (Page) => {
		return () => (
			<React.Fragment>
				<motion.div
					initial={{
						opacity: 0,
						translateX: transitionStart === "right" ? 50 : -50,
					}}
					animate={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 1.6 }}>
					<Page />
				</motion.div>
			</React.Fragment>
		);
	};
}

export default MotionPage;
