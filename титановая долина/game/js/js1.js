const button = document.getElementById('game_start');
const box_fon_scrol = document.getElementById('box_fon_scrol');
const block_question = document.getElementById('block_question');
const monstr_box = document.getElementById('monstr_box');
const block_game = document.getElementById('block_game');
const game_vin = document.getElementById('game_vin');

var global_funk_game;
var game_over_time;
var finish = 0;

g = '';
var i = 0;
tru_answer = [1, 2, 1, 1, 0, 0, 0, 1, 0, 1]
write_funk_question = function(){
  block_question.style.display = `block`;
}
game_over = function(i){
  clearTimeout(global_funk_game)
  if (tru_otv == 0 && finish == 0){
    g = ''
    g += 
    `<div id="all_block_level">
        <p id="text_levels">${i}/10</p>
        <div id="block_level_question"><div id="block_in_level_timer"></div></div>
    </div>`;
    block_question.innerHTML = `${g}`;
    const block_in_level_timer = document.getElementById('block_in_level_timer');
    block_in_level_timer.style.width = `${i}0%`;
    pos -= 30;
    box_fon_scrol.style.transition =  `0.5s linear`;
    monstr_box.style.transition =  `0.5s linear`;
    box_fon_scrol.style.transform = `translateX(${pos}%)`;
    monstr_box.style.transform = `translateX(${pos}%)`;
    finish = 1
    setTimeout(function(){
      personag_box.innerHTML = `<img src="image/pers1.png" alt="" class="personag" id="rers_jamp">` 
    }, "500")
    const game_over_block = document.getElementById('game_over_block');
    game_over_block.innerHTML = 
    `<p>Неправильно</p>
    <p id="text_levels_loss">ВАШ РЕЗУЛЬТАТ - ${i - 1}/10</p>`
  }
}
question = [
  "Кто ставит тебе задачи на месяц и согласует итоги работы?",
  "Кто является твоим наставником в период испытательного срока по всем общим вопросам, связанным с жизнедеятельностю в офисе?",
  "К кому из сотрудников компании ты можешь обратиться, если у тебя возникли проблемы с техникой: компьютером/телефоном?",
  'В каких муниципальных образованиях расположены площадки ОЭЗ "Титановая долина"',
  "Укажи полное фирменное и сокращенное наименование Общества",
  'Срок существования ОЭЗ "Титановая долина"',
  'Год создания площадки "Верхняя Салда"',
  'Год создания площадки "Уктус"',
  'Ежегодный основной оплачиваемый отпуск в Компании составляет',
  'С какой периодичностью и когда выплачивается  заработная плата сотруднику?'
]
umov_answer_question = [
  "начальник отдела по работе с персоналом",
  'непосредственный руководитель',
  'генеральный директор',
  'непосредственный руководитель',
  'начальник отдела по работе с персоналом (Наумова Анна)',
  'менеджер отдела по работе с персоналом (Косман Наталья)',
  'к начальнику отдела по работе с персоналом',
  'к системному администратору',
  'к непосредственному руководителю',
  'Верхнесалдинский городской округ',
  'Сысертский городской округ',
  'Муниципальное образование "город Екатеринбург"',
  'Акционерное общество "Особая экономическая зона "Титановая долина"/АО "ОЭЗ "Титановая долина"',
  'Открытое акционерное общество "Особая экономическая зона "Титановая долина"/ОАО "ОЭЗ "Титановая долина"',
  'Публичное акционерное общество "Особая экономическая зона "Титановая долина"/ПАО "ОЭЗ "Титановая долина"',
  '49 лет',
  '15 лет',
  '39 лет',
  '2010',
  '2012',
  '2018',
  '2019',
  '2018',
  '2020',
  '31 календарный день',
  '28 календарных дней',
  '35 календарных дней',
  '1-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 15-го числа расчетного месяца за первую половину месяца',
  '10-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 25-го числа расчетного месяца за первую половину месяца',
  '5-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 20-го числа расчетного месяца за первую половину месяца'
]
for(n = 0; n < 13; n++){
  g += '<img src="image/1.png" alt="" class="fon"></img>'
  g += '<img src="image/2.png" alt="" class="fon"></img>'
  g += '<img src="image/3.png" alt="" class="fon"></img>'
box_fon_scrol.innerHTML = `${g}`;
}
g = '<img src="image/monstr1.png" alt="" class="monstr">'
for(n = 0; n < 10; n++){
  g += '<img src="image/monstr6.png" alt="" class="monstr">'
monstr_box.innerHTML = `${g}`;
}
pos = 0;
tru_otv = 0
const personag_box = document.getElementById('personag_box');
button.onclick = function(){
  button.style.display = `none`;
  block_question.style.display = `block`;
  personag_box.innerHTML = `<img src="image/pers2.gif" alt="" class="personag" id="rers_jamp">`
  const pers = document.getElementsByClassName('personag');
  pers[0].style.width = `10vw`;
  pers[0].style.marginLeft = `3vw`;
  pers[0].style.marginTop = `-2vw`;
  var i=0;
game_over_stot = 0
function f(){
      if (i > 9){
        pos -= 400;
        box_fon_scrol.style.transform = `translateX(${pos}%)`;
        monstr_box.style.transform = `translateX(${pos}%)`;
        game_vin.style.display = `block`;
        block_question.style.display = `none`;
        setTimeout(function(){
          personag_box.innerHTML = `<img src="image/pers1.png" alt="" class="personag" id="rers_jamp">` 
        }, "5000")
        return
      }
      pos -= 400;
      box_fon_scrol.style.transform = `translateX(${pos}%)`;
      monstr_box.style.transform = `translateX(${pos}%)`;
      g = ''
      g += 
      `<div id="all_block_level">
            <p id="text_levels">${i + 1}/10</p>
            <div id="block_level_question"><div id="block_in_level_timer"></div></div>
        </div>`;
      g += `<p class="umov_question">${question[i]}</p>`
      g += 
      `<div class="var_vidp_block">
        <button class="button_answer_question"></button>
        <p class="umov_answer_question">${umov_answer_question[i * 3]}</p>
      </div>
      <div class="var_vidp_block">
        <button class="button_answer_question"></button>
        <p class="umov_answer_question">${umov_answer_question[i * 3 + 1]}</p>
      </div>
      <div class="var_vidp_block">
        <button class="button_answer_question"></button>
        <p class="umov_answer_question">${umov_answer_question[i * 3 + 2]}</p>
      </div>`;
      g += `<button class="ans_question">Отправить</button>`
      block_question.style.display = `none`;
      block_question.innerHTML = `${g}`;
      const button_var_answer = document.getElementsByClassName('button_answer_question');
      const block_in_level_timer = document.getElementById('block_in_level_timer');
      block_in_level_timer.style.width = `${i + 1}0%`;
      setTimeout(write_funk_question, "5000")
      activ = [0, 0, 0]
      go = 0
      var ii = 0
      for (; button_var_answer[ii].setAttribute("onclick", "game_var_click(" + ii + ")"), ++ii < button_var_answer.length;);
        game_var_click = function(n){
          if (activ[n] == 0){
            activ = [0, 0, 0]
            activ[n] = 1
          }
          else{
            activ = [0, 0, 0]
          }
          for(ii = 0; ii < 3; ii++){
            if (activ[ii] == 1){
             button_var_answer[ii].style.backgroundColor= `#F5D542`;
            }
            else{
              button_var_answer[ii].style.backgroundColor= `#FFFFFF`;
            }
          }
        }
      const ans_question = document.getElementsByClassName('ans_question');
      ans_question[0].onclick = function(){
        go = 1
        if (activ[0] == 1 || activ[1] == 1 || activ[2] == 1){
          check_in_time = function(i, activ, tru_answer){
            if (((activ[0] == 0 && activ[1] == 0 && activ[2] == 0)  && i != 0) || ((activ[tru_answer[i - 1]] == 0) && i != 0)){
              game_over(i)
            }
            else{
              tru_otv = 1;
              pers_jamp_in_funk = document.getElementById("rers_jamp");
              pers_jamp_in_funk.classList.add("jamp");
              // .className = 'foo';
              setTimeout(function(){
                pers_jamp_in_funk.classList.remove("jamp");
              }, "1000")
              clearTimeout(game_over_time)
              game_over(i)
              f()
            }
          }
          check_in_time(i, activ, tru_answer)
        }
      }
      game_over_time = setTimeout(function(){
        game_over(i);
      }, "20000");
      if (game_over_stot < 0 && tru_otv != 0 && go == 1){
        clearTimeout(game_over_time)

      }
      tru_otv = 0
      game_over_stot += 1
      i=i+1; if (i<10) global_funk_game = setTimeout(f, "20000");
  };
  f();
}