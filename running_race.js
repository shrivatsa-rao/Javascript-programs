let racenumber = Math.floor(Math.random() * 1000);

var early_register=false;

var runage=45;

if(early_register && runage>18)
{
  racenumber+=1000;
}

if(early_register && runage>18)
{
  console.log(`Race will start at 9:30am ${racenumber}`);

}
else if(!early_register && runage>18)
{
  console.log(`Race will start at 11:00am ${racenumber}`);
}
else if(runage<18)
{
  console.log(`Race will start at 12:30pm ${racenumber}`);
}
else 
{
  console.log('the runner to see the registration desk.');
}
