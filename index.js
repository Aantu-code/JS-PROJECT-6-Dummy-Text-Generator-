const dummyText = [
    'Cupcake ipsum dolor sit amet halvah pastry muffin sugar plum. Jujubes bonbon carrot cake biscuit bonbon. Cake I love I love liquorice I love bear claw macaroon gummies chupa chups. Marshmallow chocolate bar marzipan icing soufflé candy.',

    'Bonbon pie pie lollipop shortbread shortbread sesame snaps croissant. Brownie sweet roll jelly beans cupcake cake cupcake pie. Dragée croissant apple pie chocolate cake sugar plum.',

    'Carrot cake dragée candy canes soufflé cupcake. Danish I love chocolate cake chupa chups cookie tiramisu fruitcake. Wafer toffee sesame snaps biscuit dessert cookie I love gummi bears. Cupcake topping caramels ice cream jelly I love pudding chupa chups.',

    'Chocolate tart tart candy liquorice gummies. Macaroon tart chupa chups bonbon I love tiramisu chocolate cake. Danish tootsie roll cake jelly candy canes gingerbread sesame snaps gingerbread.',

    'Candy canes pudding pastry cheesecake biscuit. Cheesecake lollipop candy caramels jelly-o croissant. I love jelly brownie donut jujubes icing danish. Croissant lemon drops pudding dragée jujubes marzipan pastry muffin.',

    'Bonbon shortbread I love apple pie toffee jelly croissant I love gummi bears. Bonbon brownie toffee sweet I love I love ice cream. I love croissant biscuit toffee bonbon topping candy canes.',

    'Cake cake apple pie halvah halvah. Cake dragée powder pudding biscuit cake I love sweet roll. Croissant tart cotton candy marzipan ice cream jujubes sweet carrot cake.',

    'Brownie I love cotton candy I love toffee. Ice cream candy toffee halvah gummi bears fruitcake danish jelly-o. Wafer bonbon caramels chupa chups chocolate bar macaroon candy canes cupcake. Cake gingerbread brownie sugar plum ice cream jelly-o sweet roll.',
    
    'Donut cupcake icing brownie jelly beans tootsie roll. I love cookie biscuit gummies muffin candy canes chocolate bar. Gummi bears cotton candy biscuit lemon drops carrot cake I love cake. Tootsie roll I love biscuit I love topping lemon drops.'
]

const form = document.querySelector('#from');

const amount = document.querySelector('#amount');

const result = document.querySelector('#result');

form.addEventListener('submit', (e)=>{
e.preventDefault();
const value =parseInt(amount.value);
// console.log(value)
const rendom =Math.floor(Math.random() * dummyText.length);
// console.log(rendom)
if(isNaN(value) || value <= 0 || value > 9){
result.innerHTML = `<p>${dummyText[rendom]}</p>`
}else{
    const sliceArrey = dummyText.slice(0, value)
  const finalArry = sliceArrey.map((singleDummy)=>{
    return ` <p>${singleDummy}</p> <br>`
  }).join('');
 result.innerHTML = finalArry;
}
})