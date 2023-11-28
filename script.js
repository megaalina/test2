'use strict'

// //Класс, который представляет сам тест
// class Quiz
// {
//    constructor(type, questions, results)
//    {
//        //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
//        this.type = type;
 
//        //Массив с вопросами
//        this.questions = questions;
 
//        //Массив с возможными результатами
//        this.results = results;
 
//        //Количество набранных очков
//        this.score = 0;
 
//        //Номер результата из массива
//        this.result = 0;
 
//        //Номер текущего вопроса
//        this.current = 0;
//    }
 
//    Click(index)
//    {
//        //Добавляем очки
//        let value = this.questions[this.current].Click(index);
//        this.score += value;
 
//        let correct = -1;
 
//        //Если было добавлено хотя бы одно очко, то считаем, что ответ верный
//        if(value >= 1)
//        {
//            correct = index;
//        }
//        else
//        {
//            //Иначе ищем, какой ответ может быть правильным
//            for(let i = 0; i < this.questions[this.current].answers.length; i++)
//            {
//                if(this.questions[this.current].answers[i].value >= 1)
//                {
//                    correct = i;
//                    break;
//                }
//            }
//        }
 
//        this.Next();
 
//        return correct;
//    }
 
//    //Переход к следующему вопросу
//    Next()
//    {
//        this.current++;
      
//        if(this.current >= this.questions.length)
//        {
//            this.End();
//        }
//    }
 
//    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
//    End()
//    {
//        for(let i = 0; i < this.results.length; i++)
//        {
//            if(this.results[i].Check(this.score))
//            {
//                this.result = i;
//            }
//        }
//    }
// }

// //Класс, представляющий вопрос
// class Question
// {
//    constructor(text, answers)
//    {
//        this.text = text;
//        this.answers = answers;
//    }
 
//    Click(index)
//    {
//        return this.answers[index].value;
//    }
// }
 
// //Класс, представляющий ответ
// class Answer
// {
//    constructor(text, value)
//    {
//        this.text = text;
//        this.value = value;
//    }
// }
 
// //Класс, представляющий результат
// class Result
// {
//    constructor(text, value)
//    {
//        this.text = text;
//        this.value = value;
//    }
 
//    //Этот метод проверяет, достаточно ли очков набрал пользователь
//    Check(value)
//    {
//        if(this.value <= value)
//        {
//            return true;
//        }
//        else
//        {
//            return false;
//        }
//    }
// }

class Question {
    #arr = [
        {title: 'майже ніколи', status: false, class: 'answer1',  color: 'color1', id: 1},
        {title: 'іноді', status: false, class: 'answer2', color: 'color1', id: 2},
        {title: 'часто', status: false, class: 'answer3', color: 'color1', id: 3},
        {title: 'майже завжди', status: false, class: 'answer4',color: 'color1', id: 4}

    ]

   
    constructor(){
        this.wrapper = document.querySelector('.wrapper');
        this.container = document.querySelector('.container');
        this.container2 = this.wrapper.querySelector('.container2');
        this.question = this.container2.querySelector('.question');
        this.counter = this.container2.querySelector('.counter');
        this.counterP = this.counter.querySelector('.counter_p');
        this.test1 = this.wrapper.querySelector('.test1');
        this.test2 = this.wrapper.querySelector('.test2');
        this.test3 = this.wrapper.querySelector('.test3');
        this.test4 = this.wrapper.querySelector('.test4');
        this.test5 = this.wrapper.querySelector('.test5');
        this.test6 = this.wrapper.querySelector('.test6');
        this.test7 = this.wrapper.querySelector('.test7');
        this.test8 = this.wrapper.querySelector('.test8');
        this.test9 = this.wrapper.querySelector('.test9');
        this.test10 = this.wrapper.querySelector('.test10');
        this.form = document.querySelector('.form');
        this.btn = document.querySelector('form');
        this.flexContainer = document.querySelector('.flex_container');
        this.modal1 = this.flexContainer.querySelector('.modal1')
        this.modal2 = this.flexContainer.querySelector('.modal2')
        this.modal3 = this.flexContainer.querySelector('.modal3')
        this.scroll = this.container2.querySelector('.scroll')
        this.ulScroll = this.container2.querySelector('.ul_scroll')
    }

    toggleQuestion(e){
        
        const arrQuestion = [
            'Мої реакції на конфлікти  значно гостріші, аніж повинні бути.',
            'Коли я знаходжуся в конфліктній ситуації, я переживаю відчуття, які нагадують мені про те, як я себе почував (-ла) у минулих конфліктах.',
            'У конфліктній ситуації я помічаю, що фокусую увагу на тому, що говорить або робить інший.',
            'Я помічаю, що використовую гучні вирази для опису мого конфлікту з іншими, такі як “завжди” або “ніколи”.',
            'В інших я помічаю позитивні якості, яких не знаходжу у собі.',
            'В інших я помічаю негативні риси, які мені важко прийняти у собі.',
            'Мені важко визнавати помилку. Замість цього я одразу звертаю увагу на щось, що зробив або сказав хтось інший, покладаючи на нього вину за помилку.',
            'Я відключаюся, коли хтось говорить мені щось, чого я не хочу чути.',
            'Коли я знаю, що не подобаюсь комусь, я уникаю таких людей, тікаю від них як від чуми.',
            'Я помічаю, що виголошую моральні судження про характер або поведінку людей, які мені не подобаються.'
        ];



        this.btn.onclick = e => this.question.innerHTML = arrQuestion.shift();



}

