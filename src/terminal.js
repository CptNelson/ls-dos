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
			newPrompt.querySelector('.input').textContent = prompt;
		}
		prompt = newPrompt;
		currentString = ``;
		input = prompt.querySelector('.input');
		terminal.appendChild(prompt);
		newPrompt.querySelector('.input').innerHTML = currentString;
	};

	const addToHistory = () => {
		history.push(input.textContent);
		resetPrompt();
	};

	const addCharacter = (key) => {
		currentString += key;
		console.log(currentString);
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
