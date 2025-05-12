document.getElementById('compensationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const vacationLength = parseFloat(document.getElementById('vacationLength').value);
    const usedDays = parseFloat(document.getElementById('usedDays').value);
    const avgSalary = parseFloat(document.getElementById('avgSalary').value);
  
    if (endDate <= startDate) {
      alert("Дата увольнения должна быть позже даты приёма на работу.");
      return;
    }
  
    const msPerDay = 1000 * 60 * 60 * 24;
    const totalDays = Math.floor((endDate - startDate) / msPerDay);
    const totalYears = totalDays / 365.25;
  
    const earnedVacation = totalYears * vacationLength;
    const vacationLeft = Math.max(earnedVacation - usedDays, 0);
  
    const daysForCalc = (vacationLeft) / 7 * 6;
    const oneDayComp = avgSalary / 25.3;
    const finalComp = daysForCalc * oneDayComp;
  
    document.getElementById('daysLeft').textContent = vacationLeft.toFixed(2);
    document.getElementById('calcDays').textContent = daysForCalc.toFixed(2);
    document.getElementById('compensation').textContent = finalComp.toFixed(2);
    document.getElementById('result').style.display = 'block';
  });
  