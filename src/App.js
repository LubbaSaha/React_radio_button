import logo from './logo.svg';
import RadioButton from "./components/RadioButtons/RadioButton";
import Checkbox from "./components/Checkbox/Checkbox";

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
						gap: "10px",
						padding: "10px 0px"
					}}
				>
					<RadioButton
						name="hello"
						label="Hello"
						groupName="type_group"
					/>

					<RadioButton
						name="world"
						label="World"
						groupName="type_group"
					/>
				</div>


			</div>

			<div
				style={{
					margin: "auto",
					padding: "40px"
				}}
			>
				<h1>
					Example of custom react Checkbox button
				</h1>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "10px",
						padding: "10px 0px"
					}}
				>
					<Checkbox
						name="hello_cb"
						label="Hello"
						groupName="type_group_cb"
					/>

					<Checkbox
						name="world_cb"
						label="World"
						groupName="type_group_cb"
					/>
				</div>


			</div>
		</div>
	);
}

export default App;
