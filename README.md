# React-UI-library
1-Overview: -

This repository contains a React UI Library built using TypeScript and configured to automate syncing, versioning, testing, and deploying via CI/CD. The project utilizes Cypress for end-to-end testing and incorporates various automation tools to ensure the React components are reliable and scalable.


2-Requirements: -

The task was to:

2.A-Set up a React UI Library using TypeScript.
2.B-Implement a CI/CD pipeline to automate syncing, versioning, and publishing the UI library.
2.C-Set up unit and end-to-end testing using Jest and Cypress, respectively.
2.D-Automate the deployment to a private NPM registry using Verdaccio.
2.E-Document the process, tests, and pipeline.


3-Project Structure: -

React-UI-library/
├── src/                # Contains source code of the React components
├── dist/               # Build artifacts after running `npm run build`
├── node_modules/       # Installed node dependencies
├── public/             # Public assets (index.html, manifest.json, etc.)
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
├── .gitignore          # Git ignore file
├── .gitlab-ci.yml      # GitLab CI/CD pipeline file
├── cypress/            # Cypress configuration and tests
├── README.md           # Project documentation
└── tests/              # Jest unit tests for the React components

4-Setup and Installation: -

4.A Cloning the Repository:

"Bash"
git clone https://github.com/OmarKhaledKhalil/React-UI-library
cd React-UI-library


4.B Installing Dependencies, Making sure you have Node.js (version 18.6.0) installed:

"Bash"
npm install

4.C Starting the Development Server:

"Bash"
npm start


4.D Run the Tests:

-Unit Test using Jest:

"Bash"
npm run test


-End to End Test using Cypress:

"Bash"
npx cypress open


4.E Building the Project:

"Bash"
npm run build

5-CI/CD Pipeline Setup: -

The project includes a .gitlab-ci.yml file to automate the following processes:

5-A Installing dependencies (npm ci).
5-B Runing unit and end-to-end tests (npm run test and Cypress).
5-C Building the library (npm run build).
5-D Deploying the library to a private NPM registry (npm publish).

The pipeline is triggered on commits to the main branch, ensuring a continuous integration process that runs the tests and publishes the library upon a successful build.

#The Sample .gitlab-ci.yml exists at the .gitlab-ci.yml file at the Repo.


6-Challenges and Solutions: -

6-A Issue: react-scripts not found
Solution: Installed missing dependencies with npm install react-scripts to resolve the error and ensure the npm start command works.

6-B Issue: Missing index.js and index.html
Solution: Created missing files under the src/ and public/ directories to fix the issue and allow the project to build and run.

6-C Issue: Cypress Tests Failing to Connect
Solution: Resolved connection issues with Cypress by configuring baseUrl and ensuring Cypress was properly installed and executed in the CI pipeline.

6-D Issue: Unable to publish to private registry
Solution: Installed and set up Verdaccio for a local private NPM registry, ensuring the library can be published privately after running tests.

6-E Issue: Permission errors with npm install -g
Solution: Resolved by using sudo or switching to the correct Node.js version (v18+) to install Verdaccio globally.



7-Testing: -

7-A Jest Unit Testing:
Unit tests were implemented for the React components. The tests ensure that all components render correctly and behave as expected.

7-BCypress End-to-End Testing:
Cypress was used to create an end-to-end test suite to simulate user interactions and verify that the components work in real-world scenarios.

-Sample Jest test:

"js"

import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button with correct text', () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

-Sample Cypress test:

"js"
Copy code
describe('UI Library End-to-End Test', () => {
  it('should load the component page and render button', () => {
    cy.visit('/component-page');
    cy.get('button').contains('Click me').should('exist');
  });
});


8-Versioning: -

To automate versioning, the following command is used:

"bash"

npm version patch

#This automatically increments the version number in package.json after successful tests and before deployment.


9-Conclusion: -
This project demonstrates the ability to:

9-A Setting up and configure a React UI library with TypeScript.
9-B Implementing a CI/CD pipeline using GitLab CI for automated testing, building, and deployment.
9-C Using Jest for unit testing and Cypress for end-to-end testing.
9-D Troubleshooting various issues like missing files and publishing errors.
9-E Successfully deploy to a private NPM registry.


#Thank you.

#Omar Khaled
