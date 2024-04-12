FROM python:3.9
LABEL maintainer = "athenasquare.org"

WORKDIR /app

ENV PYTHONUNBUFFERED 1

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apt update && \
    apt install -y postgresql-client libpq-dev gcc

COPY ./requirements.txt /tmp/requirements.txt

RUN /py/bin/pip install -r /tmp/requirements.txt

ARG DEV=false

COPY ./app /app

# RUN /py/bin/python /app/manage.py collectstatic --noinput

ENV PATH="/py/bin:$PATH"

RUN cd /app

USER root