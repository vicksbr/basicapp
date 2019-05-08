# basicapp

Fundation for a learning object about software development.

stack used: flask/react/redux/mongodb/webpack/docker



# Instructions for development environment

```bash
git clone https://github.com/vicksbr/basicapp.git
```

**Build & run backend instructions**
```bash
cd backend 
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python app.py
```

**Build react devserver (w/ hot reload)**
```bash
cd ui
npm install
npm run dev
```
**Run docker-compose to start mongodb container**

```bash
docker-compose up
```
**Access via http://localhost:5000**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

