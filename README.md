## Installation
* **_before you run, make sure you have npm_**
    $ git clone git@github.com:nesatuf/amazon-login.git
    $ npm install -g testcafe 

## How to run

    $ cd amazon-login
    $ DOMAIN="https://amazon.com" EMAIL="YOUR-AMAZON-EMAIL" PASSWORD="YOUR-AMAZON-PASSWORD" USER_NAME="YOUR-AMAZON-USER-NAME" testcafe chrome -S -s reports

## Run with docker

* **_before you run, make sure you have successfully install and start docker_**
* **_we are using testcafe's offical container_**
* **_-e parameter is for process.env arguments, you can pass all variables on config_**
* Second command, runs tests tagged with **Smoke - UI** and exports the report to current directory into _/reports/_ 

        $ docker pull testcafe/testcafe
        $ docker run -e "PASSWORD='YOUR-AMAZON-PASSWORD' EMAIL='YOUR-AMAZON-EMAIL' DOMAIN='AMAZON-URL' USER_NAME='YOUR-AMAZON-USER-NAME'" -v ${PWD}/:/amazon-login/ -it testcafe/testcafe 'chromium --disable-dev-shm-usage' amazon-login/ cat /reports/ ${PWD}/amazon-login/reports/
    