import logo from './logo.svg';
import RadioButton from "./components/RadioButton";

import './App.css';

function App() {
	return (
		<div className="App">

			<div
				style={{
					margin: "auto",
					padding: "100px"
				}}
			>
				<h1>
					Example of custom react radio button
				</h1>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "10px"
					}}
				>
					<RadioButton
						name="hello"
						label="Hello"
						groupName="type_group"
					// checked={fr.values.user_role === userRoles.ARMY}
					// onClick={() => fr.setFieldValue("user_role", userRoles.ARMY)}
					/>

					<RadioButton
						name="world"
						label="World"
						groupName="type_group"
					// checked={fr.values.user_role === userRoles.ARMY}
					// onClick={() => fr.setFieldValue("user_role", userRoles.ARMY)}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
