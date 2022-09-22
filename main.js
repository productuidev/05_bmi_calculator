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
  const bmi = w / (h*h)
  console.log(bmi.toFixed(2))

  const res = document.getElementById("res")
  res.style.display = "block"
}