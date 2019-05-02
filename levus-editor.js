

// модуль візвіг-едітора
;(function(){

    // створюємо елементи
    let wysiwyg = document.querySelector('.wysiwyg'),
        panel = document.createElement('div'),
        a_link = document.createElement('input'),
        a = document.createElement('button'),
        b = document.createElement('button'),
        i = document.createElement('button'),
        s = document.createElement('button'),
        img_link = document.createElement('input'),
        img = document.createElement('button'),
        u = document.createElement('button'),
        temp = document.createElement('button'),
        area = document.createElement('div'),
        save = document.createElement('input'),
        clear = document.createElement('input'),

        style = `<style>.wysiwyg{border-radius:5px;border:1px solid #ccc;padding:5px}.panel{padding:10px 0;color:#ccc}.panel input[type="text"]{padding:5px;border-radius:5px;border:1px solid #ccc}.panel button{padding:5px 10px;font-weight:600;cursor:pointer;border-radius:3px;border:1px solid #ccc;background:#fff;-webkit-transition:all 0.5s;transition:all 0.5s}.panel button:hover{border:1px solid #ea3600;color:#ea3600}.b{font-weight:800!important}.i{font-style:italic}.s{text-decoration:line-through;text-transform:uppercase}.u{text-decoration:underline}.a_link,.a,.b,.i,.s,.img_link,.img,.u,.temp{margin-right:5px}.wysiwyg .area{border-radius:5px;border:1px solid #ccc;padding:5px;width:100%;min-height:200px;resize:vertical;margin-bottom:10px}.wysiwyg .area p{padding:0 0 10px;}.wysiwyg input[type="submit"]{padding:5px 10px;font-weight:bold;cursor:pointer;border-radius:5px;border:1px solid #ccc;text-transform:uppercase; margin-right:5px}</style>`;

        // додаємо елементам атрибути
        panel.setAttribute('class', 'panel'),

        a_link.setAttribute('class', 'a_link'),
        a_link.setAttribute('type', 'text'),
        a_link.setAttribute('placeholder', 'http://'),

        a.setAttribute('class', 'a'),
        a.textContent = 'link',

        b.setAttribute('class', 'b'),
        b.textContent = 'b',

        i.setAttribute('class', 'i'),
        i.textContent = 'i',

        s.setAttribute('class', 's'),
        s.textContent = 's',

        img_link.setAttribute('class', 'img_link'),
        img_link.setAttribute('type', 'text'),
        img_link.setAttribute('placeholder', 'http://'),

        img.setAttribute('class', 'img'),
        img.textContent = 'img',

        u.setAttribute('class', 'u'),
        u.textContent = 'u',

        temp.setAttribute('class', 'temp'),
        temp.setAttribute('title', 'зарезервована кнопка'),
        temp.textContent = 'temp',

        area.setAttribute('class', 'area'),
        area.setAttribute('contentEditable', 'true'),

        save.setAttribute('class', 'save'),
        save.setAttribute('type', 'submit'),
        save.setAttribute('value', 'save'),
        save.textContent = 'save',

        clear.setAttribute('class', 'clear'),
        clear.setAttribute('type', 'submit'),
        clear.setAttribute('value', 'clear'),
        clear.textContent = 'clear';

        // додаємо на сторінку
        document.body.insertAdjacentHTML('afterBegin', style);
        panel.appendChild(a_link); // document.execCommand("CreateLink",true,'http://яваскрипт.укр/');
        panel.appendChild(a);
        panel.appendChild(b);
        panel.appendChild(i);
        panel.appendChild(s);
        panel.appendChild(img_link);
        panel.appendChild(img);
        panel.appendChild(u);
        panel.appendChild(temp);
        panel.appendChild(area);
        wysiwyg.appendChild(panel);
        wysiwyg.appendChild(area);
        wysiwyg.appendChild(save);
        wysiwyg.appendChild(clear);

        // події

        // дефолтний розділювач -- параграф
        document.execCommand("defaultParagraphSeparator", false, "p");

        // півжирний
        b.addEventListener('click', function(){
            document.execCommand("bold", false, null);
        });

        // курсив
        i.addEventListener('click', function(){
            document.execCommand("italic", false, null);
        });

        // закреслений
        s.addEventListener('click', function(){
            document.execCommand("strikeThrough", false, null);
        });            
        
        // підкреслений
        u.addEventListener('click', function(){
            document.execCommand("underline");
        }); 

        // insert image
        img.addEventListener('click', function(){
            document.execCommand("insertImage", false, img_link.value);
        });

        // insert link
        a.addEventListener('click', function(){
            document.execCommand("CreateLink",true, a_link.value);
        });
        
        // debug 

        if(localStorage.getItem('content') !== null){
            area.innerHTML = JSON.parse(localStorage.getItem('content'));
        }

        save.addEventListener('click', function(){
            if(localStorage.getItem('content') !== null){
                localStorage.removeItem('content');
                localStorage.setItem('content', JSON.stringify(area.innerHTML));
            } else {
                localStorage.setItem('content', JSON.stringify(area.innerHTML));
            }
        });

        clear.addEventListener('click', function(){
            localStorage.removeItem('content');
        });

        console.log(img_link.value);
        
}());