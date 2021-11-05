const directories = ['music', 'games'];

const defaultStringStart = `
    <br/>
    \u00A0 Volume in drive C is LS-DOS4 <br/>
    \u00A0 Volume serial number is 93E2-7A23 <br/>
    \u00A0 Directory of C:\\ <br/>
     <br/>

`;

const defaultStringEnd = `
\u00A0\u00A0\u00A0 42069 bytes <br/>
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A09360512 bytes free

    <br/>

`;

const dir = () => {
	const string = `
    ${directories
		.map(
			(dir) =>
				`${dir.toUpperCase()} \u00A0 \u00A0\u00A0\u00A0 &lt;DIR&gt; \u00A0\u00A0 23-09-94 \u00A023:23a <br/>`
		)
		.join('')}
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${directories.length} file(s)     `;
	return defaultStringStart + string + defaultStringEnd;
};

const command = (cmd) => {
	if (cmd === 'dir') return dir();
};

export default command;
