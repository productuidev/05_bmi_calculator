function onSubmit(event) {
  event.preventDefault();

  const w = parseFloat(event.target[0].value)
  const h = parseFloat(event.target[1].value)

  console.log(w, h)

  // 조건 : 숫자인지, 양수인지
  if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    alert("적절한 값이 아닙니다.")
    return;
  }

  // BMI는 소수점 2자리까지 표시
  const bmi = w / ((h/100) * (h/100))
  console.log(bmi.toFixed(2))

  // result
  const res = document.getElementById("res")
  res.style.display = "block"

  // bmi & state
  const bmiEl = document.getElementById("bmi");
  const progressEl = document.getElementById("bmi-progress");
  bmiEl.innerText = bmi.toFixed(2)
  progressEl.value = bmi

  let state;
  let common = true

  if(bmi < 18.5) {
    state = "저체중"
    common = false;
    progressEl.classList.add('underweight')
  }
  if(bmi >= 18.5 && bmi <= 24.9) {
    state = "정상"
    common = true;
    progressEl.classList.add('normal')
  }
  if(bmi >= 25 && bmi <= 29.9) {
    state = "과체중"
    common = false;
    progressEl.classList.add('overweight')
  }

  const stateEl = document.getElementById("state");
  stateEl.innerText = state
  stateEl.style.color = common ? "#11A65E" : "#E31C1C"
  bmiEl.style.color = common ? "#11A65E" : "#E31C1C"

}