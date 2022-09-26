function onSubmit(event) {
  event.preventDefault();

  // 입력란의 문자열을 실수로 변경
  const w = parseFloat(event.target[0].value)
  const h = parseFloat(event.target[1].value)

  console.log(w, h)

  // 조건 : 숫자인지, 양수인지
  // parseFloat : 수가 아닌 문자로 시작하면 NaN을 반환하므로 isNaN 함수 사용 (isNaN : 숫자가 아닌 값을 찾음)
  if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    alert("적절한 값이 아닙니다.")
    return;
  }

  // BMI 계산 : 소수점 2자리까지 표시(toFixed)
  const bmi = w / ((h/100) * (h/100))
  console.log(bmi.toFixed(2))

  // submit 시 결과 표시
  const res = document.getElementById("res")
  res.style.display = "block"

  // submit 시 초기화 버튼 표시
  const resetBtnEl = document.getElementById("reset")
  resetBtnEl.style.display = "block"

  // BMI 수식 및 진행률 표시
  const bmiEl = document.getElementById("bmi");
  const progressEl = document.getElementById("bmi-progress");
  bmiEl.innerText = bmi.toFixed(2)
  progressEl.value = bmi

  let state;
  let common = true

  if(bmi < 20) {
    state = "저체중"
    common = false;
    progressEl.classList.add('underweight')
  }
  if(bmi >= 20 && bmi <= 24) {
    state = "정상체중"
    common = true;
    progressEl.classList.add('normal')
  }
  if(bmi >= 25 && bmi <= 29) {
    state = "과체중"
    common = false;
    progressEl.classList.add('overweight')
  }
  if(bmi >= 30) {
    state = "비만"
    common = false;
    progressEl.classList.add('obesity')
  }

  const stateEl = document.getElementById("state");
  stateEl.innerText = state
  stateEl.style.color = common ? "#11A65E" : "#E31C1C"
  bmiEl.style.color = common ? "#11A65E" : "#E31C1C"

  // 초기화버튼 시 진행률 초기화
  const resutBtnEl = document.getElementById("resultBtn");
  resetBtnEl.addEventListener("click", function() {
    progressEl.classList.remove('underweight');
    progressEl.classList.remove('normal');
    progressEl.classList.remove('overweight');
    progressEl.classList.remove('obesity');
  });
}





