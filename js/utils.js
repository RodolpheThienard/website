export function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(); // Format de la date locale
  const time = now.toLocaleTimeString(); // Format de l'heure locale
  return `${date}:${time}`;
}

export async function appendDataToFile(filePath, data) {
    try {
        const response = await fetch(filePath, {
            method: 'POST', // Adjust the HTTP method as needed (e.g., 'PUT', 'PATCH')
            headers: {
                'Content-Type': 'application/json', // Adjust content type if sending different data format
            },
            body: JSON.stringify({ data }), // Convert data to JSON format if needed
        });

        if (!response.ok) {
            throw new Error('Failed to append data to file.');
        }

    } catch (error) {
    }
}
