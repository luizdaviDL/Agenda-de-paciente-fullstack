links = 'paciente.html'
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.paciente.html) {
        document.links[i].className = 'link_paciente';
        document.querySelectorAll('.vertical .navbar a.link_agenda')[i].removeAttribute('class');
        console.log('ativo')
    }
} 