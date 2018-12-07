# basicapp

stack: flask/react/redux/mongodb/webpack/docker

A fundation for a future learning object.

This project aim to to teach the basis of good software development to people with beginner to intermediate programming skills who wants to learn lot of tools and technologies used to create cool and useful systems nowdays. 


git clone https://github.com/vicksbr/basicapp.git

build & run backend

python3 -m venv env
source /env/bin/activate
python app.py

build react devserver (w/ hot reload)

cd ui
npm install
npm run dev

----------------
install docker and docker-compose 
check if docker service is running properly
systemctl start docker 

to build docker image

docker-compose build

to run the application @ container

docker-compose up

access via http://localhost:5000
