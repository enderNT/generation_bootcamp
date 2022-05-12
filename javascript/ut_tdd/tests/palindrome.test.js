//importar 
const {palindrome}=require('../pruebas_unitarias');
test ('palindrome de generation', ()=>{
    const resultado=palindrome('generation');
    expect(resultado).toBe('noitareneg');
});

test ('palindrome usando un string vacio', ()=>{
    const resultado=palindrome('');
    expect(resultado).toBe('');
});
test ('palindrome usando undefine', ()=>{
    const resultado=palindrome();
    expect(resultado).toBe();
});
