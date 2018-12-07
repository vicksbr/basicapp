# basicapp

stack: flask/react/redux/mongodb/webpack/docker

Fundation for a learning object about software development.

This project aim to to teach the basis an approach to software development to people with beginner to intermediate programming skills who wants to learn lot of cool tools and mordern technologies used to create useful systems. 


git clone https://github.com/vicksbr/basicapp.git

build & run backend instructions

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
