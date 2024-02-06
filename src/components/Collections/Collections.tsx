import { useCollections } from "@/hooks/useCollections";
import Button from "@/shared/ui/Button/Button";
const Collections = () => {
  const {data: collections, isError, isLoading} = useCollections()
  console.log(collections);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(isError){
    return <div>An error has occurred: {isError}</div>;
  }
  return (
    <div className="flex gap-2">
      {collections?.map((el) => {
        return <Button collectins={el} key={el.id}/>
      })}
      
    </div>
  );
};

export default Collections;
