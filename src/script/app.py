# Lucas Santana Silva - RM: 566261
# Pedro Henrique Lamin Rodrigues - RM: 566379


from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

grav = []

# Função principal
@app.route('/index', methods=['POST'])
def main():

# Busca o formulário que o usuário enviou
    altura = request.form.get('altura', '')
# Estruturas condicionais
    if altura == 'Canela':
        gravidade = 'Baixa prioridade, defesa cívil acionada'
    elif altura == 'Joelho':
        gravidade = 'Média prioridade, defesa cívil acionada'
    elif altura == 'Cintura':
        gravidade = 'Alta prioridade, defesa cívil chegará em breve'
    elif altura == 'Peito':
        gravidade = 'Crítica, defesa cívil a caminho'
    else:
        gravidade = 'Inválido'

    grav.append(gravidade)

# Chama a função 'calculos' abaixo
    calculos()

# Transforma 'gravidade' em JSON para enviar de volta ao front-end
    return jsonify({'gravidade': gravidade})


def calculos():

# Estruturas de repetição para fazer a soma dos chamados por categoria
    baixa = []
    for a in grav:
        if a == "Baixa prioridade, defesa cívil acionada":
            baixa.append(a)
    media = []
    for b in grav:
        if b == "Média prioridade, defesa cívil acionada":
            media.append(b)
    alta = []
    for c in grav:
        if c == "Alta prioridade, defesa cívil chegará em breve":
            alta.append(c)
    critica = []
    for d in grav:
        if d == "Crítica, defesa cívil a caminho":
            critica.append(d)

    print(f"Total de casos de baixa prioridade: {len(baixa)}")
    print(f"Total de casos de média prioridade: {len(media)}")
    print(f"Total de casos de alta prioridade: {len(alta)}")
    print(f"Total de casos críticos: {len(critica)}")


# Roda o código caso esse arquivo seja rodado diretamente e não importado
if __name__ == "__main__":
    app.run(debug=True)




