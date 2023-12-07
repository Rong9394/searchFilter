export default function FoodItem(
    {id, name, description, filter}:{
        id: number, name: string, description: string, filter: string}) {
    
    let regex = new RegExp('('+filter+')', 'gi');
    
    return <tr hidden={!name.toLowerCase().includes(filter.toLowerCase())} id={"row"+id.toString()}>
        <th><span dangerouslySetInnerHTML={{__html: filter !== ''? name.replace(regex,'<mark>$1</mark>') : name}}/></th>
        <th><span dangerouslySetInnerHTML={{__html: filter !== ''? description.replace(regex,'<mark>$1</mark>') : description}}/></th>
    </tr>;
}