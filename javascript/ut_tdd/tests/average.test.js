
const {average}=require('../pruebas_unitarias');
describe('average', ()=>{
    test('ingresar unvalor', ()=>{
        const resultado=average([1]);
        expect(resultado).toBe(1)
    })
    test('ingresar multiples valores', ()=>{
        const resultado=average([1]);
        expect(average([1,2,3,4,5,6])).toBe(3.5)
    })
    test('ingresar un valor undefine',()=>{
        const resultado=average();
        expect().toBeUndefined();
    })
})
