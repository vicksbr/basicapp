# basicapp

stack: flask/react/redux/mongodb/webpack/docker

Fundation for a learning object about software development.

This project aim to to teach the basis of software development to people with beginner to intermediate programming skills who wants to learn lot of cool tools and modern technologies used to create useful systems. 

# Instructions

```bash
git clone https://github.com/vicksbr/basicapp.git
```
build & run backend instructions
```bash
python3 -m venv env
source /env/bin/activate
python app.py
```

build react devserver (w/ hot reload)
```bash
cd ui
npm install
npm run dev
```
to build docker image
```bash
docker-compose build
```
to run the application @ container

```bash
docker-compose up
```

access via http://localhost:5000
