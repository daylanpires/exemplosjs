// Função swap: troca os valores de duas posições de um vetor
const swap = (vetor, posicao1, posicao2) => {
    [vetor[posicao1], vetor[posicao2]] = [vetor[posicao2], vetor[posicao1]];
};

// Função shuffle: embaralha os elementos de um vetor
const shuffle = (vetor, quantidadeTrocas) => {
    for (let i = 0; i < quantidadeTrocas; i++) {
        const posicaoAleatoria1 = Math.floor(Math.random() * vetor.length);
        const posicaoAleatoria2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, posicaoAleatoria1, posicaoAleatoria2);
    }
};

// Função bubble_sort: ordena um vetor de inteiros com o algoritmo Bubble Sort
const bubble_sort = vetor => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// Função selection_sort: ordena um vetor de inteiros utilizando o algoritmo Selection Sort
const selection_sort = vetor => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (menor !== i) {
            swap(vetor, i, menor);
        }
    }
};

// Função quick_sort: ordena um vetor de inteiros com o algoritmo Quick Sort, recursivo
const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
        const indicePivot = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, indicePivot - 1);
        quick_sort(vetor, indicePivot + 1, fim);
    }
};

// Função particionamento: função de apoio ao quick_sort
const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// Função para adicionar valor à lista
function add() {
    const valor = parseInt(document.getElementById('valor').value);
    const lista = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(valor);
    node.appendChild(textNode);
    lista.appendChild(node);
}

// Função para ordenar a lista
function ordenar() {
    const lista = document.getElementById('valores');
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    const tipoOrdenacao = document.getElementById('ordenacao').value;
    
    switch (tipoOrdenacao) {
        case 'bubble_sort':
            bubble_sort(valores);
            break;
        case 'selection_sort':
            selection_sort(valores);
            break;
        case 'quick_sort':
            quick_sort(valores);
            break;
        default:
            break;
    }

    lista.innerHTML = '';
    valores.forEach(valor => {
        const node = document.createElement('li');
        const textNode = document.createTextNode(valor);
        node.appendChild(textNode);
        lista.appendChild(node);
    });
}

// Função para misturar a lista
function misturar() {
    const lista = document.getElementById('valores');
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(valores, valores.length * 2);
    lista.innerHTML = '';
    valores.forEach(valor => {
        const node = document.createElement('li');
        const textNode = document.createTextNode(valor);
        node.appendChild(textNode);
        lista.appendChild(node);
    });
}
