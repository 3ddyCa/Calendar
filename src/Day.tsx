export function Day({jour,className,onClick}){
  return <div
    className={className}
    onClick={onClick}
  >
    {jour}
  </div>
}