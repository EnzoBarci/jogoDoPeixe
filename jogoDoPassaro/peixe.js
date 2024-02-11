var config = {
type: Phaser.AUTO,
width: 800,
height: 600,

scene: {
preload: preload,
create: create,
update: update
}
};

var game = new Phaser.Game(config);

var peixinho;

function preload(){
    this.load.image("mar", "assets/bg_azul-claro.png");
    
    //carregar o logo
    this.load.image("logo", "assets/logo-inteli_azul.png")

    //carregar o peixe
    this.load.image("peixe", "assets/peixes/tartaruga.png");

    this.load.image("corais", "assets/peixes/corais.png");

    this.load.image("estrela", "assets/peixes/estrela.png");

}

function create(){
    this.add.image(400, 300, "mar");

    //adicionar o logo na tela
    this.add.image(400, 525, "logo").setScale(0.5);


    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, "peixe");

    //transformando a variável
    peixinho.setFlip(true, false);

    corais = this.add.image(120, 520, "corais").setScale(0.5);

    corais.setFlip(true, false);

    estrela = this.add.image(700, 500, "estrela").setScale(0.3);

    estrela.setFlip(true, false);

}

function update(){

    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}