

export default function FoodListError({items})
{
    return (
        <h2>{items.length==0 && `I am hungry`}</h2>
    )
}