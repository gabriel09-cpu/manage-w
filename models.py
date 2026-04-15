# Modelagem de Dados para o Banco 
from sqlalchemy import Column,Integer,String
from database import Base, engine, SessionLocal


# tabela de exercicios
class Exercises(Base):
    __tablename__="execises"
    id= Column(Integer, primary_key=True, index=True)
    name= Column(String, nullable=False)
    description= Column(String, nullable=False)
    categoria = Column(String, nullable=False)
    image=Column(String, nullable=True)


    # 1. Criar uma nova sessão
db = SessionLocal()

try:
    # 2. Criar o objeto com os dados fornecidos
    novo_exercicio = Exercises(
        name="Agachamento Livre",
        description="O Agachamento é um exercício de musculação... focado nas pernas.",
        categoria = "Perna",
        image="uploads/Agachamento.gif"
    )

    # 3. Adicionar e confirmar a transação
    db.add(novo_exercicio)
    db.commit()
    db.refresh(novo_exercicio) # Atualiza o objeto com o ID gerado pelo banco
    
    print(f"Exercício '{novo_exercicio.name}' cadastrado com sucesso! ID: {novo_exercicio.id}")

except Exception as e:
    db.rollback() # Cancela a operação em caso de erro
    print(f"Erro ao salvar: {e}")

finally:
    db.close() # Sempre feche a conexão


Base.metadata.create_all(bind=engine)