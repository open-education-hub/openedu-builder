FROM python:3.10-slim as base

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER=1 
ENV PYTHONUNBUFFERED=1 
ENV PYTHONHASHSEED=random 
ENV PIP_NO_CACHE_DIR=off 
ENV PIP_DISABLE_PIP_VERSION_CHECK=on 
ENV PIP_DEFAULT_TIMEOUT=100


FROM base as poetry
ENV POETRY_VERSION=1.2.0

RUN apt-get update && apt-get install -y curl
RUN curl -sSL https://install.python-poetry.org | python -
ENV PATH="${PATH}:/root/.local/bin"

WORKDIR /app
COPY poetry.lock pyproject.toml /app/

RUN poetry config virtualenvs.create false \
    && poetry install --no-root --no-dev --no-interaction --no-ansi

COPY . /app

RUN poetry build


FROM base as final
COPY --from=poetry /app/ /app/
WORKDIR /app
RUN pip install dist/*.whl

ENTRYPOINT ["/bin/bash"]
