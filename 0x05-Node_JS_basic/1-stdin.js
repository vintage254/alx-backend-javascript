process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const input = process.stdin.read();
	if(input !== null) console.log(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
	console.log('This important software is now closing');
});
