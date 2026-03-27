async function test() {
  const res = await fetch('http://localhost:5000/api/culture?city=Chittoor&state=Andhra%20Pradesh&country=India');
  const text = await res.text();
  console.log("SERVER RETURNED:", text.substring(0, 1000));
}
test();
