import AddingNumber from '../exports/addingnumber';

console.log('Log from /imports/util.js');

export let greetUser = function()
{
    return AddingNumber(20,22);
};

export let name = 'Nutthakorn Maneewan';
export default 'Default value';