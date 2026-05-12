export function Day({jour,className,onClick}:any){
  return <div
    className={className}
    onClick={onClick}
  >
    {jour}
  </div>
}