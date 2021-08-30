const directories = ['music', 'games'];

const dir = () => {
	const string = `
    <br/>
     Volume in drive C is LS-DOS4 <br/>
     Volume serial number is 93E2-7A23 <br/>
     Directory of C:\\ <br/>
     <br/>
    ${directories.map((dir) => `${dir.toUpperCase()} \u00A0 \u00A0\u00A0\u00A0 &lt;DIR&gt; \u00A0\u00A0 23-09-94 \u00A023:23a <br/>`).join("")}
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${directories.length} file(s) \u00A0\u00A0\u00A0 42069 bytes <br/>
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A09360512 bytes free

    <br/>
    `;
	return string;
};

const command = (cmd) => {
	if (cmd === 'dir') return dir();
};

export default command;
