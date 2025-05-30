from fastapi import APIRouter, HTTPException
from app.models.post import Post

router = APIRouter()

mock_posts = [
    Post(
        id=1,
        title="Primeiro post do Dr. Decifra",
        slug="primeiro-post",
        summary="Descubra como descomplicar a IA de verdade!",
        content="Conteúdo completo do primeiro post..."
    ),
    Post(
        id=2,
        title="Como IA pode turbinar seu dia a dia",
        slug="ia-no-dia-a-dia",
        summary="Exemplos práticos de IA na vida real.",
        content="Conteúdo completo do segundo post..."
    )
]

@router.get("/posts", response_model=list[Post])
def list_posts():
    return mock_posts

@router.get("/posts/{slug}", response_model=Post)
def get_post(slug: str):
    for post in mock_posts:
        if post.slug == slug:
            return post
    raise HTTPException(status_code=404, detail="Post não encontrado")