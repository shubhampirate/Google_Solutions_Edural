
## Installation

Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/Jenil-Savla/Google_Solutions_Edural.git
```

Switch to backend branch
```
git checkout backend
```

Navigate to the project directory:
```bash
cd Google_Solutions_Edural
```

Install the dependencies using the following command:
```bash
pip install -r requirements.txt
```
The django_app directory is the django home directory having manage.py which is used to manage the entire django project. The api subdirectory contains files related to the application programming interface (API) of the project. It includes files such as urls.py, views.py, models.py and serializers.py. The API is used to communicate with the machine learning (ML) models and the database. The ml subdirectory contains files related to the machine learning (ML) models of the project along with the datasets used. The ML models are used to provide retirement planning and investment advice to the users. Some ML models are implemented directly into django views thus the code for same is present over there. The retire_ai subdirectory contains files related to the settings and configuration of the project. The staticfiles subdirectory contains files related to the static assets of the project. These include files such as images, stylesheets and scripts. The .gitignore file lists the files to be ignored by Git. The README.md file gives a brief introduction to the project. The requirements.txt file lists the dependencies for the project.

## Usage
Run the server using the following command:
```bash
cd django_app
python manage.py runserver
```
Open your web browser and go to http://localhost:8000/ to view the project.


## Authors

- [@Jenil-Savla](https://github.com/Jenil-Savla)
