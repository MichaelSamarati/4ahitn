function calculateAge(birthday: Date | undefined): number | undefined {
  try {
    if (birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  } catch (e) {}
  return undefined;
}
export { calculateAge };
