# web-cv

An WEB based CV customizable by editing a json data file.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Work In Progress

It is still a work in progress.
Planned features:
* Fix CSS
* Improve social section with predefined icons
* Improve self-language assess table
* Document json file structure

## Prerequisites

You need node.js installed on your machine.
Run `npm start` in the root directory to install the needed packages.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Customization

Customization files are all stored inside the 'data' folder

### main.json

The main.json file is the main configuration file.
Currently the only supported attribute is 'language' which determines the folder in which other json files will be read.
For example, if you se it to 'en', all other json file will be read from the 'data/en' folder.

### labels.json

The labels.json files contains all the labels of the CV.
If you want to translate the CV to your own language, you need to create a new folder with your language name, translate the labels and save the labels.json file inside the new folder and set the language value in the main.json file.

TODO: document the labels

### data.json

The data.json file contains the data that is used to fill the CV.

TODO: document the data

## Contacts

For any information you can contact:
Fabio Carrara (fabio.carrara@gmail.com)
Daniele Formichelli (daniele.formichelli@gmail.com)
