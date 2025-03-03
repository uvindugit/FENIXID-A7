
# FENIXID A7 WhatsApp Bot

FENIXID A7 is a powerful WhatsApp bot designed to provide advanced features for managing contacts, automating responses, and integrating with Google Contacts. It is built using Node.js and the Baileys library for WhatsApp Web API.

---

## Features

- **Save Contacts to Google Contacts**: Automatically save new WhatsApp contacts to your Google Contacts.
- **Welcome Messages**: Send personalized welcome messages to new users.
- **Owner-Only Commands**: Restrict sensitive commands like `authgoogle`, `verifycode`, `updatec`, and `deletetoken` to the bot owner.
- **Google Integration**: Authenticate with Google APIs to manage contacts seamlessly.
- **Customizable**: Easily customize the bot's behavior and responses.

---

## Bot Commands

| Command       | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `!menu`       | Displays the bot's menu with available commands.                            |
| `!authgoogle` | Initiates Google authentication and saves the owner's number to Google Contacts. |
| `!verifycode` | Verifies the Google authentication code and saves tokens.                   |
| `!updatec`    | Updates Google API credentials using a JSON code.                          |
| `!deletetoken`| Deletes saved Google tokens and credentials (owner-only).                  |

---

## Deployment

You can deploy this bot to Heroku with just one click:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/Fenixid-server/FENIXID-A7)

### Manual Deployment

If you prefer to deploy manually, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Fenixid-server/FENIXID-A7.git
   cd FENIXID-A7
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   OWNER_NUMBER=your_owner_number
   FENIX_NAME=your_bot_name
   BOT_EMAIL=your_bot_email
   BOT_NAME=your_bot_name
   BOT_LOCATION=your_bot_location
   BOT_AGE=your_bot_age
   FENIX_ABOUT_TYPE=your_bot_business_type
   ```

4. **Run the Bot**:
   ```bash
   npm start
   ```

---

## Configuration

### Environment Variables

| Variable           | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `OWNER_NUMBER`     | The owner's WhatsApp number (with country code, e.g., `94773010580`).       |
| `FENIX_NAME`       | The name of your bot.                                                       |
| `BOT_EMAIL`        | The email associated with your bot.                                         |
| `BOT_NAME`         | The name of your bot.                                                       |
| `BOT_LOCATION`     | The location of your bot.                                                   |
| `BOT_AGE`          | The age of your bot.                                                        |
| `FENIX_ABOUT_TYPE` | The type of business or purpose of your bot.                                |

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

For support or questions, please open an issue on the [GitHub repository](https://github.com/Fenixid-server/FENIXID-A7/issues).

```

### Key Sections
1. **Bot Details**: A brief description of the bot and its purpose.
2. **Features**: A list of the bot's key features.
3. **Bot Commands**: A table of available commands and their descriptions.
4. **Deployment**: Instructions for deploying the bot to Heroku (with a deploy button) and manual deployment steps.
5. **Configuration**: A table of environment variables required for the bot.
6. **Contributing**: Guidelines for contributing to the project.
7. **License**: Information about the project's license.
8. **Support**: Instructions for getting support or reporting issues.

### Heroku Deploy Button
The Heroku deploy button is added using the following Markdown syntax:
```markdown
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/Fenixid-server/FENIXID-A7)
```

This button allows users to deploy the bot to Heroku with a single click.

### Final Notes
- Replace placeholders like `your_owner_number`, `your_bot_name`, etc., with actual values or instructions for users to fill them in.
