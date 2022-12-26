const button = document.getElementById('game_start');
const box_fon_scrol = document.getElementById('box_fon_scrol');
const block_question = document.getElementById('block_question');
g = '';
tru_answer = [1, 2, 1, 0, 0, 0, 0, 1, 0, 1]
game_over = function(){
  alert('game over')
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
for(n = 0; n < 15; n++){
  g += '<img src="image/fon_trac.png" alt="" class="fon"></img>'
  box_fon_scrol.innerHTML = `${g}`;
}
pos = 0;
button.onclick = function(){
  button.style.display = `none`;
  block_question.style.display = `block`;
  var i=0;
  f=function(){
      pos -= 200;
      box_fon_scrol.style.transform = `translateX(${pos}%)`;
      g = ''
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
      setTimeout(block_question.innerHTML = `${g}`, "2000")
      const button_var_answer = document.getElementsByClassName('button_answer_question');
      activ = [0, 0, 0]
      go = 0
      stop_var = 0
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
      stop_var = ans_question[0].onclick = function(){
        if (activ[0] == 1 || activ[1] == 1 || activ[2] == 1){
          go = 1
          alert(activ)
          alert(go)
          check_in_time = function(i, activ, go){
            alert(activ + "aaa")
            alert(i)
            alert(tru_answer[i])
            if (((activ[0] == 0 && activ[1] == 0 && activ[2] == 0)  && i != 0) || ((activ[tru_answer[i - 1]] == 0) && i != 0) || (go == 0 && i != 0)){
              i = 11
              game_over()
            }
            else{
              alert("good")
              stop_var = 1
              return stop_var
            }
          }
          stop_var = check_in_time(i, activ, go)
          alert(`stop = ${stop_var}`)
          stop_var = 1
          return stop_var
        }
      }
      alert(stop_var)
      if (stop_var == 1){
        return
      }
      setTimeout(game_over(), "2000")
      // счётчик и условие исполнения цикла   
      i=i+1; if (i<10)setTimeout(f, "40000");
  };
  f();
}