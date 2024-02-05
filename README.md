# Luminaries AI Public API Usage Example

## Overview
The purpose of the demo is to demonstrate how to use the Luminaris AI Public API to run a convesation with a bot.

Each time the demo is run it:
1. Creates a random identifier for a person
2. Creates a new conversation with that person
3. Allows the user to exchange messages with the bot until the user responds `stop` or exits the program
## Setup
Here are the necessary prerequisites.
 - Node 18.12+: we recommend using [nvm](https://https://github.com/nvm-sh/nvm)
 - Yarn

1. `nvm use`
2. `yarn install`
3. Set the following environment variables or put them in a `.env` file
    - API_CLIENT_ID="id-..." <= Your API Client ID
    - API_SECRET_KEY="sk-..." <= Your API Secret Key
    - RESPONDENT_ID="uuid" <= The id of your bot

4. `yarn start`

Upon succesfully starting the application you should see:
```
Enter your first message: 
``` 