import { appendDataToFile, getCurrentDateTime } from './utils.js'; 

export async function handle(input, output, hist) {
    // LOG CMD

    const exec = input.split(' ');
    const cmd = exec[0];
    const args = exec.slice(1);

        const filePath = '/api/append'; // Replace with your server endpoint
        
          const logdata = `[${getCurrentDateTime()}] ${input}`;
          console.log(logdata);
        // Call appendDataToFile function
        appendDataToFile(filePath, logdata);
    if (!cmd) return;

    try {
        const handler = await import('./cmds/' + cmd + '.js');
        await handler.default(output, hist, ...args);
    } catch (e) {
        if (e.message.startsWith('Failed to fetch dynamically imported module: ')) {
            output.innerHTML += 'Command <span data-color=grey>"' + input + '"</span> Not Found.';
        } else {
            output.innerHTML += 'Command <span data-color=grey>"' + input + '"</span> Not Found.';
        }
    }
}

