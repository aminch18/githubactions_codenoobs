# Escola Pia Sant Anna Mataró - Tech Week
# GitHub Actions Workshop
Escola Pia Sant Anna Mataró and Plain Concepts promoted this workshop in order to introduce 
the students on software lifecycle, continous integration, continuous delivery and continuous deployment.

## Technologies used
For this uses a number of open source projects to work properly:
- [ReactJS] - Javascript library in order to apply reactive programming!
- [Jest] - Library used to test all the componenets.
- [Bootstrap] - Library used to styling our web application.

## Local Installation
This web application requires [Node.js](https://nodejs.org/) v12+ to run.
Install the dependencies and start web application.

```sh
cd ghactions_techweek
npm install
npm run start
```

## Run tests locally
This is the command in order to run the tests locally.

```sh
cd ghactions_techweek
npm run test
```

# Challenges
##### This section shows the challenges you should do, in order to understand the different topics explained in the presentation. You will realise some challenges needs to research information about GitHub workflow statements that were not showed on the presentation.
##
##
#####  Therefore, you must use this documentation in order to find what you need to achieve the challenge:
#### https://docs.github.com/es/actions/quickstart
## 1. Manual trigger
After fork the repository and cloned locally you must do the following things:
- Create new workflow file inside workflows folder.
- This workflow must be triggered manually.
- The workflow must has got a single job with 4 steps.
- All the steps must run on ubuntu-latest version.
- Write on terminal the following data:
    -  Step 1: Write the name of the event with any fancy sentence.
    -  Step 2: Write the name of the repository with any fancy sentence.
    -  Step 3: Load your repository on your agent runner.
    -  Step 4: List files in the repository

##### Clue: One of the steps must use one GitHub Action.
##
##
## 2. Scheduled workflow
With this challenge we'll learn how to run our workflow on specific times.
- Create new workflow file inside workflows folder.
- This workflow must be scheduled.
- The workflow must has got a single job with 1 step.
- The workflow must run every 5 minutes.
- All the steps must run on ubuntu-latest version.
- The step must create an issue on GiHhub using git hub commands (similar to git commands).
    -  The issue created must has got:
        -  Current date as Title.
        -  Your name as Body.

##### Clue: The commands to create issues on GitHub is easy to find using Google :)!
##
##
### 3. Triggered workflow
- Create new workflow file inside workflows folder.
- This workflow must be  triggered when an issue is created (opened) on GitHub.
- The workflow must has got a single job with 1 step.
- All the steps must run on ubuntu-latest version.
- The step must edit the existing issue adding "TechWeek" as Label.

##### Clue: The commands to edit issues on GitHub is easy to find using Google :)!
##
### 4. Dependency between Jobs
- You must edit the master.yml file.
- This workflow must be splitted on 2 jobs.
    - 1st: Apply continuous integrations. (Build)
    - 2nd: Apply continuous deployment.   (Deploy)
- All the jobs must run on ubuntu-latest version.
- The 2nd job needs the 1st one in order to use the result of the 1st one.
- You will need to use 2 github actions more one for each job in order to upload and download the built it code.

##### Clue: On DevOps world exists a thing named Artifact, in order to understand what is an Artifact basically is a compressed file with all the data that you are putting it, like when you create a ZIP file from a folder in your desktop. Try to find how to upload it and download it in order to share data between two jobs.