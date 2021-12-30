export function formBuild(formDef, formPosit) {
    formDef.forEach(elem => {
        if(elem.label) {
            var fLabel = document.createElement('label');
            fLabel.textContent = elem.label;
            formPosit.appendChild(fLabel);
        }; 
        if(elem.kind == 'longtext' || elem.kind == 'shorttext') {
            var fInput = document.createElement('input');
            fInput.type = 'text';
            formPosit.appendChild(fInput);
            const lineBreak = document.createElement('br');
            formPosit.appendChild(lineBreak);
        };
        if(elem.kind == 'number') {
            var fInput = document.createElement('input');
            fInput.type = 'number';      
            formPosit.appendChild(fInput);
            const lineBreak=document.createElement('br');
            formPosit.appendChild(lineBreak);
        };
        if (elem.kind == 'combo') {
            var fInput = document.createElement('select');
            formPosit.appendChild(fInput);
            const lineBreak=document.createElement('br');
            formPosit.appendChild(lineBreak);
            elem.variants.forEach(elem2 => {
              var fOption = document.createElement('option');
              fOption.setAttribute('value', elem2.value);
              fOption.textContent = elem2.text;
              fInput.appendChild(fOption);
            });
          };
          if (elem.kind == 'radio') {
            elem.variants.forEach(elem2 => {
              var fInput = document.createElement('input');
              fInput.type = 'radio';
              fInput.name = "payment";
              fInput.setAttribute('value', elem2.value);          
              var radio = document.createElement('span');
              radio.textContent = elem2.text; 
              formPosit.appendChild(fInput);
              formPosit.appendChild(radio);
              const lineBreak = document.createElement('br');
              formPosit.appendChild(lineBreak);
            });
          }; 
          if (elem.kind == 'check') {
            var fInput = document.createElement('input');
            fInput.type = 'checkbox'; 
            formPosit.appendChild(fInput);
            const lineBreak = document.createElement('br');
            formPosit.appendChild(lineBreak);
          };
          if (elem.kind == 'memo') {
            var fInput = document.createElement('textarea');
            fInput.classList.add('textA');
            formPosit.appendChild(fInput);
            const lineBreak = document.createElement('br');
            formPosit.appendChild(lineBreak);
          };
          if (elem.kind == 'submit') {
            var fCaption = document.createElement('a');
            fCaption.textContent = elem.caption;
            fCaption.classList.add('btn');
            formPosit.appendChild(fCaption);
          };
          if (elem.name == 'sitename') {
            fInput.name='sitename';
          };
          if (elem.name == 'siteurl') {
            fInput.name='siteurl';
          };
          if (elem.name == 'visitors') {
            fInput.name='visitors';
          };
          if (elem.name == 'email') {
            fInput.name='email';
          };
          if (elem.name == 'division') {
            fInput.name='division';
          };
          if (elem.name == 'votes') {
            fInput.name='votes';
          };
          if (elem.name == 'description') {
            fInput.name='description';
          };    
          if (elem.name == 'lastname') {
            fInput.name='lastname';
          };
          if (elem.name == 'firstname') {
            fInput.name='firstname';
          };
          if (elem.name == 'secondname') {
            fInput.name='secondname';
          };
          if (elem.name == 'age') {
            fInput.name='age';
          };   
        });
}
