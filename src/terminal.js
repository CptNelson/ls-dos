import command from './js/command';

const Terminal = () => {
	const terminal = document.querySelector('.terminal');
	let prompt = terminal.querySelector('.prompt');
	let input = prompt.querySelector('.input');
	let currentString = ``;
	const history = [];

	const resetPrompt = () => {
		const newPrompt = prompt.cloneNode(true);
		input.nextElementSibling.remove();
		if (prompt) {
			newPrompt.querySelector('.input').innerHTML = prompt;
		}
		prompt = newPrompt;
		currentString = ``;
		input = prompt.querySelector('.input');
		terminal.appendChild(prompt);
		newPrompt.querySelector('.input').innerHTML = currentString;
	};

	const createDiv = (cmdReturn) => {
		const answer = document.createElement("div");
		answer.innerHTML = cmdReturn;
		terminal.appendChild(answer);
	}

	const addToHistory = () => {
		history.push(input.innerHTML);

		if (input.innerHTML === 'dir') {
			const meep = command('dir');
			console.log("asd "+ meep);
			createDiv(meep);
		}

		resetPrompt();
	};

	const addCharacter = (key) => {
		if (currentString.length > 69) return;
		currentString += key;
		input.innerHTML = currentString;
	};

	const removeCharacter = () => {
		currentString = currentString.slice(0, -1);
		input.innerHTML = currentString;
	};

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			addToHistory();
			return;
		}
		if (event.key === ' ') {
			addCharacter('\u00A0');
			event.preventDefault();
			return false;
		}

		if (event.key === 'Backspace') removeCharacter();

		if (event.key.length > 1) return;
		addCharacter(event.key);
	});
};

Terminal();
