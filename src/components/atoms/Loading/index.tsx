import { BeatLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="container">
			<div className="d-flex align-content-center justify-content-center flex-wrap">
				<BeatLoader color="#1038e1" />
			</div>
		</div>
	);
};

export default Loading;
