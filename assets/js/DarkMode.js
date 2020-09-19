const darkToggler = document.getElementById('darkMode');

darkToggler.addEventListener('change',()=>{
    document.body.classList.toggle('dark');
    document.getElementById('darkMode-label').classList.toggle('light');
})