toggleCount(){
    const arrQuestion = [
        '1 / 10',
        '2 / 10',
        '3 / 10',
        '4 / 10',
        '5 / 10',
        '6 / 10',
        '7 / 10',
        '8 / 10',
        '9 / 10',
        '10 / 10'
    ];



    this.form.onclick = e => this.counterP.innerHTML = arrQuestion.shift();
    console.log(this.#arr)

}

createLi(){
    let str = '';
    
    this.#arr.forEach(elem => {
        str += `<li class="${elem.class} ${elem.color} ${this.isSelect(elem)}">${elem.title}</li>`;
       
    });
    
    this.ulScroll.innerHTML = str;

    // this.flex_container.style.display = 'none';
    // this.modal1.style.display = 'none';
    // this.modal2.style.display = 'none';
    // this.modal3.style.display = 'none';
    
}





isSelect(elem){
    if(elem.status === true){
        return 'color2';
    } else {
        return 'color1';
    }
}

selectElement(e){
    
    let i = [... this.ulScroll.children].indexOf(e.target);
    // console.log(i);
    let elI = +this.#arr[i].id;
    

    if(this.#arr[i]){
        this.scroll.classList.toggle(`scroll${i}`);
        let arr = [elI, elI, elI, elI, elI,
            elI, elI, elI, elI, elI ];


let result = arr.reduce((sum, current) => sum + current);

console.log( result );
if(result <= 20){
    this.wrapper.style.display = 'none';
    this.flexContainer.style.display = null;
    this.modal1.style.display = null

}else if(result <= 30){
    this.wrapper.style.display = 'none';
    this.flexContainer.style.display = null;
    this.modal2.style.display = null

} else{
    this.wrapper.style.display = 'none';
    this.flexContainer.style.display = null
    this.modal3.style.display = null
}
    }




    this.#arr[i].status = true;
    this.#arr[i].color = 'color2'
    console.log(this.#arr);
    this.ulScroll.innerHTML = '';
    this.createLi();
}

deleteElement(e){
let t = e.target;

if(t.matches('.delete2') || t.matches('modal2_delete2')){
    this.flexContainer.style.display = 'none'
}
}
    init(){
        console.log(this);
        console.log(this.#arr)
        
        this.toggleQuestion();
        this.toggleCount();
        this.ulScroll.addEventListener('click', this.selectElement.bind(this));
        this.flexContainer.addEventListener('click', this.deleteElement.bind(this));
        // this.selectElementNull()
        this.createLi();
        
    }
}
