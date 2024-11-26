# Country Population Viewer

## Overview

The **Country Population Viewer** is a web application that visualizes population data for countries using a REST API. This application displays the **list of countries with population figure** in a responsive bar chart. It is built with React.js and leverages Chart.js for data visualisation. The app is designed to be user-friendly and visually appealing.

## Features

- **Data Fetching**: Retrieves population data from the provided REST API.
- **Interactive Chart**: Hover over bars to view exact population numbers.
- **Responsive Design**: Works seamlessly on different screen size including mobile.
- **Dynamic Data Processing**: Automatically sorts and limits data for easy understanding.

---

## Technologies Used

- **React.js**: Component-based JavaScript library for building the UI.
- **Chart.js**: Library for creating responsive and customisable charts.
- **Axios**: Promise-based HTTP client for fetching data from the API.
- **CSS**: For styling the application.

---

## Project Structure

project-directory/ │ ├── public/ # Static files │ ├── index.html # Main HTML file │ ├── src/ # Application source code │ ├── components/ # Reusable UI components │ │ ├── Navbar.js # Navigation bar │ │ ├── Footer.js # Footer │ │ ├── Table.js # Table for displaying data │ │ ├── Chart.js # Bar chart visualization │ │ │ ├── services/ # API services │ │ ├── apiService.js # REST API interactions │ │ │ ├── App.js # Main application file │ ├── App.css # Main CSS file │ ├── .gitignore # Ignored files and folders ├── package.json # Project dependencies and scripts ├── README.md # Project documentation

## API Used

The application uses the following API:

- **Countries Population API**:
  - Endpoint: `https://countriesnow.space/api/v0.1/countries/population/cities`
  - Provides population data for cities in various countries.

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed (LTS version recommended).
- [Git](https://git-scm.com/) installed.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/repository-name.git
Replace your-username and repository-name with your GitHub username and repository name.

**Navigate to the Project Directory**
cd repository-name

**Install Dependencies**
npm install
This command installs all required dependencies listed in package.json.

**Start the Development Server**
npm start
This will start the application at http://localhost:3000.

**Usage**
Open the application in your browser at http://localhost:3000.
Contributions are welcome! To contribute:

**Fork the repository.**
Create a new branch:
git checkout -b feature-name

**Make your changes and commit them:**
git commit -m "Description of changes"

**Push the changes to your fork:**
git push origin feature-name

**Future Enhancements**
Here are a few planned improvements:

Filter by Region: Allow users to filter the chart by region (e.g., Asia, Europe).
Error Handling: Display detailed error messages if the API call fails.

**Contact**
If you have any questions or suggestions, feel free to contact me:

Email: farhanidrees01@gmail.com
