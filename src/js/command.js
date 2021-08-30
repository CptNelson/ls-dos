const directories = ['music', 'games'];

const dir = () => {
	const string = `

     Volume in drive C is LS-DOS_4
     Volume serial number is 93E2-7A23
     Directory of C:\

    ${directories.map((dir) => `${dir}`)}
    
    `;
	return string;
};

const command = (cmd) => {
	if (cmd === 'dir') return dir;
};

export default command;
