from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import blog

app = FastAPI(
    title="API Dr. Decifra",
    description="Descomplicando a IA com ciência, bom humor e os códigos certos!",
    version="0.1.0"
)

# CORS para o frontend Next.js (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(blog.router, prefix="/api/v1", tags=["blog"])

@app.get("/")
def read_root():
    return {"message": "Dr. Decifra API rodando! Bora descomplicar?"}