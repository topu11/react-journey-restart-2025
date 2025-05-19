export default function Hello()
{
    const getFullName=(firstName="",lastName="")=>{
          return firstName+' '+lastName;
    }
    return(
        <p>The name is {getFullName("Touhd")} where today is {new Date().toString()}</p>
    )
}