from pydantic import BaseModel

class Post(BaseModel):
    id: int
    title: str
    slug: str
    summary: str
    content: str