# database do sistema 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# conexão com o banco de dados sqlite
DATABASE_URL = "sqlite:///./workout.db"

# criação da engine de conexão 
engine = create_engine(DATABASE_URL, connect_args={
    "check_same_thread": False 
})

# Sesssão de conexão 
SessionLocal = sessionmaker(bind=engine)
#base para modelagem de dados
Base = declarative_base()
# função para injetor da sessão do fastapi
def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally: 
        db.close()