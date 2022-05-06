# E-COMMERCE-BACK-END

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

This Node.js back application is the back end for a ficticious e-commerce site. I configured a working Express.js API that uses Sequelize to interact with a MySQL database in the managing of a company's employee database. I utilized the [MySQL2 package](https://www.npmjs.com/package/mysql2) for the database, [Sequelize](https://sequelize.org/) as my ORM, [Express](https://expressjs.com/) for my server and API routes and [dotenv](https://www.npmjs.com/package/dotenv) to hide my environment variabls.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Product](#product)
- [Questions](#questions)
- [Technology](#technology)
- [License](#license)

## Installation

Prerequisites: Node, NPM and MySQL

```bash
git clone https://github.com/brianbixby/E-COMMERCE-BACK-END.git
cd E-COMMERCE-BACK-END
npm i
mysql -u root -p
*** enter your password for mysql ***
SOURCE db/schema.sql;
*** \q to exit mysql ***
*** create a .env file at the root level of this project and enter your mysql username and password ***
*** example .env file ***
DB_USER=root
DB_PW=password
DB_NAME=ecommerce_db
```

## Usage

- The application will be invoked by using the following commands:

```bash
npm run start
*** open a new tab in terminal and seed the database, WHILE the server is running!!! ***
npm run seed
```

## Product

![A screen shot of the E-commerce Back End in use.](./assets/screen-shot.png)
[Walkthrough video that demonstrates the functionality](https://watch.screencastify.com/v/2GXcP7xz3Up2PmSt3iAb)

## Questions

If you have any questions please don't hesitate to reach out:
[Github](https://github.com/brianbixby)
[Email](mailto:brianbixby0@gmail.com)

## Technology

- [Github](https://github.com/brianbixby/E-COMMERCE-BACK-END)
- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MySQL2 package](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## License

Copyright 2022 Brian Bixby

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.