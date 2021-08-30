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
		input = prompt.querySelector('.input');
		terminal.appendChild(prompt);
		newPrompt.querySelector('.input').innerHTML = ' ';
	};

	const addToHistory = () => {
		history.push(input.textContent);
		resetPrompt();
	};

	const addCharacter = (key) => {
		currentString += key;
		input.innerHTML = currentString;
	};

	const removeCharacter = () => {
		input.textContent = input.textContent.substring(
			0,
			input.innerHTML.length - 1
		);
	};

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			addToHistory();
			return;
		}
		if (event.key === ' ') {
			addCharacter('&nbsp');
			event.preventDefault();
			return false;
		}

		if (event.key === 'Backspace') removeCharacter();

		if (event.key.length > 1) return;
		addCharacter(event.key);
	});
};

Terminal();
