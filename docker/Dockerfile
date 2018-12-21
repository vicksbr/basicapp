FROM node as builder

COPY ui/ ui/
WORKDIR /ui/
RUN npm install
RUN npm run build

FROM alpine:3.8

ENV APP_ROOT /basicapp/backend
RUN mkdir -p $APP_ROOT/ 

RUN apk add --no-cache python3

COPY backend/requirements.txt $APP_ROOT/

RUN apk update && apk add --no-cache --virtual build-deps \
	gcc \
	build-base \
	python3-dev \
	tzdata \
	&& cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
	&& echo "America/Sao_Paulo" > /etc/timezone \
	&& pip3 install --no-cache-dir -r $APP_ROOT/requirements.txt \
	&& apk del build-deps


COPY /backend $APP_ROOT/
COPY --from=builder /ui/dist/bundle.js  $APP_ROOT/server/static/bundle.js


WORKDIR $APP_ROOT/


CMD ["python3","app.py"]
