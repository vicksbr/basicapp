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
	libxslt-dev \
	&& cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
	&& echo "America/Sao_Paulo" > /etc/timezone \
	&& pip3 install -r requirements.txt \
	&& apk del build-deps \
	&& mkdir /credentials


COPY . .


FROM node:latest AS npm

COPY ui/ /ui/
WORKDIR /ui
RUN npm install --production
RUN npm run build

EXPOSE 5000
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:5000"]

