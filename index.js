const OTPGenerator = (N = 4) => {
  return Math.floor(Math.random() * 10 ** N) + 1;
};
export default OTPGenerator;
