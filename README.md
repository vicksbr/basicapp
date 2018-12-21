# basicapp

stack: flask/react/redux/mongodb/webpack/docker

Fundation for a learning object about software development.

This project aim to to teach the basis of software development to people with beginner to intermediate programming skills who wants to learn lot of cool tools and modern technologies that are used to create useful applications. 

# Instructions

```bash
git clone https://github.com/vicksbr/basicapp.git
```

**Build & run backend instructions**

From root folder:

```bash
cd backend
python3 -m venv env
source /env/bin/activate
python app.py
```

**Build react devserver (w/ hot reload)**

From root folder:

```bash
cd ui
npm install
npm run dev
```
**Build docker image**
```bash
docker-compose build
```
**Run the application @ container**

```bash
docker-compose up
```
**Access via http://localhost:5000**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

