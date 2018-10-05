FROM node as builder

COPY /ui/ /ui/
WORKDIR /ui/
RUN npm install
RUN npm run build


FROM alpine:3.8

RUN apk add --no-cache ca-certificates python3 openssl libffi libxml2 libxslt

COPY requirements.txt /

RUN apk update && apk add --no-cache --virtual build-deps \
	linux-headers \
	gcc \
	g++ \
	build-base \
	python3-dev \
	tzdata \
	curl \
	libxml2-dev \
	libxslt-dev 

RUN pip3 install -r requirements.txt 

COPY app.py /
COPY /ui/template/index.html /ui/template/index.html
COPY --from=builder /ui/dist/bundle.js  /static

WORKDIR /

CMD ["gunicorn", "app:app", "-b", "0.0.0.0:5000"]
