(function() {
    const allElements = document.querySelectorAll('.w3-code');

    let content = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>W3Schools HTML Elements</title></head><body>';
    
    allElements.forEach(element => {
        content += element.outerHTML;
    });
    
    content += '</body></html>';
    
    const anchor = document.createElement('a');
    const file = new Blob([content], { type: 'text/html' });
    
    anchor.href = URL.createObjectURL(file);

    anchor.download = 'pagina.html';
    document.body.appendChild(anchor);
    anchor.click();
    
    document.body.removeChild(anchor);
    
    console.log("Arquivo HTML com todos os elementos baixado com sucesso!");
})();

for (name : url){
    'https://www.w3schools.com/tags/tag_${name}.asp'
}