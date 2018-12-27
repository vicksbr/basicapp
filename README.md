# basicapp

stack: flask/react/redux/mongodb/webpack/docker

Fundation of a learning object about software development.


# Instructions

```bash
git clone https://github.com/vicksbr/basicapp.git
```

**Build & run backend:**

From root folder:

```bash
cd backend
python3 -m venv env
source env/bin/activate
python app.py
```

**Build & run development frontent environment:**

From root folder:

```bash
cd ui
npm install
npm run dev
```

**Run the local mongo container**

```bash
docker-compose up --build 
```
**Access via http://localhost:5000**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

