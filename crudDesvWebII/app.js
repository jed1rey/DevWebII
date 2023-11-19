document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            nomeInput: "",
            nomes: [],
        },
        methods: {
            createItem() {
                if (this.nomeInput.trim() !== '') {
                    this.nomes.push({ Nome: this.nomeInput });
                    this.nomeInput = '';
                }
            },
            
            editarNome(index) {
                const novoNome = prompt("Editar o nome:");
                if (novoNome !== null) {
                    this.nomes[index].Nome = novoNome;
                }
            },
            
            excluirNome(index) {
                this.nomes.splice(index, 1);
            },
        },
    });
});
