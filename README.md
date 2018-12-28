# TechForSocial


## Installation Instructions
Clone this repository
`$ git clone https://github.com/TejasBhitle/TechForSocial.git`
### Frontend
1. `cd frontend`
2. Run `npm install`. This wil install the dependencies.
3. Run `ng serve` to run the server.<br>PS:- We are using [Angular-Cli](https://cli.angular.io/) for developing angular.

### Backend
1. `cd backend`
2. Create a virtual env with the name 'backend_venv' using cmd `virtualenv -p python3 backend_venv`
3. Now activate the virtual enviroment `source backend_venv/bin/activate`
4. Now install the dependencies `pip3 install -r requirements.txt`
5. `cd backend_src`
6. Start the server `python3 manage.py runserver`

#### Other Instructions
1. After installing any new dependencies using pip3, run `pip3 freeze > requirements.txt` in backend directory. This command will update the existing requirements.txt with the newly installed dependencies.
2. To deactivate virtual enviroment, run `deactivate`.
