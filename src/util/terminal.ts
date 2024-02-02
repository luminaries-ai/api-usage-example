import readline from "node:readline";
export async function getResponseFromCommandLine(message: string): Promise<string> {
    return new Promise((resolve) => {
      const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
  
      reader.question(message, (response: string) => {
        resolve(response);
        reader.close();
      });
    });
  }