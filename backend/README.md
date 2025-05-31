# Backend FastAPI — Dr. Decifra

## Rodando localmente

```bash
# Instale o Poetry se não tiver
pip install poetry

# Instale as dependências
poetry install

# Rode a API
poetry run uvicorn app.main:app --reload