it("should calculate monthly payment correctly", function() {
  const values = { amount: 10000, years: 10, rate: 4.5 };
  const monthlyPayment = calculateMonthlyPayment(values);

  expect(monthlyPayment).toBe("101.75");
});

it("should initialize form and set default values", function() {
  const domContentLoadedEvent = new Event("DOMContentLoaded");
  window.dispatchEvent(domContentLoadedEvent);

  setupIntialValues();

  const amountUI = document.getElementById("loan-amount");
  const yearsUI = document.getElementById("loan-years");
  const rateUI = document.getElementById("loan-rate");

  expect(amountUI.value).toBe("10000");
  expect(yearsUI.value).toBe("10");
  expect(rateUI.value).toBe("4.5");
});

it('should calculate the monthly rate correctly', function() {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});
