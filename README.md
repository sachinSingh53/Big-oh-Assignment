# Node.js Backend Project

This is a Node.js backend project that provides APIs to create and fill forms, as well as retrieve filled forms based on their title. The project uses MySQL and Sequelize for database management.

## Table of Contents

- [Routes](#routes)
- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Routes

### 1. Create a Form
- **Endpoint:** `POST /form`
- **Description:** Creates a new form.
- **Body Parameters:**
  - `title`: The title of the form.
  - `fields`: An array of field objects containing `name` and `type`.

### 2. Fill a Form
- **Endpoint:** `POST /fill_form?form_title=title`
- **Description:** Fills data in the specified form.
- **Query Parameters:**
  - `form_title`: The title of the form to fill.
- **Body Parameters:**
  - Dynamic, based on the fields defined in the form.

### 3. Get Filled Forms
- **Endpoint:** `GET /fill_form?form_title=title`
- **Description:** Retrieves all filled forms with the specified title.
- **Query Parameters:**
  - `form_title`: The title of the form to retrieve.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
